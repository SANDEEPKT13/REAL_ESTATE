document.addEventListener('DOMContentLoaded', () => {
    const properties = [
        {
            title: "Luxury Mansion",
            image: "1111.jpg",
            description: "A stunning luxury mansion with 10 bedrooms, a private pool, and a beautiful garden.",
            price: "Rs-500,000",
            buyLink: "buying-page.html?property=mansion"  // Add a link to the buying page
        },
        {
            title: "Beach House",
            image: "2222.jpg",
            description: "A serene beach house with ocean views and direct beach access.",
            price: "Rs-500,000",
            buyLink: "buying-page.html?property=beachhouse"
        },
        {
            title: "Waterfront Home",
            image: "3333.jpg",
            description: "An elegant waterfront home with modern amenities and breathtaking views.",
            price: "Rs-500,000",
            buyLink: "buying-page.html?property=waterfront"
        },
        {
            title: "Luxury Villa",
            image: "4444.jpg",
            description: "A charming luxury villa with contemporary architecture and lush greenery.",
            price: "Rs-500,000",
            buyLink: "buying-page.html?property=villa"
        }
    ];

    const buttons = document.querySelectorAll('.property-card button');
    const modal = document.getElementById('propertyModal');
    const modalTitle = document.getElementById('propertyTitle');
    const modalImage = document.getElementById('propertyImage');
    const modalDescription = document.getElementById('propertyDescription');
    const modalPrice = document.getElementById('propertyPrice');
    const closeModalButton = document.getElementById('closeModal');
    const buyNowButton = document.getElementById('buyNowBtn');
    const closeBtn = document.querySelector('.close-btn');

    // Open modal and populate details
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const property = properties[index];
            modalTitle.textContent = property.title;
            modalImage.src = property.image;
            modalDescription.textContent = property.description;
            modalPrice.textContent = `Price: ${property.price}`;
            buyNowButton.setAttribute('data-link', property.buyLink); // Set the correct buying link for this property
            modal.style.display = 'flex';
        });
    });

    // Close modal
    const closeModal = () => {
        modal.style.display = 'none';
    };

    closeModalButton.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Redirect to buying page
    buyNowButton.addEventListener('click', () => {
        const buyLink = buyNowButton.getAttribute('data-link');
        window.location.href = buyLink; // Redirect to the buying page with the query parameter
    });
});
