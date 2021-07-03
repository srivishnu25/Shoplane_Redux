import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

const Carousell = () => {
 
    return (<>
    
<Carousel style={{width:"70%",margin:"5% auto"}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://painted-swanky-gorgonzola.glitch.me/pic1.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://painted-swanky-gorgonzola.glitch.me/pic2.png"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://painted-swanky-gorgonzola.glitch.me/pic3.png"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </>  );
}
 
export default Carousell;