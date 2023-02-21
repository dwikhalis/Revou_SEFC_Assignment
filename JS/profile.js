// KINDNESS
document.getElementById('empathy').addEventListener('click', empathy)
document.getElementById('respect').addEventListener('click', respect)
document.getElementById('selflessness').addEventListener('click', selflessness)

// CANDOR
document.getElementById('authenticity').addEventListener('click', authenticity)
document.getElementById('feedback').addEventListener('click', feedback)
document.getElementById('outspoken').addEventListener('click', outspoken)
document.getElementById('failing').addEventListener('click', failing)

// HIGHEST STANDARD

document.getElementById('student').addEventListener('click', student)
document.getElementById('hiring').addEventListener('click', hiring)
document.getElementById('people').addEventListener('click', people)
document.getElementById('performance').addEventListener('click', performance)
document.getElementById('celebrate').addEventListener('click', celebrate)

// PASSION
document.getElementById('life').addEventListener('click', life)
document.getElementById('live').addEventListener('click', live)
document.getElementById('love').addEventListener('click', love)


//! KINDNESS CHANGE

function empathy () {
    document.getElementById("kindness-caption").innerHTML =
    "We always try to put ourselves in other people's shoes. Be it our team member, our direct report or our manager."
}

function respect () {
    document.getElementById("kindness-caption").innerHTML =
    "We treat people with the same respect regardless of their seniority and role in the company."   
}

function selflessness () {
    document.getElementById("kindness-caption").innerHTML =
    "We believe that career progression at RevoU is not a zero-sum game: helping each other will benefit everyone's career."
}

//! CANDOR CHANGE

function authenticity () {
    document.getElementById("candor-caption").innerHTML =
    "We are transparent and authentic with each other across all levels: Horizontally, Downward, and Upward"
}

function feedback () {
    document.getElementById("candor-caption").innerHTML =
    "Knowing that we genuinely care for each other, allows us to be much more direct in our feedback without the risk of hurting each other."
}

function outspoken () {
    document.getElementById("candor-caption").innerHTML =
    "We are not afraid of saying what we think, every time we think is in the best interest of the company, even if it's uncomfortable."
}

function failing () {
    document.getElementById("candor-caption").innerHTML =
    "We don't fear it as we embrace the act of making mistakes openly, admitting them and moving on."
}

//! HIGHEST STANDARD CHANGE

function student () {
    document.getElementById("standard-caption").innerHTML =
    "“I have no special talent. I am only passionately curious” <br> -A. Einstein"
}

function hiring () {
    document.getElementById("standard-caption").innerHTML =
    "We believe that finding, recruiting, and developing top talent is the single most important factor that will determine our success in the years to come."
}

function people () {
    document.getElementById("standard-caption").innerHTML =
    "Coherently with our “Always a student” mentality, we go the extra mile as a company to invest in the growth of our own employees."
}

function performance () {
    document.getElementById("standard-caption").innerHTML =
    "We want everyone around us to be amazing in their role so as to enable us to push forwards towards our common vision and purpose."
}

function celebrate () {
    document.getElementById("standard-caption").innerHTML =
    "We vow to remind ourselves at every milestone to celebrate, be grateful, and proud of all the challenges that we have overcome together."
}

//! PASSION CHANGE

function life () {
    document.getElementById("passion-caption").innerHTML =
    "We are passionate about life, and we want to do work that has a real, quantifiable impact on the lives of people around us and on society at large."
}

function live () {
    document.getElementById("passion-caption").innerHTML =
    "We get excited, we celebrate, we laugh a lot and sometimes we cry. We believe this is the best way to live a professional life to its fullest."
}

function love () {
    document.getElementById("passion-caption").innerHTML =
    "We are the opposite of boring."
}