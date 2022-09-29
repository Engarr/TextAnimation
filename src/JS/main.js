const modal = document.querySelector('.modal');
const input = document.querySelector('.modal-input');
const modalBtn = document.querySelector('.modal-btn');
const saveBtn = document.querySelector('.save-btn');
const text = document.querySelector('.text');
const errorMsg = document.querySelector('.error-msg');
let inputValue = `To jest testowa wiaomdość`;
let timeout;
let index = 1;
let speed = 100;

const writeAnimation = () => {
	text.innerHTML = inputValue.slice(0, index);
	index++;

	if (index > inputValue.length) return;
	timeout = setTimeout(writeAnimation, speed);
};

const showModal = () => {
	modal.classList.add('active');
};
const closeModal = () => {
	if (input.value == '') {
		errorMsg.textContent = `Wpisz tekst`;
		return;
	} else {
		inputValue = input.value;
        modal.classList.remove('active');
        clearFunction()
		writeAnimation();
	}
};

const clearFunction = () => {
	index = 1;
	clearTimeout(timeout);
	errorMsg.textContent = ``;
	input.value = '';
};

modalBtn.addEventListener('click', showModal);
saveBtn.addEventListener('click', closeModal);
