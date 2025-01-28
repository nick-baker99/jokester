import React from 'react'

const Header = ({ setRandomJoke }) => {
  return (
    <header>
      <div className="header-wrapper">
        <button className="logo" onClick={() => setRandomJoke(null)}>
          <img src="images/smile_emoji_jester_small.png" alt="wink icon" />
          Jokester
        </button>
      </div>
    </header>
  )
}

export default Header