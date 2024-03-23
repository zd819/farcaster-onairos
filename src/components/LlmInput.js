import React, { useState } from 'react';

export default function LlmInput() {
  const [inputText, setInputText] = useState('');
  const [llmResponse, setLlmResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate an API call
    const response = await simulateLLMApiCall(inputText);
    setLlmResponse(response);
  };

  const simulateLLMApiCall = (inputText) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Processed text: ${inputText}`);
      }, 1000);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Describe how to order/filter frames displayed
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
