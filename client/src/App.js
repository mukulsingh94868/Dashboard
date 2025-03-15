import "./App.css";
import Home from "./View/Pages/Home";
import RouterIndex from './Router/Index';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from "react-router-dom";
import OuterLayout from "./Layout/OuterLayout";


function App() {
  return (
    <>
      <Toaster />
      <Router>
        <OuterLayout>
          <RouterIndex />
        </OuterLayout>
      </Router>
    </>
  );
}

export default App;