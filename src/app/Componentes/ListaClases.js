import React from 'react';
import styles from '../page.module.css';

const ListaClases = ({ clases, reservarClase }) => {
  return (
    <div className={styles.contenedortabla}>
      <h2 className={styles.claseh2}>Clases Disponibles</h2>
      <table className={styles.tabla}>
        <thead className={styles.clasethead}>
          <tr className={styles.clasetr}>
            <th className={styles.claseth}>Clase</th>
             <th className={styles.claseth}>Horario</th>
             <th className={styles.claseth}>Cupos</th>
             <th className={styles.claseth}>Acción</th>
          </tr>
        </thead>
        <tbody className={styles.clasetbody}>
          {clases.map((clase) => (
            <tr key={clase.id}>
              <td className={styles.clasetd}>{clase.nombre}</td>
              <td className={styles.clasetd}>{clase.horario}</td>
              <td className={styles.clasetd}>{clase.cupos}</td>
              <td className={styles.clasetd}>
                <button className={styles.botonReserva} onClick={() => reservarClase(clase)}>Reservar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaClases;