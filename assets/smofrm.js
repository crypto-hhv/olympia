var phonenumber = /^((([0-9]))*)*$/i;
$(document).ready(function () {
    $("#btngetintouch").click(function () {
        var name = $("#smotxtname").val();
        var mobile = $("#smotxtmobileno").val();
        var sltservices = $("#smosltservices").val();
        var email = $("#smotxtemailid").val();
        var wfctype = $("#smowfctype").val();
        var pageurl =$('input[name="pageurl"]').val();
        $("#frmloader").css("display", "block");
        var frmloader = '<img src="image/loading.gif" alt="">';
        $("#frmloader").html(frmloader);
        if (validation()) {
            $("#frmloader").css("display", "block");
            $.post("https://www.artattackk.com/requestquote", { name1: name, email1: email, mobile: mobile, services: sltservices, wftype: wfctype, pageurl: pageurl }, function (data) {
                if (data == "form error") {
                    $("#frmloader").css("display", "none");
                    $(".capchaError").html("Please fill the form correctly");
                } else if (data == "Error!") {
                    $("#frmloader").css("display", "none");
                    $(".capchaError").html("Oops! email not sended");
                } else if (data == "Captcha") {
                    $("#txtcaptcha").addClass("error");
                    $("#frmloader").css("display", "none");
                    $("#txtcaptcha").val("Invalid Captcha");
                } else if (data == "Mail sent") {
                    $("#txtcaptcha").removeClass("error");
                    $("#frmloader").css("display", "none");
                    $(".contactFormCont").css("display", "none");
                    $(".contactThanks").css("display", "block");
                }
            });
        } else {
            $("#frmloader").css("display", "none");
        }
    });
    function validation() {
        var errormsg = true;
        var remsg = "";
        var name = $("#smotxtname").val();
        var mobile = $("#smotxtmobileno").val();
        var sltservices = $("#smosltservices").val();
        var email = $("#smotxtemailid").val();
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if (name === "" || name == "forgotten your name?") {
            $("#smotxtname").addClass("error");
            $("#smotxtname").val("forgotten your name?");
            errormsg = false;
        } else if (!CheckAlphabet(name)) {
            $("#smotxtname").addClass("error");
            $("#smotxtname").val("your name is invalid?");
        } else {
            $("#smotxtname").removeClass("error");
        }
        if (email === "" || email == "Don't have Email id ?") {
            $("#smotxtemailid").addClass("error");
            $("#smotxtemailid").val("Don't have Email id ?");
            errormsg = false;
        } else if (!email.match(emailReg)) {
            $("#smotxtemailid").addClass("error");
            $("#smotxtemailid").val("Invalid Email id ?");
            errormsg = false;
        } else {
            $("#smotxtemailid").removeClass("error");
        }
        if (mobile == "" || mobile == "Please enter your phone number") {
            $("#smotxtmobileno").addClass("error");
            $("#smotxtmobileno").val("Please enter your phone number");
            errormsg = false;
        } else if (!phonenumber.test(mobile)) {
            $("#smotxtmobileno").addClass("error");
            $("#smotxtmobileno").val("Invalid phone number");
            errormsg = false;
        } else {
            $("#smotxtmobileno").removeClass("error");
        }
        if (!errormsg) {
            return errormsg;
        } else {
            return errormsg;
        }
    }
});
$(document).ready(function () {
    $(".popupForm input[type=text], .quoteForm input[type=email], .formDiv textarea").click(function () {
        var $id = $("#" + $(this).attr("id")).hasClass("error");
        if ($id) {
            $("#" + $(this).attr("id")).removeClass("error");
            $("#" + $(this).attr("id")).val("");
        }
    });
});
function CheckAlphabet(character) {
    var valid = 1;
    character = character.toUpperCase();
    var GoodChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ. ";
    var GoodChars1 = " ";
    var i = 0;
    if (character == "") {
        valid = 0;
    }
    for (i = 0; i <= character.length - 1; i++) {
        if (GoodChars.indexOf(character.charAt(i)) == -1) {
            valid = 0;
        }
    }
    return valid;
}
function IsValid(oField) {
    if (oField.name == "txtemail") {
        re = /^(([a-z\._\-0-9])+\@([a-z\._\-0-9])+\.([a-z])+)?$/i;
        $sMsg = "E-Mail is invalid.E-Mail should be in user@domain.com format.";
    }
    if (!re.test(oField.value)) {
        alert($sMsg);
        oField.value = "";
        oField.focus();
        return false;
    }
}
function CheckDigits(TheNumber) {
    var valid = 1;
    var GoodChars = "0123456789-";
    var i = 0;
    if (TheNumber == "") {
        valid = 0;
    }
    for (i = 0; i <= TheNumber.length - 1; i++) {
        if (GoodChars.indexOf(TheNumber.charAt(i)) == -1) {
            valid = 0;
        }
    }
    return valid;
}
