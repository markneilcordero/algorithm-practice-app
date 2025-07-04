// src/components/ResetSuccessToast.jsx
import React, { useEffect, useState } from 'react';

const ResetSuccessToast = ({ show, onClose }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    setVisible(show);
    if (show) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, 3000); // Auto-hide after 3s
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!visible) return null;

  return (
    <div
      className="position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1050 }}
    >
      <div className="toast show align-items-center text-white bg-success border-0 shadow">
        <div className="d-flex">
          <div className="toast-body">
            ✅ All progress has been cleared successfully.
          </div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            aria-label="Close"
            onClick={() => {
              setVisible(false);
              onClose();
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccessToast;
