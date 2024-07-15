const list = document.querySelectorAll('.sci li')
const bg = document.querySelector('body')

list.forEach(element => {
	element.addEventListener('mouseenter', function (e) {
		const liBgClr = e.target.style.getPropertyValue('--clr')
		bg.style.backgroundColor = liBgClr
	})
	element.addEventListener('mouseleave', function (e) {
		bg.style.backgroundColor = '#fff'
	})
})

VanillaTilt.init(document.querySelectorAll('.sci li a'), {
	max: 25,
	speed: 400,
	glare: true,
})
