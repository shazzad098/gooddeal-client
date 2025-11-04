import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        products: 0,
        customers: 0,
        orders: 0
    });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        fetchFeaturedProducts();
        fetchStats();

        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [currentSlide, isAutoPlaying]);

    const fetchFeaturedProducts = async () => {
        try {
            const res = await axios.get('/api/products?limit=4');
            setFeaturedProducts(res.data.products || []);
        } catch (error) {
            console.error('Error fetching featured products:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStats = async () => {
        setStats({
            products: 1250,
            customers: 8500,
            orders: 12000
        });
    };

    const heroSlides = [
        {
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200",
            badge: "Premium Quality",
            title: "Premium Textile Solutions",
            subtitle: "Discover exceptional fabric quality with unbeatable prices. Quality guaranteed, satisfaction assured."
        },
        {
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
            badge: "Fast Delivery",
            title: "Global Textile Supply",
            subtitle: "Get your fabric orders delivered worldwide. Track every step in real time with our logistics network."
        },
        {
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
            badge: "Customer First",
            title: "Your Textile Partner",
            subtitle: "Dedicated 24/7 support, quality assurance, and seamless business experience tailored for you."
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const categories = [
        {
            name: 'Cotton Fabrics',
            description: 'Premium quality cotton materials',
            image: 'https://images.unsplash.com/photo-1523380744952-b7e00e6e2ffa?w=400',
            link: '/products?category=cotton',
            icon: '👕'
        },
        {
            name: 'Silk Collection',
            description: 'Luxurious silk fabrics',
            image: 'https://images.unsplash.com/photo-1523381140794-a9e493f419a3?w=400',
            link: '/products?category=silk',
            icon: '🎀'
        },
        {
            name: 'Wool & Knits',
            description: 'Warm and durable wool materials',
            image: 'https://images.unsplash.com/photo-1598703247910-481ebd69d8e4?w=400',
            link: '/products?category=wool',
            icon: '🧶'
        },
        {
            name: 'Synthetic Fabrics',
            description: 'Modern synthetic materials',
            image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400',
            link: '/products?category=synthetic',
            icon: '🔬'
        }
    ];

    const services = [
        {
            icon: '🏭',
            title: 'Fabric Manufacturing',
            description: 'State-of-the-art textile manufacturing with quality control'
        },
        {
            icon: '🎨',
            title: 'Custom Printing',
            description: 'Custom design and printing services for unique patterns'
        },
        {
            icon: '🌍',
            title: 'Global Export',
            description: 'Worldwide shipping and export services'
        },
        {
            icon: '🔧',
            title: 'Technical Support',
            description: 'Expert technical support for all your textile needs'
        }
    ];

    return (
        <div className="homepage">
            {/* === HERO CAROUSEL SECTION === */}
            <section className="hero-section">
                <div className="extice-carousel">
                    <div className="carousel-container">
                        {heroSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                            >
                                <div
                                    className="carousel-slide-bg"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                ></div>
                                <div className="carousel-slide-overlay">
                                    <div className="carousel-slide-content">
                                        <div className="carousel-badge">
                                            <span className="badge-text">{slide.badge}</span>
                                        </div>
                                        <h1 className="carousel-title">
                                            {slide.title}
                                        </h1>
                                        <p className="carousel-subtitle">
                                            {slide.subtitle}
                                        </p>
                                        <div className="carousel-actions">
                                            <Link to="/products" className="btn btn-primary">
                                                Explore Collection
                                                <span className="btn-icon">→</span>
                                            </Link>
                                            <Link to="/about" className="btn btn-secondary">
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Carousel Controls */}
                    <button className="carousel-control prev" onClick={prevSlide}>
                        ‹
                    </button>
                    <button className="carousel-control next" onClick={nextSlide}>
                        ›
                    </button>

                    {/* Carousel Indicators */}
                    <div className="carousel-indicators">
                        {heroSlides.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            {/* === STATS SECTION === */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">{stats.products}+</div>
                            <div className="stat-label">Products</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{stats.customers}+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">{stats.orders}+</div>
                            <div className="stat-label">Orders Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* === CATEGORIES SECTION === */}
            <section className="categories-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Fabric Categories</h2>
                        <p>Premium quality textiles for every need</p>
                    </div>
                    <div className="categories-grid">
                        {categories.map((category, index) => (
                            <Link key={index} to={category.link} className="category-card">
                                <div className="category-image">
                                    <img src={category.image} alt={category.name} />
                                    <div className="category-overlay"></div>
                                    <div className="category-icon">{category.icon}</div>
                                </div>
                                <div className="category-content">
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                    <span className="category-link">Explore →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* === SERVICES SECTION === */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Services</h2>
                        <p>Comprehensive textile solutions for your business</p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* === FEATURED PRODUCTS SECTION === */}
            <section className="products-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Products</h2>
                        <p>Check out our premium textile collections</p>
                    </div>
                    {loading ? (
                        <div className="loading-products">
                            <div className="spinner"></div>
                            <p>Loading featured products...</p>
                        </div>
                    ) : (
                        <div className="products-grid">
                            {featuredProducts.map(product => (
                                <div key={product._id} className="product-card">
                                    <div className="product-image">
                                        <img
                                            src={product.images?.[0] || '/images/placeholder.jpg'}
                                            alt={product.name}
                                        />
                                        <div className="product-overlay">
                                            <Link to={`/products/${product._id}`} className="btn btn-primary">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <span className="product-category">{product.category}</span>
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-description">
                                            {product.description.length > 80
                                                ? `${product.description.substring(0, 80)}...`
                                                : product.description
                                            }
                                        </p>
                                        <div className="product-footer">
                                            <span className="product-price">${product.price}</span>
                                            <span className={`product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                                                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="section-footer">
                        <Link to="/products" className="btn-outline">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>

            {/* === CTA SECTION === */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Start Your Textile Project?</h2>
                        <p>Contact us today for premium fabric solutions and expert guidance</p>
                        <div className="cta-actions">
                            <Link to="/contact" className="btn btn-primary">
                                Get In Touch
                            </Link>
                            <Link to="/catalog" className="btn btn-secondary">
                                Download Catalog
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;