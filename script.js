document.addEventListener('DOMContentLoaded', function() {
    // Product data - update the eleventh product with the new image
    const products = [
        { 
            id: 1, 
            name: 'Elegant Tote Bag', 
            price: 129.99, 
            color: '#3498db', 
            description: 'A spacious and stylish tote perfect for everyday use. Features multiple compartments and premium stitching.',
            image: '/il_1588xN.3003246280_fofq.webp'
        },
        { 
            id: 2, 
            name: 'Designer Clutch', 
            price: 199.99, 
            color: '#2ecc71', 
            description: 'Sleek designer clutch with gold accents. Perfect for formal events and nights out.',
            image: '/13100816_fpx.webp'  
        },
        { 
            id: 3, 
            name: 'Crossbody Satchel', 
            price: 89.99, 
            color: '#e74c3c', 
            description: 'Versatile crossbody bag with adjustable strap and multiple pockets for organization.',
            image: '/CCH23109_1_enlarged.webp'
        },
        { 
            id: 4, 
            name: 'Leather Tote Bag', 
            price: 249.99, 
            color: '#9b59b6', 
            description: 'Premium brown leather tote with a spacious interior and elegant design. Perfect for professional and casual settings.',
            image: '/81E1+kRA7VL.jpg'
        },
        { 
            id: 5, 
            name: 'Mini Backpack Purse', 
            price: 79.99, 
            color: '#f1c40f', 
            description: 'Trendy mini backpack that combines style and functionality for the modern woman.',
            image: '/61upba9YgYL._AC_UL1001_.jpg'
        },
        { 
            id: 6, 
            name: 'Navy Leather Hobo Bag', 
            price: 299.99, 
            color: '#1abc9c', 
            description: 'Elegant navy leather hobo bag by Michael Kors. Spacious interior with sophisticated design and gold-toned hardware.',
            image: '/michael-michael-kors-navy-leather-hobo-bag-blue-product-0-136097877-normal.webp'
        },
        { 
            id: 7, 
            name: 'Burberry Leather Handbag', 
            price: 599.99, 
            color: '#2c3e50', 
            description: 'Elegant dark blue Burberry leather handbag with a sophisticated design. Features a structured shape, gold-tone clasp, and detachable shoulder strap. Perfect for both professional and evening occasions.',
            image: '/WBURL135648_1_enlarged.webp'
        },
        { 
            id: 8, 
            name: 'Red Jeweled Clutch', 
            price: 249.99, 
            color: '#c0392b', 
            description: 'Exquisite red jeweled clutch with a stunning array of meticulously arranged red jewels. Features a sophisticated gunmetal gray clasp, perfect for evening events and formal occasions.',
            image: '/LSE0029_RED-1.webp'
        },
        { 
            id: 9, 
            name: 'Messenger Bag', 
            price: 99.99, 
            color: '#7f8c8d', 
            description: 'Casual yet stylish messenger bag with plenty of storage for everyday essentials.',
            image: '/66cc8054153849f7c7cca5715edea5ce_large.jpg' 
        },
        { 
            id: 10, 
            name: 'Bucket Bag', 
            price: 109.99, 
            color: '#d35400', 
            description: 'Trendy bucket bag with drawstring closure and tassel details.',
            image: '/the-bridge-2014-womens-italian-leather-medium-bucket-bag-cream-004437449-42-p795-3424_image.png'
        },
        { 
            id: 11, 
            name: 'Woven Straw Tote', 
            price: 69.99, 
            color: '#16a085', 
            description: 'Summer-ready woven straw tote with gold accents and braided straps.',
            image: '/MIC50682_3_enlarged.webp'  
        }
    ];

    // Function to create a product card
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <div class="product-image" style="background-color:${product.color}15;">
                ${product.image ? 
                    `<img src="${product.image}" alt="${product.name}" class="bag-image">` : 
                    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="bag-image">
                        ${getBagSvgByType(product.id, product.color)}
                    </svg>`
                }
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <button class="view-details-button" data-id="${product.id}">View Details</button>
            </div>
        `;
        
        return productCard;
    }

    // Generate product cards
    const productsContainer = document.getElementById('products-container');
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });

    // Function to update product detail image
    function updateProductDetailImage(product) {
        const detailImage = document.getElementById('detail-product-image');
        
        if (product.image) {
            detailImage.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-photo">
            `;
        } else {
            detailImage.innerHTML = `
                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" class="product-svg">
                    <rect width="400" height="400" rx="10" fill="${product.color}15" />
                    ${getBagSvgByType(product.id, product.color, true)}
                </svg>
            `;
        }
    }

    // View Details functionality
    document.querySelectorAll('.view-details-button').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            
            document.getElementById('detail-product-name').textContent = product.name;
            document.getElementById('detail-product-price').textContent = `$${product.price}`;
            document.getElementById('detail-product-description').textContent = product.description;
            
            updateProductDetailImage(product);
            
            document.getElementById('buy-now-button').setAttribute('data-id', productId);
            
            const mainPage = document.getElementById('main-page');
            const productDetailPage = document.getElementById('product-detail');
            mainPage.style.display = 'none';
            productDetailPage.style.display = 'block';
        });
    });

    // Back button functionality
    document.getElementById('back-button').addEventListener('click', function() {
        const productDetailPage = document.getElementById('product-detail');
        const mainPage = document.getElementById('main-page');
        productDetailPage.style.display = 'none';
        mainPage.style.display = 'block';
    });

    // Buy now functionality
    document.getElementById('buy-now-button').addEventListener('click', function() {
        const modal = document.getElementById('modal');
        modal.style.display = 'flex';
    });

    // Close modal
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Function to get appropriate bag SVG based on product type
    function getBagSvgByType(id, color, isLarge = false) {
        const scale = isLarge ? 1.5 : 1;
        const styles = {
            stroke: '#222',
            strokeWidth: isLarge ? 2 : 1.5,
            fill: color,
            secondaryFill: '#fff',
            detailsColor: '#333',
            handleColor: '#222'
        };
        
        switch(id % 11) {
            case 1: // Tote Bag
                return `
                    <g transform="scale(${scale}) translate(40, 40)">
                        <rect x="20" y="30" width="80" height="90" rx="2" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <path d="M20 40 C20 40, 50 60, 100 40" fill="none" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}" />
                        <path d="M30 30 L30 15 C30 15, 45 5, 70 15 L70 30" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth + 1}" />
                        <rect x="35" y="45" width="50" height="30" rx="2" fill="${styles.secondaryFill}" opacity="0.7" />
                    </g>
                `;
            case 2: // Clutch
                return `
                    <g transform="scale(${scale}) translate(40, 50)">
                        <rect x="20" y="30" width="90" height="50" rx="3" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <rect x="20" y="30" width="90" height="5" fill="${styles.secondaryFill}" opacity="0.7" />
                        <circle cx="65" cy="55" r="5" fill="gold" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth/2}" />
                        <line x1="25" y1="40" x2="105" y2="40" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth/2}" opacity="0.5" />
                    </g>
                `;
            case 3: // Crossbody
                return `
                    <g transform="scale(${scale}) translate(35, 40)">
                        <rect x="30" y="40" width="70" height="60" rx="8" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <path d="M10 20 L30 40 L100 40 L120 20" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth + 1}" />
                        <rect x="45" y="50" width="40" height="20" rx="2" fill="${styles.secondaryFill}" opacity="0.7" />
                        <circle cx="85" cy="60" r="3" fill="${styles.detailsColor}" />
                    </g>
                `;
            case 4: // Leather Shoulder
                return `
                    <g transform="scale(${scale}) translate(30, 40)">
                        <path d="M30 40 L30 100 C30 110, 110 110, 110 100 L110 40" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <path d="M30 40 C30 40, 70 55, 110 40" fill="none" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}" />
                        <path d="M40 40 L40 25 C40 25, 70 15, 100 25 L100 40" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth + 1}" />
                        <circle cx="70" cy="70" r="5" fill="gold" />
                    </g>
                `;
            case 5: // Mini Backpack
                return `
                    <g transform="scale(${scale}) translate(40, 30)">
                        <rect x="30" y="50" width="60" height="70" rx="5" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <path d="M30 60 C30 20, 90 20, 90 60" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth}" />
                        <rect x="45" y="40" width="30" height="20" rx="3" fill="${styles.secondaryFill}" opacity="0.7" />
                        <rect x="55" y="60" width="10" height="15" fill="${styles.detailsColor}" />
                    </g>
                `;
            case 6: // Hobo Handbag
                return `
                    <g transform="scale(${scale}) translate(35, 40)">
                        <path d="M30 40 C20 70, 40 100, 70 100 C100 100, 120 70, 110 40" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <path d="M30 40 C30 40, 70 25, 110 40" fill="none" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}" />
                        <path d="M50 40 C50 25, 90 25, 90 40" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth + 1}" />
                        <path d="M60 55 L80 55 L75 75 L65 75 Z" fill="${styles.secondaryFill}" opacity="0.7" />
                    </g>
                `;
            case 7: // Structured Satchel
                return `
                    <g transform="scale(${scale}) translate(35, 40)">
                        <path d="M30 40 L30 90 L110 90 L110 40 Z" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <path d="M25 40 L115 40" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth * 2}" />
                        <path d="M45 40 L45 20 C45 20, 70 15, 95 20 L95 40" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth + 1}" />
                        <rect x="60" y="50" width="20" height="15" rx="2" fill="${styles.secondaryFill}" opacity="0.8" />
                        <circle cx="70" cy="65" r="2" fill="${styles.detailsColor}" />
                    </g>
                `;
            case 8: // Evening Clutch
                return `
                    <g transform="scale(${scale}) translate(40, 50)">
                        <rect x="25" y="30" width="80" height="40" rx="5" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <circle cx="65" cy="50" r="8" fill="gold" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth/2}" />
                        <circle cx="65" cy="50" r="5" fill="${styles.secondaryFill}" />
                        <path d="M25 70 L25 80 L105 80 L105 70" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}" />
                        <path d="M90 80 L90 90 L105 90" fill="none" stroke="gold" stroke-width="${styles.strokeWidth}" />
                    </g>
                `;
            case 9: // Messenger Bag
                return `
                    <g transform="scale(${scale}) translate(30, 40)">
                        <rect x="30" y="40" width="80" height="60" rx="3" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <rect x="30" y="40" width="80" height="15" fill="${styles.secondaryFill}" opacity="0.5" />
                        <path d="M10 30 L30 40 L110 40 L130 30" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth + 1}" />
                        <rect x="50" y="65" width="40" height="10" rx="1" fill="${styles.secondaryFill}" opacity="0.7" />
                        <circle cx="100" cy="47" r="3" fill="${styles.detailsColor}" />
                    </g>
                `;
            case 10: // Bucket Bag
                return `
                    <g transform="scale(${scale}) translate(40, 40)">
                        <path d="M40 40 C20 90, 120 90, 100 40" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <ellipse cx="70" cy="40" rx="30" ry="5" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}" />
                        <path d="M50 40 C50 20, 90 20, 90 40" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth + 1}" />
                        <path d="M70 90 L70 105" stroke="${styles.detailsColor}" stroke-width="${styles.strokeWidth}" />
                        <path d="M67 105 L73 105 L70 115 Z" fill="${styles.detailsColor}" />
                    </g>
                `;
            case 0: // Woven Straw Tote
                return `
                    <g transform="scale(${scale}) translate(40, 30)">
                        <path d="M30 40 L30 100 C30 110, 110 110, 110 100 L110 40 Z" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <pattern id="basketWeave" width="10" height="10" patternUnits="userSpaceOnUse">
                            <rect width="10" height="10" fill="none"/>
                            <path d="M0 0 L10 10 M10 0 L0 10" stroke="#a67c52" stroke-width="1" />
                        </pattern>
                        <rect x="30" y="40" width="80" height="60" fill="url(#basketWeave)" opacity="0.3" />
                        <path d="M40 40 L40 20 C40 20, 70 10, 100 20 L100 40" fill="none" stroke="#5d4037" stroke-width="${styles.strokeWidth + 1}" />
                        <path d="M50 70 L90 70" stroke="#5d4037" stroke-width="${styles.strokeWidth}" />
                    </g>
                `;
            default: // Default bag
                return `
                    <g transform="scale(${scale}) translate(40, 40)">
                        <rect x="30" y="40" width="80" height="70" rx="5" fill="${styles.fill}" stroke="${styles.stroke}" stroke-width="${styles.strokeWidth}"/>
                        <path d="M40 40 L40 20 C40 20, 70 10, 100 20 L100 40" fill="none" stroke="${styles.handleColor}" stroke-width="${styles.strokeWidth + 1}" />
                        <rect x="50" y="60" width="40" height="20" rx="2" fill="${styles.secondaryFill}" opacity="0.7" />
                    </g>
                `;
        }
    }
});