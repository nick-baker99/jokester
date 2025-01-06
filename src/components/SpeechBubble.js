import React, { useEffect, useState } from 'react'

const SpeechBubble = ({ speechText }) => {
  // tracks if joke has been copied to clipboard
  const [jokeCopied, setJokeCopied] = useState(false);

  // when user clicks copy button add the joke text to users clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(speechText);
    
    setJokeCopied(true);
  }

  // reset copy status if new joke is loaded
  useEffect(() => {
    setJokeCopied(false);
  }, [speechText]);

  return (
    <div className="speech-bubble">
      <div className="inner">
        <h1 className="title">Here's your joke</h1>
        <h2 className="sub-title">Prepare to be amused!</h2>
        <p id="jokeText" className="speech-text">{speechText}</p>
        {jokeCopied ? (
          <button className="copy-btn" onClick={handleCopy}>
            <img src="images/check.png" alt="tick icon" />
            Copied
          </button>
        ) : (
          <button className="copy-btn" onClick={handleCopy}>
            <img src="images/copy.png" alt="copy icon" />
            Copy joke
          </button>
        )}
      </div>
    </div>
  )
}

export default SpeechBubble