import React, { Component } from 'react';
import Slider from 'react-slick';
import './CurrentTaps-styles.css';

const settings = {
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2
};

class CurrentTaps extends Component {

  // componentDidMount() {



  render() {
    return (
      <div className="currentTaps-container">
        <Slider {...settings}>
          <div className='tap-card'><h3>1</h3></div>
          <div className='tap-card'><h3>2</h3></div>
          <div className='tap-card'><h3>3</h3></div>
          <div className='tap-card'><h3>4</h3></div>
          <div className='tap-card'><h3>5</h3></div>
          <div className='tap-card'><h3>6</h3></div>
          <div className='tap-card'><h3>7</h3></div>
          <div className='tap-card'><h3>8</h3></div>
        </Slider>
      </div>
    );
  }
}

export default CurrentTaps;
