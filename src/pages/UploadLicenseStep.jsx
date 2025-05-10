import React from 'react';
import { UploadIcon } from 'lucide-react';

const UploadLicensePage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <UploadIcon className="w-12 h-12 text-pink-600 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">Upload Your License</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Securely submit your software license details in a few simple steps.</p>
        </div>

        <div className="space-y-6">
          {/* Form or upload functionality here */}
          <div className="flex justify-center space-x-4">
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors duration-300">
              Choose File
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300">
              Upload
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">Your data is encrypted and secure. We never share your information.</p>
        </div>
      </div>
    </section>
  );
};

export default UploadLicensePage;
