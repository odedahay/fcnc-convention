function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
	// Get the modals
	const registrationModal = document.getElementById('registrationModal');
	const scheduleModal = document.getElementById('scheduleModal');

	// Get the buttons
	const registerButtons = document.querySelectorAll('.register-btn');
	const scheduleButtons = document.querySelectorAll('.schedule-btn');

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

	// Function to close modals
	function closeModal(modal) {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto';
	}

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