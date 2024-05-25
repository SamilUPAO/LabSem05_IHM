import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Productos from './data/productos.json'

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {
                Productos.map(it => {
                    return (<Carousel.Item onClick={(e) => {
                        e.preventDefault(); handleClick(it.slug)
                    }}>
                        <img className='w-100 dark-image' src={it.picture}></img>
                        <Carousel.Caption>
                            <h3 className="fw-bold text-dark">{it.name}</h3>
                            <p className="fw-bold text-dark">{it.description}</p>
                            <button className="btn btn-warning" >Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>);
                })
            }
        </Carousel>
    </main >;
}
export default Main;
