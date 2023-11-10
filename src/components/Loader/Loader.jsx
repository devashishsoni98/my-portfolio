import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    <div className={`loader-container ${loading ? 'loading' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
