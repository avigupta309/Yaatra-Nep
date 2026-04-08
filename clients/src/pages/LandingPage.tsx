import { Bus, Clock, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center z-10">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>Your Journey Starts Here</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
              Smart Bus Booking
              <span className="block text-blue-600 mt-2">Made Easy</span>
            </h1>

            <p className="text-xl text-black mb-12 max-w-2xl mx-auto leading-relaxed">
              Book your bus tickets quickly and efficiently. Experience
              hassle-free travel with real-time updates, secure payments, and
              instant confirmations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg">
                <Link to={"/login"}>
                  <span>Sign In</span>
                </Link>
              </button>

              <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-lg">
                <Link to={"/signup"}>
                  <span>Create Account</span>
                </Link>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-black mb-2">
                  Fast & Easy Booking
                </h3>
                <p className="text-black text-sm">
                  Book your tickets in seconds with our streamlined process
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bus className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-black mb-2">
                  Real-Time Availability
                </h3>
                <p className="text-black text-sm">
                  Check live seat availability and choose your preferred spot
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-black mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-black text-sm">
                  Your data and payments are protected with top-tier security
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
