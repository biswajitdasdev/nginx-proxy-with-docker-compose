import { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.text(); // Use .text() to get the plain text response
        setMessage(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div>
      <h1>Message from API:</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
