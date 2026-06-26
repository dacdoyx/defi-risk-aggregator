import React, { useState, useEffect } from 'react';

function App() {
  const [protocols, setProtocols] = useState([]);

  useEffect(() => {
    fetch('/api/protocols')
      .then(r => r.json())
      .then(d => setProtocols(d.protocols || []))
      .catch(() => setProtocols(['Loading...']));
  }, []);

  return (
    <div>
      <h1>DeFi Risk Intelligence Aggregator</h1>
      <p>Neutral, multi-feed risk ratings for Ethereum DeFi protocols.</p>
      <ul>
        {protocols.map(p => <li key={p}>{p}</li>)}
      </ul>
    </div>
  );
}

export default App;
