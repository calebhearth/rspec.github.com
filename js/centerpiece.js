$(document).ready(function(){

  var text = [":easy", ":first", ":understandable"];

  var counter = 0;
  var elem = $(".expectation pre .ruby .ss")
  setInterval(change, 3000);
  function change() {
    elem.text(text[++counter % text.length]);
  }
})
