import React from "react";

const QuotesGrid = ({ quotes, isLoading }) => {
  return isLoading ? (
    "Loading....."
  ) : (
    <div className='quote-grid' >
      {quotes.map((quote) => (
        <div className='quote-card'>
        <h4 key={quote.quote_id}>{quote.quote}</h4>
      <p style={{color: 'orange'}}>by - {quote.author}</p>
      </div>
      ))}
    </div>
  );
};

export default QuotesGrid;
