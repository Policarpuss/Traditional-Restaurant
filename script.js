// script.js
// Menu data (could also be loaded from an external JSON file)
const menuData = [
    {
        id: 1,
        name: "Doro ( ዶሮ)",
        description: "Spicy chicken stew with berbere spice, served with hard-boiled eggs",
        price: 16.99,
        category: "meat",
        image: "./images/Doro-wet.png",
        spiceLevel: 3
    },
    {
        id: 2,
        name: "Vegetarian Platter",
        description: "Selection of lentil stews, collard greens, cabbage and potato stew",
        price: 14.99,
        category: "vegetarian",
        image: "./images/beyaynetu.jpg",
        spiceLevel: 1
    },
    {
        id: 3,
        name: "Beef Tibs",
        description: "Sautéed beef cubes with onions, tomatoes, and Ethiopian spices",
        price: 17.99,
        category: "meat",
        image: "./images/images.png",
        spiceLevel: 2
    },
    {
        id: 4,
        name: "Kitfo",
        description: "Traditional Ethiopian steak tartare with mitmita spice and clarified butter",
        price: 18.99,
        category: "meat",
        image: "./images/kitfo 2.JPG",
        spiceLevel: 4
    },
    {
        id: 5,
        name: "Shiro ( ሽሮ)",
        description: "Smooth chickpea stew seasoned with berbere and garlic",
        price: 13.99,
        category: "vegetarian",
        image: "./images/Shiro.png",
        spiceLevel: 2
    },
    {
        id: 6,
        name: "Ethiopian Coffee Ceremony",
        description: "Traditional coffee preparation with popcorn and incense",
        price: 9.99,
        category: "drinks",
        image: "./images/coffee.png",
        spiceLevel: 0
    },
    {
        id: 7,
        name: "Chiko",
        description: "Crispy pastry filled with lentils or spiced ground beef",
        price: 7.99,
        category: "desserts",
        image: "./images/chiko.png",
        spiceLevel: 2
    },
    {
        id: 8,
        name: "Firfir",
        description: "Shredded injera mixed with spicy sauce and butter",
        price: 12.99,
        category: "vegetarian",
        image: "./images/firfir.png",
        spiceLevel: 3
    },
    {
        id: 9,
        name: "Tibs Special",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 19.99,
        category: "meat",
        image: "./images/kitfo3.jpg",
        spiceLevel: 2
    }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.innerHTML = navMenu.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (mobileToggle) {
                mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Load menu items
    loadMenuItems('all');
    
    // Menu category filter
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.getAttribute('data-category');
            loadMenuItems(category);
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
                this.reset();
            }
        });
    }
});

// Function to load menu items
function loadMenuItems(category) {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;
    
    // Clear existing items
    menuItemsContainer.innerHTML = '';
    
    // Filter items by category
    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);
    
    // Generate HTML for each menu item
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        
        // Generate spice level icons
        let spiceIcons = '';
        for (let i = 0; i < 5; i++) {
            const activeClass = i < item.spiceLevel ? 'active' : '';
            spiceIcons += `<i class="fas fa-pepper-hot ${activeClass}"></i>`;
        }
        
        menuItem.innerHTML = `
            <div class="menu-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">
                    <div class="spice-level">
                        ${spiceIcons}
                    </div>
                    <span>$${item.price.toFixed(2)}</span>
                </div>
            </div>
        `;
        
        menuItemsContainer.appendChild(menuItem);
    });
}