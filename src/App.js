import './app.css'

import {BrowserRouter, Switch, Route} from 'react-router-dom'


import PaginaInicio from './Pages/PaginaInicio'
import PaginaLogin from './Pages/PaginaLogin';
import PaginaRegistro from './Pages/PaginaRegistro';
import PaginaReportes from './Pages/PaginaReportes';
import PaginaLab from './Pages/PaginaLab';
import PaginaForm from './Pages/PaginaForm';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicio} />
        <Route exact path="/login" component={PaginaLogin} />
        <Route exact path="/registro" component={PaginaRegistro} />
        <Route exact path="/reportes" component={PaginaReportes} />
        <Route exact path="/lab" component={PaginaLab} />
        <Route exact path="/form" component={PaginaForm} />
          
      </Switch>
    </BrowserRouter>

    
  );
}

export default App;
