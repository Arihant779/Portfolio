import React from "react";
import './load.css'; 

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img
        className="loading-image"
        // src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGl2bGlpNmhyaHptcWt5Zmx3em82cjM1OXo0YWVybnpxMW1mMW1uMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JEhnvcI0iAMPRRsBYU/giphy.gif"
        // src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXEwMjRxc2t3ZWlqOXVxOHF4Zzl6eTMweDNrYnFkcjE1dHc0NHhqbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTkcEQACH24SMPxIQg/giphy.gif"
        src="https://media.giphy.com/media/lPcbCcPfACi3ncc3cv/giphy.gif?cid=ecf05e47umj3b36i3r38c7r7iw8usuwyunz2y2mv9xa8j53l&ep=v1_gifs_search&rid=giphy.gif&ct=g"
        alt="Loading..."
      />
    </div>
  );
};

export default LoadingScreen;
