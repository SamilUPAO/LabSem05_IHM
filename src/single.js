import Productos from './data/productos.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const producto = Productos.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{producto.name}</h1>
        <hr></hr>
        <img src={producto.picture}></img>
        <p>{producto.description}</p>
    </>);
}

export default Single;