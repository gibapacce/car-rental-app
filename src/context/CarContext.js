import React, { createContext, useState } from 'react';

export const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

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
      {children}
    </CarContext.Provider>
  );
};
