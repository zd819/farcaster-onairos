import React, { useState, useEffect } from 'react';
import LlmInput from './LlmInput';
import FeedCard from './FeedCard'; // You need to create this component based on the example
import PreferencesUrl from './PreferenceUrl';

const PersonalizeFeed = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [click, setClick] = useState(false);
  const [llmResponse, setLlmResponse] = useState('');

  // Vitalik FID for testing 
  const userId = '5650';

  useEffect(() => {
    // Assuming you have a way to get the current user's wallet address
    const walletAddress = 'user-wallet-address';

    const fetchPersonalizedFrames = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/load-frames', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ walletAddress }),
        });
        const data = await response.json();
        console.log("Frames before personalization : ", data)
        setCasts(data); // Assuming the backend returns an array of casts directly
        console.log("Casts data 1: ",data[1])
        setClick(true);
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
        <LlmInput setLlmResponse={setLlmResponse} clicked={setClick} Title={"Describe how to order/filter frames displayed"}/>
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
                  image={(cast.embeds && cast.embeds.length > 0) ? cast.embeds[0].url : undefined}
                  author={cast.author.display_name || "Anonymous"} // Adjust according to your data structure
                  text={cast.content} // Assuming 'content' holds the main text of the cast
                />
              ))}
          </div>
        )}
        {click && <PreferencesUrl userId={userId}/>}
    </div>
  );
};

export default PersonalizeFeed;
