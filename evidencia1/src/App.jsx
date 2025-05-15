import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProductos(res.data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-pink-500">
        Actividad 3. Pidiendo una lista de productos, con Axios.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="border p-4 rounded shadow">
            <h2 className="font-bold">{producto.title}</h2>
            <p>${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
