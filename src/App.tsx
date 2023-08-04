import {BrowserRouter} from 'react-router-dom'
import Routes from './Repository/Routes'
import './css/Main.css'

function App() {
  return (
    <BrowserRouter>
    <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
