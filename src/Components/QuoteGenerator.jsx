import React, { useState } from 'react';
import quotesData from './quotes.json';
import img1 from './Assets/github.jpg';
import img2 from './Assets/copy.jpg';
import img3 from './Assets/error.jpg';
import bg from './Assets/bg.jpg'

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [showAddQuoteForm, setShowAddQuoteForm] = useState(false);
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(quote.quote);
  };

  const handleAuthorClick = () => {
    window.open(`https://en.wikipedia.org/wiki/${quote.author}`, '_blank');
  };
  
  const handleGithubClick = () => {
    window.open(`https://github.com/Priyadarsan2003`, '_blank');
  };

  const handleAddQuoteClick = () => {
    setShowAddQuoteForm(true);
  };

  const handleAddQuoteClose = () => {
    setShowAddQuoteForm(false);
  };

  const handleAddQuoteSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit new quote
    setNewQuote('');
    setNewAuthor('');
    setShowAddQuoteForm(false);
  };

  const handleFeedbackClick = (e) => {
    e.preventDefault();
    setShowFeedback(true);
  };

  const handleFeedbackClose = () => {
    setShowFeedback(false);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleFeedbackSubmit = () => {
    // Perform submit logic here, e.g. send feedback to server
    // You can access the feedback state variable for the submitted feedback
    alert(`Feedback Successfully Sent`);
    setShowFeedback(false);
    setFeedback('');
  };

  const handleHomeClick = () => {
    // Add logic to show/hide quote box on click of Home link
  }

  // Function to handle click on About link
  const handleAboutClick = () => {
    // Add logic to generate box with information on click of About link
  }

  // Function to handle click on Contact link
  const handleContactClick = () => {
    // Add logic to scroll to footer on click of Contact link
  }


  return (
    <div className="container" style={{ backgroundColor }}>
      <h1 className="title" style={{ textAlign: 'center', marginTop: '0' }}>
        Random Quote Generator
      </h1>
      <header className='header'>
      <nav>
        <ul className='list'>
          <p><a href="#" onClick={handleHomeClick}>Home</a></p>
          <p><a href="#" onClick={handleAboutClick}>About</a></p>
          <p><a href="#" onClick={handleContactClick}>Contact</a></p>
          <p><a href="#" onClick={handleAddQuoteClick}>Add Quote</a></p>
        </ul>
      </nav>
      </header>

      <div
        className="quote-box"
        style={{backgroundImage: bg, fontSize: quote && quote.quote && quote.quote.length > 200 ? '18px' : '40px' }}>
          {/* <img src={bg}></img> */}
        <p className="quote"> " {quote && quote.quote} " </p>
        <p className="author" onClick={handleAuthorClick}>
          ~ {quote && quote.author}
        </p>
      </div>

<div className='change'>
      <div className="add-quote-button">
        <button className="button-container" onClick={generateQuote}>
          Generate New Quote
        </button>
      </div>
      {/* <div className="button-container" style={{ position: 'absolute', bottom: '30px', left: '30px' }}>
        <button className="share-button" onClick={handleCopyQuote}>
        <img src={img2} alt="copy" />
        </button>
      </div> */}
      </div>
      {showFeedback && (
        <div className="feedback-box">
          <h2 className="feedback-title">Report Error / Feedback</h2>
          <textarea
            className="feedback-textarea"
            placeholder="Please provide your feedback here..."
            value={feedback}
            onChange={handleFeedbackChange}
          />
          <button className="feedback-send" onClick={handleFeedbackSubmit}>
            Send
          </button>
          <button className="feedback-close" onClick={handleFeedbackClose}>
            Close
          </button>
        </div>
      )}
      
      {/* <div className='add'>
        <button className="button" style={{ position: 'absolute', bottom: '30px', right: '30px' }} onClick={handleAddQuoteClick}>
          Add Quote
        </button>
      </div> */}

      {showAddQuoteForm && (
        <div className="add-quote-popup">
          <div className="add-quote-popup-content">
            <h2>Add Quote</h2>
            <form onSubmit={handleAddQuoteSubmit}>
              <label>
                Quote:
                <textarea
                  value={newQuote}
                  onChange={(e) => setNewQuote(e.target.value)}
                  required
                ></textarea>
              </label>
              <label>
                Author:
                <input
                  type="text"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  required
                />
              </label>
              <div className="add-quote-popup-buttons">
                <button type="submit" className="button">
                  Submit
                </button>
                <button className="button" onClick={handleAddQuoteClose}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <footer className='footer'>
        <div className='end'>
          <button className='b1' onClick={handleGithubClick}>
            <img src={img1} alt="Github" />
          </button>
          <button className='b2' onClick={handleFeedbackClick}>
            <img src={img3} alt="Error" />
          </button>
        </div>
      </footer>

    </div>
  );
};

export default QuoteGenerator;
