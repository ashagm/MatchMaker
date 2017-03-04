// var questions = [
//   'Your mind is always buzzing with unexplored ideas and plans.',
//   'Generally speaking, you rely more on your experience than your imagination.',
//   'You find it easy to stay relaxed and focused even when there is some pressure.',
//   'You rarely do something just out of sheer curiosity.',
//   'People can rarely upset you.',
//   'It is often difficult for you to relate to other people’s feelings.',
//   'In a discussion, truth should be more important than people’s sensitivities.',
//   'You rarely get carried away by fantasies and ideas.',
//   'You think that everyone’s views should be respected regardless of whether they are supported by facts or not.',
//   'You feel more energetic after spending time with a group of people.'
// ]
  var choices = ["1 (Strongly Disagree)","2","3","4","5 (Strongly Agree)"];

  var questions = [
      "You enjoy outdoor activities such as hiking and camping.",
      "You consider yourself more of a cat person than a dog person.",
      "Your political views would most closely align with right-wing/conservative.",
      "You enjoy playing or watching sports.",
      "You care a lot about what other people think about you.",
      "You enjoy playing video games.",
      "On the weekends, you like going to the club and dancing.",
      "You enjoy large parties versus more intimate gatherings.",
      "You work well under pressure.",
      "You consider yourself to be an artistic person."
  ];
    
  for (var i = 0; i < questions.length; i++) {
      var questionDiv = $("<div class= 'well'>");
      questionDiv.attr('id', 'tableWell-' + i+1)
      questionDiv.addClass("form-group");
      
      var questionNumber = $("<h3>");
      questionNumber.text("Question #" + (parseInt(i) + 1));
      
      var questionText = $("<h4>");
      questionText.text(questions[i]);
          
      var questionSelect = $("<select class='form-control question'>");
      questionSelect.attr("id", "q" + (parseInt(i) + 1));
      
      for (var j = 0; j < choices.length; j++) {
          var option = $("<option>");
          option.attr("value", (parseInt(j) + 1));
          option.text(choices[j]);
          questionSelect.append(option);
      }

      questionDiv.append(questionNumber).append(questionText).append(questionSelect);
      $("#questions").append(questionDiv);

  }

