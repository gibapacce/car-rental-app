import React, { useContext, useState, useEffect } from 'react';
import { CarContext } from '../context/CarContext';
import { useHistory, useParams } from 'react-router-dom';

const EditCar = () => {
  const { cars, updateCar } = useContext(CarContext);
  const { id } = useParams();
  const [car, setCar] = useState({ model: '', brand: '', price: '', year: '' });
  const history = useHistory();

  useEffect(() => {
    const carToEdit = cars.find((car) => car.id === parseInt(id));
    setCar(carToEdit);
  }, [id, cars]);

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCar(id, car);
    history.push('/');
  };

  return (
    <div>
      <h2>Edit Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleChange}
          placeholder="Model"
          required
        />
        <input
          type="text"
          name="brand"
          value={car.brand}
          onChange={handleChange}
          placeholder="Brand"
          required
        />
        <input
          type="number"
          name="price"
          value={car.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="year"
          value={car.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
        <button type="submit">Update Car</button>
      </form>
    </div>
  );
};

export default EditCar;
