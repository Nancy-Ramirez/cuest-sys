import { useEffect, useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import axios from "axios";

export const Prueba = () => {
  const [datosServidor, setDatosServidor] = useState([]);
  console.log("Listar datos", datosServidor);
  useEffect(() => {
    async function getInfo() {
      const url = "https://jsonplaceholder.typicode.com/posts/";

      let config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      try {
        const resp = await axios.get(url, config);
        console.log(resp.data);
        setDatosServidor(resp.data);
      } catch (err) {
        console.error(err);
      }
    }
    getInfo();
  }, []);

  return (
    <main>
      <NavbarAdmin />

      <div className="pt-48 relative overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="text-center text-white">{
                      datosServidor.map((usuario) => {
                          return (
                            <tr>
                              <td className="px-4 py-3"> {usuario.id}</td>
                              <td className="px-4 py-3"> {usuario.title}</td>
                              <td className="px-4 py-3"> {usuario.body}</td>
                            </tr>
                          );
                          
                      })
                  }
          </div>
      </div>
    </main>
  );
};
