Get Started Now
---------------

    $ gem install rspec

<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td width="50%">
<p>
  Start with a very simple example that expresses
  some basic desired behaviour.
</p>

{% highlight ruby %}
# bowling_spec.rb
require 'bowling'

describe Bowling, "#score" do
  it "returns 0 for all gutter game" do
    bowling = Bowling.new
    20.times { bowling.hit(0) }
    bowling.score.should eq(0)
  end
end
{% endhighlight %}

  Run the example and watch it fail.

<pre style="color:red;">
$ rspec bowling_spec.rb

./bowling_spec.rb:4:
  uninitialized constant Bowling
</pre>
    </td>
    <td width="50%">

  Now write just enough code to make it pass.

{% highlight ruby %}
# bowling.rb
class Bowling
  def hit(pins)
  end

  def score
    0
  end
end
{% endhighlight %}

Run the example and bask in the joy that is green.

<pre style="color:green;">
$ rspec bowling_spec.rb --format nested

Bowling#score
  returns 0 for all gutter game

Finished in 0.007534 seconds

1 example, 0 failures
</pre>
    </td>
  </tr>
</table>

Take very small steps
---------------------

Don't rush ahead with more code. Instead, add another example and let it guide you to what you have to do next. And don't forget to take time to refactor your code before it gets messy. You should keep your code clean at every step of the way.

Take the first step now!
------------------------

```
gem install rspec
```
