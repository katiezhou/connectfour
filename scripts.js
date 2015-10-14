// ===================================================================================
// 																		Connect Four 
// ===================================================================================

// ============================
// 			Global Variables
// ============================
var gameboard = [null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null]

// Here I'm making one array for rows, one array for columns, and one array for 
// all diagonals with more than four spots so that the function to check for a win
// (four in a row) is simpler and can pass in each array as an argument. 

var rows = [[null, null, null, null, null, null, null],
					  [null, null, null, null, null, null, null],
					  [null, null, null, null, null, null, null],
					  [null, null, null, null, null, null, null],
					  [null, null, null, null, null, null, null],
					  [null, null, null, null, null, null, null]]

var cols = [[null, null, null, null, null, null],
						[null, null, null, null, null, null],
						[null, null, null, null, null, null],
						[null, null, null, null, null, null],
						[null, null, null, null, null, null],
						[null, null, null, null, null, null],
						[null, null, null, null, null, null]]

var diags = [[null, null, null, null],
	           [null, null, null, null, null],
	           [null, null, null, null, null, null],
	           [null, null, null, null, null, null],
	           [null, null, null, null, null],
	           [null, null, null, null], 

             [null, null, null, null],
	           [null, null, null, null, null],
	           [null, null, null, null, null, null],
	           [null, null, null, null, null, null],
	           [null, null, null, null, null],
	           [null, null, null, null]]

var rowSpot;
var colSpot;
var diagSpot;

var $spots = $(".spot");

var player;
var player1 = "red";
var player2 = "black";
var totalMoves = 0;
var spotIndex;


// ===========================
// 					Functions
// ===========================

// allows game to alternate turns 
if (totalMoves % 2 === 0) {
	player = player1;
} else {
	player = player2;
}


var setSpotColor = function() {
	$(this).addClass(player);
}

var setSpotIndex = function() {
	spotIndex = $(this).index();
}

var setRowSpot = function() {
	if (spotIndex < 7) {
		rows[0][spotIndex] = player
	}
}

var setColSpot = function() {

}

var setDiagSpot = function() {

}

var iterating = function(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < array[i].length; j++) {
			console.log(array[i][j]);
		}
	}
}






for (var i = 0; i < $spots.length; i++) {
	$($spots[i]).click(setSpotColor);
	$($spots[i]).click(setSpotIndex);
}


