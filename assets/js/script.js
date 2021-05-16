function clearInput(speed) {
    setTimeout(() => {  location.reload(); }, speed);
}

function sendMail(contactForm) {
    contactForm.contact_number.value = Math.random() * 100000 | 0;
    emailjs.send("gmail", "template_fs6yb3h", {
        "contact_number": '#ID' + contactForm.contact_number.value,
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "questions": contactForm.questions.value,
        "description": contactForm.description.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            },
        );
    alert("Email has been sent!");
    clearInput(1000);
    return false;
}
