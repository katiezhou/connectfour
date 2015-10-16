// ===================================================================================
// 																		Connect Four 
// ===================================================================================

// ==============================================
// 			Global Variables + Populating Arrays
// ==============================================

// here I'm creating one multidimensional array each for rows, columns, and diagonals  
// with more than 4 spaces to simplify the function that checks for a win later on. 
// These variables use jQuery to grab elements with the corresponding classes from the HTML doc.
var $columns = $(".column");

var $col0 = jQuery.makeArray($($("#col0")).children());
var $col1 = jQuery.makeArray($($("#col1")).children());
var $col2 = jQuery.makeArray($($("#col2")).children());
var $col3 = jQuery.makeArray($($("#col3")).children());
var $col4 = jQuery.makeArray($($("#col4")).children());
var $col5 = jQuery.makeArray($($("#col5")).children());
var $col6 = jQuery.makeArray($($("#col6")).children());

// multidimensional array for columns
var $cols = [$col0, $col1, $col2, $col3, $col4, $col5, $col6];


var $row0 = jQuery.makeArray($(".row0"));
var $row1 = jQuery.makeArray($(".row1"));
var $row2 = jQuery.makeArray($(".row2"));
var $row3 = jQuery.makeArray($(".row3"));
var $row4 = jQuery.makeArray($(".row4"));
var $row5 = jQuery.makeArray($(".row5"));

// multidimensional array for rows
var $rows = [$row0, $row1, $row2, $row3, $row4, $row5];


var $diag0 = jQuery.makeArray($(".diag0"));
var $diag1 = jQuery.makeArray($(".diag1"));
var $diag2 = jQuery.makeArray($(".diag2"));
var $diag3 = jQuery.makeArray($(".diag3"));
var $diag4 = jQuery.makeArray($(".diag4"));
var $diag5 = jQuery.makeArray($(".diag5"));
var $diag6 = jQuery.makeArray($(".diag6"));
var $diag7 = jQuery.makeArray($(".diag7"));
var $diag8 = jQuery.makeArray($(".diag8"));
var $diag9 = jQuery.makeArray($(".diag9"));
var $diag10 = jQuery.makeArray($(".diag10"));
var $diag11 = jQuery.makeArray($(".diag11"));

// multidimensional array for diagonals
var $diags = [$diag0, $diag1, $diag2, $diag3, $diag4, $diag5, $diag6, $diag7, $diag8, $diag9, $diag10, $diag11];

var $spots = $(".spot");

var player;
var totalMoves = 0;

// variable used in click event to make a move
var $spotButtons = $(".spot-button");

// variables used in function that checks for lowest available spot in column and places piece there
var $findColumn;
var $currentColumn;
var player1Color;
var player2Color;

// various jquery elements that are used to hide/show the elements later or insert/change HTML
var $header = $("#header-container");
var $spotContainer = $("#spot-container");
var $instructions = $("#instructions");

var $startButton = $("#start-button");
var $startButtonContainer = $("#start-button-container");

var $playerOrderContainer = $("#player-order-container");
var $playerOrder = $("#player-order");
var $diceRollGif = $("#dice-roll");

// variables used to notify whose turn it is, notify name of winner, set up scoreboard
var $nameInputContainer = $("#name-input-container");
var $player1Input = $("#player1-input");
var $player2Input = $("#player2-input");
var $player1Name;
var $player2Name;
var $currentPlayer = $("#current-player");
var currentPlayerName;

// variables used to control the game outcome output
var winner;
var $gameOutcomeContainer = $("#game-outcome-container");
var $gameOutcome = $("#game-outcome");

// scoreboard and "play again" setup
var $scoreboard = $("#scoreboard-container");
var player1wins = 0;
var player2wins = 0;
var $player1score = $("#player1-score");
var $player2score = $("#player2-score");
var $playAgain = $("#play-again-container");

// ===========================
// 					Functions
// ===========================

// initial setup function that clears the board and resets all settings changed during gameplay
// called again in "play again" function
var initialize = function() {
	$($($header).children()[0]).css("font-size", "120px");
	$($($header).children()[1]).css("font-size", "60px");
	$($spotContainer).hide();
	$($instructions).hide();
	$($playerOrderContainer).hide();
	$($currentPlayer).hide();
	$($gameOutcomeContainer).hide();
	$($nameInputContainer).show();
	$($startButtonContainer).show();
	$($playAgain).hide();
	totalMoves = 0;
	winner = null;

	// removes color class from all spots that have one
	for (var i = 0; i < $cols.length; i++) {
		for (var j = 0; j < $cols[i].length; j++) {
			if ($($cols[i][j]).hasClass("purple")) {
				$($cols[i][j]).removeClass("purple");
			} else if ($($cols[i][j]).hasClass("green")) {
				$($cols[i][j]).removeClass("green");
			}
		}
	}
}


// I originally just had the "play again" button on a click event to run "initialize" 
// but I wanted a scoreboard, so now "play again" doesn't ask for player names,
// it jumps straight to randomizing who goes first
var playAgainSetup = function() {
	$($scoreboard).show();
	$($currentPlayer).html("");
	initialize();
	rollDice();
}

// function that randomizes the player order and tells the user(s) who is going first
var rollDice = function() {
	$($playerOrder).html("");
	$($playerOrderContainer).show();
	$($diceRollGif).show();
	$($startButtonContainer).hide();
	$player1Name = $($player1Input).val();
	$player2Name = $($player2Input).val();
	$($nameInputContainer).hide();
	if (Math.random() < 0.5) {
		player1Color = "purple";
		player2Color = "green";
		currentPlayerName = $player1Name;
		setTimeout(function() {
			$($playerOrder).html($player1Name + " goes first!");
			$($diceRollGif).hide();
		}, 2000)
		setTimeout(setGame, 4000)
	} else if (Math.random() < 1) {
		player1Color = "green";
		player2Color = "purple";
		currentPlayerName = $player2Name;
		setTimeout(function() {
			$($playerOrder).html($player2Name + " goes first!")
			$($diceRollGif).hide();
		}, 2000)
		setTimeout(setGame, 4000)
	}

}


// function that gets called at the conclusion of the rollDice function; makes game header
// smaller so that the user doesn't have to scroll down as much to see the whole board

// also notifies whose turn it is
var setGame = function() {
	$($($header).children()[0]).css("font-size", "72px");
	$($($header).children()[1]).css("font-size", "36px");
	$($spotContainer).show();
	$($instructions).show();
	$($startButtonContainer).hide();
	$($playerOrderContainer).hide();
	$($currentPlayer).show();
	$($currentPlayer).html(currentPlayerName + "'s turn!");
}


// checks for lowest free column spot and adds the class of the player whose turn it is
var placeLowestSpot = function() {
	if (currentPlayerName === $player1Name) {
		currentPlayerName = $player2Name;
	} else if (currentPlayerName === $player2Name) {
		currentPlayerName = $player1Name;
	} 

	// allows game to alternate turns for players
	if (totalMoves % 2 === 0) {
		player = "purple";
	} else if (totalMoves % 2 === 1) {
		player = "green";
	}

	if (totalMoves < 42 && winner === null) {
		setTimeout(function() {
			$($currentPlayer).html(currentPlayerName + "'s turn!");
		}, 100);

		// Finds siblings of the button pressed, returning a jquery collection starting from the 
		// first spot in the column
		$findColumn = $(this).siblings()[0];
		$currentColumn = jQuery.makeArray($($findColumn).children());

		// reverse for loop; goes through the whole column starting from the bottom
		// As soon as it finds a free spot, it adds the class and breaks out of the loop
		for (var i = ($currentColumn.length - 1); i >= 0; i--) {
			if (!($($currentColumn[i]).hasClass("purple")) && !($($currentColumn[i]).hasClass("green"))) {
				$($currentColumn[i]).addClass(player);
				totalMoves += 1;

				// calls the checkForWin function with the row array, column array, and diagonal array
				// as arguments
				checkForWin($rows);
				checkForWin($cols);
				checkForWin($diags);
				break;
			} else {
			null;
			}
		} 
	}
	
}

// checks if there are 4 elements that match up
var checkForWin = function(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < (array[i].length - 3); j++) {
			if ($(array[i][j]).hasClass(player1Color) && $(array[i][j+1]).hasClass(player1Color) && $(array[i][j+2]).hasClass(player1Color) && $(array[i][j+3]).hasClass(player1Color)) {
				winner = $player1Name;
				player1wins += 1;
			} else if ($(array[i][j]).hasClass(player2Color) && $(array[i][j+1]).hasClass(player2Color) && $(array[i][j+2]).hasClass(player2Color) && $(array[i][j+3]).hasClass(player2Color)) {
				winner = $player2Name;
				player2wins += 1;
			} else if (totalMoves >= 42) {
				winner = "none";
			}
		}
	}

	// i.e. if any of the above outcomes are true
	if (winner != null) {
		setTimeout(showGameOutcome, 200);
	}
}


// things that happen once a winner is found
var showGameOutcome = function() {
	if (winner === $player1Name) {
		$($currentPlayer).hide();
		$($gameOutcomeContainer).show();
		$($instructions).hide();
		$($gameOutcome).html($player1Name + " wins!");
		$($spotContainer).fadeOut("slow");
		$($playAgain).show();

		// sets scoreboard text
		$($player1score).html($player1Name + ": " + player1wins);
		$($player2score).html($player2Name + ": " + player2wins);
	} else if (winner === $player2Name) {
		$($currentPlayer).hide();
		$($gameOutcomeContainer).show();
		$($instructions).hide();
		$($gameOutcome).html($player2Name + " wins!");
		$($spotContainer).fadeOut("slow");
		$($playAgain).show();
		$($player1score).html($player1Name + ": " + player1wins);
		$($player2score).html($player2Name + ": " + player2wins);
	} else if (winner === "none") {
		$($currentPlayer).hide();
		$($gameOutcomeContainer).show();
		$($instructions).hide();
		$($gameOutcome).html("Draw!");
		$($spotContainer).fadeOut("slow");
		$($playAgain).show();
		$($player1score).html($player1Name + ": " + player1wins);
		$($player2score).html($player2Name + ": " + player2wins);
	}
}


// ===========================
// 		 	 Event Listeners
// ===========================

$(document).ready(initialize);

for (var i = 0; i < $spotButtons.length; i++) {
	$($spotButtons[i]).click(placeLowestSpot);
}

$($startButton).click(rollDice);

$($playAgain).click(playAgainSetup);
