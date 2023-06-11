import React from 'react';
import axios from 'axios';
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import FeelingInput from '../FeelingInput/FeelingInput';
import UnderstandingInput from '../UnderstandingInput/UnderstandingInput';
import SupportInput from '../SupportInput/SupportInput'
import CommentInput from '../CommentInput/CommentInput'
import Review from '../Review/Review'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <form> 
      <Router>
        <Link to='/'>Home</Link>
        <Route exact path='/'>
          <FeelingInput/>
        </Route>

        <Route exact path='/Understanding'>
          <UnderstandingInput/>
        </Route>

        <Route exact path='/Support'>
          <SupportInput/>


        </Route>

        <Route exact path='/comment'>

          <CommentInput/>
        </Route>

        <Route exact path='/review'>
          <Review/>


        </Route>


      </Router>
      </form>
    </div>
  );
}








export default App;
