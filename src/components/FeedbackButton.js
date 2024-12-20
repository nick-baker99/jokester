import React from 'react'

const FeedbackButton = ({ type, feedback, setFeedback }) => {
  const isActive = type === feedback ? " active" : '';

  const toggleBtn = (e) => {
    if (feedback === type) {
      setFeedback(null);
      return;
    }

    setFeedback(type);
  }

  return (
    <button 
      type="button"
      className={`feedback-btn ${type}${isActive}`}
      onClick={toggleBtn}
      title={type}
    >
      <img src={`images/${type}.png`} alt={type} />
    </button>
  )
}

export default FeedbackButton