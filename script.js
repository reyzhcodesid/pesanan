document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality with improved animation
    const panelTab = document.getElementById('panel-tab');
    const vpsTab = document.getElementById('vps-tab');
    const serviceTab = document.getElementById('service-tab');
    const panelContent = document.getElementById('panel-content');
    const vpsContent = document.getElementById('vps-content');
    const serviceContent = document.getElementById('service-content');
    const toggleSlider = document.getElementById('toggle-slider');
    
    // Initially show panel content and hide VPS and Service content
    panelContent.classList.remove('hidden');
    vpsContent.classList.add('hidden');
    serviceContent.classList.add('hidden');
    
    // Function to move slider to the correct position
    function moveSlider(tabName) {
        if (tabName === 'panel') {
            toggleSlider.style.transform = 'translateX(0)';
        } else if (tabName === 'vps') {
            toggleSlider.style.transform = 'translateX(100%)';
        } else if (tabName === 'service') {
            toggleSlider.style.transform = 'translateX(200%)';
        }
    }
    
    // Function to switch tab content
    function switchTab(tabName) {
        // Hide all content
        panelContent.style.opacity = '0';
        panelContent.style.transform = 'translateY(20px)';
        vpsContent.style.opacity = '0';
        vpsContent.style.transform = 'translateY(20px)';
        serviceContent.style.opacity = '0';
        serviceContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            // Hide all content
            panelContent.classList.add('hidden');
            vpsContent.classList.add('hidden');
            serviceContent.classList.add('hidden');
            
            // Show selected content
            if (tabName === 'panel') {
                panelContent.classList.remove('hidden');
                setTimeout(() => {
                    panelContent.style.opacity = '1';
                    panelContent.style.transform = 'translateY(0)';
                }, 50);
            } else if (tabName === 'vps') {
                vpsContent.classList.remove('hidden');
                setTimeout(() => {
                    vpsContent.style.opacity = '1';
                    vpsContent.style.transform = 'translateY(0)';
                }, 50);
            } else if (tabName === 'service') {
                serviceContent.classList.remove('hidden');
                setTimeout(() => {
                    serviceContent.style.opacity = '1';
                    serviceContent.style.transform = 'translateY(0)';
                }, 50);
            }
        }, 300);
        
        // Move slider
        moveSlider(tabName);
    }
    
    // Add event listeners for tab switching
    panelTab.addEventListener('change', function() {
        if (this.checked) {
            switchTab('panel');
        }
    });
    
    vpsTab.addEventListener('change', function() {
        if (this.checked) {
            switchTab('vps');
        }
    });
    
    serviceTab.addEventListener('change', function() {
        if (this.checked) {
            switchTab('service');
        }
    });
    
    // Also add click event listeners to the tab labels for better UX
    const tabLabels = document.querySelectorAll('.tab-label-container');
    tabLabels.forEach(label => {
        label.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            const radioButton = this.querySelector('input[type="radio"]');
            
            // Check the radio button
            radioButton.checked = true;
            
            // Switch to the selected tab
            switchTab(tabName);
        });
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    });
    
    // Order modal functionality
    const orderModal = document.getElementById('order-modal');
    const closeModal = document.getElementById('close-modal');
    const orderSummary = document.getElementById('order-summary');
    const whatsappOrder = document.getElementById('whatsapp-order');
    const telegramOrder = document.getElementById('telegram-order');
    
    // WhatsApp and Telegram contact info
    const whatsappNumber = '923442619602';
    const telegramUsername = 'DGShamrez';
    
    // Function to open WhatsApp with message
    function openWhatsApp(message) {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
    
    // Function to open Telegram with message
    function openTelegram(message) {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://t.me/${telegramUsername}?text=${encodedMessage}`, '_blank');
    }
    
    // Close modal when clicking the close button
    closeModal.addEventListener('click', function() {
        orderModal.classList.remove('active');
    });
    
    // Close modal when clicking outside the modal content
    orderModal.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            orderModal.classList.remove('active');
        }
    });
    
    // Handle order button clicks for Panel plans
    const orderButtons = document.querySelectorAll('.order-btn');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const price = this.getAttribute('data-price');
            const ram = this.getAttribute('data-ram');
            const cpu = this.getAttribute('data-cpu');
            const storage = this.getAttribute('data-storage');
            const database = this.getAttribute('data-database');
            
            // Create order summary
            orderSummary.innerHTML = `
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span>Plan:</span>
                        <span class="text-white font-medium">${plan}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Price:</span>
                        <span class="text-white font-medium">${price}/month</span>
                    </div>
                    <div class="flex justify-between">
                        <span>RAM:</span>
                        <span class="text-white font-medium">${ram}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>CPU:</span>
                        <span class="text-white font-medium">${cpu}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Storage:</span>
                        <span class="text-white font-medium">${storage}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Database:</span>
                        <span class="text-white font-medium">${database}</span>
                    </div>
                </div>
            `;
            
            // Create order message
            const orderMessage = `I would like to order panel hosting with the following specifications:\n\n` +
                `Plan: ${plan}\n` +
                `RAM: ${ram}\n` +
                `CPU: ${cpu}\n` +
                `Storage: ${storage}\n` +
                `Database: ${database}\n` +
                `Price: ${price}/month\n\n` +
                `Please inform me about payment methods and next steps. Thank you!`;
            
            // Store order message for later use
            orderModal.setAttribute('data-order-message', orderMessage);
            
            // Show modal
            orderModal.classList.add('active');
        });
    });
    
    // Handle order button clicks for VPS plans
    const vpsOrderButtons = document.querySelectorAll('.vps-order-btn');
    vpsOrderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            const price = this.getAttribute('data-price');
            const cpu = this.getAttribute('data-cpu');
            const ram = this.getAttribute('data-ram');
            const storage = this.getAttribute('data-storage');
            const bandwidth = this.getAttribute('data-bandwidth');
            
            // Create order summary
            orderSummary.innerHTML = `
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span>Plan:</span>
                        <span class="text-white font-medium">${plan}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Price:</span>
                        <span class="text-white font-medium">${price}/month</span>
                    </div>
                    <div class="flex justify-between">
                        <span>CPU:</span>
                        <span class="text-white font-medium">${cpu}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>RAM:</span>
                        <span class="text-white font-medium">${ram}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Storage:</span>
                        <span class="text-white font-medium">${storage}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Bandwidth:</span>
                        <span class="text-white font-medium">${bandwidth}</span>
                    </div>
                </div>
            `;
            
            // Create order message
            const orderMessage = `I would like to order VPS hosting with the following specifications:\n\n` +
                `Plan: ${plan}\n` +
                `CPU: ${cpu}\n` +
                `RAM: ${ram}\n` +
                `Storage: ${storage}\n` +
                `Bandwidth: ${bandwidth}\n` +
                `Price: ${price}/month\n\n` +
                `Please inform me about payment methods and next steps. Thank you!`;
            
            // Store order message for later use
            orderModal.setAttribute('data-order-message', orderMessage);
            
            // Show modal
            orderModal.classList.add('active');
        });
    });
    
    // Handle order button clicks for Service plans
    const serviceOrderButtons = document.querySelectorAll('.service-order-btn');
    serviceOrderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            const price = this.getAttribute('data-price');
            const feature1 = this.getAttribute('data-feature1');
            const feature2 = this.getAttribute('data-feature2');
            const feature3 = this.getAttribute('data-feature3');
            const feature4 = this.getAttribute('data-feature4');
            
            // Create order summary
            orderSummary.innerHTML = `
                <div class="space-y-2">
                    <div class="flex justify-between">
                        <span>Service:</span>
                        <span class="text-white font-medium">${service}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Price:</span>
                        <span class="text-white font-medium">${price}/month</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Features:</span>
                        <span class="text-white font-medium">${feature1}</span>
                    </div>
                    <div class="flex justify-between">
                        <span></span>
                        <span class="text-white font-medium">${feature2}</span>
                    </div>
                    <div class="flex justify-between">
                        <span></span>
                        <span class="text-white font-medium">${feature3}</span>
                    </div>
                    <div class="flex justify-between">
                        <span></span>
                        <span class="text-white font-medium">${feature4}</span>
                    </div>
                </div>
            `;
            
            // Create order message
            const orderMessage = `I would like to order ${service} with the following features:\n\n` +
                `Service: ${service}\n` +
                `Features:\n` +
                `- ${feature1}\n` +
                `- ${feature2}\n` +
                `- ${feature3}\n` +
                `- ${feature4}\n` +
                `Price: ${price}/month\n\n` +
                `Please inform me about payment methods and next steps. Thank you!`;
            
            // Store order message for later use
            orderModal.setAttribute('data-order-message', orderMessage);
            
            // Show modal
            orderModal.classList.add('active');
        });
    });
    

    // schols
    // Handle WhatsApp order button click
    whatsappOrder.addEventListener('click', function() {
        const orderMessage = orderModal.getAttribute('data-order-message');
        openWhatsApp(orderMessage);
        orderModal.classList.remove('active');
    });
    
    // Handle Telegram order button click
    telegramOrder.addEventListener('click', function() {
        const orderMessage = orderModal.getAttribute('data-order-message');
        openTelegram(orderMessage);
        orderModal.classList.remove('active');
    });
});