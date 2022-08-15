const toggle = document.getElementById('toggle')
let root = document.documentElement

const changeTheme = () => {
	toggle.classList.toggle('active')
}
toggle.addEventListener('click', changeTheme)
