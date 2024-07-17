import React, { useContext, useState } from 'react';
import { CarContext } from '../context/CarContext';
import { useHistory } from 'react-router-dom';

const AddCar = () => {
  const { addCar } = useContext(CarContext);
  const [car, setCar] = useState({ model: '', brand: '', price: '', year: '' });
  const history = useHistory();

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(car);
    history.push('/');
  };

  return (
    <div>
      <h2>Add Car</h2>
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
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;
