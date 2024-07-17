import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import EditCar from './components/EditCar';
import CarDetails from './components/CarDetails';
import { CarProvider } from './context/CarContext';

const App = () => {
  return (
    <CarProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={CarList} />
          <Route path="/add" component={AddCar} />
          <Route path="/edit/:id" component={EditCar} />
          <Route path="/details/:id" component={CarDetails} />
        </Switch>
      </Router>
    </CarProvider>
  );
};

export default App;
