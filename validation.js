function validation() {
    var firstname = document.getElementById("firstname").value;
    var contactnum = document.getElementById("cnumber").value;
    var mail = document.getElementById("mail").value;

    var nameRegex = /^[a-zA-Z\-]+$/;
    var contactregex = /^\d{10}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(firstname)) {
        alert("Enter valid name");
        return false;
    } else if (!contactregex.test(contactnum)) {
        alert("Enter valid Mobile");
        return false;
    } else if (!emailRegex.test(mail)) {
        alert("Enter valid mail");
        return false;
    }

    return true;
}

function previewImage() {
    var file = document.getElementById("file").files;
    if (file.length > 0) {
        var fileReader = new FileReader();

        fileReader.onload = function (event) {
            document.getElementById("preview").setAttribute("src", event.target.result);
        };

        fileReader.readAsDataURL(file[0]);
    }
}

function showOtherCategory() {
    var categorySelect = document.getElementById("category");
    var otherCategoryInput = document.getElementById("otherCategoryInput");

    if (categorySelect.value === "Others") {
        otherCategoryInput.style.display = "block";
    } else {
        otherCategoryInput.style.display = "none";
    }
}

function display() {
    if (validation()) {
        var name = document.getElementById("firstname").value;
        var dateOfBirth = document.getElementById("dob").value;
        var contact = document.getElementById("cnumber").value;
        var email = document.getElementById("mail").value;
        var state = document.getElementById("state").value;
        var gender = document.getElementById("Gender").value;
        var photo = document.getElementById("file").value;
        var category = document.getElementById("category").value;
        var otherCategory = document.getElementById("otherCategory").value;
        var practice = document.getElementById("practice").value

        // Displaying details
        document.write("<h2>Player Details</h2>");
        document.write("<p><b>Player Name:</b> " + name + "</p>");
        document.write("<p><b>Date of Birth:</b> " + dateOfBirth + "</p>");
        document.write("<p><b>Contact Number:</b> " + contact + "</p>");
        document.write("<p><b>Email:</b> " + email + "</p>");
        document.write("<p><b>State:</b> " + state + "</p>");
        document.write("<p><b>Gender:</b> " + gender + "</p>");
        document.write("<p><b>Photo:</b> " + photo + "</p>");
        document.write("<p><b>Practice start time is</b> " + practice + "</p>");


        if (category === "Others") {
            document.write("<p><b>Category:</b> " + otherCategory + "</p>");
        } else {
            document.write("<p><b>Category:</b> " + category + "</p>");
        }

        document.write("<p><b>The Age of the player is:</b> " + calculateAge(dateOfBirth) + "</p>");
    }
}

function calculateAge(dateOfBirth) {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function calculate() {
    var dateOfBirth = document.getElementById("dob").value;
    var ageMessage = document.getElementById("ageMessage");

    if (dateOfBirth) {
        var age = calculateAge(dateOfBirth);
        ageMessage.textContent = "Your age is " + age;
    } else {
        ageMessage.textContent = "";
    }
}
function showTrainingTiming() {
    var practice = document.getElementById("practice").value;
    var trainingTimingMorning = document.getElementById("trainingTimingMorning");
    var trainingTimingEvening = document.getElementById("trainingTimingEvening");
  
    if (practice === "Morning") {
      trainingTimingMorning.style.display = "block";
      trainingTimingEvening.style.display = "none";
    } else if (practice === "Evening") {
      trainingTimingMorning.style.display = "none";
      trainingTimingEvening.style.display = "block";
    } else {
      trainingTimingMorning.style.display = "none";
      trainingTimingEvening.style.display = "none";
    }
  }
  function calculatePracticeHours() {
    var practiceTime = document.getElementById("practice1").value;
    
    if (practiceTime) {
      var currentTime = new Date();
      var practiceStartTime = new Date(currentTime.toDateString() + " " + practiceTime);
      var practiceHours = (currentTime - practiceStartTime) / (1000 * 60 * 60);
      
      if (practiceHours >= 0) {
        document.getElementById("practiceHours").textContent = "You practiced for approximately " + practiceHours.toFixed(2) + " hours.";
      } else {
        document.getElementById("practiceHours").textContent = "Invalid practice time.";
      }
    } else {
      document.getElementById("practiceHours").textContent = "";
    }
  }
  