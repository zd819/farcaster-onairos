import React, { useState, useEffect } from 'react';
import LlmInput from './LlmInput';
import FeedCard from './FeedCard'; // You need to create this component based on the example

const PersonalizeFeed = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Assuming you have a way to get the current user's wallet address
    const walletAddress = 'user-wallet-address';

    const fetchPersonalizedFrames = async () => {
      try {
        const response = await fetch('/api/load-frames', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ walletAddress }),
        });
        const data = await response.json();
        setCasts(data); // Assuming the backend returns an array of casts directly
      } catch (err) {
        console.error('Error fetching personalized frames:', err);
        setError('Failed to load personalized feed.');
      } finally {
        setLoading(false);
      }
    };

    fetchPersonalizedFrames();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flex-1 p-6">
        <LlmInput/>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recommendation Management</h2>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <div className="overflow-auto h-64 w-full border border-gray-400">
              {casts.map((cast, index) => (
                <FeedCard
                  key={index}
                  image={cast.data.castAddBody.embeds[0].url}
                  author={cast.data.fid || "anon"} // Replace with actual author information if available
                  text={cast.data.castAddBody.text}
                />
              ))}
          </div>
        )}
    </div>
  );
};

export default PersonalizeFeed;
