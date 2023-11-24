const container = document.getElementById('container');
const registerBtn = document.getElementById('Register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const client = new Client();

client
    .setEndpoint('https://api.fnukapps.com/v1')
    .setProject('6560b16b7a620dd1bfaa');