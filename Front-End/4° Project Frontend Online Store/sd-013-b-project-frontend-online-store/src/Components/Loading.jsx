import React, { Component } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

class Loading extends Component {
  render() {
    return (
      <div className="container-loading">
        <AiOutlineLoading3Quarters className="loading" />
      </div>
    );
  }
}

export default Loading;
