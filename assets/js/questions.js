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


// $(document).ready(function() {

//   for(var i = 0; i < questions.length; i++) {
//     var questionsContainer = $('#questions');

//     // create heading to display the question number
//     var heading = $('<h3>Question ' + (i + 1) + '</h3>');

//     // create question from questions array and add question # as attr
//     var label = $('<label>' + questions[i] + '</label>');
//     label.attr('for', 'question-'+(i + 1));

//     // create dropdown element and dropdown values
//     var dropdownOptions = $('<select type="number">');
//     var optionPlaceholder = $('<option value="" disabled selected>Select an Option</option>');
//     var option1 = $('<option value="1">1 (Strongly Disagree)</option>');
//     var option2 = $('<option value="2">2</option>');
//     var option3 = $('<option value="3">3</option>');
//     var option4 = $('<option value="4">4</option>');
//     var option5 = $('<option value="5">5 (Strongly Agree)</option>');

//     // construct dropdown element
//     dropdownOptions
//       .addClass('question-dropdown')
//       .attr('id', 'question-'+(i+1))
//       // .attr('name', '[responses][question-'+ (i+1) +']')
//       .attr('name', 'responses')
//       .append(optionPlaceholder)
//       .append(option1)
//       .append(option2)
//       .append(option3)
//       .append(option4)
//       .append(option5)

//     // append fully constructed question component to div with id  questionsContainer
//     questionsContainer
//     .append(heading)
//     .append(label)
//     .append(dropdownOptions);

//   };

// });

  var choices = ["1 (Strongly Disagree)","2","3","4","5 (Strongly Agree)"];
        // array of questions
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
        // loop to build and display questions on html page
        for (var i = 0; i < questions.length; i++) {
            var questionDiv = $("<div>");
            questionDiv.addClass("form-group");
            var questionNumber = $("<h4>");
            questionNumber.text("Question #" + (parseInt(i) + 1));
            var questionText = $("<h5>");
            questionText.text(questions[i]);
            var questionChoices = $("<div>");
            questionChoices.addClass("col-lg-3");
            var questionSelect = $("<select>");
            questionSelect.addClass("form-control question");
            questionSelect.attr("id", "q" + (parseInt(i) + 1));
            for (var j = 0; j < choices.length; j++) {
                var option = $("<option>");
                option.attr("value", (parseInt(j) + 1));
                option.text(choices[j]);
                questionSelect.append(option);
            }
            questionChoices.append(questionSelect);
            questionDiv.append(questionNumber);
            questionDiv.append(questionText);
            questionDiv.append(questionChoices);
            $("#questions").append(questionDiv);
        }
