import React, { useState, ChangeEvent, useEffect } from "react";
import { Camera, Save } from "lucide-react";
import { useAuth } from "../../hooks/Auth";
import { SelectedBus } from "./selectedBus";
import { useForm } from "react-hook-form";
import axios from "axios";

interface authProps {
  fullName: string;
  email: string;
  newPassword: string;
  password: string;
  profilePic: FileList;
}

export const UserProfile: React.FC = () => {
  const { authUser } = useAuth();
  const userId = authUser?.id;

  const [profileImage, setProfileImage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<authProps>();

  const onSubmit = async (data: authProps) => {
    try {
      await axios.put(`http://localhost:3000/api/user/channgepwd/`, data);
      alert("Profile updated successfully ✅");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!userId) return;

    async function fetchUser() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/viewoneuser/${userId}`,
        );

        const userData = response.data.data;

        reset({
          fullName: userData.fullName,
          email: userData.email,
        });

        setProfileImage(userData.profilePic);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, [userId, reset]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* LEFT: PROFILE CARD */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center mb-6">
            <label
              htmlFor="image-upload"
              className="relative cursor-pointer group"
            >
              <img
                src={profileImage || "/default-avatar.png"}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-100 shadow-md"
              />
              <div className="absolute bottom-2 right-2 bg-indigo-600 text-white rounded-full p-2 shadow-md group-hover:scale-110 transition">
                <Camera size={16} />
              </div>
            </label>

            <input
              type="file"
              id="image-upload"
              accept="image/*"
              className="hidden"
              {...register("profilePic")}
              onChange={handleImageChange}
            />

            <h2 className="text-2xl font-bold mt-4 text-gray-800">
              {authUser?.fullName}
            </h2>
            <p className="text-gray-500 text-sm">{authUser?.email}</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                {...register("fullName", {
                  required: "Full name is required",
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                readOnly
                {...register("email")}
                className="w-full border rounded-lg px-4 py-3 bg-gray-100"
              />
            </div>

            <hr className="my-4" />

            <h3 className="text-lg font-semibold text-blue-600">
              Change Password
            </h3>

            {/* Old Password */}
            <div>
              <label className="block font-medium mb-1">Old Password</label>
              <input
                type="password"
                {...register("password", {
                  required: "Old password is required",
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div>
              <label className="block font-medium mb-1">New Password</label>
              <input
                type="password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-sm">
                  {errors.newPassword.message}
                </p>
              )}
            </div>

            {/* Save Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition mt-4"
            >
              <Save size={18} />
              Save Changes
            </button>
          </form>
        </div>

        <div>
          <SelectedBus />
        </div>
      </div>
    </div>
  );
};
