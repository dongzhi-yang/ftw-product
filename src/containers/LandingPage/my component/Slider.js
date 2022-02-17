
import React from 'react';
import { Carousel} from 'react-bootstrap';
import draw1 from '../../../assets/AdobeStock_353839290.jpeg';

export default function Slider() {
  const schemaImage = `${config.canonicalRootURL}`;
    return <div class="slider-section">
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={schemaImage+draw1}
      alt="First slide"
    />
  </Carousel.Item>
 
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={schemaImage+draw1}
      alt="Second slide"

    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      src={schemaImage+draw1}
      alt="Third slide"
      className="d-block w-100"

    />

  </Carousel.Item>
</Carousel>
        </div>;

  }