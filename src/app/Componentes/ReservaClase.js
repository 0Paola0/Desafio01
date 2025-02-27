
import React, { useState } from 'react';

const ReservaClase = ({ clases, reservarClase }) => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleReservar = () => {
    if (selectedClass) {
      reservarClase(selectedClass);
      setSelectedClass(null);
    }
  };

  return (
    <div>
      <h2>Reservar Clase</h2>
      <select
        value={selectedClass?.id || ''}
        onChange={(e) =>
          setSelectedClass(
            clases.find((c) => c.id === parseInt(e.target.value))
          )
        }
      >
        <option value="">Selecciona una clase</option>
        {clases.map((clase) => (
          <option key={clase.id} value={clase.id}>
            {clase.nombre} - {clase.horario}
          </option>
        ))}
      </select>
      <button onClick={handleReservar}>Reservar</button>
    </div>
  );
};

export default ReservaClase;