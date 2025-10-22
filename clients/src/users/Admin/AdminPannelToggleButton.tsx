import React from "react";

interface ToggleBtnProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const AdminPanelToggleBtn: React.FC<ToggleBtnProps> = ({ isOpen, onToggle }) => (
  <button
    className="mt-4 bg-blue-500 text-white p-2 rounded"
    onClick={onToggle}
  >
    {isOpen ? "Close Admin Panel" : "Open Admin Panel"}
  </button>
);
