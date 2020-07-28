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
			$('#hash1_1').val('torontophoto');
			// 500-900k
			$('#hash2_1').val('torontoigers');
			$('#hash2_2').val('');
			// 100-450k
			$('#hash3_1').val('exploretoronto');
			$('#hash3_2').val('cityshots');
			$('#hash3_3').val('ig_streets');
			$('#hash3_4').val('igtoronto');
			$('#hash3_5').val('imagesoftoronto');
			$('#hash3_6').val('torontoinsta');
			$('#hash3_7').val('6ixwalks');
			$('#hash3_8').val('torontoclx');
			$('#hash3_9').val('curiocityto');
			$('#hash3_10').val('dailyhiveto');
			// 50-90k
			$('#hash4_1').val('torontopixel');
			$('#hash4_2').val('dailyhivetoronto');
			$('#hash4_3').val('torontodowntown');
			$('#hash4_4').val('tdot_shots');
			$('#hash4_5').val('torontostreet');
			$('#hash4_6').val('street_ographers');
			$('#hash4_7').val('');
			// 20-40k
			$('#hash5_1').val('todotoronto');
			$('#hash5_2').val('torontostreetphotography');
			$('#hash5_3').val('visualtoronto');
			$('#hash5_4').val('');
			$('#hash5_5').val('');
			$('#hash5_6').val('');
			$('#hash5_7').val('');
			// 10-15k
			$('#hash6_1').val('lovetdot');
			$('#hash6_2').val('curiositytoronto');
			$('#hash6_3').val('');
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
	$('#form1').fadeOut();
	$('#form2').fadeIn();

	var caption = $('#caption').val();
	var altTxt = $('#altTxt').val();

	// 1 mil
	var hash1_1Val = $('#hash1_1').val();
	// 500-900k
	var hash2_1Val = $('#hash2_1').val();
	var hash2_2Val = $('#hash2_2').val();
	// 100-450k
	var hash3_1Val = $('#hash3_1').val();
	var hash3_2Val = $('#hash3_2').val();
	var hash3_3Val = $('#hash3_3').val();
	var hash3_4Val = $('#hash3_4').val();
	var hash3_5Val = $('#hash3_5').val();
	var hash3_6Val = $('#hash3_6').val();
	var hash3_7Val = $('#hash3_7').val();
	var hash3_8Val = $('#hash3_8').val();
	var hash3_9Val = $('#hash3_9').val();
	var hash3_10Val = $('#hash3_10').val();
	// 50-90k
	var hash4_1Val = $('#hash4_1').val();
	var hash4_2Val = $('#hash4_2').val();
	var hash4_3Val = $('#hash4_3').val();
	var hash4_4Val = $('#hash4_4').val();
	var hash4_5Val = $('#hash4_5').val();
	var hash4_6Val = $('#hash4_6').val();
	var hash4_7Val = $('#hash4_7').val();
	// 20-40k
	var hash5_1Val = $('#hash5_1').val();
	var hash5_2Val = $('#hash5_2').val();
	var hash5_3Val = $('#hash5_3').val();
	var hash5_4Val = $('#hash5_4').val();
	var hash5_5Val = $('#hash5_5').val();
	var hash5_6Val = $('#hash5_6').val();
	var hash5_7Val = $('#hash5_7').val();
	// 10-15k
	var hash6_1Val = $('#hash6_1').val();
	var hash6_2Val = $('#hash6_2').val();
	var hash6_3Val = $('#hash6_3').val();

	$('#output').text(
		'"' + caption + '"' + '\n\r\n\r' +
		'Alt Text: ' + altTxt + '\n\r' +

		'.\n.\n.\n.\n.\n' +

		'#' + hash1_1Val + '\n\r' +

		'#' + hash2_1Val + ' ' +
		'#' + hash2_2Val + '\n\r' +

		'#' + hash3_1Val + ' ' +
		'#' + hash3_2Val + ' ' +
		'#' + hash3_3Val + ' ' +
		'#' + hash3_4Val + ' ' +
		'#' + hash3_5Val + ' ' +
		'#' + hash3_6Val + ' ' +
		'#' + hash3_7Val + ' ' +
		'#' + hash3_8Val + ' ' +
		'#' + hash3_9Val + ' ' +
		'#' + hash3_10Val + '\n\r' +

		'#' + hash4_1Val + ' ' +
		'#' + hash4_2Val + ' ' +
		'#' + hash4_3Val + ' ' +
		'#' + hash4_4Val + ' ' +
		'#' + hash4_5Val + ' ' +
		'#' + hash4_6Val + ' ' +
		'#' + hash4_7Val + '\n\r' +

		'#' + hash5_1Val + ' ' +
		'#' + hash5_2Val + ' ' +
		'#' + hash5_3Val + ' ' +
		'#' + hash5_4Val + ' ' +
		'#' + hash5_5Val + ' ' +
		'#' + hash5_6Val + ' ' +
		'#' + hash5_7Val + '\n\r' +

		'#' + hash6_1Val + ' ' +
		'#' + hash6_2Val + '\n\r' +
		'#' + hash6_3Val
	);
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
