import React from 'react';
import styles from '../page.module.css';

const ResumenReserva = ({ reservas, cancelarReserva }) => {
  return (
    <div className={styles.contenedor}>
      <h2 className={styles.claseeh2}>Resumen de Reservas</h2>
      {reservas.length === 0 ? (
        <p className={styles.claseeh2}>No tienes reservas.</p>
      ) : (
        <div className={styles.contenedor}>
          {reservas.map((clase) => (
            <div key={clase.id} >
              <div>
                <strong>{clase.nombre}</strong> - {clase.horario}
              </div>
              <button className={styles.botonCancelar} onClick={() => cancelarReserva(clase)}>Cancelar</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumenReserva;