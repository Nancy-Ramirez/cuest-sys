import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    
    <aside className="opacity-70">
      <span
        className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
      >
        <i className="bi bi-filter-left px-2 bg-green-200 rounded-md"></i>
      </span>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[200px] overflow-y-auto text-center bg-green-700">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-center">
            
            <h1 className="font-bold text-black text-[30px] ml-3 mb-10 text-center">
              AXIS
            </h1>
            <i
              className="bi bi-x cursor-pointer ml-28 lg:hidden"
            ></i>
          </div>

        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-house-door-fill"></i>
          <Link to="/inicio" className="text-[17px] ml-4 text-white font-bold">Inicio</Link>
        </div>
 
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-house-door-fill"></i>
          <Link to="/cuestionario" className="text-[17px] ml-4 text-white font-bold">Cuestionario</Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-house-door-fill"></i>
          <Link to="/materia" className="text-[17px] ml-4 text-white font-bold">Materias</Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-house-door-fill"></i>
          <Link to="/institucion" className="text-[17px] ml-4 text-white font-bold">Instituciones</Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-house-door-fill"></i>
          <Link to="/insignia" className="text-[17px] ml-4 text-white font-bold">Insignias</Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-house-door-fill"></i>
          <Link to="/estudiante" className="text-[17px] ml-4 text-white font-bold">Estudiantes</Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-house-door-fill"></i>
          <Link to="/usuario" className="text-[17px] ml-4 text-white font-bold">Usuarios</Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-house-door-fill"></i>
          <Link to="/reporte" className="text-[17px] ml-4 text-white font-bold">Reportes</Link>
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[17px] ml-4 text-white font-bold">Logout</span>
        </div>
        
      </div><div className="flex flex-1">
            
            <main className="flex items-center justify-center flex-1 px-25 py-8">
              <h1 className="text-5xl font-bold text-white hidden">In progress</h1>
            </main>
          </div>
    </aside>
  );
};

export default SidebarAdmin;
