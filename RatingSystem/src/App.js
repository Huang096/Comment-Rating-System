import React from 'react';
import GetRating from './components/GetRating';
import CommentBox from './components/CommentBox';
import SubmitButton from './components/SubmitButton';

function App() {
  const handleRatingChange = (value) => {
    console.log(`Rating changed to ${value}`);
  };

  return (
    <div className="App">
      <GetRating defaultVal={0} onChange={handleRatingChange} />
      <CommentBox />
      <SubmitButton />
    </div>
  );
}

export default App;
