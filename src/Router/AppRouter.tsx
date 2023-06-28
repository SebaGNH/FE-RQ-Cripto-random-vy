import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
import { HomePage, Rq_01_fetchRandom, Rq_02_obtenerData, Rq_03_useRandoms } from '../pages';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarColor01">
            </div>
            <ul className="navbar-nav me-auto">
              <NavLink  to="/" end  className="nav-link btn btn-secondary mx-2">Home</NavLink>
              <NavLink to="/rq_01_fetchRandom" className="nav-link btn btn-secondary mx-2">Fetch</NavLink>
              <NavLink to="/rq_02_obtenerData" className="nav-link btn btn-secondary mx-2">RQ Obtener Data</NavLink>
              <NavLink to="/rq_03_useRandoms" className="nav-link btn btn-secondary mx-2">Hook useRandoms</NavLink>
            </ul>
          </div>
        </div>
      </nav>

            {/* Rutas */}
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/rq_01_fetchRandom' element={<Rq_01_fetchRandom />}/>
        <Route path='/rq_02_obtenerData' element={<Rq_02_obtenerData />}/>
        <Route path='/rq_03_useRandoms' element={<Rq_03_useRandoms />}/>
      </Routes>
    </BrowserRouter>
  )
}
