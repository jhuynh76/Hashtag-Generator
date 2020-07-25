// $(document).ready(function(){
// 	alert('hello');
// });

$('#btnSubmit').click(function(){
	$('#form1').fadeOut();
	$('#form2').fadeIn();


	var caption = $('#caption').val();
	var altTxt = $('#altTxt').val();

	var hash1_1Val = $('#hash1_1').val();

	var hash2_1Val = $('#hash2_1').val();
	var hash2_2Val = $('#hash2_2').val();

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

	var hash4_1Val = $('#hash4_1').val();
	var hash4_2Val = $('#hash4_2').val();
	var hash4_3Val = $('#hash4_3').val();
	var hash4_4Val = $('#hash4_4').val();
	var hash4_5Val = $('#hash4_5').val();
	var hash4_6Val = $('#hash4_6').val();
	var hash4_7Val = $('#hash4_7').val();

	var hash5_1Val = $('#hash5_1').val();
	var hash5_2Val = $('#hash5_2').val();
	var hash5_3Val = $('#hash5_3').val();
	var hash5_4Val = $('#hash5_4').val();
	var hash5_5Val = $('#hash5_5').val();
	var hash5_6Val = $('#hash5_6').val();
	var hash5_7Val = $('#hash5_7').val();

	var hash6_1Val = $('#hash6_1').val();
	var hash6_2Val = $('#hash6_2').val();
	var hash6_3Val = $('#hash6_3').val();

	$(output).text(
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

$('#btnBack').click(function(){
	$('#form2').fadeOut();
	$('#form1').fadeIn();
})