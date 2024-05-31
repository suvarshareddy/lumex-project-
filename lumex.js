document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle the display of service details
    function toggleServiceDetails(serviceElement) {
        const details = serviceElement.querySelector('.service-details');
        if (details) {
            details.classList.toggle('visible');
        }
    }

    // Attach event listeners to each service
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('click', () => toggleServiceDetails(service));
    });
});

// Ensure this function is available globally
window.toggleServiceDetails = toggleServiceDetails;
