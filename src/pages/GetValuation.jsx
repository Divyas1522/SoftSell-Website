import React from 'react';

const GetValuation = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-pink-700 dark:text-pink-400 mb-6">
        Get Your Software License Valuation
      </h1>

      <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-center mb-10">
        We provide a quick and fair valuation for your software license. Just fill in the details about your license, and our system will estimate its value based on current market demand, license terms, and more.
      </p>

      <form className="w-full max-w-xl bg-pink-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-200 mb-1">Software Name</label>
          <input
            type="text"
            placeholder="e.g., Adobe Photoshop"
            className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-200 mb-1">License Type</label>
          <input
            type="text"
            placeholder="e.g., Lifetime, Subscription"
            className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-200 mb-1">Original Purchase Price (USD)</label>
          <input
            type="number"
            placeholder="e.g., 299"
            className="w-full px-4 py-2 rounded-md border dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md font-medium transition"
        >
          Get Valuation
        </button>
      </form>
    </div>
  );
};

export default GetValuation;
