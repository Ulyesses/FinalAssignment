$(document).ready(function(){

	//List of Variables for White Keys

	var C5 = document.getElementById('C5');
	var C4 = document.getElementById('C4');
	var C3 = document.getElementById('C3');
	var C2 = document.getElementById('C2');
	var D5 = document.getElementById('D5');
	var D4 = document.getElementById('D4');
	var D3 = document.getElementById('D3');
	var D2 = document.getElementById('D2');
	var E5 = document.getElementById('E5');
	var E4 = document.getElementById('E4');
	var E3 = document.getElementById('E3');
	var E2 = document.getElementById('E2');
	var F5 = document.getElementById('F5');
	var F4 = document.getElementById('F4');
	var F3 = document.getElementById('F3');
	var F2 = document.getElementById('F2');
	var G5 = document.getElementById('G5');
	var G4 = document.getElementById('G4');
	var G3 = document.getElementById('G3');
	var G2 = document.getElementById('G2');
	var A5 = document.getElementById('A5');
	var A4 = document.getElementById('A4');
	var A3 = document.getElementById('A3');
	var A2 = document.getElementById('A2');
	var B5 = document.getElementById('B5');
	var B4 = document.getElementById('B4');
	var B3 = document.getElementById('B3');
	var B2 = document.getElementById('B2');

	//List of Variables for Black Keys

	var C5_sharp = document.getElementById('C5_sharp');
	var C4_sharp = document.getElementById('C4_sharp');
	var C3_sharp = document.getElementById('C3_sharp');
	var C2_sharp = document.getElementById('C2_sharp');
	var D5_sharp = document.getElementById('D5_sharp');
	var D4_sharp = document.getElementById('D4_sharp');
	var D3_sharp = document.getElementById('D3_sharp');
	var D2_sharp = document.getElementById('D2_sharp');
	var F5_sharp = document.getElementById('F5_sharp');
	var F4_sharp = document.getElementById('F4_sharp');
	var F3_sharp = document.getElementById('F3_sharp');
	var F2_sharp = document.getElementById('F2_sharp');
	var G5_sharp = document.getElementById('G5_sharp');
	var G4_sharp = document.getElementById('G4_sharp');
	var G3_sharp = document.getElementById('G3_sharp');
	var G2_sharp = document.getElementById('G2_sharp');
	var A5_sharp = document.getElementById('A5_sharp');
	var A4_sharp = document.getElementById('A4_sharp');
	var A3_sharp = document.getElementById('A3_sharp');
	var A2_sharp = document.getElementById('A2_sharp');

	//Key Functions

	//Key being pushed
	$('body').on('keydown', function(e) {

		if(e.keyCode == 49){
			C5.load();
			C5.play();
			$('.C5').addClass('white_press');
		}

		if(e.keyCode == 50){
			C5_sharp.load();
			C5_sharp.play();
			$('.C5_sharp').addClass('black_press');
		}

		if(e.keyCode == 51){
			D5.load();
			D5.play();
			$('.D5').addClass('white_press');
		}

		if(e.keyCode == 52){
			D5_sharp.load();
			D5_sharp.play();
			$('.D5_sharp').addClass('black_press');
		}

		if(e.keyCode == 53){
			E5.load();
			E5.play();
			$('.E5').addClass('white_press');
		}

		if(e.keyCode == 54){
			F5.load();
			F5.play();
			$('.F5').addClass('white_press');
		}

		if(e.keyCode == 55){
			F5_sharp.load();
			F5_sharp.play();
			$('.F5_sharp').addClass('black_press');
		}

		if(e.keyCode == 56){
			G5.load();
			G5.play();
			$('.G5').addClass('white_press');
		}

		if(e.keyCode == 57){
			G5_sharp.load();
			G5_sharp.play();
			$('.G5_sharp').addClass('black_press');
		}

		if(e.keyCode == 48){
			A5.load();
			A5.play();
			$('.A5').addClass('white_press');
		}

		if(e.keyCode == 189){
			A5_sharp.load();
			A5_sharp.play();
			$('.A5_sharp').addClass('black_press');
		}

		if(e.keyCode == 187){
			B5.load();
			B5.play();
			$('.B5').addClass('white_press');
		}

		if(e.keyCode == 81){
			C4.load();
			C4.play();
			$('.C4').addClass('white_press');
		}

		if(e.keyCode == 87){
			C4_sharp.load();
			C4_sharp.play();
			$('.C4_sharp').addClass('black_press');
		}

		if(e.keyCode == 69){
			D4.load();
			D4.play();
			$('.D4').addClass('white_press');
		}

		if(e.keyCode == 82){
			D4_sharp.load();
			D4_sharp.play();
			$('.D4_sharp').addClass('black_press');
		}

		if(e.keyCode == 84){
			E4.load();
			E4.play();
			$('.E4').addClass('white_press');
		}

		if(e.keyCode == 89){
			F4.load();
			F4.play();
			$('.F4').addClass('white_press');
		}

		if(e.keyCode == 85){
			F4_sharp.load();
			F4_sharp.play();
			$('.F4_sharp').addClass('black_press');
		}

		if(e.keyCode == 73){
			G4.load();
			G4.play();
			$('.G4').addClass('white_press');
		}

		if(e.keyCode == 79){
			G4_sharp.load();
			G4_sharp.play();
			$('.G4_sharp').addClass('black_press');
		}

		if(e.keyCode == 80){
			A4.load();
			A4.play();
			$('.A4').addClass('white_press');
		}

		if(e.keyCode == 219){
			A4_sharp.load();
			A4_sharp.play();
			$('.A4_sharp').addClass('black_press');
		}

		if(e.keyCode == 221){
			B4.load();
			B4.play();
			$('.B4').addClass('white_press');
		}

		if(e.keyCode == 65){
			C3.load();
			C3.play();
			$('.C3').addClass('white_press');
		}

		if(e.keyCode == 83){
			C3_sharp.load();
			C3_sharp.play();
			$('.C3_sharp').addClass('black_press');
		}

		if(e.keyCode == 68){
			D3.load();
			D3.play();
			$('.D3').addClass('white_press');
		}

		if(e.keyCode == 70){
			D3_sharp.load();
			D3_sharp.play();
			$('.D3_sharp').addClass('black_press');
		}

		if(e.keyCode == 71){
			E3.load();
			E3.play();
			$('.E3').addClass('white_press');
		}

		if(e.keyCode == 72){
			F3.load();
			F3.play();
			$('.F3').addClass('white_press');
		}

		if(e.keyCode == 74){
			F3_sharp.load();
			F3_sharp.play();
			$('.F3_sharp').addClass('black_press');
		}

		if(e.keyCode == 75){
			G3.load();
			G3.play();
			$('.G3').addClass('white_press');
		}

		if(e.keyCode == 76){
			G3_sharp.load();
			G3_sharp.play();
			$('.G3_sharp').addClass('black_press');
		}

		if(e.keyCode == 186){
			A3.load();
			A3.play();
			$('.A3').addClass('white_press');
		}

		if(e.keyCode == 222){
			A3_sharp.load();
			A3_sharp.play();
			$('.A3_sharp').addClass('black_press');
		}

		if(e.keyCode == 13){
			B3.load();
			B3.play();
			$('.B3').addClass('white_press');
		}

		if(e.keyCode == 90){
			C2.load();
			C2.play();
			$('.C2').addClass('white_press');
		}

		if(e.keyCode == 88){
			C2_sharp.load();
			C2_sharp.play();
			$('.C2_sharp').addClass('black_press');
		}

		if(e.keyCode == 67){
			D2.load();
			D2.play();
			$('.D2').addClass('white_press');
		}

		if(e.keyCode == 86){
			D2_sharp.load();
			D2_sharp.play();
			$('.D2_sharp').addClass('black_press');
		}

		if(e.keyCode == 66){
			E2.load();
			E2.play();
			$('.E2').addClass('white_press');
		}

		if(e.keyCode == 78){
			F2.load();
			F2.play();
			$('.F2').addClass('white_press');
		}

		if(e.keyCode == 77){
			F2_sharp.load();
			F2_sharp.play();
			$('.F2_sharp').addClass('black_press');
		}

		if(e.keyCode == 188){
			G2.load();
			G2.play();
			$('.G2').addClass('white_press');
		}

		if(e.keyCode == 190){
			G2_sharp.load();
			G2_sharp.play();
			$('.G2_sharp').addClass('black_press');
		}

		if(e.keyCode == 191){
			A2.load();
			A2.play();
			$('.A2').addClass('white_press');
		}

		if(e.keyCode == 16){
			A2_sharp.load();
			A2_sharp.play();
			$('.A2_sharp').addClass('black_press');
		}

		if(e.keyCode == 38){
			B2.load();
			B2.play();
			$('.B2').addClass('white_press');
		}

	});

	//Keys being released
	$('body').on('keyup', function(e) {

		if(e.keyCode == 49){

			$('.C5').removeClass('white_press');
		}

		if(e.keyCode == 50){

			$('.C5_sharp').removeClass('black_press');
		}

		if(e.keyCode == 51){

			$('.D5').removeClass('white_press');
		}

		if(e.keyCode == 52){

			$('.D5_sharp').removeClass('black_press');
		}

		if(e.keyCode == 53){

			$('.E5').removeClass('white_press');
		}

		if(e.keyCode == 54){

			$('.F5').removeClass('white_press');
		}

		if(e.keyCode == 55){

			$('.F5_sharp').removeClass('black_press');
		}

		if(e.keyCode == 56){

			$('.G5').removeClass('white_press');
		}

		if(e.keyCode == 57){

			$('.G5_sharp').removeClass('black_press');
		}

		if(e.keyCode == 48){

			$('.A5').removeClass('white_press');
		}

		if(e.keyCode == 189){

			$('.A5_sharp').removeClass('black_press');
		}

		if(e.keyCode == 187){

			$('.B5').removeClass('white_press');
		}

		if(e.keyCode == 81){

			$('.C4').removeClass('white_press');
		}

		if(e.keyCode == 87){

			$('.C4_sharp').removeClass('black_press');
		}

		if(e.keyCode == 69){

			$('.D4').removeClass('white_press');
		}

		if(e.keyCode == 82){

			$('.D4_sharp').removeClass('black_press');
		}

		if(e.keyCode == 84){

			$('.E4').removeClass('white_press');
		}

		if(e.keyCode == 89){

			$('.F4').removeClass('white_press');
		}

		if(e.keyCode == 85){

			$('.F4_sharp').removeClass('black_press');
		}

		if(e.keyCode == 73){

			$('.G4').removeClass('white_press');
		}

		if(e.keyCode == 79){

			$('.G4_sharp').removeClass('black_press');
		}

		if(e.keyCode == 80){

			$('.A4').removeClass('white_press');
		}

		if(e.keyCode == 219){

			$('.A4_sharp').removeClass('black_press');
		}

		if(e.keyCode == 221){

			$('.B4').removeClass('white_press');
		}

		if(e.keyCode == 65){

			$('.C3').removeClass('white_press');
		}

		if(e.keyCode == 83){

			$('.C3_sharp').removeClass('black_press');
		}

		if(e.keyCode == 68){

			$('.D3').removeClass('white_press');
		}

		if(e.keyCode == 70){

			$('.D3_sharp').removeClass('black_press');
		}

		if(e.keyCode == 71){

			$('.E3').removeClass('white_press');
		}

		if(e.keyCode == 72){

			$('.F3').removeClass('white_press');
		}

		if(e.keyCode == 74){

			$('.F3_sharp').removeClass('black_press');
		}

		if(e.keyCode == 75){

			$('.G3').removeClass('white_press');
		}

		if(e.keyCode == 76){

			$('.G3_sharp').removeClass('black_press');
		}

		if(e.keyCode == 186){

			$('.A3').removeClass('white_press');
		}

		if(e.keyCode == 222){

			$('.A3_sharp').removeClass('black_press');
		}

		if(e.keyCode == 13){

			$('.B3').removeClass('white_press');
		}

		if(e.keyCode == 90){

			$('.C2').removeClass('white_press');
		}

		if(e.keyCode == 88){

			$('.C2_sharp').removeClass('black_press');
		}

		if(e.keyCode == 67){

			$('.D2').removeClass('white_press');
		}

		if(e.keyCode == 86){

			$('.D2_sharp').removeClass('black_press');
		}

		if(e.keyCode == 66){

			$('.E2').removeClass('white_press');
		}

		if(e.keyCode == 78){

			$('.F2').removeClass('white_press');
		}

		if(e.keyCode == 77){

			$('.F2_sharp').removeClass('black_press');
		}

		if(e.keyCode == 188){

			$('.G2').removeClass('white_press');
		}

		if(e.keyCode == 190){

			$('.G2_sharp').removeClass('black_press');
		}

		if(e.keyCode == 191){

			$('.A2').removeClass('white_press');
		}

		if(e.keyCode == 16){

			$('.A2_sharp').removeClass('black_press');
		}

		if(e.keyCode == 38){

			$('.B2').removeClass('white_press');
		}

	});

});