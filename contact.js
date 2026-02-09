// Contact form JavaScript

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };
      
      // In a real application, this would send the data to a backend
      console.log('Form submitted:', formData);
      
      // Hide form and show success message
      form.style.display = 'none';
      successMessage.classList.remove('hidden');
      
      // Reset form after 3 seconds and show it again
      setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        successMessage.classList.add('hidden');
      }, 3000);
    });
  }
});
