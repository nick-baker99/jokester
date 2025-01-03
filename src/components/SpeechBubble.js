import React from 'react'

const SpeechBubble = ({ speechText }) => {
  return (
    <div className="speech-bubble">
      <div className="inner">
        <h1 className="title">Here's your joke</h1>
        <h2 className="sub-title">Prepare to be amused!</h2>
        <p className="speech-text">{speechText}</p>
        <button className="copy-btn">
          <img src="images/copy.png" alt="copy icon" />
          Copy joke
        </button>
      </div>
    </div>
  )
}

export default SpeechBubble