
import { useEffect, useState } from 'react';
import './App.css';
import FeedbackButton from './components/FeedbackButton';
import Header from './components/Header';
import SpeechBubble from './components/SpeechBubble';
import Papa from 'papaparse';

function App() {
  const [jokes, setJokes] = useState([]);
  const [randomJoke, setRandomJoke] = useState(null);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    // Load and parse the CSV file on component mount
    Papa.parse('data/shortjokes.csv', {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        setJokes(result.data); // Store parsed CSV data in state
      },
      error: (error) => {
        console.error('Error reading CSV file:', error);
      }
    });
  }, []);

  const fetchJoke = () => {
    // generate random joke from jokes data
    if (jokes.length > 0) {
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setRandomJoke(jokes[randomIndex]); // Update the random joke
      setFeedback(null);
    }
  }

  return (
    <div className="App">
      <Header setRandomJoke={setRandomJoke} />
      <div className="content">
        {randomJoke ? (
          <>
            <SpeechBubble speechText={randomJoke.Joke} />
            <button className="generate-btn" onClick={fetchJoke} title="generate">
              <img src="images/sync.png" alt="re-generate icon" />
              New Joke
            </button>
            <div className="feedback">
              <h3>So what did you think?</h3>
              {!feedback ? (
                <div className="feedback-btns">
                  <FeedbackButton type="like" feedback={feedback} setFeedback={setFeedback} />
                  <FeedbackButton type="dislike" feedback={feedback} setFeedback={setFeedback} />
                </div>
              ) : (
                <p>Thanks for sharing your feedback!</p>
              )}
              
            </div>
          </>
        ) : (
          <div className="speech-bubble">
            <div className="inner">
              <h1 className="title">Welcome to Jokester!</h1>
              <h2 className="sub-title">Your Ultimate Source for Laughter</h2>
              <p className="speech-text">Looking for a good laugh? You've come to the right place! Jokester is a random joke generator that serves up over 200,000 hilarious jokes at the click of a button. Whether you need a quick chuckle, a witty one-liner, or a pun-packed punchline, Jokester has you covered.<br /><br />But that's not all! We believe that humor is best when shared. That's why we let you rate each joke, helping others discover the funniest ones. Get ready to laugh, rate, and repeat!</p>
              <button className="speech-btn" onClick={fetchJoke}>Get Started</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
