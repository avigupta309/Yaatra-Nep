import React, { useState, ChangeEvent } from "react";
import { Camera, Save } from "lucide-react";
import { useAuth } from "../../hooks/Auth";
import { SelectedBus } from "./selectedBus";

export const UserProfile: React.FC = () => {
  const { authUser} = useAuth();
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center p-3">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        <div className="bg-white rounded-xl p-4 shadow-lg flex-1  h-screen">
          <div className="flex flex-col items-center text-center ">
            <label htmlFor="image-upload" className="relative cursor-pointer">
              <img
                src={profileImage || "/default-avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border shadow"
              />
              <div className="absolute bottom-2 right-2 bg-white text-blue-600 rounded-full p-2 shadow">
                <Camera size={18} />
              </div>
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {authUser?.fullName}
            </h2>
            <p className="text-sm text-gray-500">Team Leader</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={authUser?.fullName || ""}
                readOnly
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Contact
              </label>
              <input
                type="text"
                value={authUser?.phone || ""}
                readOnly
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                value={authUser?.email || ""}
                readOnly
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Old Password
              </label>
              <input
                onChange={(e) => setOldPassword(e.target.value)}
                value={oldPassword}
                type="password"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                New Password
              </label>
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                type="password"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
            <Save size={18} />
            Save Profile
          </button>
        </div>

        <SelectedBus />
      </div>
    </div>
  );
};
