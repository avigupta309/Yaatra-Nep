import React, { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Camera, Save, Lock } from "lucide-react";
import { useAuth } from "../../hooks/Auth";
export const UserProfile: React.FC = () => {
  const {authUser} = useAuth();
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
    <div className="min-h-screen w-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-8">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        {/* --- Profile Card --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 shadow-2xl flex-1 space-y-8"
        >
          {/* Profile Image */}
          <div className="flex flex-col items-center text-center space-y-3">
            <label
              htmlFor="image-upload"
              className="relative cursor-pointer group"
            >
              <img
                src={profileImage || "/default-avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border border-white/40 shadow-lg group-hover:opacity-90 transition duration-200"
              />
              <div className="absolute bottom-2 right-2 bg-white text-blue-600 rounded-full p-2 shadow-md">
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
            <h2 className="text-2xl font-bold tracking-wide text-gray-800">
              {authUser?.fullName}
            </h2>
            <p className="text-sm opacity-80 text-gray-600">Team Leader</p>
          </div>

          {/* Profile Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={`${authUser?.fullName}`}
                // onChange={(e) => setName(e.target.value)}
                className="w-full border border-white/30 bg-white/20 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Contact
              </label>
              <input
                type="text"
                value={`${authUser?.phone}`}
                // onChange={(e) => setContact(e.target.value)}
                className="w-full border border-white/30 bg-white/20 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                value={`${authUser?.email}`}
                // onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-white/30 bg-white/20 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          {/* Save Profile Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            <Save size={18} />
            Save Profile
          </motion.button>
        </motion.div>

        {/* --- Change Password Card --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-8 shadow-2xl flex-1 space-y-6"
        >
          <div className="flex items-center gap-2">
            <Lock size={20} />
            <h3 className="text-xl font-bold text-gray-800">Change Password</h3>
          </div>

          {/* Password Fields Side by Side */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-1">
                Old Password
              </label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter old password"
                className="w-full border border-white/30 bg-white/20 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full border border-white/30 bg-white/20 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg shadow-lg transition"
          >
            <Save size={18} />
            Update Password 
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};
