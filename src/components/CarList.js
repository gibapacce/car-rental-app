import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const CarList = () => {
  const { cars, deleteCar } = useContext(CarContext);

  return (
    <Container>
      <h2>Car List</h2>
      <Row>
        {cars.map((car) => (
          <Col key={car.id} sm={12} md={6} lg={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{car.model}</Card.Title>
                <Card.Text>
                  <strong>Brand:</strong> {car.brand}
                </Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${car.price}
                </Card.Text>
                <Card.Text>
                  <strong>Year:</strong> {car.year}
                </Card.Text>
                <Link to={`/edit/${car.id}`}>
                  <Button variant="primary" className="mr-2">
                    Edit
                  </Button>
                </Link>
                <Button variant="secondary" onClick={() => deleteCar(car.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CarList;
