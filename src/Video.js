import React from 'react';

export class Video extends React.Component {
  render() {
    return (
      <div>
      <iframe width="420" height="315"
      src={this.props.src}>
      </iframe>
        
      </div>
    );
  }
}