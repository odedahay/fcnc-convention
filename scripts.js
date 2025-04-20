function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', function() {
	// Get the modal
	const modal = document.getElementById('registrationModal');

	// Get all registration buttons
	const registerButtons = document.querySelectorAll('.register-btn');

	// Get the close button
	const closeBtn = document.querySelector('.close-modal');

	// Function to open modal
	function openModal() {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
	}

	// Function to close modal
	function closeModal() {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto'; // Re-enable scrolling
	}

	// Add click event to all registration buttons
	registerButtons.forEach(button => {
		button.addEventListener('click', function(e) {
			e.preventDefault();
			openModal();
		});
	});

	// Close modal when clicking the close button
	closeBtn.addEventListener('click', closeModal);

	// Close modal when clicking outside the modal content
	window.addEventListener('click', function(e) {
		if (e.target === modal) {
			closeModal();
		}
	});

	// Handle form submission
	const registrationForm = document.getElementById('registrationForm');
	if (registrationForm) {
		registrationForm.addEventListener('submit', function(e) {
			e.preventDefault();
			
			// Get form data
			const formData = {
				name: document.getElementById('name').value,
				email: document.getElementById('email').value,
				phone: document.getElementById('phone').value,
				ticketType: document.getElementById('ticketType').value
			};

			// Here you would typically send the data to your server
			// For now, we'll just log it and close the modal
			console.log('Form submitted:', formData);
			
			// Show success message (you can customize this)
			alert('Thank you for your registration! We will contact you shortly.');
			
			// Close the modal
			closeModal();
			
			// Reset the form
			this.reset();
		});
	}
});