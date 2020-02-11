import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
//import './App.css';

function App() {

  const [username, setUsername] = useState("Anaz");

  useEffect(() => {
    document.title = username + " - To Do"
  });

  return (
    <div>
      <h4 className="bg-primary text-white text-center p-2">
        { username }'s To Do List
      </h4>
      <button className="btn btn-primary m-2"
        onClick={() => setUsername(username === "Anaz" ? "Hana" : "Anaz")}>
          Change Name
      </button>
    </div>
  );
}

export default App;
