// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    fetchActividades();
  }, []);

  const fetchActividades = async () => {
    try {
      const response = await axios.get('http://localhost:5000/actividades');
      setActividades(response.data);
    } catch (error) {
      console.error('Error al obtener actividades:', error);
    }
  };

  return (
    <div className="App">
      <h1>Actividades de Aprendizaje</h1>
      <ul>
        {actividades.map(actividad => (
          <li key={actividad.id}>
            <strong>{actividad.titulo}</strong>: {actividad.descripcion} ({actividad.curso})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
