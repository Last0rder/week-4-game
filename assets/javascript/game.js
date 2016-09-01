

//VARS============================================
//number of wins
var winCount = 0;
//number of losses
var lossCount = 0;
//the target score
var targetScore = 0;
//the current score
var currentScore = 0;
//value of the red rune
var redVal = 0;
//value of the blue rune
var blueVal = 0;
//value of the green rune
var greenVal = 0;
//value of the black rune
var blackVal = 0;

var regen = document.createElement('audio');
	regen.setAttribute('src', 'assets/sounds/regen.mp3');

var haste = document.createElement('audio');
	haste.setAttribute('src', 'assets/sounds/haste.mp3');

var dd = document.createElement('audio');
	dd.setAttribute('src', 'assets/sounds/dd.mp3');

var invis = document.createElement('audio');
	invis.setAttribute('src', 'assets/sounds/invis.mp3');

var win = document.createElement('audio');
	win.setAttribute('src', 'assets/sounds/win.mp3');

var lose = document.createElement('audio');
	lose.setAttribute('src', 'assets/sounds/lose.mp3');

var music = document.createElement('audio');
	music.setAttribute('src', 'assets/sounds/music.mp3');

//FUNCTIONS=======================================



$(document).ready(function() {
		var currentScore = 0;
		var targetScore = Math.floor(Math.random()*101 + 19);
		var greenVal = Math.floor(Math.random()*12+1);
		var redVal = Math.floor(Math.random()*12+1);
		var blueVal = Math.floor(Math.random()*12+1);
		var blackVal = Math.floor(Math.random()*12+1);
		$('#targetNum').html(targetScore);
		$('#green').attr("data-num", greenVal)
		$('#red').attr("data-num", redVal)
		$('#blue').attr("data-num", blueVal)
		$('#black').attr("data-num", blackVal)

	music.play();
	
	$("#green").on("click", function(){
    regen.play();
	});

	$("#red").on("click", function(){
    haste.play();
	});

	$("#blue").on("click", function(){
    dd.play();
	});

	$("#black").on("click", function(){
    invis.play();
	});


//sets player's current score to 0, generates random values for the target score between 19 and 120 and each rune between 1 and 12
	function newGame() {
		currentScore = 0;
		$('#playerNum').html(currentScore);
		targetScore = Math.floor(Math.random()*101 + 19);
		greenVal = Math.floor(Math.random()*12+1);
		redVal = Math.floor(Math.random()*12+1);
		blueVal = Math.floor(Math.random()*12+1);
		blackVal = Math.floor(Math.random()*12+1);
		$('#targetNum').html(targetScore);
		$('#green').attr("data-num", greenVal)
		$('#red').attr("data-num", redVal)
		$('#blue').attr("data-num", blueVal)
		$('#black').attr("data-num", blackVal)
	
	} 

	//activates when a rune is pressed
	$('.button').on('click', function() {

		currentScore += $(this).data('num');
		$('#playerNum').html(currentScore);
		
			if (currentScore == targetScore) {
				win.play();
				alert("You Win!")
				winCount++
				$('#wins').html(winCount);
				newGame();

			}//Closes Win

			if (currentScore > targetScore) {
				lose.play();
				alert("You Lose.")
				lossCount++
				$('#losses').html(lossCount);
				newGame();

			}//Closes loss

	});//Closes button.on(click)

}); //Closes document.ready(function)

