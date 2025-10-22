import React, { useState } from "react";
import type { User } from "../../types";
import { LucideEdit, Camera } from "lucide-react";

interface AdminProfileProps {
  admin: User;
  onUpdate: (updated: User) => void;
}

export const AdminProfile: React.FC<AdminProfileProps> = ({
  admin,
  onUpdate,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [localData, setLocalData] = useState(admin);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalData({ ...localData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(localData);
    setEditMode(false);
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg flex items-center gap-4">
      <div className="relative">
        <img
          src="/profile-placeholder.png"
          alt="profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div
          className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full cursor-pointer"
          title="Change Profile Image"
        >
          <Camera size={16} />
        </div>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {editMode ? (
          <>
            <input
              name="name"
              value={localData.name}
              onChange={handleChange}
              className="border p-1 rounded"
            />
            <input
              name="role"
              value={localData.role}
              onChange={handleChange}
              className="border p-1 rounded"
            />
            <input
              name="email"
              value={localData.email}
              onChange={handleChange}
              className="border p-1 rounded"
            />
            <input
              name="phone"
              value={localData.phone}
              onChange={handleChange}
              className="border p-1 rounded"
            />
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white p-1 rounded mt-2 w-24"
            >
              Save
            </button>
          </>
        ) : (
          <>
            <h2 className="font-bold text-lg">{admin.name}</h2>
            <p>Role: {admin.role}</p>
            <p>Email: {admin.email}</p>
            <p>Phone: {admin.phone}</p>
            <button
              onClick={() => setEditMode(true)}
              className="flex items-center gap-1 bg-gray-200 p-1 rounded w-20"
            >
              <LucideEdit size={16} /> Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};
