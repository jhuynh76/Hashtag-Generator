/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Presets
# Buttons
	## Submit
	## Reset
	## Back
--------------------------------------------------------------*/
/*--------------------------------------------------------------
# Presets
--------------------------------------------------------------*/
$('#dropdownPresets').change(function(){
	$('#dropdownPresets option:selected').each(function(){
		var value = $(this).val();

		if (value == 'toronto'){
			// 1 mil
			$('#hash1').val('torontophoto');
			// 500-900k
			$('#hash2').val('torontoigers');
			$('#hash3').val('');
			// 100-450k
			$('#hash4').val('exploretoronto');
			$('#hash5').val('cityshots');
			$('#hash6').val('ig_streets');
			$('#hash7').val('igtoronto');
			$('#hash8').val('imagesoftoronto');
			$('#hash9').val('torontoinsta');
			$('#hash10').val('6ixwalks');
			$('#hash11').val('torontoclx');
			$('#hash12').val('curiocityto');
			$('#hash13').val('dailyhiveto');
			// 50-90k
			$('#hash14').val('torontopixel');
			$('#hash15').val('dailyhivetoronto');
			$('#hash16').val('torontodowntown');
			$('#hash17').val('tdot_shots');
			$('#hash18').val('torontostreet');
			$('#hash19').val('street_ographers');
			$('#hash20').val('');
			// 20-40k
			$('#hash21').val('todotoronto');
			$('#hash22').val('torontostreetphotography');
			$('#hash23').val('visualtoronto');
			$('#hash24').val('');
			$('#hash25').val('');
			$('#hash26').val('');
			$('#hash27').val('');
			// 10-15k
			$('#hash28').val('lovetdot');
			$('#hash29').val('curiositytoronto');
			$('#hash30').val('');
		}
	});
})

/*--------------------------------------------------------------
# Buttons
--------------------------------------------------------------*/
/*--------------------------------------------------------------
## Submit
--------------------------------------------------------------*/
$('#btnSubmit').click(function(){
	var count = 0;
	// grabs val for every textbox, and adds counter
	$('input[type="textbox"]').each(function(){
		if ( $(this).val() != '' ){
			count++;
		}
	});

	alert('total hashtags used: ' + count);

	// Conditional statement
	// if over 30, doesn't proceed
	if (count > 30){
		alert('More than 30 hashtags were used, reduce to 30 or less');
	}
	// if no hashtags doesn't proceed
	else if (count == 0){
		alert('0 hashtags used');
	}
	// passing condition
	else{
		$('#form1').fadeOut();
		$('#form2').fadeIn();

		var caption = $('#caption').val();
		var altTxt = $('#altTxt').val();

		// 1 mil
		var hash1 = $('#hash1').val();
		// 500-900k
		var hash2 = $('#hash2').val();
		var hash3 = $('#hash3').val();
		// 100-450k
		var hash4 = $('#hash4').val();
		var hash5 = $('#hash5').val();
		var hash6 = $('#hash6').val();
		var hash7 = $('#hash7').val();
		var hash8 = $('#hash8').val();
		var hash9 = $('#hash9').val();
		var hash10 = $('#hash10').val();
		var hash11 = $('#hash11').val();
		var hash12 = $('#hash12').val();
		var hash13 = $('#hash13').val();
		// 50-90k
		var hash14 = $('#hash14').val();
		var hash15 = $('#hash15').val();
		var hash16 = $('#hash16').val();
		var hash17 = $('#hash17').val();
		var hash18 = $('#hash18').val();
		var hash19 = $('#hash19').val();
		var hash20 = $('#hash20').val();
		// 20-40k
		var hash21 = $('#hash21').val();
		var hash22 = $('#hash22').val();
		var hash23 = $('#hash23').val();
		var hash24 = $('#hash24').val();
		var hash25 = $('#hash25').val();
		var hash26 = $('#hash26').val();
		var hash27 = $('#hash27').val();
		// 10-15k
		var hash28 = $('#hash28').val();
		var hash29 = $('#hash29').val();
		var hash30 = $('#hash30').val();
		// 0-9k
		var hash31 = $('#hash31').val();
		var hash32 = $('#hash32').val();
		var hash33 = $('#hash33').val();

		$('#output').text(
			'"' + caption + '"' + '\n\r\n\r' +
			'Alt Text: ' + altTxt + '\n\r' +
			'.\n.\n.\n.\n.\n' +

			'#' + hash1 + '\n' +
			'#' + hash2 + ' ' +
			'#' + hash3 + '\n' +
			'#' + hash4 + ' ' +
			'#' + hash5 + ' ' +
			'#' + hash6 + ' ' +
			'#' + hash7 + ' ' +
			'#' + hash8 + ' ' +
			'#' + hash9 + ' ' +
			'#' + hash10 + ' ' +
			'#' + hash11 + ' ' +
			'#' + hash12 + ' ' +
			'#' + hash13 + '\n' +
			'#' + hash14 + ' ' +
			'#' + hash15 + ' ' +
			'#' + hash16 + ' ' +
			'#' + hash17 + ' ' +
			'#' + hash18 + ' ' +
			'#' + hash19 + ' ' +
			'#' + hash20 + '\n' +
			'#' + hash21 + ' ' +
			'#' + hash22 + ' ' +
			'#' + hash23 + ' ' +
			'#' + hash24 + ' ' +
			'#' + hash25 + ' ' +
			'#' + hash26 + ' ' +
			'#' + hash27 + '\n' +
			'#' + hash28 + ' ' +
			'#' + hash29 + ' ' +
			'#' + hash30 + '\n' +
			'#' + hash31 + ' ' +
			'#' + hash32 + ' ' +
			'#' + hash33
		);
	}

});

/*--------------------------------------------------------------
# Reset
--------------------------------------------------------------*/
$('#btnReset').click(function(){
	// clears textarea (caption)
	document.getElementById('caption').value= '';
	// clears all textboxes
	$('input[type="textbox"]').each(function(){
		$(this).val('');
	})
});

/*--------------------------------------------------------------
# Back
--------------------------------------------------------------*/
$('#btnBack').click(function(){
	$('#form2').fadeOut();
	$('#form1').fadeIn();
})
