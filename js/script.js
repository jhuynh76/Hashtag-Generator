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
		else{
			$(this).val('');
		}
	});

	alert('total hashtags used: ' + count);

	// Conditional statement
	// if over 30, doesn't proceed
	if (count > 30){
		alert('More than 30 hashtags were used, reduce to 30 or less');
	}
	// passing condition
	else{
		$('#form1').fadeOut();
		$('#form2').fadeIn();

		var caption = $('#caption').val();
		var altTxt = $('#altTxt').val();

		var arr = [];
		var i = 0;
		$('input[type="textbox"]').each(function(){
				arr[i++] = $(this).val();
		});

		var arr2 = arr.toString().replace(/,/g , ' #').replace(/# /g , '');

		$('#output').text(
				'"' + caption + '"' + '\n\r\n\r' +
				'Alt Text: ' + altTxt + '\n\r' +
				'.\n.\n.\n.\n.\n' +
				arr2
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
