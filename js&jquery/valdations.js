$(document).ready(function () {

    $('h1').hide();
    $('h2').hide();
    var name1_err;
    var username_err;
    var password_err;
    var confirmpassword_err;
    var age_err;
    var address_err;

    $('.txt1').keyup(function () {
        name_chek();

    });
    function name_chek() {
        var name = $('.txt1').val();
        var letter = /^[A-Za-z]+$/;
        // var sym=/^[!@#\$%\^\&*\)\(+=._-]+$/;

        if (name == '') {
            $('.val1').html("<b>Please fill the name</b>");
            $('.val1').css("color", "red");
            name1_err = false;
            return false;


        }



        else if (!isNaN(name[0])) {
            $('.val1').html("<b>Name is  Start with not number</b>");
            $('.val1').css("color", "red");
            name1_err = false;
            return false;
        }




        else if (name[0] == '+' || name[0] == '*' || name[0] == '-' || name[0] == '/' || name[0] == ',' || name[0] == '.' || name[0] == '<' || name[0] == '>' || name[0] == '?' || name[0] == '!' || name[0] == '@' || name[0] == '#' || name[0] == '$' || name[0] == '%' || name[0] == '^' || name[0] == '&' || name[0] == '(' || name[0] == ')' || name[0] == '=' || name[0] == '|' || name[0] == '~' || name[0] == '`') {
            $('.val1').html("<b>Name Start is not symbol</b>");
            $('.val1').css("color", "red");
            name1_err = false;
            return false;
        }
        // else if (name.length < 5 || name.length > 50) {
        //     var i;
        //     for (i = 0; i <= name.length; i++) {
        //         if (name[i] == '+' || name[i] == '*' || name[i] == '-' || name[i] == '/' || name[i] == ',' || name[i] == '.' || name[i] == '<' || name[i] == '>' || name[i] == '?' || name[i] == '!' || name[i] == '@' || name[i] == '#' || name[i] == '$' || name[i] == '%' || name[i] == '^' || name[i] == '&' || name[i] == '(' || name[i] == ')' || name[i] == '=' || name[i] == '|' || name[i] == '~' || name[i] == '`') {
        //             $('.val1').html("<b>Symbol not allow</b>");
        //             $('.val1').css("color", "red");
        //             name1_err = false;
        //             return false;
        //         }

        //     }
        // }
        else if (!letter.test(name)) {
            $('.val1').html("<b>Number and special symbol are not allow</b>");
            $('.val1').css("color", "red");
            name1_err = false;
            return false;
        }
        
        else if (name.length < 5 || name.length > 50) {
            $('.val1').html("<b>Name Chacater is between 5 and 50</b>");
            $('.val1').css("color", "red");
            name1_err = false;
            return false;
        }
        else {
            $('.val1').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.val1').css("color", "green");
            name1_err = true;
            return true;
        }


    }

    $('.txt2').keyup(function () {
        username_chek();
    });
    function username_chek() {
        var username = $('.txt2').val();
        var pattern = /^(?=.*[0-9])(?=.*[_@])[a-zA-Z0-9_@]{5,10}$/;

        if (username == '') {
            $('.val2').html("<b>Please fill the Username</b>");
            $('.val2').css("color", "red");
            username_err = false;
            return false;


        }

        else if (!pattern.test(username)) {
            $('.val2').html("<b>Alpha and Numeric Character Compulsory and length must between 5 to 10 </b>");
            $('.val2').css("color", "red");
            username_err = false;
            return false;
        }
        else {
            $('.val2').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.val2').css("color", "green");
            username_err = true;
            return true;
        }


    }
    $('.txt3').keyup(function () {
        password_chek();
    });
    function password_chek() {
        var password = $('.txt3').val();
        var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

        if (password == '') {
            $('.val3').html("<b>Please fill the password</b>");
            $('.val3').css("color", "red");
            password_err = false;
            return false;


        }
        else if (password.length < 8 || password.length > 20) {
            $('.val3').html("<b>password Chacater is between 8 and 20</b>");
            $('.val3').css("color", "red");
            password_err = false;
            return false;
        }
        else if (!pattern.test(password)) {
            $('.val3').html("<b>Alpha and Numeric Character Compulsory </b>");
            $('.val3').css("color", "red");
            password_err = false;
            return false;
        }
        else {
            $('.val3').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.val3').css("color", "green");
            password_err = true;
            return true;
        }


    }
    $('.txt4').keyup(function () {
        confirmpassword_chek();
    });
    function confirmpassword_chek() {
        var confirmpassword = $('.txt4').val();
        var password = $('.txt3').val();


        if (confirmpassword == '') {
            $('.val4').html("<b>Please fill the Confirmpassword</b>");
            $('.val4').css("color", "red");
            confirmpassword_err = false;
            return false;


        }
        else if (password != confirmpassword) {
            $('.val4').html("<b>Password Not Match </b>");
            $('.val4').css("color", "red");
            confirmpassword_err = false;
            return false;
        }

        else {
            $('.val4').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.val4').css("color", "green");
            confirmpassword_err = true;
            return true;
        }


    }
    $('.txt5').keyup(function () {
        age_chek();
    });
    function age_chek() {
        var age1 = $('.txt5').val();
        var age2 = parseInt(age1);



        if (age1 == '') {
            $('.val5').html("<b>Please fill the Age</b>");
            $('.val5').css("color", "red");
            age_err = false;
            return false;


        }
        else if (isNaN(age2)) {
            $('.val5').html("<b>enter the valid Number</b>");
            $('.val5').css("color", "red");
            age_err = false;
            return false;
        }
        else if (age2 < 15) {
            $('.val5').html("<b>Age Must Be Greaterthen 15 </b>");
            $('.val5').css("color", "red");
            age_err = false;
            return false;
        }

        else {
            $('.val5').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.val5').css("color", "green");
            age_err = true;
            return true;
        }


    }
    $('.txtarea').keyup(function () {
        address_chek();
    });
    function address_chek() {
        var address = $('.txtarea').val();


        if (address == '') {
            $('.val6').html("<b>Please fill the Age</b>");
            $('.val6').css("color", "red");
            address_err = false;
            return false;


        }
        else if (address.length < 10 || address.length > 300) {
            $('.val6').html("<b>Address must between 10 to 300 Character</b>");
            $('.val6').css("color", "red");
            address_err = false;
            return false;
        }

        else {
            $('.val6').html("<b>&nbsp;&nbsp;&#10004;</b>");
            $('.val6').css("color", "green");
            address_err = true;
            return true;
        }


    }
    $('.bt1').click(function () {
        nm = name_chek();
        un = username_chek();
        pwd = password_chek();
        cnpwd = confirmpassword_chek();
        ag = age_chek();
        adrs = address_chek();
        if (nm == true && un == true && pwd == true && cnpwd == true && ag == true && adrs == true) {
            $('h1').show();
        }
        else {
            $('h2').show();
        }

    });


});