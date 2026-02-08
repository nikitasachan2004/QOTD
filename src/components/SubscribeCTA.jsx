import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Mail, CheckCircle } from 'lucide-react';

export default function SubscribeCTA() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-primary to-primary-hover text-white rounded-2xl p-8 shadow-sm hover:shadow-md sticky bottom-4 sm:static transition-shadow duration-200"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Icon and Text */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Never Miss a Challenge</h3>
          </div>
          <p className="text-white/90 text-sm sm:text-base">
            Get daily reminders and stay consistent with your coding journey. Join 10,000+ students.
          </p>
        </div>

        {/* Email Form */}
        <div className="w-full sm:w-auto">
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1 sm:min-w-[250px]">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-dark placeholder:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Email address for notifications"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-label="Subscribe to notifications"
              >
                Notify Me
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 bg-white/20 px-6 py-3 rounded-xl"
            >
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">You're subscribed! 🎉</span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
