import React, { useState } from "react";
import ChatGPT from "chatgpt";

// Create a ChatGPT instance with your API key
const chatgpt = new ChatGPT("your-api-key");

// Define a React component that performs fraud detection tasks
function App() {
  // Use state hooks to store the input and output values
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // Define a function that handles the form submission
  const handleSubmit = async (event) => {
    // Prevent the default browser behavior
    event.preventDefault();

    // Clear the previous output
    setOutput("");

    // Call the ChatGPT API with the input value and a context
    // The context is a string that defines the task and the domain
    // You can customize it according to your needs
    const context = "This is a fraud detection app that uses ChatGPT to perform the following tasks:\n- Collect information and rules related to fraud or harassment\n- Detect new fraud or harassment processes in each category or city\n- Find fraud or harassment priorities in each category and city\n- Refine your guesses by performing preliminary tests\n- Use appropriate models for short-term and long-term predictions of fraud or harassment relative to these cases at the national level\n";

    // The response is an object that contains the generated text and other information
    const response = await chatgpt.query(input, context);

    // Set the output value to the generated text
    setOutput(response.text);
  };

  // Return the JSX elements that render the app
  return (
    <div className="App">
      <h1>Fraud Detection App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter your query:</label>
        <input
          id="input"
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="output">
        <h2>Output:</h2>
        <p>{output}</p>
      </div>
    </div>
  );
}

export default App;