import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavBar';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import EditCar from './components/EditCar';
import CarDetails from './components/CarDetails';
import { CarProvider } from './context/CarContext';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <CarProvider>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/add" element={<AddCar />} />
          <Route path="/edit/:id" element={<EditCar />} />
          <Route path="/details/:id" element={<CarDetails />} />
        </Routes>
      </Router>
    </CarProvider>
  );
};

export default App;
