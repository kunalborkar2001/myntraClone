// Find the container that holds the slider images
let heroImg = document.querySelector(".heroImg");

// Find the container that will hold the navigation bullets
let bulletContainer = document.querySelector("#bulletContainer");

// Keep track of the currently displayed slide (starts with the first slide)
let currentSlide = 0;

// Count how many slides/images are inside the heroImg container
let totalSlides = heroImg.children.length;

// Function to create navigation bullets for each slide
let createBulletButtons = () => {
    for (let i = 0; i < totalSlides; i++) {
        let bullet = document.createElement("div");
        bullet.classList.add("bullet");

        // Add a click event listener to each bullet
        bullet.addEventListener("click", () => {
            currentSlide = i; // Set the current slide to the index of the clicked bullet
            updateSliderPosition(); // Update the slider to show the clicked slide
        });

        bulletContainer.appendChild(bullet);
    }
};

// Function to update the appearance of the navigation bullets
let updateBulletButtons = () => {
    let bullets = document.querySelectorAll(".bullet");
    bullets.forEach((bullet, index) => {
        if (index === currentSlide) {
            bullet.classList.add("active");
        } else {
            bullet.classList.remove("active");
        }
    });
};

// Function to move to the next slide automatically
let slideNext = () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
    updateBulletButtons();
};

// Function to update the position of the slider to show the current slide
let updateSliderPosition = () => {
    let slideWidth = heroImg.clientWidth;
    heroImg.style.transition = "transform 0.5s ease-in-out";
    heroImg.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
};

// Call the function to create the navigation bullets
createBulletButtons();

// Set a timer to automatically move to the next slide every 3 seconds
setInterval(slideNext, 3000);
