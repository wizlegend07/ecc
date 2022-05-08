import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen';
import Productdetail from './screens/ProductDetail';
import {
  BrowserRouter ,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        {/* <HomeScreen /> */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomeScreen />}/>
            <Route exact path="/product/:id" element={<Productdetail/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
