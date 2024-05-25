import { Link } from "react-router-dom";

const Header = () => {
    return <header>
<nav class="navbar navbar-expand-lg navbar-light bg-danger">
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="display-4 navbar-brand text-warning" href="#">MARKET COMBO</a>
  </div>
</nav>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <a class="nav-item nav-link active text-white" href="#"><i data-feather="shopping-bag" class="text-white"></i>Productos <span class="sr-only"></span></a>
      <a class="nav-item nav-link text-white" href="#"><i data-feather="percent" class="text-white"></i>Descuentos</a>
      <a class="nav-item nav-link text-white" href="#"><i data-feather="home" class="text-white"></i>Iniciar Sesión</a>
      <a class="nav-item nav-link active text-white" href="#"><i data-feather="phone" class="text-white"></i>Contáctanos</a>
    </div>
  </div> 
</nav>
    </header>;
}

export default Header;
