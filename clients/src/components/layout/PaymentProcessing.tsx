import React, { useState, ChangeEvent } from "react";
import { Upload, CheckCircle2, BusFront } from "lucide-react";

const PaymentProcessing: React.FC = () => {
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setScreenshot(file);
  };

  const handlePaymentSubmit = () => {
    if (!screenshot) {
      alert("⚠️ Please upload your payment screenshot before continuing.");
      return;
    }

    setIsUploading(true);

    // simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      // onSubmitPayment(screenshot);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-sky-50 to-indigo-100 p-6 animate-fade-in">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-indigo-100 transition-all duration-300 hover:shadow-3xl">

        {/* Header */}
        <div className="text-center border-b pb-4">
          <div className="flex justify-center mb-2 animate-pulse">
            <BusFront size={40} className="text-blue-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Complete Your Payment
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Scan the QR code & upload payment proof
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Booking Summary */}
          <div className="bg-indigo-50 rounded-xl p-4 shadow-inner">
            <h3 className="font-semibold text-gray-700 mb-2">
              Booking Summary
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Bus Name:</span>
              <span className="font-medium text-gray-800">BusName-Volvo</span>

              <span className="text-gray-600">From:</span>
              <span className="font-medium text-gray-800">Kalaiya</span>

              <span className="text-gray-600">To:</span>
              <span className="font-medium text-gray-800">Kathmandu</span>

              <span className="text-gray-600">Selected Seats:</span>
              <span className="font-medium text-gray-800">1A,1B,2D,3D etc.</span>
            </div>
          </div>

          {/* QR Code */}
          <div className="text-center">
            <p className="text-gray-600 mb-2 font-medium">Scan this QR code to pay</p>
            <img
              src="/Qr-code.jpg"
              alt="Payment QR Code"
              className="mx-auto rounded-xl border-2 border-indigo-200 w-48 h-48 object-contain transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Upload Section */}
          <div className="text-center mt-4">
            <label className="block text-gray-600 mb-2 font-medium">
              Upload your payment screenshot
            </label>
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="uploadScreenshot"
              />
              <label
                htmlFor="uploadScreenshot"
                className="cursor-pointer bg-indigo-100 hover:bg-blue-200 text-blue-700 py-2 px-4 rounded-lg flex items-center gap-2 transition-all duration-200"
              >
                <Upload size={18} />
                {screenshot ? screenshot.name : "Choose file"}
              </label>
            </div>
          </div>
        </div>

        {/* Footer / Button */}
        <div className="p-6 flex justify-center">
          <button
            onClick={handlePaymentSubmit}
            disabled={isUploading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl flex items-center gap-2 shadow-lg transition-transform duration-300 hover:scale-105 disabled:opacity-50"
          >
            {isUploading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CheckCircle2 size={18} />
                Submit Payment Proof
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProcessing;
