

//VARS
//number of wins
var winCount = 0;
//number of losses
var lossCount = 0;
//the target score
var targetScore = "";
//the current score
var currentScore = "";
//value of the red rune
var redVal = "";
//value of the blue rune
var blueVal = "";
//value of the green rune
var greenVal = "";
//value of the black rune
var blackVal = "";
//FUNCTIONS
$( document ).ready(function() {
//sets player's current score to 0, generates random values for the target score between 19 and 120 and each rune between 1 and 12
	var currentScore = 0;
	var targetScore = Math.floor(Math.random()*101 + 19);
	var greenVal = Math.floor(Math.random()*12+1);
	var redVal = Math.floor(Math.random()*12+1);
	var blueVal = Math.floor(Math.random()*12+1);
	var blackVal = Math.floor(Math.random()*12+1);
	$('#targetNum').html(targetScore);
	console.log(targetScore)
	console.log(greenVal)
	console.log(redVal)
	console.log(blueVal)
	console.log(blackVal)
	$('#green').attr("data-num", greenVal)
	$('#red').attr("data-num", redVal)
	$('#blue').attr("data-num", blueVal)
	$('#black').attr("data-num", blackVal)
	console.log($('#green').data('num'));
	console.log($('#red').data('num'));
	console.log($('#blue').data('num'));
	console.log($('#black').data('num'));

	//activates when a rune is pressed
	$('.button').on('click', function() {
	currentScore = currentScore + $(this).data('num');
	console.log(currentScore)
	$('#playerNum').html(currentScore);
	
		if (currentScore == targetScore) {
			alert("You Win!")
			winCount++
			$('#wins').html(winCount);

		}
		else if (currentScore > targetScore) {
			alert("You Lose.")
			lossCount++
			$('#losses').html(lossCount);

		}
	});

});

//Example from lottery program======================
// $(document).ready(function(){

//     // CREATE THE MISSING CODE HERE. Your code should add content to the randomNumber div.
//     // ...


//     $('#randomButton').on("click", function(){
//         var randomNum = Math.floor(Math.random()*(900000000) + 100000000);
//         var newDiv = $('<div>')
//         $('#randomNumber').prepend("<br><hr>" + randomNum)

//     })


    // ...===============================

// })

//PROGRAM
