const Aside = () => {
    return <aside>
        <form>
  <div class="form-group mt-5">
    <label className="fw-bold" for="exampleInputEmail1">Correo Electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa email"/>
    <small id="emailHelp" class="form-text text-muted">Tu información no se compartirá.</small>
  </div>
  <div class="form-group">
    <label className="fw-bold" for="exampleInputPassword1">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Recordármelo</label>
  </div>
  <button type="submit" class="btn btn-warning">Aceptar</button>
</form>
    </aside>;
}

export default Aside;