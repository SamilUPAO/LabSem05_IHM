import { Link } from "react-router-dom";

const Header = () => {
    return <header>
<nav class="navbar navbar-expand-lg navbar-light bg-danger">
  <a className="display-3" class="navbar-brand text-warning" href="#">MARKET COMBO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active text-info" href="#"><i data-feather="shopping-bag"></i>Productos <span class="sr-only"></span></a>
      <a class="nav-item nav-link text-info" href="#"><i data-feather="percent"></i>Descuentos</a>
      <a class="nav-item nav-link text-info" href="#"><i data-feather="home"></i>Iniciar Sesión</a>
      <a class="nav-item nav-link disabled text-info" href="#"><i data-feather="phone"></i>Contáctanos</a>
    </div>
  </div>
</nav>
    </header>;
}

export default Header;
