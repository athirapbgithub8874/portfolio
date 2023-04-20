function validateName() {
    const name = document.getElementById('name').value
    const nameError = document.getElementById('name-error')
    if (name.length < 10) {
        nameError.innerText = "Enter Full Name"
        return false
    }
    nameError.innerHTML = ""
    return true
}

function validateEmail() {
    const email = document.getElementById('email').value
    const emailError = document.getElementById('email-error')
    const regex = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/

    if (!regex.test(email)) {
        emailError.innerText = "Enter Valid Email"
        return false
    }
    emailError.innerText = ""
    return true
}

function validateSubject() {
    const subject = document.getElementById('subject').value
    const subjectError = document.getElementById('subject-error')
    if (subject.length < 5) {
        subjectError.innerText = "Enter Valid subject"
        return false
    }
    subjectError.innerHTML = ""
    return true
}

function validateMessage() {
    const message = document.getElementById('message').value
    const messageError = document.getElementById('message-error')
    if (message.length < 5) {
        messageError.innerText = "Enter Valid message"
        return false
    }
    messageError.innerHTML = ""
    return true
}

document.getElementById('form-submit').addEventListener("submit", function (e) {
    e.preventDefault()
    if (validateName() && validateEmail() && validateSubject() && validateMessage()) {
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbz2YA9a4ZvaKOdL9jySYz4Et6OUrH4JNkJnluHTfL_nODKlzmxG3UWPeTQFDBLn6IA9CQ/exec",
            data:$("#form-submit").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                // window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }
})