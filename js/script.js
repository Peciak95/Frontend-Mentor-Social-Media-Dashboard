const toggle = document.getElementById('toggle')
let root = document.documentElement

const moveToggle = () => {
	toggle.classList.toggle('active')
}

const changeTheme = () => {
	if (toggle.classList.contains('active')) {
		console.log('zawiera active')
		root.style.setProperty('--very-dark-blue-background', 'hsl(0, 0%, 100%)')
		root.style.setProperty('--very-dark-blue-top-bg-pattern', 'hsl(225, 100%, 98%)')
		root.style.setProperty('--dark-desaturated-blue-card-bg', 'hsl(227, 47%, 96%)')
		root.style.setProperty('--dark-desaturated-blue-card-bg-hover', 'hsl(227, 47%, 93%)')
		root.style.setProperty('--desaturated-blue-text', 'hsl(228, 12%, 44%)')
		root.style.setProperty('--white-text', 'hsl(230, 17%, 14%)')
	} else {
		root.style.setProperty('--very-dark-blue-background', 'hsl(230, 17%, 14%)')
		root.style.setProperty('--very-dark-blue-top-bg-pattern', 'hsl(232, 19%, 15%)')
		root.style.setProperty('--dark-desaturated-blue-card-bg', 'hsl(228, 28%, 20%)')
		root.style.setProperty('--dark-desaturated-blue-card-bg-hover', 'hsl(228, 25.5%, 26.9%)')
		root.style.setProperty('--desaturated-blue-text', 'hsl(228, 34%, 66%)')
		root.style.setProperty('--white-text', 'hsl(0, 0%, 100%)')
	}
}
toggle.addEventListener('click', () => {
	moveToggle()
	changeTheme()
})
