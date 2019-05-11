$( document ).ready(function() {
    var timeLeft = 120;
    var elem = document.getElementById('sec');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }

function clearAnswers(){
    $("img").each(function(){
      $(this).remove();
    })
  }
  
  function markIncorrect(el){
    var img = new Image();
    img.src = 'assets/images/x-png-23.png';
    img.className = 'image';
    img.style.height= "50 px";
    img.style.width= "50 px";
    el.append(img);
  }
  
  function markCorrect(el){
    var img = new Image();
    img.src = 'assets/images/check-mark-icon.png';
    img.style.height= "50 px";
    img.style.width= "50 px";
    el.append(img);
  }
  
  $("form").on("submit", function(e){
    e.preventDefault();
    clearAnswers();
  console.log("It worked!");
    $questions = $(".question");
    $questions.each(function(){
      var answer = $(this).find("input:checked"),
          key = answer.attr("name"),
          val = answer.attr("value");
  
      if(answer.length === 0){
        markIncorrect($(this).find("p"));
      } else if (answers[key] !== val){
        markIncorrect($(this).find("p"));
      } else {
        markCorrect(answer.parent());
      }
    });
  });
  
  var answers = [
    one, "c",
    two, "d",
    three, "c",
    four, "b",
    five, "a"
  ]
}
)