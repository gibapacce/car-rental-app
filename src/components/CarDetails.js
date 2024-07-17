import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { useParams, Link } from 'react-router-dom';

const CarDetails = () => {
  const { cars } = useContext(CarContext);
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  return (
    <div>
      <h2>Car Details</h2>
      {car ? (
        <div>
          <p>Model: {car.model}</p>
          <p>Brand: {car.brand}</p>
          <p>Price: {car.price}</p>
          <p>Year: {car.year}</p>
          <Link to="/">Back</Link>
        </div>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
};

export default CarDetails;
