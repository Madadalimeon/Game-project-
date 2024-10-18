import React, { useState } from 'react';
const SlidePuzzle = () => {
  const [buttons, setButtons] = useState([
    "", "1", "2", 
    "3", "4", "5", 
    "6", "7", "8"
  ]);
  const swap = (i, j) => {
    const newButtons = [...buttons];
    [newButtons[i], newButtons[j]] = [newButtons[j], newButtons[i]];
    setButtons(newButtons);
  };
  const handleClick = (index) => {
    const emptyIndex = buttons.indexOf("");
    const validMoves = [
      index - 1, // left
      index + 1, // right
      index - 3, // above
      index + 3 // below
    ];
    if (validMoves.includes(emptyIndex)) {
      swap(index, emptyIndex);
    }
  };
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        {buttons.map((value, index) => (
          <button
            key={index}
            style={{
              ...styles.button,
              backgroundColor: value === "" ? "white" : "wheat",
              cursor: value === "" ? "default" : "pointer",
            }}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width:"150vh",                                                                                         
    margin: 0,
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 100px)',
    gap: '10px',
    padding: '20px',
    backgroundColor: '#00000076',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  button: {
    width: '100%',
    height: '100px',
    fontSize: '18px',
    color: 'black',
    border: 'none',
    transition: 'background-color 0.3s ease',
  }
};
export default SlidePuzzle;
