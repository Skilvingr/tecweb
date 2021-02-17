
// Mischia i pezzi del puzzle
function shuffleTiles(shuffle){

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

//carica il puzzle
function loadPuzzle(story,number,score,playerName,playerObj,css){
	//variabili
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

	shuffleTiles(shuffle);
	//se un pezzo viene cliccato esegue la funzione per muovere i pezzi
	$('.pieces').click(function(){

		if(tileClicked == false){  //  se nessun pezzo è cliccato

			// aggiorna le variabili
			firstTileClicked = $(this).attr('id');
			topPosFir = parseInt($(this).css('top'));
			leftPosFir = parseInt($(this).css('left'));

			$(this).addClass('glow');
			tileClicked = true;

		} else{  //  se un pezzo è cliccato

			//  aggiorna le variabili
			secondTileClicked = $(this).attr('id');
			topPosSec = parseInt($(this).css('top'));
			leftPosSec = parseInt($(this).css('left'));

			$('#' + firstTileClicked).css({'top' : topPosSec , 'left' : leftPosSec});
			$('#' + secondTileClicked).css({'top' : topPosFir , 'left' : leftPosFir});

			$('.pieces').removeClass('glow');
			tileClicked = false;

			//  test per controllare se i pezzi sono nelle posizioni corrette

			setTimeout(function(){
				if(
					$('#piece-1').css('left') == '0px' && $('#piece-1').css('top') == '0px' &&
					$('#piece-2').css('left') == '340px' && $('#piece-2').css('top') == '0px' &&
					$('#piece-3').css('left') == '680px' && $('#piece-3').css('top') == '0px' &&
					$('#piece-4').css('left') == '0px' && $('#piece-4').css('top') == '340px' &&
					$('#piece-5').css('left') == '340px' && $('#piece-5').css('top') == '340px' &&
					$('#piece-6').css('left') == '680px' && $('#piece-6').css('top') == '340px'
				){

					moves = 0;
					//Finito il puzzle genera i bottoni per la pagina corrente
					$('article').addClass('glow-2');

					$("#puzzle").addClass("hidden");
					generateButtons(story,number,score,playerName,playerObj,css);

				}
			}, 1000);

			//  incrementa il counter dei movimenti
			moves++

		}

	});

}

//Crea l'immagine per poter essere tagliata
function startPuzzle(imagePuzzle,story,number,score,playerName,playerObj,css){
	var image = new Image();
	image.src = "/imgCreate/"+imagePuzzle; // carica l'immagine
	console.log(image);
	image.onload = function () {
		createPuzzle_Image(this,story,number,score,playerName,playerObj,css);
	}

}

//crea i pezzi del puzzle
function createPuzzle_Image(Image,story,number,score,playerName,playerObj,css) {

	let c1 = {
		x: 0,     // crop keeping the center
		y: 0,
		width: Image.width / 3,
		height: Image.height / 3,
	};
	//esegue il crop
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

//ritorna il crop dell'immagine
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
