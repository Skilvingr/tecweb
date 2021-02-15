//$(document).ready(function(){

//	var image = new Image();
//	image.src = "../puzzle-image/pp.jpg"; // load the image
//	image.onload = function () {  // when loaded
//		createPuzzle_Image(this);
	//}
//	startPuzzle();
	/*
	var image = new Image();
	image.src = "../puzzle-image/pp.jpg"; // load the image
	image.onload = function () {  // when loaded
		var cc = {
			x : - (this.width / 12),     // crop keeping the center
			y :  - (this.height / 12),
			width : this.width / 2,
			height : this.height / 2,
		};
		var workCan = document.createElement("canvas"); // create a canvas
		workCan.width = Math.floor(cc.width);  // set the canvas resolution to the cropped image size
		workCan.height = Math.floor(cc.height);
		var ctx = workCan.getContext("2d");    // get a 2D rendering interface
		ctx.drawImage(this, -Math.floor(cc.x), -Math.floor(cc.y)); // draw the image offset to place it correctly on the cropped region
		this.src = workCan.toDataURL();       // set the image source to the canvas as a data URL
		console.log(this.src);
		var newImage = new Image();
		newImage.src = this.src
		document.body.appendChild(newImage);  // Add the image to the DOM
	}; */

	//  globals

	var tileClicked = false;
	var firstTileClicked;
	var secondTileClicked;
	var topPosFir = 0;
	var leftPosFir = 0;
	var topPosSec = 0;
	var leftPosSec = 0;
	var shuffle = Math.floor((Math.random() * 4) + 1);
	var moves = 0;
	var secs = 0;

	//  shuffle the tiles

	function shuffleTiles(){
		if(shuffle == 1){
			$('#piece-1').css({top: 340, left: 680});
			$('#piece-2').css({top: 0, left: 680});
			$('#piece-3').css({top: 340, left: 340});
			$('#piece-4').css({top: 0, left: 340});
			$('#piece-5').css({top: 340, left: 0});
			$('#piece-6').css({top: 0, left: 0});
		} else if(shuffle == 2){
			$('#piece-1').css({top: 340, left: 0});
			$('#piece-2').css({top: 0, left: 0});
			$('#piece-3').css({top: 340, left: 340});
			$('#piece-4').css({top: 0, left: 340});
			$('#piece-5').css({top: 340, left: 680});
			$('#piece-6').css({top: 0, left: 680});
		} else if(shuffle == 3){
			$('#piece-1').css({top: 0, left: 680});
			$('#piece-2').css({top: 0, left: 0});
			$('#piece-3').css({top: 340, left: 340});
			$('#piece-4').css({top: 340, left: 680});
			$('#piece-5').css({top: 0, left: 340});
			$('#piece-6').css({top: 340, left: 0});
		} else if(shuffle == 4){
			$('#piece-1').css({top: 0, left: 680});
			$('#piece-2').css({top: 340, left: 680});
			$('#piece-3').css({top: 0, left: 340});
			$('#piece-4').css({top: 340, left: 340});
			$('#piece-5').css({top: 0, left: 0});
			$('#piece-6').css({top: 340, left: 0});
		}
	}
/*
	$(window).load(function(){
		setTimeout(function(){
			shuffleTiles();
			setInterval(function(){
				secs++
			}, 1000);
		}, 1000);
	});
*/

function loadPuzzle(story,number,score,playerName,playerObj,css){
	setTimeout(function(){
		shuffleTiles();
		loadClick(story,number,score,playerName,playerObj,css)
		setInterval(function(){
			secs++
		}, 1000);
	}, 1000);
}

	//  play the game
function loadClick(story,number,score,playerName,playerObj,css){
	$('.pieces').click(function(){

		if(tileClicked == false){  //  if no tile is clicked

			//  set variables
			firstTileClicked = $(this).attr('id');
			topPosFir = parseInt($(this).css('top'));
			leftPosFir = parseInt($(this).css('left'));

			//  highlight tile
			$(this).addClass('glow');
			tileClicked = true;

		} else{  //  if you've clicked a tile

			//  set variables
			secondTileClicked = $(this).attr('id');
			topPosSec = parseInt($(this).css('top'));
			leftPosSec = parseInt($(this).css('left'));

			//  animations
			$('#' + firstTileClicked).css({'top' : topPosSec , 'left' : leftPosSec});
			$('#' + secondTileClicked).css({'top' : topPosFir , 'left' : leftPosFir});

			//  remove the glow and reset the first tile
			$('.pieces').removeClass('glow');
			tileClicked = false;

			//  test for the win

			setTimeout(function(){
				if(
					$('#piece-1').css('left') == '0px' && $('#piece-1').css('top') == '0px' &&
					$('#piece-2').css('left') == '340px' && $('#piece-2').css('top') == '0px' &&
					$('#piece-3').css('left') == '680px' && $('#piece-3').css('top') == '0px' &&
					$('#piece-4').css('left') == '0px' && $('#piece-4').css('top') == '340px' &&
					$('#piece-5').css('left') == '340px' && $('#piece-5').css('top') == '340px' &&
					$('#piece-6').css('left') == '680px' && $('#piece-6').css('top') == '340px'
				){
					generateButtons(story,number,score,playerName,playerObj,css);
					 var head = document.getElementsByTagName('head')[0];
					head.removeChild(document.getElementById("cssPuzzle"));
					document.getElementById("puzzleStory").innerHTML="";
					//$('p').text('You have solved the puzzle in ' + secs + ' seconds using ' + moves + ' moves!!');
					//$('article').addClass('glow-2');
					moves = 0;
				}
			}, 1000);

			//  increment the move counter
			moves++

		}

	});
}//  end the click function


//});
function startPuzzle(imagePuzzle,story,number,score,playerName,playerObj,css){
	var image = new Image();
	image.src = "/imgCreate/"+imagePuzzle; // load the image
	image.onload = function () {  // when loaded
	createPuzzle_Image(this,story,number,score,playerName,playerObj,css);
	}
}

function createPuzzle_Image(Image,story,number,score,playerName,playerObj,css) {
	let c1 = {
		x: 0,     // crop keeping the center
		y: 0,
		width: Image.width / 3,
		height: Image.height / 3,
	};

	let piece1 = cropImage(Image, c1);

	let c2 = {
		x: Image.width / 3,     // crop keeping the center
		y: 0,
		width: Image.width / 3,
		height: Image.height / 3,
	};

	let piece2 = cropImage(Image, c2);

	let c3 = {
		x: (Image.width / 3) * 2,     // crop keeping the center
		y: 0,
		width: Image.width / 3,
		height: Image.height / 3,
	};

	let piece3 = cropImage(Image, c3);

	let c4 = {
		x: 0,     // crop keeping the center
		y: Image.height / 3,
		width: Image.width / 3,
		height: Image.height / 3,
	};

	let piece4 = cropImage(Image, c4);

	let c5 = {
		x: Image.width / 3,     // crop keeping the center
		y: Image.height / 3,
		width: Image.width / 3,
		height: Image.height / 3,
	};

	let piece5 = cropImage(Image, c5);

	let c6 = {
		x: (Image.width / 3) * 2,     // crop keeping the center
		y: Image.height / 3,
		width: Image.width / 3,
		height: Image.height / 3,
	};

	let piece6 = cropImage(Image, c6);

	$("#piece-1").css({"background-image": `url('${piece1.src}')`});
	$("#piece-2").css({"background-image": `url('${piece2.src}')`});
	$("#piece-3").css({"background-image": `url('${piece3.src}')`});
	$("#piece-4").css({"background-image": `url('${piece4.src}')`});
	$("#piece-5").css({"background-image": `url('${piece5.src}')`});
	$("#piece-6").css({"background-image": `url('${piece6.src}')`});
	loadPuzzle(story,number,score,playerName,playerObj,css);
}

function cropImage(Img, coordinates){
	var cc = coordinates;
	var workCan = document.createElement("canvas"); // create a canvas
	workCan.width = Math.floor(cc.width);  // set the canvas resolution to the cropped image size
	workCan.height = Math.floor(cc.height);
	var ctx = workCan.getContext("2d");    // get a 2D rendering interface
	ctx.drawImage(Img, -Math.floor(cc.x), -Math.floor(cc.y)); // draw the image offset to place it correctly on the cropped region
	var newImage = new Image();
	newImage.src = workCan.toDataURL(); // set the image source to the canvas as a data URL
	return newImage;
}
