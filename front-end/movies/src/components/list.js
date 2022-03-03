import axios from "axios";
import { useState, useEffect } from "react";

const MovieList = () => {
  const [list, setList] = useState([]);

  const getList = () => {
    axios.get("http://localhost:4000/user/getlist").then((response) => {
      const result = response.data;
      if (result.status === "success") {
        setList(result.data);
      } else {
        alert("error while loading list of Salons");
      }
    });
  };
  useEffect(() => {
    console.log(`SalonList component got loaded`);
    getList();
  }, []);

  return (
    <div className="container">
      <h1>Movie</h1>

      <thead>
        <tr>
          <th>Movie name</th>
          <th>Movie name</th>
        </tr>
      </thead>
      <tbody>
        {list.map((movie) => (
          <tr key="key">
            <td>{movie.name}</td>
            <td>{movie.name}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default MovieList;
