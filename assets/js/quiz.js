
//this function is activated when the form submit button is pressed
function submitTestResults(form) {


  var answers = [];


  //stats the most likely answers for a certain type of government ideology
  var socialism = ['a','a','a','a','b','a','b','c','c','a','b','c'];
  var anarchy = ['b','b','a','b','d','d','a','d','d','d','a','b'];
  var liberalism = ['a','b','a','b','b','d','c','a','d','d','e','e'];
  var conservatism = ['a','b','b','b','a','c','e','b','d','b','d','a'];
  var absolutism = ['a','a','b','a','c','b','b','e','a','c','c','d'];



  //takes in the radio button values for all of the questions
  var question1 = document.forms["quizForm"]["radio1"].value;
  var question2 = document.forms["quizForm"]["radio2"].value;
  var question3 = document.forms["quizForm"]["radio3"].value;
  var question4 = document.forms["quizForm"]["radio4"].value;
  var question5 = document.forms["quizForm"]["radio5"].value;
  var question6 = document.forms["quizForm"]["radio6"].value;
  var question7 = document.forms["quizForm"]["radio7"].value;
  var question8 = document.forms["quizForm"]["radio8"].value;
  var question9 = document.forms["quizForm"]["radio9"].value;
  var question10 = document.forms["quizForm"]["radio10"].value;
  var question11 = document.forms["quizForm"]["radio11"].value;
  var question12 = document.forms["quizForm"]["radio12"].value;

  var answers = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12];

  //this sets up a scoreing system for all of the diffrent gov
  //It gives a score from 0-12 for what ever government is pluged in
  function score(government){
    this.government = government;
    this.percentile = function(){

      var counter = 0;

        if (government.length != answers.length){
            return false;
      } else {

        if (government.sort().join() === answers.sort().join()){
          counter += 12;

      } else {

          if(government[0] === answers[0]){counter++}
          if(government[1] === answers[1]){counter++}
          if(government[2] === answers[2]){counter++}
          if(government[3] === answers[3]){counter++}
          if(government[4] === answers[4]){counter++}
          if(government[5] === answers[5]){counter++}
          if(government[6] === answers[6]){counter++}
          if(government[7] === answers[7]){counter++}
          if(government[8] === answers[8]){counter++}
          if(government[9] === answers[9]){counter++}
          if(government[10] === answers[10]){counter++}
          if(government[11] === answers[11]){counter++}

        } return counter;
      }
    }
  };

  var socialism_score = new score(socialism);
  var soc = socialism_score.percentile();
  var anarchy_score = new score(anarchy);
  var ana = anarchy_score.percentile();
  var liberalism_score = new score(liberalism);
  var lib = liberalism_score.percentile();
  var conservatism_score = new score(conservatism);
  var con = conservatism_score.percentile();
  var absolutism_score = new score(absolutism);
  var abs = absolutism_score.percentile();

  var user_score = [soc, ana, lib, con, abs];
  alert(user_score);

  function dominantNsecondary(arr1){
    var dominant = arr1.indexOf(Math.max(...arr1));
    return dominant;

    }

    alert(dominantNsecondary(user_score));
  }
