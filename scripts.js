// ===================================================================================
// 																		Connect Four 
// ===================================================================================

// ==============================================
// 			Global Variables + Populating Arrays
// ==============================================
var gameboard = [null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null, 
                 null, null, null, null, null, null, null]

// I'm creating one array for each row, column, and diagonal with more than 4 spaces to simplify
// the function that checks for a win later on. These variables just grab elements with the corresponding
// classes from the HTML doc.




// var $rows = [[], [], [], [], [], []];
// var $cols = [[], [], [], [], [], [], []];
// var $diags = [[], [], [], [], [], [], [], [], [], [], [], []];

var $columns = $(".column");

var $col0 = jQuery.makeArray($($("#col0")).children());
var $col1 = jQuery.makeArray($($("#col1")).children());
var $col2 = jQuery.makeArray($($("#col2")).children());
var $col3 = jQuery.makeArray($($("#col3")).children());
var $col4 = jQuery.makeArray($($("#col4")).children());
var $col5 = jQuery.makeArray($($("#col5")).children());
var $col6 = jQuery.makeArray($($("#col6")).children());

var $cols = [$col0, $col1, $col2, $col3, $col4, $col5, $col6];

var $row0 = jQuery.makeArray($(".row0"));
var $row1 = jQuery.makeArray($(".row1"));
var $row2 = jQuery.makeArray($(".row2"));
var $row3 = jQuery.makeArray($(".row3"));
var $row4 = jQuery.makeArray($(".row4"));
var $row5 = jQuery.makeArray($(".row5"));

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

var $diags = [$diag0, $diag1, $diag2, $diag3, $diag4, $diag5, $diag6, $diag7, $diag8, $diag9, $diag10, $diag11];

var $spots = $(".spot");

var player;
var player1 = "red";
var player2 = "black";
var totalMoves = 0;
var spotIndex;
var $buttons = $("button");
var $findColumn;
var $currentColumn;

// ===========================
// 					Functions
// ===========================

// allows game to alternate turns 
if (totalMoves % 2 === 0) {
	player = player1;
} else {
	player = player2;
}

var checkLowestSpot = function() {
	$findColumn = $(this).siblings()[0];
	$currentColumn = jQuery.makeArray($(findColumn).children());

	for (var i = ($currentColumn.length - 1); i >= 0; i--) {
		if (!($($currentColumn[i]).hasClass("red")) && !($($currentColumn[i]).hasClass("black"))) {
			$($currentColumn).addClass(player);
		}
	}

}



var setSpotColor = function() {
	$(this).addClass(player);
}

var setSpotIndex = function() {
	spotIndex = $(this).index();
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


// $($buttons[0]).siblings().children();


for (var i = 0; i < $buttons.length; i++) {
	$($buttons[i]).click(checkLowestSpot);
}


