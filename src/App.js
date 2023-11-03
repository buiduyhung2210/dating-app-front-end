import React from 'react';
import Header from './Header';
import Chats from './Chats';
import ChatScreen from "./ChatScreen"
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import SignInForm from './SignIn';
import SignUpForm from './SignUp';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <TinderCards/>
              <SwipeButtons/>
            </>
          }/>
          <Route path="/chat" element={
            <>
              <Header backButton="/" />
              <Chats/>
            </>
          } />
          <Route path="/chat/:person" element={
            <>
              <Header backButton="/chat" />
              <ChatScreen/>
            </>
          } />
          <Route path="/sign-in" element={
            <>
            <SignInForm></SignInForm>
            </>
          } />
          <Route path="/sign-up" element={
            <>
            <SignUpForm></SignUpForm>
            </>
          } />
        </Routes>
        
      
      </Router>
    </div>
  );
}

export default App;
