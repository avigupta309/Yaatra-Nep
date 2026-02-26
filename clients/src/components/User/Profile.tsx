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
    console.log(data);
    try {
      // const formData = new FormData();
      // formData.append("fullName", data.fullName);
      // formData.append("oldPassword", data.password);
      // formData.append("newPassword", data.newPassword);

      // if (data.profilePic && data.profilePic[0]) {
      //   formData.append("profilePic", data.profilePic[0]);
      // }

      const response = await axios.put(
        `http://localhost:3000/api/user/channgepwd/`,
        data,
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetChUser() {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/user/viewoneuser/${userId}`,
        );

        const userData = response.data.data;
        console.log(userData);

        reset({
          fullName: userData.fullName,
          email: userData.email,
        });
        setProfileImage(userData.profilePic);
      } catch (error) {
        console.error(error);
      }
    }

    if (userId) fetChUser();
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
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center p-3">
      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        <div className="bg-white rounded-xl p-4 shadow-lg flex-1 h-screen">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center text-center">
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
                className="hidden"
                {...register("profilePic")}
                onChange={(e) => {
                  handleImageChange(e);
                }}
              />

              <h2 className="text-2xl font-bold text-gray-800">
                {authUser?.fullName}
              </h2>
              <p className="text-sm text-gray-500">Team Leader</p>
            </div>

            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full border rounded-lg px-4 py-3"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  readOnly
                  {...register("email")}
                  className="w-full border rounded-lg px-4 py-3 bg-gray-100"
                />
              </div>

              {/* Old Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Old Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Old password is required",
                  })}
                  className="w-full border rounded-lg px-4 py-3"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  {...register("newPassword", {
                    required: "New password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters required",
                    },
                  })}
                  className="w-full border rounded-lg px-4 py-3"
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition mt-4"
            >
              <Save size={18} />
              Save Profile
            </button>
          </form>
        </div>

        <SelectedBus />
      </div>
    </div>
  );
};
