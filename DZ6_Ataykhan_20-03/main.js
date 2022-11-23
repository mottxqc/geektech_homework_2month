const btn = document.querySelector('#btn');
const userText = document.getElementById('input');
const text = document.querySelector('#text');

btn.addEventListener('click', () => {
    let result = userText.value.split('').reverse().join('');
    document.getElementById('text').innerHTML = result;
})