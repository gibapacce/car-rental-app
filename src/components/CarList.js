import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { Link } from 'react-router-dom';

const CarList = () => {
  const { cars, deleteCar } = useContext(CarContext);

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <Link to={`/details/${car.id}`}>{car.model}</Link>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
            <Link to={`/edit/${car.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Car</Link>
    </div>
  );
};

export default CarList;
