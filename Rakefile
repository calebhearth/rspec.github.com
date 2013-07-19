task :generate do
  puts 'Generating site with Jekyll...'
  `sass --update sass:css --force --style expanded`
  `jekyll build`
end

task :watch do
  puts 'Starting to watch source with Jekyll and Sass...'

  write_initial_changes_to_css
  jekyll_pid = watch_jekyll_changes
  sass_pid = watch_sass_changes

  stop_watching_when_interrupted(jekyll_pid, sass_pid)

  stay_alive_until_child_processes_end(jekyll_pid, sass_pid)
end

task default: [:watch]

def write_initial_changes_to_css
  `sass --update _sass:css --force --line-numbers`
end

def watch_jekyll_changes
  Process.spawn('jekyll serve --watch')
end

def watch_sass_changes
  Process.spawn('sass --watch sass:css --line-numbers --style expanded')
end

def stop_watching_when_interrupted(jekyll_pid, sass_pid)
  trap("INT") {
    [jekyll_pid, sass_pid].each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
  }
end

def stay_alive_until_child_processes_end(jekyll_pid, sass_pid)
  [jekyll_pid, sass_pid].each { |pid| Process.wait(pid) }
end
