import React, { useState } from 'react';

export default function PreferencesUrl(userId) {
  const [copied, setCopied] = useState(false);

  const preferencesUrl = `http://localhost:8080/user-frames/${userId}`; // Adjust with actual URL and user ID

  const handleCopyClick = () => {
    navigator.clipboard.writeText(preferencesUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div>
      <p>Your preferences URL is:</p>
      <input type="text" value={preferencesUrl} readOnly />
      <button onClick={handleCopyClick}>
        {copied ? 'Copied!' : 'Copy URL'}
      </button>
    </div>
  );
}
