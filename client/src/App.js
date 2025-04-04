import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import OuterLayout from "./Layout/OuterLayout";
import RouterIndex from './Router/Index';


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