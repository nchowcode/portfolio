
document.addEventListener("DOMContentLoaded", function() {
    const text = "Hi, I'm Nathan, Welcome To My Portfolio! ";
    const welcomeText = document.getElementById("welcome-text");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            welcomeText.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, 120); // typing speed, higher = slower type
        }
    }

    // Start the typing animation when the page loads
    typeText();
});


//scroll bar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 100) { 
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const scrollLinks = document.querySelectorAll(".scroll-link");

    scrollLinks.forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Prevent default link behavior

            const targetId = this.getAttribute("href").slice(1); // Get target section ID
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth", // Enable smooth scrolling
            });
        });
    });
});
