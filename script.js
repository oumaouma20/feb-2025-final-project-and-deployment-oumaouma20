// Sample product data
const products = [
    {
        id: 1,
        name: "Toyota Land Cruiser",
        price: "$45,000",
        description: "Premium SUV with advanced off-road capabilities",
        image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
        images: [
            "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        features: ["4WD", "Leather seats", "Sunroof", "Navigation system", "7 seats"]
    },
    {
        id: 2,
        name: "Mercedes-Benz C-Class",
        price: "$38,500",
        description: "Luxury sedan with premium features",
        image: "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600",
        images: [
            "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        features: ["Premium sound system", "Heated seats", "LED lighting", "Parking assist"]
    },
    {
        id: 3,
        name: "BMW X5",
        price: "$52,000",
        description: "Sporty luxury SUV with powerful engine",
        image: "https://images.pexels.com/photos/3727457/pexels-photo-3727457.jpeg?auto=compress&cs=tinysrgb&w=600",
        images: [
            "https://images.pexels.com/photos/3727457/pexels-photo-3727457.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        features: ["Twin-turbo engine", "Panoramic sunroof", "Digital dashboard", "Adaptive cruise control"]
    },
    {
        id: 4,
        name: "Range Rover Sport",
        price: "$65,000",
        description: "Ultimate luxury SUV with off-road capabilities",
        image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
        images: [
            "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        features: ["Terrain Response system", "Premium leather", "Meridian sound system", "Air suspension"]
    },
    {
        id: 5,
        name: "Audi Q7",
        price: "$48,900",
        description: "Spacious luxury SUV with advanced tech",
        image: "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=600",
        images: [
            "https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        features: ["Virtual cockpit", "Quattro AWD", "Three-zone climate", "Power tailgate"]
    },
    {
        id: 6,
        name: "Porsche 911",
        price: "$99,000",
        description: "Iconic sports car with unmatched performance",
        image: "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=600",
        images: [
            "https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600"
        ],
        features: ["Rear-engine layout", "PDK transmission", "Sport Chrono package", "Active suspension"]
    }
];

// DOM elements
const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const modal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-product-details');
const closeBtn = document.querySelector('.close-btn');

// Display products
function displayProducts(productsToDisplay) {
    productContainer.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="product-price">${product.price}</p>
            </div>
        `;
        
        productCard.addEventListener('click', () => showProductDetails(product));
        productContainer.appendChild(productCard);
    });
}

// Show product details in modal
function showProductDetails(product) {
    modalContent.innerHTML = `
        <div class="product-details">
            <div class="product-images">
                <img src="${product.image}" alt="${product.name}" class="main-image" id="main-image">
                <div class="product-gallery">
                    ${product.images.map(img => `
                        <img src="${img}" alt="${product.name}" onclick="changeMainImage('${img}')">
                    `).join('')}
                </div>
            </div>
            <div class="details-info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p class="details-price">${product.price}</p>
                
                <div class="details-features">
                    <h3>Key Features:</h3>
                    <ul>
                        ${product.features.map(feature => `
                            <li>${feature}</li>
                        `).join('')}
                    </ul>
                </div>
                
                <a href="#contact" class="contact-btn" onclick="modal.style.display='none'">Contact About This Vehicle</a>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Change main image in modal
window.changeMainImage = function(newSrc) {
    document.getElementById('main-image').src = newSrc;
}

// Search functionality
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
}

// Event listeners
searchBtn.addEventListener('click', searchProducts);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchProducts();
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize the page
displayProducts(products);

