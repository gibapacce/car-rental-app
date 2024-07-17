import React, { useContext } from 'react';
import { CarContext } from '../context/CarContext';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';

const CarDetails = () => {
  const { cars } = useContext(CarContext);
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  return (
    <Container>
      <h2>Car Details</h2>
      <Row>
        <Col sm={12} md={6} lg={4}>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CarDetails;
