import "./App.css";
import Home from "./View/Pages/Home";
import Router from './Router/Index';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Toaster />
      <Router >
        <Home />
      </Router>
    </>
  );
}

export default App;