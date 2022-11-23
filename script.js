const rateState = document.getElementById('rate-state');
const thanksState = document.getElementById('thanks-state');
const rate = document.getElementById('rate');

const displayThanks = (ev) => {
    ev.preventDefault();
    
    rate.innerText = ev.target.rate.value;
    rateState.classList.add('transparent');
    thanksState.classList.remove('transparent');
}