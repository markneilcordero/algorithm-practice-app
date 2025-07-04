// src/pages/NotFoundPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NotFoundIllustration from '../components/NotFoundIllustration'; // optional
import '../styles/notfound.css'; // optional custom styling

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="container text-center py-5 notfound-wrapper">
        <NotFoundIllustration />

        <h1 className="display-4 fw-bold mt-4">404 - Page Not Found</h1>
        <p className="lead text-muted">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <button
          className="btn btn-primary mt-3"
          onClick={() => navigate('/')}
        >
          ⬅️ Back to Home
        </button>
      </div>

      <Footer />
    </>
  );
};

export default NotFoundPage;
