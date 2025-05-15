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
    <div className="bg-pink-100 rounded min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-pink-500">
        Actividad 4: Estilos basicos con Tailwind.
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="border p-4 m-2 rounded shadow bg-white"
          >
            <h2 className="text-black font-bold text-lg font-serif">
              {producto.title}
            </h2>
            <p className="text-black font-semibold">${producto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
