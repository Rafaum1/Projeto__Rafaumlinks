let lightMode = true;
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('dark')

    const mode = darkMode ? 'dark' : 'light';
    event.currentTarget.querySelector('span').textContent = `O modo ${mode} foi ativado`

    lightMode = !lightMode;
});