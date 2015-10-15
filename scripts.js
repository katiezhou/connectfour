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

// I'm creating one array each for rows, columns, and diagonals with more than 4 spaces to simplify
// the function that checks for a win later on. These variables just grab elements with the corresponding
// classes from the HTML doc.
var $rows = [[], [], [], [], [], []];
var $cols = [[], [], [], [], [], [], []];
var $diags = [[], [], [], [], [], [], [], [], [], [], [], []];

var $row0 = $(".row0");
var $row1 = $(".row1");
var $row2 = $(".row2");
var $row3 = $(".row3");
var $row4 = $(".row4");
var $row5 = $(".row5");

var $col0 = $(".col0");
var $col1 = $(".col1");
var $col2 = $(".col2");
var $col3 = $(".col3");
var $col4 = $(".col4");
var $col5 = $(".col5");
var $col6 = $(".col6");

var $diag0 = $(".diag0");
var $diag1 = $(".diag1");
var $diag2 = $(".diag2");
var $diag3 = $(".diag3");
var $diag4 = $(".diag4");
var $diag5 = $(".diag5");
var $diag6 = $(".diag6");
var $diag7 = $(".diag7");
var $diag8 = $(".diag8");
var $diag9 = $(".diag9");
var $diag10 = $(".diag10");
var $diag11 = $(".diag11");


for (var i = 0; i < 7; i++) {
	$rows[0].push($row0[i]);
	$rows[1].push($row1[i]);
	$rows[2].push($row2[i]);
	$rows[3].push($row3[i]);
	$rows[4].push($row4[i]);
	$rows[5].push($row5[i]);
}

for (var i = 0; i < 6; i++) {
	$cols[0].push($col0[i]);
	$cols[1].push($col1[i]);
	$cols[2].push($col2[i]);
	$cols[3].push($col3[i]);
	$cols[4].push($col4[i]);
	$cols[5].push($col5[i]);
	$cols[6].push($col6[i]);
}



for (var i = 0; i < 4; i++) {
	$diags[0].push($diag0[i]);
}
for (var i = 0; i < 5; i++) {
	$diags[1].push($diag1[i]);
}
for (var i = 0; i < 6; i++) {		
	$diags[2].push($diag2[i]);
}
for (var i = 0; i < 6; i++) {		
	$diags[3].push($diag3[i]);
}
for (var i = 0; i < 5; i++) {		
	$diags[4].push($diag4[i]);
}
for (var i = 0; i < 4; i++) {		
	$diags[5].push($diag5[i]);
}
for (var i = 0; i < 4; i++) {		
	$diags[6].push($diag6[i]);
}
for (var i = 0; i < 5; i++) {		
	$diags[7].push($diag7[i]);
}
for (var i = 0; i < 6; i++) {		
	$diags[8].push($diag8[i]);
}
for (var i = 0; i < 6; i++) {		
	$diags[9].push($diag9[i]);
}
for (var i = 0; i < 5; i++) {		
	$diags[10].push($diag10[i]);
}
for (var i = 0; i < 4; i++) {		
	$diags[11].push($diag11[i]);
}



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


