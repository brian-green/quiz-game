(function(){
  var player_score = 0;
  var game_on = true;

  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.quizTime =  function(){
    console.log(this.question)
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i+1 + ': ' + this.answers[i]);
    }
    this.player_choice = window.prompt("Pick the number of the right answer, check your score, or exit.");
  };

  Question.prototype.quizCheck = function(){
    if (this.correct === (parseInt(this.player_choice))) {
      player_score++;
      console.log("Correct!")
    } else if (this.player_choice === "score") {
        questionsArray[n].scoreCheck();
    } else if  (this.player_choice === "exit")  {
        questionsArray[n].exitQuiz();
    }  else {
        console.log("Wrong.");
    }
  };

  Question.prototype.endlessQuiz = function(){
    while (game_on) {
      var n = Math.floor(Math.random()*questionsArray.length);
      questionsArray[n].quizTime();
      questionsArray[n].quizCheck();
    }
  };

  Question.prototype.scoreCheck = function(){
      console.log(player_score);
      questionsArray[n].endlessQuiz();
    };

  Question.prototype.exitQuiz = function(){
      console.log("Bye bye, your score was: " + player_score);
      game_on = false;
  };

  var question1 = new Question('Who has hit the most home runs?',['Barry Bonds','Hank Aaron','Mark McGwire'],1);
  var question2 = new Question('What is the capital of Spain?',['Barcelona','Madrid','Catalonia'],2);
  var question3 = new Question('What is the first inert gas?',['Xenon','Argon','Helium'],3);

  var questionsArray = [question1,question2,question3];

  var n = Math.floor(Math.random()*questionsArray.length);

  questionsArray[n].quizTime();
  questionsArray[n].quizCheck();
  questionsArray[n].endlessQuiz();
})();
