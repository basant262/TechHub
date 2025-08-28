  // بيانات المنتجات
        const products = {
            //product 1
                        Dell_7530 : {
                title: "Dell Precision 7530",
                description: "Dell Precision 7530 Workstation Laptop 15.6″ FHD, Intel Core i7-8750H, NVIDIA Quadro P1000 4GB, 16GB RAM, 512GB ",
                price: "17,500 جنيه",
                originalPrice: "18,500 جنيه",
                image: "https://www.awfarlak.com/wp-content/uploads/2025/07/ec9601d5f56f1d84be435144247b5d68.webp",
                rating: "4.5 (42 تقييم)",
                stars: 4.5,
                specs: {
                    "المعالج": "Intel Core i7-8750H",
                    "الذاكرة": "16GB RAM",
                    "التخزين": "512GB SSD",
                    "الشاشة": "15.6 بوصة FHD",
                    "البطارية": "14 ساعة",
                    "نظام التشغيل": "Windows 11 Pro",
                    "الوزن": "2.9 كجم",
                    "الألوان":"الأسود"
                }
                , 
                reviews: [
                    {
                        name: "خالد السعدي",
                        date: "10 أبريل 2023",
                        content: "الأداء مذهل في التصميم والبرمجة، البطارية تدوم طوال اليوم من الاستخدام المكثف."
                    },
                    {
                        name: "فاطمة ناصر",
                        date: "5 أبريل 2023",
                        content: "شاشة رائعة وأداء لا يصدق، أفضل جهاز اشتريته على الإطلاق."
                    }
                ]
            },
            //product 2
            Dell_7550: {
                title: "Dell Precision 7550",
                description: " Workstation Laptop 15.6″ FHD, Intel Core i7-10875H, NVIDIA Quadro RTX 5000 16GB, 32GB RAM, 512GB",
                price: "25,500 جنيه",
                originalPrice: "31,500 جنيه",
                image: "https://www.awfarlak.com/wp-content/uploads/2025/07/b68d73ef22bfef5d044560c21fcc4c7a-14.webp",
                rating: "4.6 (38 تقييم)",
                stars: 4.5,
                specs: {
                    "المعالج": " Intel Core i7-10875H",
                    "كارت الشاشة": "NVIDIA Quadro RTX 5000 16GB",
                    "الذاكرة": " 32GB RAM",
                    "التخزين": "512GB",
                    "الشاشة": "15.6 بوصه FHD",
                    "نظام التشغيل": "Windows 11 Home",
                    "الألوان": "سيلفر"
                }, 
                reviews: [
                    {
                        name: "خالد السعدي",
                        date: "10 أبريل 2023",
                        content: "الأداء مذهل في التصميم والبرمجة، البطارية تدوم طوال اليوم من الاستخدام المكثف."
                    },
                    {
                        name: "فاطمة ناصر",
                        date: "5 أبريل 2023",
                        content: "شاشة رائعة وأداء لا يصدق، أفضل جهاز اشتريته على الإطلاق."
                    }
                ]
            },
            // product 3
            ZB15_G6: {
                title: "HP ZBook 15 G6",
                description: "Workstation Laptop 15.6″ FHD, Intel Core i7-9850H, NVIDIA Quadro T2000 4GB, 32GB RAM, 1TB",
                price: "23,500 جنيه",
                originalPrice: "28,500 جنيه",
                image: "https://www.awfarlak.com/wp-content/uploads/2025/07/18fdf1c3490fbb7d74b5be6d6580addb-6.webp",
                rating: "4.8 (67 تقييم)",
                stars: 4.8,
                specs: {
                    "المعالج": " Intel Core i7-9850H",
                     "كارت الشاشة":"NVIDIA Quadro T2000 4GB",
                    "الذاكرة": "32GB RAM",
                    "التخزين": "1TB SSD",
                    "الشاشة": "15.6 بوصه FHD",
                    "البطارية": "21 ساعة",
                    "نظام التشغيل": "Windows 11 Home",
                    "الوزن": "2.6 كجم",
                    "الألوان": "الفضي، space gray"
                },
                reviews: [
                    {
                        name: "خالد السعدي",
                        date: "10 أبريل 2023",
                        content: "الأداء مذهل في التصميم والبرمجة، البطارية تدوم طوال اليوم من الاستخدام المكثف."
                    },
                    {
                        name: "فاطمة ناصر",
                        date: "5 أبريل 2023",
                        content: "شاشة رائعة وأداء لا يصدق، أفضل جهاز اشتريته على الإطلاق."
                    }
                ]
            },
            //product 4
            DELL_7520: {
                title: "Dell Precision 7520",
                description:"Xeon E3-1535M V6 – 16G Ram – 512G SSD Nvidia QUADRO M2200",
                price: "11,899 جنيه",
                originalPrice: "13,499 جنيه",
                image: "https://top10-eg.com/wp-content/uploads/2020/12/csm_2001769665_1b277a5424.jpg",
                rating: "4.3 (35 تقييم)",
                stars: 4.3,
                specs: {
                    "المعالج": "Xeon E3-1535M V6 ",
                    "كارت الشاشة":" NVIDIA Quadro M2200 4GB GDDR5",
                    "الذاكرة": "16G Ram",
                    "التخزين": "512G SSD ",
                    "الشاشة": "15.6 بوصة FHD",
                    "نظام التشغيل": "Windows 11 ",
                    "الوزن": "3 كجم",
                    "الألوان": "الفضي، الذهبي"
                },
                reviews: [
                    {
                        name: "خالد السعدي",
                        date: "10 أبريل 2023",
                        content: "الأداء مذهل في التصميم والبرمجة، البطارية تدوم طوال اليوم من الاستخدام المكثف."
                    },
                    {
                        name: "فاطمة ناصر",
                        date: "5 أبريل 2023",
                        content: "شاشة رائعة وأداء لا يصدق، أفضل جهاز اشتريته على الإطلاق."
                    }
                ]
               
            },
            // product 5
            Acer: {
                title: "Acer Predator Helios 300 PH315-52-75C6",
                description: " Acer Predator Helios 300 PH315-52-75C6-core i7-9750H-16GB DDR4-2TB HDD-512GB SSD-NVIDIA® GeForce® GTX 1660Ti 6GB-15.6 FHD",
                price: "25,000 جنيه",
                originalPrice: "29,000 جنيه",
                image: "https://compuscience.com.eg/2645-pdt_771/acer-predator-helios-300-ph315-52-75c6-core-i7-9750hq-16gb-ddr4-2tb-hdd-512gb-ssd-nvidia-geforce-gtx-1660ti-6gb-156-fhd.jpg",
                rating: "4.6 (38 تقييم)",
                stars: 4.5,
                specs: {
                    "المعالج": " Intelcore i7-9750H",
                    "كارت الشاشة": "NVIDIA GeForce GTX 1660Ti 6GB",
                    "الذاكرة": " 32GB RAM",
                    "التخزين": "512GB",
                    "الشاشة": "15.6 بوصه FHD",
                    "نظام التشغيل": "Windows 11 Home",
                    "الألوان": "سيلفر"
                }, 
                reviews: [
                    {
                        name: "خالد السعدي",
                        date: "10 أبريل 2023",
                        content: "الأداء مذهل في التصميم والبرمجة، البطارية تدوم طوال اليوم من الاستخدام المكثف."
                    },
                    {
                        name: "فاطمة ناصر",
                        date: "5 أبريل 2023",
                        content: "شاشة رائعة وأداء لا يصدق، أفضل جهاز اشتريته على الإطلاق."
                    }
                ]
            },
            //product 6
            Dell_7720: {
                title: "Dell Precision 7720",
                description: "لاب الجرافيك والديزاين والبرمجة ( اقوي لابتوب ورك استيشن للشغل والترفيه )",
                price: "25,500 جنيه",
                originalPrice: "31,500 جنيه",
                image: "https://altyseer.com/wp-content/uploads/2022/02/Dell-Precision-7710-Dell-Precision-7710.jpg?v=1646073196.webp",
                rating: "4.6 (38 تقييم)",
                stars: 4.5,
                specs: {
                    "المعالج": " Intel Core i7-7820 HQ",
                    "كارت الشاشة": "nvidia quadro p4000 8gb ddr5",
                    "الذاكرة": "16 GB ddr4",
                    "التخزين": "512 gb ssd m2",
                    "الشاشة": "17.3 بوصه FHD",
                    "نظام التشغيل": "Windows 11 Home",
                    "الألوان": "اسود"
                }, 
                reviews: [
                    {
                        name: "خالد السعدي",
                        date: "10 أبريل 2023",
                        content: "الأداء مذهل في التصميم والبرمجة، البطارية تدوم طوال اليوم من الاستخدام المكثف."
                    },
                    {
                        name: "فاطمة ناصر",
                        date: "5 أبريل 2023",
                        content: "شاشة رائعة وأداء لا يصدق، أفضل جهاز اشتريته على الإطلاق."
                    }
                ]
            },
        };
        
        // تفعيل القائمة المتنقلة
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // تفعيل أزرار التصفية
        const filterButtons = document.querySelectorAll('.filter-btn');
        const productCards = document.querySelectorAll('.product-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                filterProducts(filterValue);
            });
        });
        
        // وظيفة تصفية المنتجات
        function filterProducts(category) {
            let hasVisibleProducts = false;
            
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    hasVisibleProducts = true;
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            showNoProductsMessage(!hasVisibleProducts);
        }
        
        // عرض رسالة عدم وجود منتجات
        function showNoProductsMessage(show) {
            let messageElement = document.querySelector('.no-products');
            
            if (show) {
                if (!messageElement) {
                    messageElement = document.createElement('div');
                    messageElement.className = 'no-products';
                    messageElement.innerHTML = `
                        <i class="fas fa-search"></i>
                        <h3>لا توجد منتجات</h3>
                        <p>لم نعثر على أي منتجات في هذه الفئة حالياً</p>
                    `;
                    document.querySelector('.products-grid').appendChild(messageElement);
                }
            } else if (messageElement) {
                messageElement.remove();
            }
        }
        
        // تفعيل أزرار إضافة إلى السلة
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartCount = document.querySelector('.cart-count');
        let count = 0;
        
        function addToCart(name, price, button) {
            count++;
            if (cartCount) cartCount.textContent = count;
            
            showNotification(`تم إضافة ${name} إلى سلة التسوق - ${price} جنيه`);
            
            const originalText = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i> تمت الإضافة';
            button.style.background = 'var(--success)';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
            }, 2000);
        }
        
        // فتح نافذة المنتج
        function openModal(productId) {
            const product = products[productId];
            if (!product) return;
            
            document.getElementById('modalTitle').textContent = product.title;
            document.getElementById('modalDescription').textContent = product.description;
            document.getElementById('modalPrice').innerHTML = `${product.price} <span style="text-decoration: line-through; color: rgba(255,255,255,0.7); font-size: 1.3rem;">${product.originalPrice}</span>`;
            document.getElementById('modalImage').src = product.image;
            document.getElementById('ratingCount').textContent = product.rating;
            
            // إضافة النجوم
            const starsContainer = document.getElementById('modalStars');
            starsContainer.innerHTML = '';
            const fullStars = Math.floor(product.stars);
            const hasHalfStar = product.stars % 1 >= 0.5;
            
            for (let i = 0; i < 5; i++) {
                if (i < fullStars) {
                    starsContainer.innerHTML += '<i class="fas fa-star"></i>';
                } else if (i === fullStars && hasHalfStar) {
                    starsContainer.innerHTML += '<i class="fas fa-star-half-alt"></i>';
                } else {
                    starsContainer.innerHTML += '<i class="far fa-star"></i>';
                }
            }
            
            // إضافة المواصفات
            const specsContainer = document.getElementById('modalSpecs');
            specsContainer.innerHTML = '';
            
            for (const [key, value] of Object.entries(product.specs)) {
                const specItem = document.createElement('div');
                specItem.className = 'spec-item';
                specItem.innerHTML = `
                    <h4>${key}</h4>
                    <div class="spec-details">${value}</div>
                `;
                specsContainer.appendChild(specItem);
            }
            
            // إضافة التقييمات
            const reviewsContainer = document.getElementById('reviewsContainer');
            reviewsContainer.innerHTML = '';
            
            product.reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review';
                reviewElement.innerHTML = `
                    <div class="review-header">
                        <span class="reviewer-name">${review.name}</span>
                        <span class="review-date">${review.date}</span>
                    </div>
                    <div class="review-content">${review.content}</div>
                `;
                reviewsContainer.appendChild(reviewElement);
            });
            
            // إظهار النافذة
            document.getElementById('productModal').style.display = 'flex';
            document.body.style.overflow = 'hidden';
            
            // حفظ المنتج الحالي
            currentProduct = product;
        }
        
        // إغلاق نافذة المنتج
        function closeModal() {
            document.getElementById('productModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        // التواصل عبر واتساب
        function contactWhatsApp() {
            if (currentProduct) {
                const message = `مرحباً، أنا مهتم بشراء ${currentProduct.title} - السعر: ${currentProduct.price}`;
                const phoneNumber = "+201222454754"; // استبدل برقم الهاتف الفعلي
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
            }
        }
        
        // عرض الإشعار
        function showNotification(message) {
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notificationText');
            
            notificationText.textContent = message;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 3000);
        }
        
        // إغلاق النافذة عند النقر خارج المحتوى
        document.getElementById('productModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        
        // متغير لحفظ المنتج الحالي في النافذة
        let currentProduct = null;