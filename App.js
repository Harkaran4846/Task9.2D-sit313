import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'; 
import Post from './Post'; 
import NavigationBar from './Navbar';
import PricingPlans from './PricingPlans';
import Payment from './payment';

function App() {
  return (
    <Router>
      <NavigationBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/plans" element={<PricingPlans />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </Router>
  );
}

export default App;
