let lastOpenedModal = "";

function openModal(name) {
    document.getElementById(name).style.display = "flex";
    lastOpenedModal = name;
}

function closeModal() {
    if (lastOpenedModal != "") {
        document.getElementById(lastOpenedModal).style.display = "none";;
        lastOpenedModal = "";
    }
}

window.onclick = function (event) {
    if (event.target == document.getElementById(lastOpenedModal)) {
        closeModal();
    }
}