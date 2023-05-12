function myButton() {
    document.getElementById("text").innerText = "Alva"

}

function darkMode() {
    document.body.classList.toggle("darkMode")
    document.getElementById("button").classList.toggle("darkMode")
}

function submitButton() {
    var name = document.getElementById("nameForm")["firstName"].value
    const p = document.createElement("p")
    p.innerText = name

    document.body.append(p)
}

function poppingUp() {
    document.getElementById("myPopup").style.display = "block"
}