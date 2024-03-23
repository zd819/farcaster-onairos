import React, { useState, useEffect } from 'react';
import LlmInput from './LlmInput';
import FeedCard from './FeedCard'; // You need to create this component based on the example

const PersonalizeFeed = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    // Replace 'your-channel-url' with the actual channel you want to fetch casts from
    const channelUrl = 'your-channel-url';
    fetch(`https://hub.pinata.cloud/v1/castsByParent?url=${channelUrl}&pageSize=20&reverse=true`)
      .then((response) => response.json())
      .then((data) => {
        // Process the data to get casts and user names
        setCasts(data.messages);
      })
      .catch((err) => {
        console.error('Failed to fetch casts:', err);
        setError('Failed to load the feed');
      })
      .finally(() => {
        setLoading(false);
      });
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
