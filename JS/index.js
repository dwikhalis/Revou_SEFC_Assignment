//! BANNER SLIDE

let slideNum = 5
let slideCount = 0

document.getElementById(`banner${slideCount}`).style.display = 'block'

document.getElementById("next").addEventListener("click", nextSlide)
document.getElementById("prev").addEventListener("click", prevSlide)

function nextSlide() {
    slideCount++

    if (slideCount === slideNum) {
        document.getElementById(`banner${slideCount - 1}`).style.display = 'none'
        slideCount = 0
        document.getElementById(`banner${slideCount}`).style.display = 'block'
    } else {
        document.getElementById(`banner${slideCount}`).style.display = 'block'
        document.getElementById(`banner${slideCount - 1}`).style.display = 'none'
    }
    console.log(slideCount)
}

function prevSlide() {
    slideCount--

    if (slideCount === -1) {
        document.getElementById(`banner${slideCount + 1}`).style.display = 'none'
        slideCount = 4
        document.getElementById(`banner${slideCount}`).style.display = 'block'
    } else {
        document.getElementById(`banner${slideCount}`).style.display = 'block'
        document.getElementById(`banner${slideCount + 1}`).style.display = 'none'
    }
    console.log(slideCount)
}

//! BURGER DROPDOWN
document.getElementById("burger-button").addEventListener("click", burgerDrop)

let drop = true

function burgerDrop(event) {

    if (event.isTrusted === true && drop === true) {
        document.getElementById('burger-dropdown').style.display = 'flex'
        drop = false
    } else {
        document.getElementById('burger-dropdown').style.display = 'none'
        drop = true
    }

    console.log(drop)
}

//! POP UP INPUT NAME 
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

//! FORM VALIDATION
document.getElementById("submit").addEventListener("click", validate)

function validate() {

    let userName = document.getElementById('user-name').value
    let birthDate = document.getElementById('birth-date').value
    let userMessage = document.getElementById('user-message').value
    let nullForm = []
    let userGender = document.getElementsByName('gender')
    let date = new Date()

    if (userName === "") {
        nullForm.push(" Name")
        document.getElementById('user-name').style.border = '3px solid red'
    } else {
        document.getElementById('user-name').style.border = ''
    }

    if (birthDate === "") {
        nullForm.push(" Birth Date")
        document.getElementById('birth-date').style.border = '3px solid red'
    } else {
        document.getElementById('birth-date').style.border = ''
    }

    if (userMessage === "") {
        nullForm.push(" Message")
        document.getElementById('user-message').style.border = '3px solid red'
    } else {
        document.getElementById('user-message').style.border = ''
    }

    if (nullForm.length > 0) {
        document.getElementById('preview-box').innerHTML = ""

        document.getElementById('constraint-alert').innerHTML =
            "Please insert your" + nullForm

        console.log(nullForm)

    } else {

        //! PREVIEW MESSAGE
        document.getElementById('constraint-alert').innerHTML = ""

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

}