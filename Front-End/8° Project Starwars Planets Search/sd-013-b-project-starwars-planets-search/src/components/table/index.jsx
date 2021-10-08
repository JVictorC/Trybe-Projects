import React, { useCallback, useContext, useEffect, useState } from 'react';
import MainContext from '../../context/MainContext';

export default function Table() {
  const [headers, setHeaders] = useState();
  const { data, filters: { dataFilter } } = useContext(MainContext);

  const getHeaders = useCallback(() => {
    const keys = data[0] && Object.keys(data[0]);
    setHeaders(keys);
  }, [data]);

  useEffect(() => {
    getHeaders();
  }, [getHeaders]);

  return (
    <table>
      <thead>
        <tr>
          {
            headers && headers.map((header) => (
              <th key={ header }>{header}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          dataFilter.map((planet) => (
            <tr key={ planet.name }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.population}</td>
              <td>{planet.surface_water}</td>
              <td>
                <ul>
                  {planet.films.map((film) => (
                    <li key={ film }>{film}</li>
                  ))}
                </ul>
              </td>
              <td>{planet.gravity}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

// link refe para Table semantica https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody
