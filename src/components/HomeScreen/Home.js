import React, { useState } from 'react';
import { recognition } from '../../api/VoiceSearchAPI';
import Header from './Header';

import './Home.css';

const Home = ({ setSearch }) => {
  //controlling form
  const [term, setTerm] = useState('');
  
  // clear term by clicking on cross
  const clearTerm = () => {
    setTerm('');
  };

  // submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term.trim());
    }
  };

  // handle search
  const handleSearch = () => {
    if (
      /^[a-zA-Z0-9].*/.test(term) ||
      /^[a-zA-Z0-9]+[" "]/.test(term) ||
      /^[" "]+[a-zA-Z0-9]/.test(term)
    ) {
      setSearch(term.trim());
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12 home-screen align-items-center justify-content-center">
            <img
              src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              alt="Google Logo"
            />
            <div className="search-box col-md-7 border d-flex py-2 justify-content-between align-items-center">
              <i className="fa fa-search"></i>
              <form className="form-search" onSubmit={(e) => handleSubmit(e)}>
                <input
                  type="text"
                  name="term"
                  id="term"
                  value={term}
                  onChange={(e) => setTerm(e.target.value)}
                />
              </form>
              {term ? (
                <i className="fa fa-close" onClick={() => clearTerm()}></i>
              ) : (
                ''
              )}
              <i className="fa fa-microphone"></i>
            </div>
            <div className="buttons col-md-4 ml-5 mt-4 align-items-center justify-content-center">
              <input
                type="button"
                className="btn btn-light mx-1"
                value="Google Search"
                onClick={() => handleSearch()}
              />
              <input
                type="button"
                className="btn btn-light"
                value="I'm Feeling Lucky"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
