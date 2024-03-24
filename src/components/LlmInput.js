// LlmInput.js

import React, { useState } from 'react';

export default function LlmInput(props) {
  const [inputText, setInputText] = useState('');
  const [llmResponse, setLlmResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ preference_text: inputText }),
      });
      const result = await response.json();
      console.log(result);
      setLlmResponse(result.preference_output);  // Assuming the backend returns an object with a preference_output key
    } catch (error) {
      console.error('Error processing preference:', error);
      alert("Failed to process preference.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {props.Title}
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {llmResponse && <p>LLM Response: {llmResponse}</p>}
    </div>
  );
}
