function validation(){

    var firstname =document.getElementById("firstname").value;
    var contactnum=document.getElementById("cnumber").value;
    var mail      =document.getElementById("mail").value;

    var nameRegex = /^[a-zA-Z\-]+$/;
    var contactregex = /^\d{10}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nameRegex.test(firstname)){
        alert("Invalid input");
        return false;
    }
    else if(!contactregex.test(contactnum)){
        alert("Enter valid Mobile");
        return false;
    }
    else if(!emailRegex.test(mail)){
        alert("Enter valid mail");
        return false;
    }
  
}
function previewImage() {
    var file = document.getElementById("file").files
    if (file.length > 0) {
        var fileReader = new FileReader()

        fileReader.onload = function (event) {
            document.getElementById("preview").setAttribute("src", event.target.result)
        }

        fileReader.readAsDataURL(file[0])
    }
}