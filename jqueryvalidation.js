$(document).ready(function () {
    $("#validationform").validate({
        rules: {
            fname: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            mail: {
                required: true,
                email: true,
            },
            cnumber: {
                required: true,
                length: 10,
                
            },
        },
        messages: {
            'fname': "Enter a valid User Name.",
            'mail': "Enter valid Email.",
            'cnumber': "Enter valid mobile number",
            
        }
    });
});