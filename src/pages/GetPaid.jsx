import React from 'react';

const GetPaid = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-20 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-pink-700 dark:text-pink-400 mb-6">
        Get Paid Instantly
      </h1>
      <p className="text-gray-700 dark:text-gray-300 max-w-2xl text-center">
        Once you accept the valuation, we’ll process your payment securely and quickly.
        Funds are typically transferred within 24 hours via your preferred payment method.
      </p>
    </div>
  );
};

export default GetPaid;
