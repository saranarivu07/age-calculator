function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob === "") {
        document.getElementById("result").innerHTML =
            "Please enter your date of birth!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    if (birthDate > today) {
        document.getElementById("result").innerHTML =
            "Please enter a valid date!";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        "Your Age is:<br>" +
        years + " Years<br>" +
        months + " Months<br>" +
        days + " Days";
}

function clearResult() {
    document.getElementById("dob").value = "";
    document.getElementById("result").innerHTML = "";
}
