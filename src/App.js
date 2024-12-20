
import { useState } from 'react';
import './App.css';
import FeedbackButton from './components/FeedbackButton';
import Header from './components/Header';
import SpeechBubble from './components/SpeechBubble';

function App() {
  const [jokeVisible, setJokeVisible] = useState(false);
  const [feedback, setFeedback] = useState(null);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <SpeechBubble 
          title="Welcome to Jokester!"
          subTitle="Your Ultimate Source for Laughter"
          speechText="Looking for a good laugh? You've come to the right place! Jokester is a random joke generator that serves up over 200,000 hilarious jokes at the click of a button. Whether you need a quick chuckle, a witty one-liner, or a pun-packed punchline, Jokester has you covered.<br /><br />But that's not all! We believe that humor is best when shared. That's why we let you rate each joke, helping others discover the funniest ones. Get ready to laugh, rate, and repeat!"
          buttonText="Get Started"
        />
        <div className="feedback">
          <h3>So what did you think?</h3>
          <div className="feedback-btns">
            <FeedbackButton type="like" feedback={feedback} setFeedback={setFeedback} />
            <FeedbackButton type="dislike" feedback={feedback} setFeedback={setFeedback} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
