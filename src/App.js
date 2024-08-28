import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
