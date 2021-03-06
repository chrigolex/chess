$('#board').on('click','.blue', function(e){
	bluePositions();
	redPositions();
  if(bothPieces['turn'] === 'blue'){
  	var piece = $(this).children().attr('id');
  	bothPieces['currentMoves'].push(bluePieces[piece]);
  	bluePieces['actualPiece'] = $(this).children().text();
    findAreaBlue[piece]();
    bluePieces['origSquare'] = $(this);
    bluePieces['origSquare'].removeClass('blue').addClass('box').children().attr('id','').text(bluePieces[piece]);
    bluePieces['currentPiece'] = piece;
    bothPieces['turn'] = 'bluePieceUp';
  }
});



var findAreaBlue = {
	'Queen': function(){
		area = [];
	  moves.horiz(bluePieces['Queen'],area,'blue');
	  moves.vertical(bluePieces['Queen'],area,'blue');
	  moves.diagonal(bluePieces['Queen'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'King': function(){
	  area = [];
	  moves.kingMoves(bluePieces['King'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Bishop1': function(){
		area = [];
	  moves.diagonal(bluePieces['Bishop1'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Bishop2': function(){
		area = [];
	  moves.diagonal(bluePieces['Bishop2'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Rook1': function(){
		area = [];
	  moves.horiz(bluePieces['Rook1'],area,'blue');
	  moves.vertical(bluePieces['Rook1'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Rook2': function(){
		area = [];
	  moves.horiz(bluePieces['Rook2'],area,'blue');
	  moves.vertical(bluePieces['Rook2'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Knight1': function(){
		area = [];
	  moves.knightMoves(bluePieces['Knight1'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Knight2': function(){
		area = [];
	  moves.knightMoves(bluePieces['Knight2'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Pawn1': function(){
		area = [];
	  moves.bluePawnMoves(bluePieces['Pawn1'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Pawn2': function(){
		area = [];
	  moves.bluePawnMoves(bluePieces['Pawn2'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Pawn3': function(){
		area = [];
	  moves.bluePawnMoves(bluePieces['Pawn3'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Pawn4': function(){
		area = [];
	  moves.bluePawnMoves(bluePieces['Pawn4'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Pawn5': function(){
		area = [];
	  moves.bluePawnMoves(bluePieces['Pawn5'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Pawn6': function(){
		area = [];
	  moves.bluePawnMoves(bluePieces['Pawn6'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Pawn7': function(){
		area = [];
	  moves.bluePawnMoves(bluePieces['Pawn7'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	},
	'Pawn8': function(){
		area = [];
	  moves.bluePawnMoves(bluePieces['Pawn8'],area,'blue');
	  addColor(area);
	  bluePieces['currentArea'] = area;
	}


}