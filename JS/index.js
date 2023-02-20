document.getElementById("submit").addEventListener("click", previewMessage)
document.getElementById("popup-close").addEventListener("click", closePopup)
document.addEventListener("keypress", nameEnter)

function nameEnter(event) {
    if (event.key === "Enter") {
        let guestNameInput = document.forms['input-guest-name']['guest-name'].value
        console.log(guestNameInput)
        document.getElementById('guest').innerHTML = 'Hi ' + guestNameInput + ','
        closePopup(event)
    }
}

function closePopup(event) {
    document.getElementById('popup-blinder').style.visibility = 'hidden'
    document.getElementById('input-name').style.visibility = 'hidden'
    document.getElementById('popup-close').style.visibility = 'hidden'
    event.preventDefault()
}

function previewMessage() {
    let userName = document.getElementById('user-name').value
    let birthDate = document.getElementById('birth-date').value
    let userMessage = document.getElementById('user-message').value
    let date = new Date()

    let userGender = document.getElementsByName('gender')

    for (let i = 0; i < userGender.length; i++) {
        if (userGender[i].checked) {
            userGender = userGender[i].value
        }
    }

    document.getElementById('preview-box').innerHTML =
        "Submit Time : " + date + '<br>' +
        "Name : " + userName + '<br>' +
        "Birth Date : " + birthDate + '<br>' +
        "Gender : " + userGender + '<br>' + '<br>' +
        "Message : " + '<br>' +
        userMessage
}