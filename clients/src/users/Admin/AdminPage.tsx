import React, { useState } from "react";
import { mockUsers } from "../../data/mockData";
import { AdminProfile } from "./AdminProfile";
import { AdminPanelToggleBtn } from "./AdminPannelToggleButton";
import { AdminPanel } from "./AdminPannel";

export const AdminPage: React.FC = () => {
  const [admin, setAdmin] = useState(mockUsers.find(u => u.role === "admin")!);
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <div className="p-4">
      <AdminProfile admin={admin} onUpdate={setAdmin} />
      <AdminPanelToggleBtn isOpen={panelOpen} onToggle={() => setPanelOpen(!panelOpen)} />
      {panelOpen && <AdminPanel />}
    </div>
  );
};
