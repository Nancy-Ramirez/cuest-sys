import { Link } from "react-router-dom";
import NavbarAdmin from "./NavbarAdmin";

const SidebarAdmin = () => {
  return (
    
    <aside class="opacity-70">
      <span
        class="absolute text-white text-4xl top-5 left-4 cursor-pointer"
        onclick="openSidebar()"
      >
        <i class="bi bi-filter-left px-2 bg-green-200 rounded-md"></i>
      </span>
      <div class="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[200px] overflow-y-auto text-center bg-green-700">
        <div class="text-gray-100 text-xl">
          <div class="p-2.5 mt-1 flex items-center justify-center">
            
            <h1 class="font-bold text-black text-[30px] ml-3 mb-10 text-center">
              AXIS
            </h1>
            <i
              class="bi bi-x cursor-pointer ml-28 lg:hidden"
              onclick="openSidebar()"
            ></i>
          </div>

        </div>
        
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-house-door-fill"></i>
          <Link to="/inicio" class="text-[15px] ml-4 text-black font-bold">Inicio</Link>
        </div>
        
        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-house-door-fill"></i>
          <Link to="/cuestionario" class="text-[15px] ml-4  text-black font-bold">Cuestionario</Link>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-house-door-fill"></i>
          <Link class="text-[15px] ml-4 text-black font-bold">Materias</Link>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-house-door-fill"></i>
          <Link to="/institucion" class="text-[15px] ml-4 text-black font-bold">Instituciones</Link>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-house-door-fill"></i>
          <Link to="/insignia" class="text-[15px] ml-4  text-black font-bold">Insignias</Link>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-house-door-fill"></i>
          <Link to="/estudiante" class="text-[15px] ml-4  text-black font-bold">Estudiantes</Link>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-house-door-fill"></i>
          <Link class="text-[15px] ml-4  text-black font-bold">Usuarios</Link>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-house-door-fill"></i>
          <Link class="text-[15px] ml-4  text-black font-bold">Reportes</Link>
        </div>

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-green-600  hover:rounder-lg">
          <i class="bi bi-box-arrow-in-right"></i>
          <span class="text-[15px] ml-4  text-black font-bold">Logout</span>
        </div>
        
      </div><div class="flex flex-1">
            
            <main class="flex items-center justify-center flex-1 px-25 py-8">
              <h1 class="text-5xl font-bold text-white hidden">In progress</h1>
            </main>
          </div>
    </aside>
  );
};

export default SidebarAdmin;
