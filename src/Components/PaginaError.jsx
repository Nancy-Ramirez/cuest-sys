import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="cont flex justify-center flex-col pt-24">
    <section className="error-container">
      <span>
        <span>4</span>
      </span>
      <span>0</span>
      <span>
        <span>4</span>
      </span>
    </section>
    <div className="flex justify-center pt-48">
    <Link to="/inicio" className="button">
        <svg>
             <rect
             x="0"
             y="0"
             fill="none"
             width="100%"
             height="100%"
             />
        </svg>
        Regresar a Inicio
    </Link>
    </div>
    </div>
  );
};
