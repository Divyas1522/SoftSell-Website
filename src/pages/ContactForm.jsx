import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !formData.email.includes('@')) newErrors.email = 'Valid email required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Select a license type';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted!');
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact"  className=" py-20 px-6 bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 text-center min-h-[calc(100vh-64px)] pt-30">
      <h2 className="text-4xl font-bold mt-[-40px] mb-8 text-pink-700 dark:text-pink-400">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl max-h-150 mx-auto grid gap-2 text-left bg-white dark:bg-gray-900 p-8 shadow-xl rounded-lg">
        <div>
          <label className="block mb-1 font-medium text-pink-800 dark:text-pink-300">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 dark:bg-gray-800" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium text-pink-800 dark:text-pink-300">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 dark:bg-gray-800" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium text-pink-800 dark:text-pink-300">Company</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 dark:bg-gray-800" />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium text-pink-800 dark:text-pink-300">License Type</label>
          <select name="licenseType" value={formData.licenseType} onChange={handleChange} className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 dark:bg-gray-800">
            <option value="">Select</option>
            <option value="Office Suite">Office Suite</option>
            <option value="Antivirus">Antivirus</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Development Tools">Development Tools</option>
          </select>
          {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
        </div>
        <div>
          <label className="block mb-1 font-medium text-pink-800 dark:text-pink-300">Message</label>
          <textarea name="message" rows="3" value={formData.message} onChange={handleChange} className="w-full p-2 border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400 dark:bg-gray-800"></textarea>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>
        <button type="submit" className="bg-pink-600 text-white py-3 px-6 rounded-lg hover:scale-101 hover:bg-pink-600 transition">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
