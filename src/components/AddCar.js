import React, { useState, useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Card } from 'react-bootstrap';

const AddCar = () => {
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [year, setYear] = useState('');

  const { addCar } = useContext(CarContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar({ model, brand, price, year });
    navigate('/');
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h2 className="card-title">Add Car</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formModel">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBrand" className="mt-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPrice" className="mt-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formYear" className="mt-3">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Add Car
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AddCar;
