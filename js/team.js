let btnForm = document.querySelectorAll('.add');
let closeForm = document.getElementById('closeForm');
let lightBox = document.getElementById('lightBox');

function openForm(i) {
    lightBox.style.display = 'flex'
}

closeForm.addEventListener('click', function () {
    lightBox.style.display = "none"
})