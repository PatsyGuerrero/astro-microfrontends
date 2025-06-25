import styles from "./App.module.css";
import { Route } from '@solidjs/router';
import Cuentas from "./pages/cuentas/Cuentas";
import CuentaAhorros from "./pages/cuenta-de-ahorros/CuentaAhorros";

function App() {
  return (

    <>
      <Route path="/" component={Cuentas} />
      <Route path="/cuentas/cuenta-de-ahorros" component={CuentaAhorros} />
    </>
    
  );
}

export default App;