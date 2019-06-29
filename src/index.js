import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
  fast: "https://www.youtube.com/embed/fey2JshCNng?controls=1",
  slow: 'https://www.youtube.com/embed/SB1YYnzfXmA',
  cute: 'https://www.youtube.com/embed/rNSnfXl1ZjU',
  eek: 'https://www.youtube.com/embed/iLi9Xa9EK-c'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { src: VIDEOS.fast };
    this.chooseVideo=this.chooseVideo.bind(this);
  }
  chooseVideo(newVideo){
   
    this.setState({
      src:VIDEOS[newVideo]
    })
  }
  
  render() {
    return (
      <div>
        <h1>Video Player</h1>
        <Menu  chooseVideo={this.chooseVideo}/>
        <Video src={this.state.src}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);