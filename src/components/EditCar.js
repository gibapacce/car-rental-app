import React, { useContext, useState, useEffect } from 'react';
import { CarContext } from '../context/CarContext';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const EditCar = () => {
  const { cars, updateCar } = useContext(CarContext);
  const { id } = useParams();
  const [car, setCar] = useState({ model: '', brand: '', price: '', year: '' });
  const navigate = useNavigate();

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
    navigate('/');
  };

  return (
    <Container>
      <h2>Edit Car</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formModel">
          <Form.Label>Model</Form.Label>
          <Form.Control
            type="text"
            name="model"
            value={car.model}
            onChange={handleChange}
            placeholder="Model"
            required
          />
        </Form.Group>
        <Form.Group controlId="formBrand" className="mt-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            name="brand"
            value={car.brand}
            onChange={handleChange}
            placeholder="Brand"
            required
          />
        </Form.Group>
        <Form.Group controlId="formPrice" className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={car.price}
            onChange={handleChange}
            placeholder="Price"
            required
          />
        </Form.Group>
        <Form.Group controlId="formYear" className="mt-3">
          <Form.Label>Year</Form.Label>
          <Form.Control
            type="number"
            name="year"
            value={car.year}
            onChange={handleChange}
            placeholder="Year"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          Update Car
        </Button>
      </Form>
    </Container>
  );
};

export default EditCar;
