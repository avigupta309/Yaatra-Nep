import { useState } from "react";
import { Check } from "lucide-react";
import ProfileImageUpload from "./ProfileImageUpload";

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    name: "Avinash Gupta",
    email: "admin@terrablooms.com",
    phone: "9800000000",
    password: "admin123",
    profileImage: "https://via.placeholder.com/120",
  });

  const handleChange = (field: string, value: string) => {
    setAdmin((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <form>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Admin Profile
        </h2>
        <div className="flex items-center gap-6">
          <ProfileImageUpload
            imageUrl={admin.profileImage}
            setImageUrl={(url: string) => handleChange("profileImage", url)}
          />
          <div className="flex-1 space-y-4">
            {["name", "email", "phone", "password"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 capitalize">
                  {field}
                </label>
                <input
                  type={field === "password" ? "password" : "text"}
                  value={admin[field]}
                  onChange={(e) => handleChange(field, e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
            <button
              type="submit"
              className="h-12 p-1 bg-blue-600 hover:bg-blue-700 text-white font-normal rounded-lg flex items-center justify-center"
            >
              <Check className="h-7 w-6 mr-2" />
              Save Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminProfile;
