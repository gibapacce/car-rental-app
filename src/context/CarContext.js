import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = (props) => {
  const [cars, setCars] = useState([
    { id: 1, model: 'Model S', brand: 'Tesla', price: 80000, year: 2020 },
    { id: 2, model: 'Mustang', brand: 'Ford', price: 55000, year: 2018 },
  ]);

  const addCar = (car) => {
    car.id = cars.length + 1;
    setCars([...cars, car]);
  };

  const updateCar = (id, updatedCar) => {
    setCars(cars.map((car) => (car.id === parseInt(id) ? updatedCar : car)));
  };

  const deleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== parseInt(id)));
  };

  return (
    <CarContext.Provider value={{ cars, addCar, updateCar, deleteCar }}>
      {props.children}
    </CarContext.Provider>
  );
};
