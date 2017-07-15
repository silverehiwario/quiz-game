$(document).ready(function() {

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text( "Time Remaining:" + seconds + "seconds");

        if (--timer < 0) {//|| ($('#get results').onclick){
        	
        	//ShowAnswers();

            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiftyseconds = 50 ,
        display = $('#timer');
    startTimer(fiftyseconds, display);

});


var Questions = [
    {
   questions:'What was the first full length CGI movie?',
     answer:{
         a:'A bugs life',
         b:' Monsters inc.',
         c:'Toys story',
         d:'Lion King'

     },

     correctanswer: 'Toys story'
   },

    {


   questions:'Which of these is not a name of one of the spice girls?',

     answer:{
         a:'Sporty spice',             
         b: 'Fred Spice',
         c: 'Scary Spice',
         d: 'Posh spice'
         

     },

     correctanswer: 'Scary Spice'

     },

     {


    questions:'Whch NBA team won the most titles in the 90s?',

     answer:{
         a: 'New York Knicks',
         b: 'Portland Trailblazers',
         c: 'Los Angeles Lakers',
         d: 'Chicago Bulls'
         

     },

     correctanswer: 'Los Angeles Lakers'

     },

    {


    questions:'Which Group released the hit song,"Smells like teen spirit"?',
         answer:{
         a: 'Nivana',
         b: 'Black street Boys',
         c: 'The offspring',
         d: 'No doubt'
         

     },

     correctanswer: 'The offspring'

     },

    {


    questions:'Which popular disney movie featured the song "Circle of LIfe"?',
        
    
         answer:{
         a: 'Aladdin',
         b: 'Hercules',
         c: 'Mulan',
         d: 'The Lion King'
         

     },

     correctanswer: 'Mulan'

     },

   {


    questions:'What was Doug best friend name?',
        
    
       answer:{
        a: 'Skeeter',
        b: 'Mark',
        c: 'Zack',
        d: 'Cody'
        
         },

     correctanswer: 'Zack'

     },

  {


    questions:'What was the name of the principal at Bayside High in saved by the Bell?',
        
    
       answer:{
        a: 'Mr. Zoul',
        b: 'Mr. Driggers',
        c: 'Mr. Belding',
        d: 'Mr. Page'
        
         },

     correctanswer: 'Mr. Belding'

     },


     {


    questions:'Finish this line from the fresh prince of Bel-Air theme song:"I whistled for a cab and when it came near, the license plate said..."',
        
    answer:{
        a: 'Dice',
        b: 'Mirror',
        c: 'Fresh',
        d: 'cab'
        
         },

     correctanswer: 'Fresh'

     },

    {


    questions:'What is my name?',
        
    answer:{
        a: 'Nancy',
        b: 'Christine',
        c: 'Silver',
        d: 'Cam'
        
         },

     correctanswer: 'Silver'

     },

    {


    questions:'What is the Pace of the Bootcamp class?',
        
        
    answer:{
        a: 'Fast',
        b: 'Slow',        
        c: 'Too slow',
        d: 'okay'
        
         },
     correctanswer: 'Too slow'

     }


];

function ShowQuestions(){
 // A place to store output and answer choices
 var output=[];
 var answers;

// for every question with answer choices we want to attach a radio button.


for(var i= 0; i< Questions.length; i++){
     // reset answer choices
	answers=[];




for(letter in Questions[i].answer){

	//add a radio button to the letters
answers.push(
                '<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					//+ letter + ': '
					+ Questions[i].answer[letter]
				+ '</label>'
			);

	}
   // add questions and answers  to the output

   output.push(
   	   '<div class="question">'+ Questions[i].questions + '</div>'
   	   + '<div class="answers">' + answers.join('')+ '</div>'


   	);





}

// to show our combined output in html

quizContainer = $('#one')
quizContainer.html(output.join(''));

}

 ShowQuestions();


 function ShowAnswers(){

 	var AnswerContainer = quizContainer.querySelectorAll(".answers");
 	console.log(AnswerContainer);
 	

    var userAnswer="";
    //var Unanswered ="";

 	numCorrect=0;
 	numWrong=0;
 	//numUnaswered=0;


    // pick the correct answers from the answer container

       // for each question

    for(var i = 0; i < Questions.length; i++ ) {

     userAnswer= (AnswerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;
     //Unanswered = (AnswerContainer[i].querySelector('input[name=question'+i+']').is'(:not(':checked')');

      if(userAnswer===Questions[i].correctanswer){
      	numCorrect++;
      	$('#correctans').html('Correct Answer:'+ numCorrect)
      	$('#results').html('All Done');
      	AnswerContainer[i].style.color = 'lightgreen';

      }

      else {
      	numWrong++;
      	$('#wrongans').html('Wrong Answer:'+ numWrong);
      	$('#results').html('All Done');
        AnswerContainer[i].style.color = 'red';

      }

    // if(Unanswered){
     	//numUnaswered++;
     	//$('#unanswered').html('Unanswered:'+ numUnaswered);

     //}

     }  
            
     

}
  

  //ShowAnswers();
     var doneButton= $('#get');

     doneButton.onclick =function(){
            	ShowAnswers();
     

      };

});