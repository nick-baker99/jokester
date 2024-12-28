import React from 'react'

const SpeechBubble = ({ speechText }) => {
  return (
    <div className="speech-bubble">
      <div className="inner">
        <h1 className="title">Here's your joke</h1>
        <h2 className="sub-title">Prepare to be amused!</h2>
        <p className="speech-text">{speechText}</p>
      </div>
    </div>
  )
}

export default SpeechBubble