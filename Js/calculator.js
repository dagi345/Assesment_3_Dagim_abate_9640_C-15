const inputBox = document.querySelector('.input-box');
const results = document.querySelector('.results');


function clear() {
    inputBox.value = '';
    results.textContent = '';
}

document.querySelector('.x').addEventListener('click', clear);

document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('c')) {
            clear();
        } else if (button.classList.contains('num-equal')) {
            try {
                const sanitizedInput = inputBox.value.replace(/[^0-9+\-*/().\s]/g, '');
                const result = eval(sanitizedInput);
                results.textContent = result;
            } catch (error) {
                results.textContent = 'UNDEFINED';
            }
        } else {
            inputBox.value += button.getAttribute('data-value') || button.textContent;
        }
    });
});
