"use client";
import React, { useState } from 'react';
import ListaClases from './Componentes/ListaClases';
import ReservaClase from './Componentes/ReservaClase';
import ResumenReserva from './Componentes/ResumenReserva';
import styles from './page.module.css';

const Home = () => {
  const [clases, setClases] = useState([
    { id: 1, nombre: 'Yoga', horario: '7:00 AM - 9:00 AM', cupos: 30 },
    { id: 2, nombre: 'Spinning', horario: '9:00 AM - 11:00 AM', cupos: 25 },
    { id: 3, nombre: 'Pesas', horario: '1:00 PM - 3:00 PM', cupos: 20 },
    { id: 4, nombre: 'Zumba', horario: '3:00 PM - 5:00 PM', cupos: 15 },
    { id: 5, nombre: 'Crossfit', horario: '5:00 PM - 7:00 PM', cupos: 10 },
  ]);
  const [reservas, setReservas] = useState([]);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const reservarClase = (clase) => {
    // agregue un if para validacion de evitar reservas duplicadas
    if (reservas.some((r) => r.id === clase.id)) {
      setShowErrorMessage(true);
      setTimeout(() => setShowErrorMessage(false), 5000);
      return;
    }

    // actualizacion de estado de reservas
    setClases(
      clases.map((c) =>
        c.id === clase.id ? { ...c, cupos: c.cupos - 1 } : c
      )
    );
    setReservas([...reservas, clase]);
  };

  const cancelarReserva = (clase) => {
    setReservas(reservas.filter((r) => r.id !== clase.id));
    setClases(
      clases.map((c) =>
        c.id === clase.id ? { ...c, cupos: c.cupos + 1 } : c
      )
    );
  };

  return (
    <div>
      <h1 className={styles.claseh1}>Reserva de Clases</h1>
      {showErrorMessage && (
        <div className={styles.alerta}>
          Ya has reservado esta clase.
        </div>
      )}
      <ListaClases clases={clases} reservarClase={reservarClase} />
      <ResumenReserva reservas={reservas} cancelarReserva={cancelarReserva} />
    </div>
  );
};

export default Home;