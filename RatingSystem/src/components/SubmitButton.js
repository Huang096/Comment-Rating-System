import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function SubmitButton() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleClick = () => {
    setShowThankYou(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Submit</button>
      <Snackbar open={showThankYou} autoHideDuration={5000} onClose={() => setShowThankYou(false)}>
        <Alert onClose={() => setShowThankYou(false)} severity="success" sx={{ width: '100%' }}>
          Thank you for your purchase
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SubmitButton;
