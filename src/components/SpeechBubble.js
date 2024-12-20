import React from 'react'

const SpeechBubble = ({ title, subTitle, speechText, buttonText }) => {
  return (
    <div className="speech-bubble">
      <div className="inner">
        <h1 className="title">{title}</h1>
        {subTitle && <h2 className="sub-title">Your Ultimate Source for Laughter</h2>}
        <p className="speech-text" dangerouslySetInnerHTML={{ __html: speechText }}></p>
        {buttonText && <button className="speech-btn">{buttonText}</button>}
      </div>
    </div>
  )
}

export default SpeechBubble