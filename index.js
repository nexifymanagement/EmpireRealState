
        // Sample listing data
        const listings = [
            {
                id: 1,
                title: "Luxury Penthouse in SoHo",
                address: "456 Broadway, SoHo, NY 10013",
                price: "$4,250,000",
                bedrooms: 3,
                bathrooms: 3.5,
                sqft: 2800,
                type: "penthouse",
                neighborhood: "manhattan",
                status: "For Sale",
                description: "Stunning penthouse with panoramic city views, private terrace, and high-end finishes throughout. This spacious residence features an open chef's kitchen, floor-to-ceiling windows, and luxurious master suite.",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 2,
                title: "Modern Loft in Williamsburg",
                address: "123 Berry Street, Williamsburg, NY 11211",
                price: "$1,850,000",
                bedrooms: 2,
                bathrooms: 2,
                sqft: 1800,
                type: "loft",
                neighborhood: "brooklyn",
                status: "For Sale",
                description: "Industrial-chic loft with exposed brick, high ceilings, and oversized windows. Features open living space, gourmet kitchen, and convenient location near restaurants and transportation.",
                image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 3,
                title: "Chic Condo in Tribeca",
                address: "78 Hudson Street, Tribeca, NY 10013",
                price: "$3,750,000",
                bedrooms: 2,
                bathrooms: 2.5,
                sqft: 2200,
                type: "condo",
                neighborhood: "manhattan",
                status: "For Sale",
                description: "Sophisticated condo in premier Tribeca building with doorman, fitness center, and roof deck. This sun-filled unit features custom millwork, premium appliances, and spa-like bathrooms.",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 4,
                title: "Townhouse in Park Slope",
                address: "456 5th Avenue, Park Slope, NY 11215",
                price: "$2,950,000",
                bedrooms: 4,
                bathrooms: 3.5,
                sqft: 3200,
                type: "townhouse",
                neighborhood: "brooklyn",
                status: "For Sale",
                description: "Beautifully renovated brownstone with original details and modern amenities. Features garden, chef's kitchen, and spacious bedrooms. Perfect for entertaining with large parlor floor.",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 5,
                title: "Luxury Apartment in Upper West Side",
                address: "200 Central Park West, New York, NY 10024",
                price: "$5,200,000",
                bedrooms: 3,
                bathrooms: 3,
                sqft: 2600,
                type: "apartment",
                neighborhood: "manhattan",
                status: "For Sale",
                description: "Elegant pre-war apartment with Central Park views. Features grand living room, formal dining room, and butler's pantry. Building amenities include 24-hour doorman and fitness center.",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 6,
                title: "Waterfront Condo in Long Island City",
                address: "45-10 Center Boulevard, Long Island City, NY 11101",
                price: "$1,350,000",
                bedrooms: 1,
                bathrooms: 1.5,
                sqft: 1200,
                type: "condo",
                neighborhood: "queens",
                status: "For Sale",
                description: "Bright corner unit with stunning East River and Manhattan skyline views. Building features include pool, gym, and concierge service. Easy commute to Manhattan.",
                image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 7,
                title: "Modern High-Rise in Midtown",
                address: "555 8th Avenue, New York, NY 10018",
                price: "$2,100,000",
                bedrooms: 2,
                bathrooms: 2,
                sqft: 1500,
                type: "condo",
                neighborhood: "manhattan",
                status: "For Sale",
                description: "Sleek condo in Midtown with floor-to-ceiling windows and open-concept living. Building amenities include rooftop deck, fitness center, and 24-hour concierge.",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 8,
                title: "Historic Brownstone in Harlem",
                address: "220 Lenox Avenue, New York, NY 10027",
                price: "$1,950,000",
                bedrooms: 3,
                bathrooms: 2,
                sqft: 2100,
                type: "townhouse",
                neighborhood: "manhattan",
                status: "For Sale",
                description: "Charming Harlem brownstone with original details and modern updates. Features private backyard, chef's kitchen, and spacious bedrooms. Close to transportation and dining.",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
        ];

        // Function to render listings
        function renderListings(listingsToRender) {
            const container = document.getElementById('listings-container');
            container.innerHTML = '';

            if (listingsToRender.length === 0) {
                container.innerHTML = '<p style="grid-column:1/-1;text-align:center;font-size:18px;">No properties match your search criteria. Please try different filters.</p>';
                return;
            }

            listingsToRender.forEach(listing => {
                const listingCard = document.createElement('div');
                listingCard.className = 'listing-card';
                listingCard.innerHTML = `
                    <div class="listing-img">
                        <img src="${listing.image}" alt="${listing.title}">
                        <div class="listing-badge">${listing.status}</div>
                    </div>
                    <div class="listing-details">
                        <div class="listing-price">${listing.price}</div>
                        <h3 class="listing-address">${listing.address}</h3>
                        <div class="listing-features">
                            <span><i class="fas fa-bed"></i> ${listing.bedrooms} BR</span>
                            <span><i class="fas fa-bath"></i> ${listing.bathrooms} BA</span>
                            <span><i class="fas fa-ruler-combined"></i> ${listing.sqft} sqft</span>
                        </div>
                        <p class="listing-description">${listing.description}</p>
                        <a href="#" class="btn btn-primary" style="display:block;text-align:center;">View Details</a>
                    </div>
                `;
                container.appendChild(listingCard);
            });
        }

        // Initial render
        renderListings(listings);

        // Filter functionality
        document.addEventListener('DOMContentLoaded', function() {
            const propertyTypeFilter = document.getElementById('property-type');
            const bedroomsFilter = document.getElementById('bedrooms');
            const priceFilter = document.getElementById('price-range');
            const locationFilter = document.getElementById('location');
            const searchForm = document.querySelector('.search-filters');

            // Tab switching
            const tabs = document.querySelectorAll('.search-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    tabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    applyFilters();
                });
            });

            function applyFilters() {
                const typeValue = propertyTypeFilter.value;
                const bedroomsValue = bedroomsFilter.value;
                const priceValue = priceFilter.value;
                const locationValue = locationFilter.value;
                const activeTab = document.querySelector('.search-tab.active').textContent.toLowerCase();

                const filteredListings = listings.filter(listing => {
                    // Check if listing matches active tab (buy/rent/commercial)
                    // In a real app, you would have different data for each tab
                    if (activeTab === 'rent') return false; // Just for demo
                    if (activeTab === 'commercial') return false; // Just for demo
                    
                    // Property type filter
                    if (typeValue && listing.type !== typeValue) return false;
                    
                    // Bedrooms filter
                    if (bedroomsValue && listing.bedrooms < parseInt(bedroomsValue)) return false;
                    
                    // Price filter
                    if (priceValue) {
                        const [min, max] = priceValue.split('-').map(Number);
                        const listingPrice = Number(listing.price.replace(/[^0-9]/g, ''));
                        
                        if (min && listingPrice < min) return false;
                        if (max && listingPrice > max) return false;
                    }
                    
                    // Location filter
                    if (locationValue && listing.neighborhood !== locationValue) return false;
                    
                    return true;
                });

                renderListings(filteredListings);
            }

            // Add event listeners to all filters
            propertyTypeFilter.addEventListener('change', applyFilters);
            bedroomsFilter.addEventListener('change', applyFilters);
            priceFilter.addEventListener('change', applyFilters);
            locationFilter.addEventListener('change', applyFilters);

            // Prevent form submission
            searchForm.addEventListener('submit', function(e) {
                e.preventDefault();
                applyFilters();
            });

            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });

            // Update mobile menu on resize
            window.addEventListener('resize', function() {
                if (window.innerWidth > 992) {
                    navLinks.style.display = 'flex';
                } else {
                    navLinks.style.display = 'none';
                }
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (window.innerWidth <= 992) {
                        document.querySelector('.nav-links').style.display = 'none';
                    }
                }
            });
        });
    