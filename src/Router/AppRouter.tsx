import {Routes,Route,NavLink} from 'react-router-dom';
import { HomePage, Rq_01_fetchRandom } from '../pages';

export const AppRouter = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarColor01">
              <ul className="navbar-nav me-auto">
                <NavLink  to="/" end  className="nav-link btn btn-secondary mx-2">Home</NavLink>
                <NavLink to="/rq_01_fetchRandom" className="nav-link btn btn-secondary mx-2">Fetch</NavLink>
              </ul>
            </div>
          </div>
      </nav>

            {/* Rutas */}
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/rq_01_fetchRandom' element={<Rq_01_fetchRandom />}/>
      </Routes>
    </>
  )
}
