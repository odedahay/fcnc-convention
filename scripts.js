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
});