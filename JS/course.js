document.getElementById('dm').addEventListener('click', showMCDM)
document.getElementById('da').addEventListener('click', showMCDA)
document.getElementById('pm').addEventListener('click', showMCPM)
document.getElementById('se').addEventListener('click', showFCSE)

function showMCDM () {
    document.getElementById('mc-dm').style.display = 'block'
    document.getElementById('mc-da').style.display = 'none'
    document.getElementById('mc-pm').style.display = 'none'
    document.getElementById('fc-se').style.display = 'none'
}

function showMCDA () {
    document.getElementById('mc-dm').style.display = 'none'
    document.getElementById('mc-da').style.display = 'block'
    document.getElementById('mc-pm').style.display = 'none'
    document.getElementById('fc-se').style.display = 'none'
}

function showMCPM () {
    document.getElementById('mc-dm').style.display = 'none'
    document.getElementById('mc-da').style.display = 'none'
    document.getElementById('mc-pm').style.display = 'block'
    document.getElementById('fc-se').style.display = 'none'
}

function showFCSE () {
    document.getElementById('mc-dm').style.display = 'none'
    document.getElementById('mc-da').style.display = 'none'
    document.getElementById('mc-pm').style.display = 'none'
    document.getElementById('fc-se').style.display = 'block'
}