document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const submitBtn = document.getElementById("submitBtn");
    const resetBtn = document.getElementById("resetBtn");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");
    const popupContent = document.getElementById("popupContent");

    submitBtn.addEventListener("click", function () {
        if (form.checkValidity()) {
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;
            const gender = [...document.querySelectorAll('input[name="gender"]:checked')].map(el => el.value).join(", ");
            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;

            popupContent.innerHTML = `
                <label>First Name:</label> <p>${firstName}</p>
                <label>Last Name:</label> <p>${lastName}</p>
                <label>Date of Birth:</label> <p>${dob}</p>
                <label>Country:</label> <p>${country}</p>
                <label>Gender:</label> <p>${gender}</p>
                <label>Profession:</label> <p>${profession}</p>
                <label>Email:</label> <p>${email}</p>
                <label>Mobile Number:</label> <p>${mobile}</p>
            `;

            popup.style.display = "block";
        }
    });

    resetBtn.addEventListener("click", function () {
        form.reset();
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });
});
