import Carousel from 'react-bootstrap/Carousel';

const Carrousels = () => {
    
         return (
        <Carousel>
          <Carousel.Item>
          <img src='https://campograndeperu.com/wp-content/uploads/2023/11/bodega-de-abarrotes-1.jpg' alt='Imagen Referencial' className='img-fluid' />
            <Carousel.Caption>
              <h3>Imagen Referencial</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src='https://pqs.pe/wp-content/uploads/2021/06/PQS-bodegas.jpg' alt='Imagen Referencial' className='img-fluid' />
            <Carousel.Caption>
              <h3>Imagen Referencial</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img src='https://cdn.shortpixel.ai/spai/w_1082+q_glossy+ret_img+to_webp/www.baud.es/wp-content/uploads/2020/10/28-Alcobendas-Bodega-Carrefour.jpg' alt='Imagen Referencial' className='img-fluid' />
            <Carousel.Caption>
              <h3>Imagen Referencial</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
  

export default Carrousels;