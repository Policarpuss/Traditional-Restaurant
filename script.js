// script.js
// Menu data (could also be loaded from an external JSON file)
const menuData = [
    {
        id: 1,
        name: "Doro ( ዶሮ)",
        description: "Spicy chicken stew with berbere spice, served with hard-boiled eggs ( ቅዳሜ እና እሁድ)",
        price: 500,
        category: "meat",
        image: "./images/Doro-wet.png",
        spiceLevel: 3
    },
    {
        id: 4,
        name: "Kitfo",
        description: "Traditional Ethiopian steak tartare with mitmita spice and clarified butter",
        price: 600,
        category: "meat",
        image: "./images/kitfoo.jpg",
        spiceLevel: 4
    },
    {
        id: 2,
        name: "የገብስ ገንፎ",
        description: "Selection of lentil stews, collard greens, cabbage and potato stew",
        price: 200,
        category: "vegetarian",
        image: "./images/gebssgenfo.jpg",
        spiceLevel: 1
    },
    {
        id: 3,
        name: "ጥቁር ገብስ ገንፎ",
        description: "Selection of lentil stews, collard greens, cabbage and potato stew",
        price: 250,
        category: "vegetarian",
        image: "./images/gebs-genfo.jpg",
        spiceLevel: 1
    },
    {
        id: 3,
        name: "የቡላ ገንፎ",
        description: "The Enset plant's root is scraped, mashed, and processed to extract the starch, which is then dried into a fine powder.",
        price: 150,
        category: "vegetarian",
        image: "./images/bulaa.png",
        spiceLevel: 1
    },
    {
        id: 4,
        name: "ወይኗ እስፔሻል ",
        description: "",
        price: 1000,
        category: "meat",
        image: "./images/beyaynetu.jpg",
        spiceLevel: 1
    },
    {
        id: 3,
        name: "እስፔሻል ክትፎ",
        description: "Traditional Ethiopian steak tartare with mitmita spice and clarified butter",
        price: 700,
        category: "meat",
        image: "./images/special-kitfo-ethiopian.jpg",
        spiceLevel: 2
    },
  
    {
        id: 5,
        name: "Shiro ( ሽሮ)",
        description: "Smooth chickpea stew seasoned with berbere and garlic",
        price: 150,
        category: "meat",
        image: "./images/Shiro.jpg",
        spiceLevel: 2
    },
    {
        id: 6,
        name: "Ethiopian Coffee Ceremony",
        description: "Traditional coffee preparation with popcorn and incense",
        price: 20,
        category: "drinks",
        image: "./images/coffee.png",
        spiceLevel: 0
    },
    {
        id: 7,
        name: "Chiko ( ጭኮ)",
        description: "barley conserved with butter",
        price: 350,
        category: "desserts",
        image: "./images/chiko.png",
        spiceLevel: 2
    },
    {
        id: 8,
        name: " እስፔሻል እርጥብ ሳንዱች",
        description: "Sandwich made with potato and spicy sauce",
        price: 200,
        category: "desserts",
        image: "./images/erteb2.jpg",
        spiceLevel: 3
    },
    {
        id: 12,
        name: "እርጥብ ሳንዱች",
        description: "Sandwich made with potato and spicy sauce",
        price: 100,
        category: "desserts",
        image: "./images/ertib.jpg",
        spiceLevel: 3
    },
    {
        id: 9,
        name: "ቅቅል",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 300,
        category: "meat",
        image: "./images/kikle.png",
        spiceLevel: 2
    },
    {
        id: 10,
        name: "ጥብስ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 400,
        category: "meat",
        image: "./images/tibs.jpg",
        spiceLevel: 2
    },
    {
        id: 11,
        name: "የቡላ ገንፎ በክትፎ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 300,
        category: "vegetarian",
        image: "./images/Bula-kitfo.jpg",
        spiceLevel: 2
    },
    {
        id: 12,
        name: "ፈልቶ የቀዘቀዘ ወተት",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 70,
        category: "drinks",
        image: "./images/milk1.png",
        spiceLevel: 2
    },
    {
        id: 13,
        name: "ፍስክ አገልግል",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 500,
        category: "meat",
        image: "./images/fesegagelgel.jpg",
        spiceLevel: 2
    },
    {
        id: 14,
        name: "እርጎ",
        description: "yougurt made from milk",
        price: 80,
        category: "drinks",
        image: "./images/yougurt.png",
        spiceLevel: 2
    },
    {
        id: 15,
        name: "ሽንኮራ ጁስ",
        description: "A refreshing juice made from Sugercane",
        price: 150,
        category: "drinks",
        image: "./images/suger.png",
        spiceLevel: 2
    },
    {
        id: 16,
        name: "ብርዝ",
        description: "wine made from honey",
        price: 80,
        category: "drinks",
        image: "./images/birze.jpg",
        spiceLevel: 2
    },
    {
        id: 17,
        name: "ምላስ ሰንበር",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 350,
        category: "regular",
        image: "./images/mlassenber (2).jpg",
        spiceLevel: 4
    },
    {
        id: 18,
        name: "ቋንጣ ፍርፍር",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 250,
        category: "regular",
        image: "./images/kuanta1.png",
        spiceLevel: 2
    },
    {
        id: 19,
        name: "ስጋ ፍርፍር",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 250,
        category: "regular",
        image: "./images/sega.jpg",
        spiceLevel: 3
    },
    {
        id: 20,
        name: "እስፔሻል ፍርፍር",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 350,
        category: "regular",
        image: "./images/kuanta.png",
        spiceLevel: 2
    },
    {
        id: 21,
        name: "እንቁላል ፍርፍር",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 150,
        category: "regular",
        image: "./images/enkulalfrfer.png",
        spiceLevel: 2
    },
    {
        id: 22,
        name: "እንቁላል ሳንዱች",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 150,
        category: "regular",
        image: "./images/eggsandwich.png",
        spiceLevel: 3
    },
    {
        id: 23,
        name: "ቱና ሳንዱች",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 200,
        category: "regular",
        image: "./images/Tuna-fish-Sandwich.jpg",
        spiceLevel: 3
    },
    {
        id: 24,
        name: "አትክልት ሳንዱች",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 150,
        category: "regular",
        image: "./images/veg sandwich.jpg",
        spiceLevel: 3
    },
    {
        id: 25,
        name: "እንቁላል በስጋ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 250,
        category: "regular",
        image: "./images/eggmeat.jpg",
        spiceLevel: 3
    },
    {
        id: 26,
        name: "እንጀራ ፍርፍር",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 150,
        category: "regular",
        image: "./images/frfr.jpg",
        spiceLevel: 3
    },
    {
        id: 27,
        name: "ቱና ሳላድ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 300,
        category: "regular",
        image: "./images/TUNA SALAD.jpg",
        spiceLevel: 3
    },
    {
        id: 28,
        name: "ሚክስ ሳላድ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 250,
        category: "regular",
        image: "./images/tebla.png",
        spiceLevel: 3
    },
    {
        id: 29,
        name: "አቩካዶ ሳላድ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 150,
        category: "regular",
        image: "./images/av.jpg",
        spiceLevel: 3
    },
    {
        id: 30,
        name: "ክለብ ሳንዱች",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 450,
        category: "regular",
        image: "./images/club-sandwich1.jpg",
        spiceLevel: 3
    },
    {
        id: 30,
        name: "ቡላ ፍርፍር",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 250,
        category: "vegetarian",
        image: "./images/bulaferfer.jpg",
        spiceLevel: 3
    },
    {
        id: 31,
        name: " እስፔሻል ጨጨብሳ",
        // description: "Premium beef sautéed with onions, peppers and special spices",
        price: 300,
        category: "vegetarian",
        image: "./images/special-cecebsa.jpg",
        spiceLevel: 3
    },
    {
        id: 32,
        name: " ጨጨብሳ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 150,
        category: "vegetarian",
        image: "./images/Chechebsa.jpg",
        spiceLevel: 3
    },
    {
        id: 33,
        name: "ቂንጬ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 150,
        category: "vegetarian",
        image: "./images/qinche.jpg",
        spiceLevel: 3
    },
    {
        id: 34,
        name: "ዱለት",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 300,
        category: "meat",
        image: "./images/dulet.jpg",
        spiceLevel: 3
    },
    {
        id: 35,
        name: "አሳ ጉላሽ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 350,
        category: "meat",
        image: "./images/asagulash.jpg",
        spiceLevel: 3
    },
    {
        id: 36,
        name: "አሳ ኮተሌት",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 400,
        category: "meat",
        image: "./images/kotlet.jpg",
        spiceLevel: 3
    },
    {
        id: 37,
        name: "አሳ ለብለብ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 250,
        category: "meat",
        image: "./images/lebleb.jpg",
        spiceLevel: 3
    },
    {
        id: 38,
        name: "የፆም አገልግል",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 500,
        category: "meat",
        image: "./images/yetsomagelgel.jpg",
        spiceLevel: 3
    },
    {
        id: 39,
        name: "እስፔሻል ቡላ ፍርፍር",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 450,
        category: "vegetarian",
        image: "./images/bulaferfer.jpg",
        spiceLevel: 3
    },
    {
        id: 40,
        name: "ሩዝ በአሳ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 200,
        category: "meat",
        image: "./images/ricewithfish.jpg",
        spiceLevel: 3
    },
    {
        id: 41,
        name: "ሩዝ በቱና",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 350,
        category: "meat",
        image: "./images/ricewithtuna.jpg",
        spiceLevel: 3
    },
    {
        id: 42,
        name: "ሩዝ በዶሮ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 400,
        category: "meat",
        image: "./images/ricewithchick.jpg",
        spiceLevel: 3
    },
    {
        id: 43,
        name: "ሩዝ በአትክልት",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 150,
        category: "",
        image: "./images/ricewithvegi.png",
        spiceLevel: 3
    },
    {
        id: 44,
        name: "ቦዘና ሽሮ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 200,
        category: "meat",
        image: "./images/bozena.jpg",
        spiceLevel: 3
    },
    {
        id: 45,
        name: "ቡርሳሜ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 500,
        category: "meat",
        image: "./images/chukame.jpg",
        spiceLevel: 3
    },
    {
        id: 46,
        name: "ጩካሜ",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 450,
        category: "meat",
        image: "./images/bursame.jpg",
        spiceLevel: 3
    },
    {
        id: 47,
        name: "ምንቸት",
        description: "Premium beef sautéed with onions, peppers and special spices",
        price: 400,
        category: "meat",
        image: "./images/mincet.jpg",
        spiceLevel: 3
    },
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