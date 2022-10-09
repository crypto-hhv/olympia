var phonenumber = /^((([0-9]))*)*$/i;
$(document).ready(function() {

	$("#btnsubmit").click(function() {
		var name = $("#txtname").val();
		var mobile = $("#txtmobileno").val();
		var sltservices=$("#sltservices").val();
		var txtdesc=$("#txtdesc").val();
		var txtcaptcha=$("#txtcaptcha").val();
		var email = $("#txtemailid").val();
		var wftype = $("#wftype").val();
		var pageurl =$('input[name="pageurl"]').val();
		$("#frmloader").css('dsiplay','block');
		var frmloader='<img src="images/loading.gif" alt="">';
		$('#frmloader').html(frmloader);
		if (validation()){
			$("#frmloader").css('dsiplay','block');
			$.post("https://www.artattackk.com/requestquote", {
				name1: name,
				email1: email,
				mobile: mobile,
				services: sltservices,
				txtdesc: txtdesc,
				wftype: wftype,
				txtcaptcha: txtcaptcha,
				pageurl: pageurl
			}, function(data) { //alert(data);
				if(data=='form error'){
					$('#frmloader').css('display','none');
					$('.capchaError').html("Please fill the form correctly");
				}else if(data=='Error!'){
					$('#frmloader').css('display','none');
					$('.capchaError').html("Oops! email not sended");
				}else if(data=='Captcha'){
					$('#frmloader').css('display','none');
					$('#txtcaptcha').addClass('error');
					$('#txtcaptcha').val("Invalid Captcha");
				}else{
					$('#txtcaptcha').removeClass('error');
					$('#frmloader').css('display','none');
					$('.quoteForm').css('display','none');
					$('.thanksMsg').css('display','block');
					$(".contactFormCont").css("display", "none");
					$(".contactThanks").css("display", "block");
				}
			});
		}
		else {
			$('#frmloader').css('display','none');
		}

	});
	function validation() {
		var errormsg=true;
		var remsg='';
		var name = $("#txtname").val();
		var mobile = $("#txtmobileno").val();
		var sltservices=$("#sltservices").val();
		var txtdesc=$("#txtdesc").val();
		var txtcaptcha=$("#txtcaptcha").val();
		var email = $("#txtemailid").val();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (name === '' || name=='forgotten your name?'){
			$('#txtname').addClass('error');
			$('#txtname').val('forgotten your name?');
			errormsg=false;
		}else if(!CheckAlphabet(name)){
			$('#txtname').addClass('error');
			$('#txtname').val('your name is invalid?');
		}else{
			$('#txtname').removeClass('error');
		}
		if(email === '' || email=='Don\'t have Email id ?') {
			$('#txtemailid').addClass('error');
			$('#txtemailid').val('Don\'t have Email id ?');
			errormsg=false;
		}else if (!(email).match(emailReg)) {
			$('#txtemailid').addClass('error');
			$('#txtemailid').val('Invalid Email id ?');
			errormsg=false;
		}else{
			$('#txtemailid').removeClass('error');
		}
		if(mobile=='' || mobile=='Please enter your phone number'){
			$('#txtmobileno').addClass('error');
			$('#txtmobileno').val('Please enter your phone number');
			errormsg=false;
		}else if(!phonenumber.test(mobile)){
			$('#txtmobileno').addClass('error');
			$('#txtmobileno').val('Invalid phone number');
			errormsg=false;
		}else{
			$('#txtmobileno').removeClass('error');
		}
		if (txtdesc === '' || txtdesc=='Say Hi atleast...!'){
			$('#txtdesc').addClass('error');
			$('#txtdesc').val('Say Hi atleast...!');
			errormsg=false;
		} else{
			$('#txtdesc').removeClass('error');
		}
		// if(txtcaptcha==''){
		// 	$('#txtcaptcha').addClass('error');
		// 	$('#txtcaptcha').val('Invalid Captcha');
		// 	errormsg=false;
		// }else if(!CheckDigits(txtcaptcha)){
		// 	$('#txtcaptcha').addClass('error');
		// 	$('#txtcaptcha').val('Enter numeric value only');
		// 	errormsg=false;
		// }else{
		// 	$('#txtcaptcha').removeClass('error');
		// }
		if(!errormsg){
			return errormsg
		}else{
			return errormsg;
		}
	}
	$("#btnresubmit").click(function() {

		var name = $("#txtrename").val();
		var mobile = $("#txtremobileno").val();
		var sltservices=$("#sltreservices").val();
		var txtdesc=$("#txtredesc").val();
		var txtcaptcha=$("#txtrecaptcha").val();
		var wftype = $("#wftype").val();
		var email = $("#txtreemailid").val();
		var pageurl =$('input[name="pageurl"]').val();
		$('#frmreloader').css('display','block');
		var frmloader='<img src="images/loading.gif" alt="">';
		$('#frmreloader').html(frmloader);
		if (requestvalidation()){
			$('#frmreloader').css('display','block');
			$.post("https://www.artattackk.com/requestquote", {
				name1: name,
				email1: email,
				mobile: mobile,
				services: sltservices,
				txtdesc: txtdesc,
				wftype: wftype,
				txtcaptcha: txtcaptcha,
				pageurl: pageurl
			}, function(data) {
				if(data=='form error'){
					$('#frmreloader').css('display','none');
					$('.capchaError').html("Please fill the form correctly");
				}else if(data=='Error!'){
					$('#frmreloader').css('display','none');
					$('.capchaError').html("Oops! email not sended");
				}else if(data=='Captcha'){
					$('#frmreloader').css('display','none');
					$('#txtrecaptcha').addClass('error');
					$('#txtrecaptcha').val("Invalid Captcha");
				}else{
					$('#txtrecaptcha').removeClass('error');
					$('#frmreloader').css('display','none');
					$('.popthnaks').css('display','block');
					$('#thankure').css('display','none');
				}
			});
		}
		else {
			$('#frmreloader').css('display','none');
		}

	});
	function requestvalidation() {
		var errormsg=true;
		var remsg='';
		var name = $("#txtrename").val();
		var mobile = $("#txtremobileno").val();
		var sltservices=$("#sltreservices").val();
		var txtdesc=$("#txtredesc").val();
		var txtcaptcha=$("#txtrecaptcha").val();
		var email = $("#txtreemailid").val();

		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (name === '' || name=='forgotten your name?'){
			$('#txtrename').addClass('error');
			$('#txtrename').val('forgotten your name?');
			errormsg=false;
		}else if(!CheckAlphabet(name)){
			$('#txtrename').addClass('error');
			$('#txtrename').val('your name is invalid?');
		}else{
			$('#txtrename').removeClass('error');
		}
		if(email === '' || email=='Don\'t have Email id ?') {
			$('#txtreemailid').addClass('error');
			$('#txtreemailid').val('Don\'t have Email id ?');
			errormsg=false;
		}else if (!(email).match(emailReg)) {
			$('#txtreemailid').addClass('error');
			$('#txtreemailid').val('Invalid Email id ?');
			errormsg=false;
		}else{
			$('#txtreemailid').removeClass('error');
		}
		if(mobile=='' || mobile=='Please enter your phone number'){
			$('#txtremobileno').addClass('error');
			$('#txtremobileno').val('Please enter your phone number');
			errormsg=false;
		}else if(!phonenumber.test(mobile)){
			$('#txtremobileno').addClass('error');
			$('#txtremobileno').val('Invalid phone number');
			errormsg=false;
		}else{
			$('#txtremobileno').removeClass('error');
		}
		if (txtdesc === '' || txtdesc=='Say Hi atleast...!'){
			$('#txtredesc').addClass('error');
			$('#txtredesc').val('Say Hi atleast...!');
			errormsg=false;
		} else{
			$('#txtredesc').removeClass('error');
		}
		// if(txtcaptcha==''){
		// 	$('#txtrecaptcha').addClass('error');
		// 	$('#txtrecaptcha').val('Invalid Captcha');
		// 	errormsg=false;
		// }else if(!CheckDigits(txtcaptcha)){
		// 	$('#txtrecaptcha').addClass('error');
		// 	$('#txtrecaptcha').val('Enter numeric value only');
		// 	errormsg=false;
		// }else{
		// 	$('#txtrecaptcha').removeClass('error');
		// }
		if(!errormsg){
			return errormsg
		}else{
			return errormsg;
		}
	}
});
$(document).ready(function() {
	$('.quoteForm input[type=text], .quoteForm input[type=email], .quoteForm textarea').click(function() {
		var $id=$('#'+$(this).attr("id")).hasClass('error');
		if($id){
			$('#'+$(this).attr("id")).removeClass('error');
			$('#'+$(this).attr("id")).val('');
		}
	});
	$('.popupForm input[type=text], .quoteForm input[type=email], .formDiv textarea').click(function() {
		var $id=$('#'+$(this).attr("id")).hasClass('error');
		if($id){
			$('#'+$(this).attr("id")).removeClass('error');
			$('#'+$(this).attr("id")).val('');
		}
	});
});
function CheckAlphabet(character) {
	var valid = 1
	character=character.toUpperCase();
	var GoodChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ. "
	var GoodChars1 = " "
	var i = 0
	if (character=="") {
		// Return false if number is empty
		valid = 0
	}
	for (i =0; i <= character.length -1; i++) {
		if (GoodChars.indexOf(character.charAt(i)) == -1) {
			// Note: Remove the comments from the following line to see this
			// for loop in action.
			// alert(character.charAt(i) + " is no good.")
			valid = 0
		} // End if statement
	} // End for loop
	return valid
}
function IsValid( oField ){
	if (oField.name=='txtemail'){
		re = /^(([a-z\._\-0-9])+\@([a-z\._\-0-9])+\.([a-z])+)?$/i;
		$sMsg = "E-Mail is invalid.\E-Mail should be in user@domain.com format."
	}
	if(!re.test(oField.value) ){
		alert( $sMsg );
		oField.value = '';
		oField.focus();
		return false;
	}
}
function CheckDigits(TheNumber) {
	var valid = 1
	var GoodChars = "0123456789-"
	var i = 0
	if (TheNumber=="") {
		// Return false if number is empty
		valid = 0
	}
	for (i =0; i <= TheNumber.length -1; i++) {
		if (GoodChars.indexOf(TheNumber.charAt(i)) == -1) {
			// Note: Remove the comments from the following line to see this
			// for loop in action.
			// alert(TheNumber.charAt(i) + " is no good.")
			valid = 0
		} // End if statement
	} // End for loop
	return valid
}
