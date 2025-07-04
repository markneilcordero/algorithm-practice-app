// src/components/ConfirmModal.jsx
import React from 'react';

const ConfirmModal = ({ show, onConfirm, onCancel, title, message }) => {
  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content shadow">
          <div className="modal-header">
            <h5 className="modal-title">{title || 'Are you sure?'}</h5>
            <button type="button" className="btn-close" onClick={onCancel} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>{message || 'This action cannot be undone.'}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
            <button type="button" className="btn btn-danger" onClick={onConfirm}>
              Yes, Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
