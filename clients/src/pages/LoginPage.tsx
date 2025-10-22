import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Bus, Eye, EyeOff, LogIn } from "lucide-react";

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login Data:", data);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (data.email === "john@example.com" && data.password === "password") {
      alert("✅ Login successful! Welcome back.");
      navigate("/");
    } else {
      alert("❌ Invalid credentials. Try john@example.com / password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <Bus className="h-10 w-10" />
            <span className="text-3xl font-bold">SmartBus</span>
          </Link>
          <p className="text-gray-600 mt-2">Welcome back to your journey</p>
        </div>

        {/* Card */}
        <div className="bg-white shadow-xl rounded-2xl border border-indigo-100 p-8">
          <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
            Sign In
          </h2>
          <p className="text-gray-500 text-center mb-6">
            Enter your credentials to access your account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                  className="w-full border rounded-lg px-4 py-3 pr-10 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-60"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  Signing In...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <LogIn size={18} className="mr-2" />
                  Sign In
                </div>
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Sign up here
              </Link>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Demo Credentials:
            </p>
            <div className="text-xs text-gray-600 space-y-1">
              <p>User: john@example.com / password</p>
              <p>Admin: admin@busbook.com / admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
