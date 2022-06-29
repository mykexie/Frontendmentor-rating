const check = document.querySelectorAll('.rate');
const subBtn = document.querySelector('.submit');
// console.log(check.length);
if (check.length > 0) {
    check.forEach(el => {
        el.addEventListener('click', () => {
            resetLinks();
            el.classList.add('active');

        })
    })
}
function resetLinks() {
    check.forEach(el => {
        el.classList.remove('active');
    })
}
subBtn.addEventListener('click', subClick);
function subClick() {
    subBtn.classList.add('active');
    document.location.href = 'Frontendmentor-rating/submitted.html';
}
