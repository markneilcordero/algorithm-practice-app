// src/pages/SettingsPage.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SettingsCard from '../components/SettingsCard';
import ExportDataButton from '../components/ExportDataButton';
import ImportDataButton from '../components/ImportDataButton';
import ClearDataButton from '../components/ClearDataButton';
import ConfirmModal from '../components/ConfirmModal';
import ResetSuccessToast from '../components/ResetSuccessToast';

const SettingsPage = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleClearData = () => {
    localStorage.removeItem('algo-practice-app-v1');
    setShowConfirmModal(false);
    setShowSuccessToast(true);
  };

  return (
    <>
      <Navbar />
      <div className="container py-4">
        <h2 className="fw-bold mb-4 text-center">⚙️ App Settings</h2>

        <SettingsCard
          title="📥 Export Progress"
          description="Download your current progress data as a .json backup file."
        >
          <ExportDataButton />
        </SettingsCard>

        <SettingsCard
          title="📤 Import Progress"
          description="Upload a previously saved .json file to restore your progress."
        >
          <ImportDataButton />
        </SettingsCard>

        <SettingsCard
          title="🧹 Clear All Progress"
          description="Reset all stored data in LocalStorage. This cannot be undone."
        >
          <ClearDataButton onClick={() => setShowConfirmModal(true)} />
        </SettingsCard>
      </div>

      <Footer />

      {/* Modals & Toasts */}
      <ConfirmModal
        show={showConfirmModal}
        onConfirm={handleClearData}
        onCancel={() => setShowConfirmModal(false)}
        title="Are you sure?"
        message="This will permanently delete all progress data."
      />

      <ResetSuccessToast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} />
    </>
  );
};

export default SettingsPage;
