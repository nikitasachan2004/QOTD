import { useState } from 'react';
import { Bell, Check } from 'lucide-react';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Would send to API in real app
      console.log('Subscribed:', email);
      setTimeout(() => {
        setEmail('');
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="card p-8 mb-8 bg-gradient-to-br from-primary-50 to-blue-50 border-2 border-primary-200">
      <div className="text-center mb-6">
        <div className="inline-flex bg-primary-600 p-3 rounded-full mb-4">
          <Bell className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">
          Never Miss a Challenge
        </h3>
        <p className="text-neutral-600">
          Get daily coding questions delivered to your inbox every morning at 9 AM
        </p>
      </div>

      {/* Subscribe Form */}
      {!isSubscribed ? (
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-3 rounded-lg border-2 border-neutral-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap"
          >
            Notify Me Daily
          </button>
        </form>
      ) : (
        // Success state
        <div className="flex items-center justify-center gap-2 bg-green-50 border-2 border-green-300 rounded-lg p-4 max-w-md mx-auto">
          <Check className="w-5 h-5 text-green-600" />
          <p className="font-semibold text-green-700">
            You're subscribed! Check your inbox.
          </p>
        </div>
      )}

      {/* Trust message */}
      <p className="text-xs text-neutral-500 text-center mt-4">
        Join 10,000+ developers improving daily. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default Subscribe;
