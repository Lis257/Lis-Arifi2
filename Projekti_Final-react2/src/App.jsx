import React, { useState, useMemo } from 'react';
import { 
  ShoppingCart, Search, Menu, X, Star, ArrowRight, Heart, 
  Trash2, Plus, Minus, ChevronLeft, ShoppingBag, Instagram, 
  Twitter, Facebook, Mail, MapPin, Phone, Users, Globe, Award, Send
} from 'lucide-react';

// --- CSS STYLES (Standard CSS embedded for single-file portability) ---
const STYLES = `
/* --- RESET & GLOBAL --- */
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; background-color: #f9fafb; color: #1f2937; -webkit-font-smoothing: antialiased; }
button { cursor: pointer; border: none; background: none; font-family: inherit; }
.container { max-width: 1280px; margin: 0 auto; padding: 0 1rem; }
.section-padding { padding-top: 4rem; padding-bottom: 4rem; }

/* --- BUTTONS --- */
.btn { padding: 0.75rem 1.5rem; border-radius: 9999px; font-weight: 600; transition: all 0.2s; display: inline-flex; align-items: center; justify-content: center; }
.btn-primary { background-color: #4f46e5; color: white; }
.btn-primary:hover { background-color: #4338ca; transform: scale(1.02); }
.btn-outline { border: 2px solid #e5e7eb; color: #9ca3af; }
.btn-outline:hover { border-color: #fecaca; color: #ef4444; }
.btn-block { width: 100%; }
.btn-large { padding: 1rem 2rem; font-size: 1.125rem; }

/* --- NAVBAR --- */
.navbar { position: sticky; top: 0; z-index: 50; background-color: white; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
.navbar-content { height: 4rem; display: flex; align-items: center; justify-content: space-between; }
/* Moved logo slightly left with negative margin */
.logo-section { display: flex; align-items: center; cursor: pointer; margin-left: -0.75rem; }
.logo-icon {margin-right: 1rem; display: flex; }
.logo-text { font-size: 1.25rem; font-weight: 700; color: #111827; }
/* Shifted links more to middle and increased gap */
.nav-links { display: flex; gap: 2.5rem; margin-left: 4rem; }
/* Increased font size and weight for nav buttons */
.nav-links button { font-size: 1.1rem; font-weight: 700; color: #6b7280; transition: color 0.2s; }
.nav-links button:hover, .nav-links button.active { color: #4f46e5; }
.search-section { flex: 1; display: flex; justify-content: center; padding: 0 2rem; }
.search-wrapper { position: relative; width: 100%; max-width: 24rem; }
.search-wrapper input { width: 100%; padding: 0.5rem 1rem 0.5rem 2.5rem; border-radius: 9999px; border: 1px solid #e5e7eb; background-color: #f9fafb; font-size: 0.875rem; }
.search-wrapper input:focus { outline: none; border-color: #4f46e5; box-shadow: 0 0 0 1px #4f46e5; }
.search-icon { position: absolute; left: 0.75rem; top: 0.65rem; color: #9ca3af; }
.nav-icons { display: flex; align-items: center; gap: 1.5rem; }
.icon-btn { position: relative; color: #4b5563; padding: 0.5rem; }
.icon-btn:hover { color: #4f46e5; }
.badge { position: absolute; top: 0; right: 0; background-color: #ef4444; color: white; font-size: 0.75rem; font-weight: 700; width: 1.25rem; height: 1.25rem; border-radius: 9999px; display: flex; align-items: center; justify-content: center; }
.mobile-only { display: none; }
.mobile-menu { padding: 1rem; border-top: 1px solid #f3f4f6; background: white; }
.mobile-menu button { display: block; width: 100%; text-align: left; padding: 0.75rem 0; font-weight: 500; color: #374151; }
.mobile-search { margin-top: 1rem; }
.mobile-search input { width: 100%; padding: 0.5rem 1rem; border: 1px solid #e5e7eb; border-radius: 0.5rem; }

/* --- HERO --- */
.hero { position: relative; background-color: #111827; color: white; overflow: hidden; height: 500px; display: flex; align-items: center; justify-content: center; text-align: center; }
.hero-overlay { position: absolute; inset: 0; }
.hero-overlay img { width: 100%; height: 100%; object-fit: cover; opacity: 0.4; }
.hero-content { position: relative; z-index: 10; padding: 0 1rem; }
.hero-content h1 { font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem; }
.hero-content p { font-size: 1.25rem; color: #d1d5db; margin-bottom: 2rem; max-width: 42rem; margin-left: auto; margin-right: auto; }

/* --- SHOP --- */
.filter-tabs { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-bottom: 2.5rem; }
.filter-btn { padding: 0.5rem 1.5rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; background-color: white; color: #4b5563; border: 1px solid #e5e7eb; }
.filter-btn:hover { background-color: #f9fafb; }
.filter-btn.active { background-color: #111827; color: white; border-color: #111827; transform: scale(1.05); }
.product-grid { display: grid; grid-template-columns: repeat(1, 1fr); gap: 2rem; }

/* --- PRODUCT CARD --- */
.product-card { background-color: white; border-radius: 0.75rem; overflow: hidden; border: 1px solid #f3f4f6; display: flex; flex-direction: column; transition: box-shadow 0.3s; }
.product-card:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
.card-image-wrapper { position: relative; aspect-ratio: 1 / 1; background-color: #f3f4f6; cursor: pointer; overflow: hidden; }
.card-image-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.product-card:hover .card-image-wrapper img { transform: scale(1.1); }
.card-overlay { position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(255, 255, 255, 0.9); padding: 0.4rem; border-radius: 50%; opacity: 0; transition: opacity 0.3s; }
.product-card:hover .card-overlay { opacity: 1; }
.card-info { padding: 1.25rem; flex-grow: 1; display: flex; flex-direction: column; }
.category-tag { font-size: 0.75rem; font-weight: 600; color: #4f46e5; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.25rem; }
.card-info h3 { font-size: 1.125rem; font-weight: 700; color: #111827; margin-bottom: 0.25rem; cursor: pointer; }
.card-info h3:hover { color: #4f46e5; }
.rating-row { display: flex; align-items: center; font-size: 0.875rem; color: #6b7280; margin-bottom: 1rem; }
.star-icon { fill: #facc15; color: #facc15; margin-right: 0.25rem; }
.price-row { margin-top: auto; display: flex; justify-content: space-between; align-items: center; }
.price { font-size: 1.25rem; font-weight: 700; color: #111827; }
.btn-add { background-color: #111827; color: white; padding: 0.5rem; border-radius: 0.5rem; display: flex; transition: background-color 0.2s; }
.btn-add:hover { background-color: #4f46e5; }

/* --- ABOUT PAGE --- */
.about-hero { background-color: #312e81; color: white; padding: 5rem 1rem; text-align: center; }
.about-hero h1 { font-size: 3rem; margin-bottom: 1rem; }
.about-hero p { font-size: 1.25rem; color: #a5b4fc; }
.about-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; margin-bottom: 5rem; }
.about-image { border-radius: 1rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
.about-image img { width: 100%; height: auto; display: block; }
.stats-grid { display: grid; grid-template-columns: 2fr 2fr; gap: 2rem; text-align: center; border-top: 1px solid #f3f4f6; padding-top: 4rem; }
.stat-item h3 { font-size: 2rem; font-weight: 700; color: #111827; margin: 0.5rem 0; }
.stat-item p { color: #6b7280; }

/* --- CONTACT PAGE --- */
.contact-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; margin-top: 3rem; }
.contact-info { display: flex; flex-direction: column; gap: 2rem; }
.info-card { background: #f9fafb; padding: 1.5rem; border-radius: 1rem; display: flex; align-items: center; gap: 1rem; }
.icon-box { background: #e0e7ff; color: #4f46e5; padding: 0.75rem; border-radius: 50%; display: flex; }
.contact-form-wrapper { background: white; padding: 2rem; border-radius: 1rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); border: 1px solid #f3f4f6; }
.form-row { display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
.form-group { margin-bottom: 1.5rem; }
.form-group label { display: block; font-size: 0.875rem; font-weight: 500; margin-bottom: 0.5rem; }
.form-group input, .form-group textarea { width: 100%; padding: 0.5rem 1rem; border: 1px solid #d1d5db; border-radius: 0.5rem; font-size: 1rem; }
.form-group input:focus, .form-group textarea:focus { border-color: #4f46e5; outline: none; ring: 2px solid #4f46e5; }

/* --- CART PAGE --- */
.cart-page h2 { font-size: 2rem; font-weight: 700; color: #111827; margin-bottom: 2rem; }
.cart-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
.cart-items { display: flex; flex-direction: column; gap: 1.5rem; }
.cart-item { display: flex; gap: 1.5rem; background: white; padding: 1.5rem; border-radius: 1rem; border: 1px solid #f3f4f6; }
.cart-img { width: 6rem; height: 6rem; border-radius: 0.75rem; overflow: hidden; flex-shrink: 0; }
.cart-img img { width: 100%; height: 100%; object-fit: cover; }
.cart-details { flex: 1; display: flex; flex-direction: column; }
.cart-header { display: flex; justify-content: space-between; font-weight: 500; font-size: 1.125rem; }
.cart-actions { margin-top: auto; display: flex; justify-content: space-between; align-items: flex-end; }
.quantity-controls { display: flex; align-items: center; border: 1px solid #e5e7eb; border-radius: 0.5rem; }
.quantity-controls button { padding: 0.5rem; transition: background-color 0.1s; }
.quantity-controls button:hover { background-color: #f3f4f6; }
.quantity-controls span { width: 2rem; text-align: center; font-weight: 500; }
.remove-btn { color: #ef4444; display: flex; align-items: center; gap: 0.25rem; font-size: 0.875rem; font-weight: 500; transition: color 0.2s; }
.remove-btn:hover { color: #b91c1c; }
.cart-summary { background: white; padding: 1.5rem; border-radius: 1rem; border: 1px solid #f3f4f6; height: fit-content; }
.cart-summary h3 { font-size: 1.25rem; margin-bottom: 1rem; }
.summary-row { display: flex; justify-content: space-between; padding: 1rem 0; border-bottom: 1px solid #f3f4f6; font-size: 0.875rem; color: #4b5563; }
.summary-row:last-child { border-bottom: none; }
.summary-row.total { font-weight: 700; font-size: 1.125rem; color: #111827; border-top: 2px solid #111827; padding-top: 1.5rem; margin-top: 1rem; }
.text-green { color: #16a34a; font-weight: 500; }
.empty-cart { text-align: center; padding: 4rem 0; color: #9ca3af; }
.empty-cart h3 { color: #1f2937; margin: 1rem 0; }

/* --- PRODUCT DETAIL --- */
.back-link { display: flex; align-items: center; color: #6b7280; font-weight: 500; margin-bottom: 2rem; }
.back-link:hover { color: #4f46e5; }
.product-detail-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; }
.detail-image { background: #f3f4f6; border-radius: 1.5rem; overflow: hidden; aspect-ratio: 4/5; }
.detail-image img { width: 100%; height: 100%; object-fit: cover; }
.detail-info { display: flex; flex-direction: column; justify-content: center; }
.category-label { color: #4f46e5; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.5rem; }
.detail-info h1 { font-size: 2.25rem; font-weight: 800; color: #111827; margin-bottom: 1rem; }
.detail-rating { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
.stars { display: flex; align-items: center; background: #fefce8; padding: 0.25rem 0.5rem; border-radius: 0.375rem; border: 1px solid #fef9c3; font-weight: 600; color: #111827; }
.description { font-size: 1.125rem; color: #4b5563; line-height: 1.75; margin-bottom: 2rem; }
.price-block { display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 0; border-top: 1px solid #f3f4f6; border-bottom: 1px solid #f3f4f6; margin-bottom: 2rem; }
.price-large { font-size: 1.875rem; font-weight: 700; color: #111827; }
.stock-badge { display: flex; align-items: center; gap: 0.5rem; color: #16a34a; font-weight: 500; background: #f0fdf4; padding: 0.25rem 0.75rem; border-radius: 9999px; }
.dot { width: 0.5rem; height: 0.5rem; background: #22c55e; border-radius: 50%; }
.action-buttons { display: flex; gap: 1rem; margin-bottom: 2rem; }
.btn-flex { flex: 1; gap: 0.5rem; }
.benefits-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.875rem; color: #6b7280; }
.benefit { display: flex; align-items: center; gap: 0.5rem; }

/* --- FOOTER --- */
.footer { background: #111827; color: #d1d5db; padding: 3rem 0; margin-top: 4rem; }
.footer-content { display: grid; grid-template-columns: 1fr; gap: 2rem; margin-bottom: 3rem; }
.footer-col h3 { color: white; font-size: 1.125rem; margin-bottom: 1rem; }
.footer-col h4 { color: white; font-weight: 600; margin-bottom: 1rem; }
.footer-col ul { list-style: none; }
.footer-col li { margin-bottom: 0.5rem; font-size: 0.875rem; cursor: pointer; transition: color 0.2s; }
.footer-col li:hover { color: #818cf8; }
.social-icons { display: flex; gap: 1rem; }
.social-icons svg { cursor: pointer; transition: color 0.2s; }
.social-icons svg:hover { color: #818cf8; }
.footer-bottom { border-top: 1px solid #1f2937; text-align: center; padding-top: 2rem; font-size: 0.875rem; color: #9ca3af; }

/* --- TOAST --- */
.toast-notification { position: fixed; top: 1.25rem; left: 50%; transform: translateX(-50%); background-color: #111827; color: white; padding: 0.75rem 1.5rem; border-radius: 0.5rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); z-index: 100; display: flex; align-items: center; animation: bounceIn 0.5s; }
.toast-icon { background: #22c55e; border-radius: 50%; padding: 0.15rem; margin-right: 0.75rem; display: flex; }
@keyframes bounceIn { 0% { transform: translate(-50%, -100%); opacity: 0; } 60% { transform: translate(-50%, 10%); opacity: 1; } 100% { transform: translate(-50%, 0); } }

/* --- MEDIA QUERIES --- */
@media (min-width: 640px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-grid { grid-template-columns: repeat(4, 1fr); }
  .form-row { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 768px) {
  .desktop-only { display: flex; }
  .mobile-only { display: none; }
  .hero h1 { font-size: 3.75rem; }
  .about-grid { grid-template-columns: 1fr 1fr; }
  .footer-content { grid-template-columns: repeat(4, 1fr); }
}
@media (min-width: 1024px) {
  .product-grid { grid-template-columns: repeat(4, 1fr); }
  .cart-grid { grid-template-columns: 2fr 1fr; }
  .contact-grid { grid-template-columns: 1fr 2fr; }
  .product-detail-grid { grid-template-columns: 1fr 1fr; }
}
`;

// --- MOCK DATA ---
const PRODUCTS = [
  // --- SNEAKERS ---
  {
    id: 1,
    name: "Air Strike Phantom",
    price: 189.99,
    category: "Sneakers",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=800",
    description: "Engineered for speed and stability. The Air Strike Phantom features our newest foam technology for cloud-like comfort."
  },
  {
    id: 3,
    name: "TechRunner 2025",
    price: 145.50,
    category: "Sneakers",
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800",
    description: "The future of running is here. Adaptive mesh upper breathes with your foot, while the carbon plate propels you forward."
  },
  {
    id: 4,
    name: "Canvas Minimalist",
    price: 45.99,
    category: "Sneakers",
    rating: 4.3,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=800",
    description: "Classic style meets modern comfort. The perfect everyday shoe for the office or the skate park."
  },
  {
    id: 8,
    name: "Retro High Tops",
    price: 110.00,
    category: "Sneakers",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=800",
    description: "Throwback style with modern durability. High ankle support and premium leather construction."
  },
  {
    id: 9,
    name: "Urban Dash",
    price: 95.00,
    category: "Sneakers",
    rating: 4.6,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800",
    description: "Lightweight and versatile, designed for the fast-paced city life."
  },
  {
    id: 10,
    name: "Velocity Pro",
    price: 130.00,
    category: "Sneakers",
    rating: 4.7,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800",
    description: "Professional grade running shoes with enhanced grip and stability."
  },
  {
    id: 11,
    name: "Street Legend",
    price: 125.00,
    category: "Sneakers",
    rating: 4.5,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800",
    description: "Iconic street style with durable materials for everyday wear."
  },
  {
    id: 12,
    name: "Cloud Walker",
    price: 160.00,
    category: "Sneakers",
    rating: 4.9,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&q=80&w=800",
    description: "Experience walking on clouds with our softest sole technology yet."
  },

  // --- HOODIES ---
  {
    id: 2,
    name: "Urban Explorer Hoodie",
    price: 65.00,
    category: "Hoodies",
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800",
    description: "Heavyweight cotton blend perfect for chilly evenings. Features a minimal design and reinforced stitching."
  },
  {
    id: 7,
    name: "Drift Beige Hoodie",
    price: 70.00,
    category: "Hoodies",
    rating: 4.4,
    reviews: 32,
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?auto=format&fit=crop&q=80&w=800",
    description: "Soft beige tones for a relaxed aesthetic. Oversized fit for maximum comfort."
  },
  {
    id: 13,
    name: "Midnight Black Pullover",
    price: 60.00,
    category: "Hoodies",
    rating: 4.7,
    reviews: 115,
    image: "https://images.unsplash.com/photo-1572495559441-11d4d8c79234?auto=format&fit=crop&q=80&w=800",
    description: "Classic black pullover that goes with everything. Essential for any wardrobe."
  },
  {
    id: 14,
    name: "City Grey Zip-Up",
    price: 75.00,
    category: "Hoodies",
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&q=80&w=800",
    description: "Versatile zip-up hoodie for layering in unpredictable city weather."
  },
  {
    id: 15,
    name: "Sunset Orange Oversized",
    price: 80.00,
    category: "Hoodies",
    rating: 4.8,
    reviews: 54,
    image: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?auto=format&fit=crop&q=80&w=800",
    description: "Bold color for a bold look. Oversized fit for ultimate comfort and style."
  },
  {
    id: 16,
    name: "Forest Green Essential",
    price: 68.00,
    category: "Hoodies",
    rating: 4.5,
    reviews: 62,
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&q=80&w=800",
    description: "Deep green hues inspired by nature. Sustainable cotton blend."
  },
  {
    id: 17,
    name: "Tech Fleece Navy",
    price: 90.00,
    category: "Hoodies",
    rating: 4.9,
    reviews: 180,
    image: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80&w=800",
    description: "Advanced fleece material that provides warmth without the weight."
  },
  {
    id: 18,
    name: "Graphic Print Urban",
    price: 72.00,
    category: "Hoodies",
    rating: 4.3,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1513755564315-953b07e323f2?auto=format&fit=crop&q=80&w=800",
    description: "Featuring unique urban artwork. Stand out from the crowd."
  },

  // --- JACKETS ---
  {
    id: 5,
    name: "Midnight Bomber",
    price: 120.00,
    category: "Jackets",
    rating: 4.7,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800",
    description: "Sleek, water-resistant, and warm. The Midnight Bomber is your go-to layer for transitional weather."
  },
  {
    id: 19,
    name: "Denim Classic",
    price: 85.00,
    category: "Jackets",
    rating: 4.6,
    reviews: 150,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d8c9230c?auto=format&fit=crop&q=80&w=800",
    description: "Timeless denim jacket that ages beautifully. Rugged and reliable."
  },
  {
    id: 20,
    name: "Puffer Insulated",
    price: 150.00,
    category: "Jackets",
    rating: 4.8,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1545593169-5297d6dd2598?auto=format&fit=crop&q=80&w=800",
    description: "Maximum warmth for the coldest days. Lightweight insulation technology."
  },
  {
    id: 21,
    name: "Windbreaker Sport",
    price: 75.00,
    category: "Jackets",
    rating: 4.5,
    reviews: 88,
    image: "https://images.unsplash.com/photo-1605908502702-a2de290cee89?auto=format&fit=crop&q=80&w=800",
    description: "Lightweight protection against wind and light rain. Perfect for runners."
  },
  {
    id: 22,
    name: "Leather Moto",
    price: 250.00,
    category: "Jackets",
    rating: 4.9,
    reviews: 65,
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=800",
    description: "Genuine leather with a rebellious spirit. Durable and stylish."
  },
  {
    id: 23,
    name: "Parka Arctic",
    price: 200.00,
    category: "Jackets",
    rating: 4.8,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce6671b3?auto=format&fit=crop&q=80&w=800",
    description: "Long-line coat designed for extreme weather conditions."
  },
  {
    id: 24,
    name: "Varsity College",
    price: 110.00,
    category: "Jackets",
    rating: 4.7,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1559551409-dadc959f76b8?auto=format&fit=crop&q=80&w=800",
    description: "Vintage inspired varsity jacket with wool blend body and faux leather sleeves."
  },
  {
    id: 25,
    name: "Rain Shell",
    price: 95.00,
    category: "Jackets",
    rating: 4.6,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?auto=format&fit=crop&q=80&w=800",
    description: "100% waterproof shell for those rainy city commutes."
  },

  // --- ACCESSORIES ---
  {
    id: 6,
    name: "Metro Backpack",
    price: 89.95,
    category: "Accessories",
    rating: 4.6,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
    description: "Fits a 16-inch laptop with room to spare. Waterproof zippers and ergonomic straps make it perfect for commuting."
  },
  {
    id: 26,
    name: "Cap Snapback",
    price: 30.00,
    category: "Accessories",
    rating: 4.5,
    reviews: 120,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800",
    description: "Classic snapback design with embroidered logo. Adjustable fit."
  },
  {
    id: 27,
    name: "Beanie Knit",
    price: 25.00,
    category: "Accessories",
    rating: 4.7,
    reviews: 200,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&q=80&w=800",
    description: "Soft knit beanie to keep you warm and stylish."
  },
  {
    id: 28,
    name: "Tech Sling Bag",
    price: 55.00,
    category: "Accessories",
    rating: 4.6,
    reviews: 58,
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
    description: "Compact sling bag for your daily essentials. Phone, wallet, keys."
  },
  {
    id: 29,
    name: "Leather Wallet",
    price: 45.00,
    category: "Accessories",
    rating: 4.8,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800",
    description: "Premium leather wallet with RFID protection."
  },
  {
    id: 30,
    name: "Sport Socks (3-Pack)",
    price: 18.00,
    category: "Accessories",
    rating: 4.5,
    reviews: 300,
    image: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?auto=format&fit=crop&q=80&w=800",
    description: "Breathable, moisture-wicking socks for high performance."
  },
  {
    id: 31,
    name: "Sunglasses Aviator",
    price: 110.00,
    category: "Accessories",
    rating: 4.7,
    reviews: 82,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=800",
    description: "Classic aviator style with polarized lenses."
  },
  {
    id: 32,
    name: "Watch Chrono",
    price: 180.00,
    category: "Accessories",
    rating: 4.9,
    reviews: 40,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800",
    description: "Elegant chronograph watch suitable for business and casual wear."
  }
];

const CATEGORIES = ["All", "Sneakers", "Hoodies", "Jackets", "Accessories"];

export default function App() {
  const [view, setView] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to cart`);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + change;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const navigateToProduct = (product) => {
    setSelectedProduct(product);
    setView('product');
    window.scrollTo(0, 0);
  };

  const changeView = (newView) => {
    setView(newView);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWithTax = (cartTotal * 1.08).toFixed(2);


  // --- COMPONENTS ---

  const Navbar = () => (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo-section" onClick={() => changeView('home')}>
          <div className="logo-icon">
            <img src='logo.png' style={{width: '40px', height: '40px'}}/>
          </div>
          <span className="logo-text">Fashion</span>
          
        </div>
        <div className="nav-links desktop-only">
          <button onClick={() => changeView('home')} className={view === 'home' || view === 'product' ? 'active' : ''}>Shop</button>
          <button onClick={() => changeView('about')} className={view === 'about' ? 'active' : ''}>About Us</button>
          <button onClick={() => changeView('contact')} className={view === 'contact' ? 'active' : ''}>Contact</button>
        </div>

        <div className="search-section desktop-only">
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (view !== 'home') setView('home');
              }}
            />
            <Search className="search-icon" size={14} />
          </div>
        </div>

        <div className="nav-icons">
          <button className="icon-btn cart-btn" onClick={() => changeView('cart')}>
            <ShoppingCart size={24} />
            {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
          </button>
          <button className="icon-btn mobile-only" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <button onClick={() => changeView('home')}>Shop</button>
          <button onClick={() => changeView('about')}>About Us</button>
          <button onClick={() => changeView('contact')}>Contact</button>
          <div className="mobile-search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (view !== 'home') setView('home');
              }}
            />
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <div className="hero">
      <div className="hero-overlay">
        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000" alt="Hero" />
      </div>
      <div className="hero-content">
        <h1>Summer Collection 2025</h1>
        <p>Discover the latest trends in streetwear and performance gear.</p>
        <button 
          onClick={() => {
            const shopSection = document.getElementById('shop-section');
            if(shopSection) shopSection.scrollIntoView({ behavior: 'smooth' });
          }}
          className="btn btn-primary btn-large"
        >
          Shop Now <ArrowRight size={20} style={{marginLeft: '8px'}} />
        </button>
      </div>
    </div>
  );

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <div className="card-image-wrapper" onClick={() => navigateToProduct(product)}>
        <img src={product.image} alt={product.name} />
        <div className="card-overlay">
          <Heart size={18} />
        </div>
      </div>
      <div className="card-info">
        <span className="category-tag">{product.category}</span>
        <h3 onClick={() => navigateToProduct(product)}>{product.name}</h3>
        <div className="rating-row">
          <Star className="star-icon" size={14} fill="#facc15" />
          <span>{product.rating} ({product.reviews})</span>
        </div>
        <div className="price-row">
          <span className="price">${product.price.toFixed(2)}</span>
          <button onClick={() => addToCart(product)} className="btn-add">
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <div className="logo-section" style={{marginBottom: '1rem'}}>
            <div className="logo-icon" style={{backgroundColor: '#818cf8'}}>
              <ShoppingBag size={24} />
            </div>
            <span className="logo-text" style={{color: 'white'}}>Fashion</span>
          </div>
          <p style={{fontSize: '0.875rem', maxWidth: '250px'}}>High-quality fashion delivered to your door. Style meets performance.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li onClick={() => changeView('home')}>Shop All</li>
            <li onClick={() => changeView('about')}>Our Story</li>
            <li onClick={() => changeView('contact')}>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Categories</h3>
          <ul>
            <li onClick={() => {changeView('home'); setActiveCategory('Sneakers');}}>Sneakers</li>
            <li onClick={() => {changeView('home'); setActiveCategory('Hoodies');}}>Hoodies</li>
            <li onClick={() => {changeView('home'); setActiveCategory('Jackets');}}>Jackets</li>
            <li onClick={() => {changeView('home'); setActiveCategory('Accessories');}}>Accessories</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Instagram size={24} />
            <Twitter size={24} />
            <Facebook size={24} />
          </div>
          <h4 style={{marginTop: '1.5rem'}}>Newsletter</h4>
          <div style={{display: 'flex', gap: '0.5rem'}}>
            <input type="email" placeholder="Your email" style={{padding: '0.5rem', borderRadius: '0.5rem', border: 'none', color: '#111827'}} />
            <button className="btn btn-primary" style={{padding: '0.5rem'}}>Sign Up</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Projekti Final. All rights reserved.
      </div>
    </footer>
  );


  return (
    <div className="app">
      {/* Inject styles */}
      <style>{STYLES}</style>

      <Navbar />
      
      {toast && (
        <div className="toast-notification">
           <div className="toast-icon"><Plus size={12} /></div>
           {toast}
        </div>
      )}

      <main>
        {view === 'home' && (
          <>
            <Hero />
            <div id="shop-section" className="container section-padding">
              <div className="filter-tabs">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="product-grid">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <Search size={48} style={{margin: '1rem auto', display: 'block'}} />
                  <h3 style={{fontSize: '1.25rem', color: '#111827'}}>No products found</h3>
                  <p style={{color: '#6b7280'}}>Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          </>
        )}

        {view === 'about' && (
          <div className="about-page">
            <div className="about-hero">
              <h1>Our Story</h1>
              <p>Born in the streets of Prishtina, expanded to the world.</p>
            </div>
            <div className="container section-padding">
              <div className="about-grid">
                <div className="about-text">
                  <h2>Designed for the Future</h2>
                  <p style={{marginTop: '1rem', color: '#4b5563', lineHeight: 1.7}}>Founded in 2024, Projekti_Final started as a small university project and grew into a passion for quality design. Our mission is to blend high fashion with athletic performance, creating clothes that feel as good as they look.</p>
                  <p style={{marginTop: '1rem', color: '#4b5563', lineHeight: 1.7}}>We believe that what you wear affects how you feel, and how you feel affects what you do. We are committed to sustainable sourcing and ethical production, ensuring every piece you buy is a conscious choice.</p>
                </div>
                <div className="about-image">
                  <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team" />
                </div>
              </div>
              <div className="stats-grid">
                <div className="stat-item"><Users size={32} style={{color: '#4f46e5'}} /><h3>50k+</h3><p>Customers</p></div>
                <div className="stat-item"><Globe size={32} style={{color: '#4f46e5'}} /><h3>12</h3><p>Countries</p></div>
                <div className="stat-item"><Award size={32} style={{color: '#4f46e5'}} /><h3>#1</h3><p>Design</p></div>
                <div className="stat-item"><Heart size={32} style={{color: '#4f46e5'}} /><h3>100%</h3><p>Satisfaction</p></div>
              </div>
            </div>
          </div>
        )}

        {view === 'contact' && (
          <div className="container section-padding contact-page">
            <div className="section-header" style={{textAlign: 'center', marginBottom: '2rem'}}>
              <h1 style={{fontSize: '2.5rem', fontWeight: 800}}>Get in Touch</h1>
              <p style={{fontSize: '1.125rem', color: '#6b7280'}}>Have questions? We'd love to hear from you.</p>
            </div>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="info-card">
                  <div className="icon-box"><Mail size={24} /></div>
                  <div><h3>Email Us</h3><p>support@projekti_final.com</p></div>
                </div>
                <div className="info-card">
                  <div className="icon-box"><MapPin size={24} /></div>
                  <div><h3>Visit Us</h3><p>Mother Teresa Blvd, Prishtina</p></div>
                </div>
                <div className="info-card">
                  <div className="icon-box"><Phone size={24} /></div>
                  <div><h3>Call Us</h3><p>+383 44 123 456</p></div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <form className="contact-form" onSubmit={(e) => { e.preventDefault(); showToast("Message sent successfully!"); }}>
                  <div className="form-row">
                    <div className="form-group"><label>First Name</label><input type="text" required placeholder="John"/></div>
                    <div className="form-group"><label>Last Name</label><input type="text" required placeholder="Doe"/></div>
                  </div>
                  <div className="form-group"><label>Email</label><input type="email" required placeholder="john@example.com"/></div>
                  <div className="form-group"><label>Message</label><textarea rows="4" required placeholder="How can we help?"></textarea></div>
                  <button type="submit" className="btn btn-primary btn-block">Send Message <Send size={18} style={{marginLeft: '0.5rem'}} /></button>
                </form>
              </div>
            </div>
          </div>
        )}

        {view === 'product' && selectedProduct && (
          <div className="container section-padding product-detail-page">
            <button onClick={() => changeView('home')} className="back-link">
              <ChevronLeft size={20} /> Back to shopping
            </button>
            <div className="product-detail-grid">
              <div className="detail-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} 
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x1000/f3f4f6/1f2937?text=Image+Error"; }}
                />
              </div>
              <div className="detail-info">
                <span className="category-label">{selectedProduct.category}</span>
                <h1>{selectedProduct.name}</h1>
                <div className="detail-rating">
                  <div className="stars"><Star size={16} fill="#facc15" /> <span>{selectedProduct.rating}</span></div>
                  <span className="reviews">{selectedProduct.reviews} verified reviews</span>
                </div>
                <p className="description">{selectedProduct.description}</p>
                <div className="price-block">
                  <span className="price-large">${selectedProduct.price.toFixed(2)}</span>
                  <div className="stock-badge"><span className="dot"></span> In Stock</div>
                </div>
                <div className="action-buttons">
                  <button onClick={() => addToCart(selectedProduct)} className="btn btn-primary btn-large btn-flex">
                    <ShoppingBag size={20} /> Add to Cart
                  </button>
                  <button className="btn btn-outline btn-large icon-only"><Heart size={24} /></button>
                </div>
                <div className="benefits-grid">
                  <div className="benefit">🚚 Free Delivery</div>
                  <div className="benefit">🛡️ 2 Year Warranty</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'cart' && (
          <div className="container section-padding cart-page">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
              <div className="empty-cart" style={{textAlign: 'center', padding: '4rem', color: '#6b7280'}}>
                <ShoppingBag size={64} style={{margin: '0 auto 1rem'}}/>
                <h3>Your cart is empty</h3>
                <button onClick={() => changeView('home')} className="btn btn-primary" style={{marginTop: '1rem'}}>Start Shopping</button>
              </div>
            ) : (
              <div className="cart-grid">
                <div className="cart-items">
                  {cart.map(item => (
                    <div key={item.id} className="cart-item">
                      <div className="cart-img"><img src={item.image} alt={item.name} 
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/f3f4f6/1f2937?text=Img"; }}
                      /></div>
                      <div className="cart-details">
                        <div className="cart-header"><h3>{item.name}</h3><p>${(item.price * item.quantity).toFixed(2)}</p></div>
                        <p className="item-category" style={{color: '#6b7280'}}>{item.category}</p>
                        <div className="cart-actions">
                          <div className="quantity-controls">
                            <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}><Minus size={14} /></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="remove-btn"><Trash2 size={16} /> Remove</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart-summary">
                  <h3>Order Summary</h3>
                  <div className="summary-row"><span>Subtotal</span><span>${cartTotal.toFixed(2)}</span></div>
                  <div className="summary-row"><span>Shipping</span><span className="text-green">Free</span></div>
                  <div className="summary-row"><span>Tax</span><span>${(cartTotal * 0.08).toFixed(2)}</span></div>
                  <div className="summary-row total"><span>Total</span><span>${totalWithTax}</span></div>
                  <button 
                    onClick={() => showToast("Simulated Checkout: Payment Processed!")} 
                    className="btn btn-primary btn-block btn-large" 
                    style={{marginTop: '1.5rem'}}
                  >
                    Proceed to Checkout
                  </button>
                  <p className="text-center mt-3 text-xs text-gray-500">Secure SSL Encryption</p>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}