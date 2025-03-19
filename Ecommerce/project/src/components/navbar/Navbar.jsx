import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalItems = cartItems.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4" to="/">
          Shopping <span className="text-primary">..</span>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <div className="input-group me-3">
                <input type="text" className="form-control" placeholder="Search" />
                <span className="input-group-text"><IoSearch /></span>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item position-relative">
            <li className="nav-item">
  <Link className="nav-link position-relative" to="/cart">
    <MdOutlineShoppingCart className="fs-4" />
    {totalItems > 0 && (
      <span className="badge bg-primary position-absolute top-0 start-100 translate-middle">
        {totalItems}
      </span>
    )}
  </Link>
</li>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
