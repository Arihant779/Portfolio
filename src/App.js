import './App.css';
import { useState, useEffect } from "react";
import LoadingScreen from './components/load';
import Navbar from './components/navbar';
import Intro from './components/intro';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {!loading ? (
        <div>
          
          <Navbar />
          
          
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
