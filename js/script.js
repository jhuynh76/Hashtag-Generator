/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Buttons
	## Submit
--------------------------------------------------------------*/
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

	// Conditional statement
	// if over 30, doesn't proceed
	if (count > 31){
		alert('Total hashtags used: ' + count + '\n\r' + 'More than 30 hashtags were used, reduce to 30 or less');
	}
	// passing condition
	else{
		alert('Total hashtags used: ' + count);

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
