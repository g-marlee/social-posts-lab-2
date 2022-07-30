import './App.css';
import {nanoid} from 'nanoid';
import SocialPosts from './components/SocialPosts';
import { useState } from 'react';

export interface Post {
  title: string,
  thought: string,
  id: string,
}

function App() {
  

  return (
    <div className="App">
      <h1>Tweetbook</h1>
      <div className='post-container'>
        <SocialPosts />
      </div>
    </div>
  );
}

export default App;
