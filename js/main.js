const header = document.querySelector('.header'),
	modeSwitch = document.querySelector('.header .mode'),
	modeIcon = document.querySelector('.header .mode a i'),
	mainTitle = document.querySelectorAll('h2.main-title'),
	landing = document.querySelector('.landing'),
	articles = document.querySelector('.articles'),
	spikes = document.querySelectorAll('.spikes'),
	gallery = document.querySelector('.gallery'),
	features = document.querySelector('.features'),
	testimonials = document.querySelector('.testimonials'),
	team = document.querySelector('.team'),
	services = document.querySelector('.services'),
	ourskills = document.querySelector('.our-skills'),
	workSteps = document.querySelector('.work-steps'),
	events = document.querySelector('.events'),
	pricing = document.querySelector('.pricing'),
	videos = document.querySelector('.videos'),
	statsDiv = document.querySelector('.stats'),
	discount = document.querySelector('.discount');

const darkElements = [
	header,
	modeSwitch,
	modeIcon,
	landing,
	articles,
	gallery,
	features,
	testimonials,
	team,
	services,
	ourskills,
	workSteps,
	events,
	pricing,
	videos,
	statsDiv,
	discount,
];

const otherLinksClick = document.querySelector('.other-links');
const megaMenu = document.querySelector('.mega-menu');

otherLinksClick.onclick = () => {
	megaMenu.classList.toggle('active');
};

modeSwitch.addEventListener('click', () => {
	darkElements.forEach((element) => {
		element.classList.toggle('dark');
	});
	mainTitle.forEach((title) => {
		title.classList.toggle('dark');
	});

	spikes.forEach((spike) => {
		spike.classList.toggle('dark');
	});

	if (header.classList.contains('dark')) {
		modeIcon.className = 'far fa-light fa-moon';
	} else {
		modeIcon.className = 'far fa-thin fa-sun';
	}
});

// CountDown Till the End OF 2022
let CountDown = new Date('Dec 31, 2022 23:59:59').getTime();
// console.log(CountDown);

let counter = setInterval(() => {
	let dateNow = new Date().getTime();

	// Time from now till end of 2022 in milleseconds
	let dateDiff = CountDown - dateNow;

	// Units
	let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
	let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

	document.querySelector('.events .time .days > span').innerHTML = days;
	document.querySelector('.events .time .hours > span').innerHTML = hours;
	document.querySelector('.events .time .minutes > span').innerHTML = minutes;
	document.querySelector('.events .time .seconds > span').innerHTML = seconds;
}, 1000);

// Making Skills Move to the % on Scroll && Stats To Increase its Numbers
let skills = document.querySelector('.our-skills');
let progress = document.querySelector('.the-progress');
let spans = document.querySelectorAll('.the-progress span');

let stats = document.querySelector('.stats');
let nums = document.querySelectorAll('.stats .box .number');
let started = false; // to not repeat the counting more than one time

window.onscroll = function () {
	if (window.scrollY > skills.offsetTop - 300) {
		spans.forEach((span) => {
			span.style.width = span.dataset.width;
		});
	}

	if (window.scrollY >= stats.offsetTop - 300) {
		if (!started) {
			nums.forEach((num) => startCount(num));
		}
		started = true;
	}
};

function startCount(el) {
	let goal = el.dataset.goal;
	let statsCounter = setInterval(() => {
		el.textContent++;
		if (el.textContent == goal) {
			clearInterval(statsCounter);
		}
	}, 2000 / goal);
}
