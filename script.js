document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form fields
});
