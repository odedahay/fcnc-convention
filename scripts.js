function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
	// Get the modals
	const registrationModal = document.getElementById('registrationModal');
	const scheduleModal = document.getElementById('scheduleModal');
	const speaker1_Modal = document.getElementById('speaker1_Modal');
	const speaker2_Modal = document.getElementById('speaker2_Modal');
	const speaker3_Modal = document.getElementById('speaker3_Modal');
	const speaker4_Modal = document.getElementById('speaker4_Modal');
	const speaker5_Modal = document.getElementById('speaker5_Modal');
	const speaker6_Modal = document.getElementById('speaker6_Modal');
	const speaker7_Modal = document.getElementById('speaker7_Modal');
	const speaker8_Modal = document.getElementById('speaker8_Modal');

	// Get the buttons
	const registerButtons = document.querySelectorAll('.register-btn');
	const scheduleButtons = document.querySelectorAll('.schedule-btn');
	const speakeDetail1Button = document.querySelectorAll('.speaker-detail-1-btn');
	const speakeDetail2Button = document.querySelectorAll('.speaker-detail-2-btn');
	const speakeDetail3Button = document.querySelectorAll('.speaker-detail-3-btn');
	const speakeDetail4Button = document.querySelectorAll('.speaker-detail-4-btn');
	const speakeDetail5Button = document.querySelectorAll('.speaker-detail-5-btn');
	const speakeDetail6Button = document.querySelectorAll('.speaker-detail-6-btn');
	const speakeDetail7Button = document.querySelectorAll('.speaker-detail-7-btn');
	const speakeDetail8Button = document.querySelectorAll('.speaker-detail-8-btn');


	// Get the close buttons
	const closeButtons = document.querySelectorAll('.close-modal');

	// Function to open registration modal
	function openRegistrationModal() {
		registrationModal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}

	// Function to open schedule modal
	function openScheduleModal() {
		scheduleModal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	// Function to open speaker 1 modal
	function openSpeaker1Modal() {
		speaker1_Modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function openSpeaker2Modal() {
		speaker2_Modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function openSpeaker3Modal() {
		speaker3_Modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function openSpeaker4Modal() {
		speaker4_Modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function openSpeaker5Modal() {
		speaker5_Modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function openSpeaker6Modal() {
		speaker6_Modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function openSpeaker7Modal() {
		speaker7_Modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	function openSpeaker8Modal() {
		speaker8_Modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	

	// Function to close modals
	function closeModal(modal) {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	}

	// Modal 

	// Add click events to registration buttons
	registerButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openRegistrationModal();
		});
	});

	// Add click events to schedule buttons
	scheduleButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openScheduleModal();
		});
	});

	// Add click events to speake detail1 buttons
	speakeDetail1Button.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openSpeaker1Modal();
		});
	});
	speakeDetail2Button.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openSpeaker2Modal();
		});
	});
	speakeDetail3Button.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openSpeaker3Modal();
		});
	});
	speakeDetail4Button.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openSpeaker4Modal();
		});
	});
	speakeDetail5Button.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openSpeaker5Modal();
		});
	});
	speakeDetail6Button.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openSpeaker6Modal();
		});
	});
	speakeDetail7Button.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openSpeaker7Modal();
		});
	});
	speakeDetail8Button.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openSpeaker8Modal();
		});
	});

	// Close modals when clicking close buttons
	closeButtons.forEach(button => {
		button.addEventListener('click', function() {
			const modal = this.closest('.modal');
			closeModal(modal);
		});
	});

	// Close modals when clicking outside
	window.addEventListener('click', function(e) {
		if (e.target.classList.contains('modal')) {
			closeModal(e.target);
		}
	});

	// Handle registration form submission
	const registrationForm = document.getElementById('registrationForm');
	if (registrationForm) {
		registrationForm.addEventListener('submit', function(e) {
			e.preventDefault();
			
			const formData = {
				name: document.getElementById('name').value,
				email: document.getElementById('email').value,
				phone: document.getElementById('phone').value,
				ticketType: document.getElementById('ticketType').value
			};

			console.log('Form submitted:', formData);
			alert('Thank you for your registration! We will contact you shortly.');
			closeModal(registrationModal);
			this.reset();
		});
	}

	// Slider functionality
	const slider = document.querySelector('.slider');
	const slides = document.querySelectorAll('.slide');
	const dots = document.querySelectorAll('.dot');
	const prevBtn = document.querySelector('.prev-btn');
	const nextBtn = document.querySelector('.next-btn');
	
	let currentSlide = 0;
	let slideInterval;

	// Function to show a specific slide
	function showSlide(index) {
		// Remove active class from all slides and dots
		slides.forEach(slide => slide.classList.remove('active'));
		dots.forEach(dot => dot.classList.remove('active'));
		
		// Add active class to current slide and dot
		slides[index].classList.add('active');
		dots[index].classList.add('active');
		
		currentSlide = index;
	}

	// Function to show next slide
	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
		showSlide(currentSlide);
	}

	// Function to show previous slide
	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		showSlide(currentSlide);
	}

	// Add click event to dots
	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			showSlide(index);
			resetInterval();
		});
	});

	// Add click events to navigation buttons
	prevBtn.addEventListener('click', () => {
		prevSlide();
		resetInterval();
	});

	nextBtn.addEventListener('click', () => {
		nextSlide();
		resetInterval();
	});

	// Function to reset the auto-slide interval
	function resetInterval() {
		clearInterval(slideInterval);
		startAutoSlide();
	}

	// Function to start auto-sliding
	function startAutoSlide() {
		slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
	}

	// Start auto-sliding
	startAutoSlide();

	// Pause auto-sliding when hovering over the slider
	slider.addEventListener('mouseenter', () => {
		clearInterval(slideInterval);
	});

	// Resume auto-sliding when mouse leaves the slider
	slider.addEventListener('mouseleave', () => {
		startAutoSlide();
	});
});