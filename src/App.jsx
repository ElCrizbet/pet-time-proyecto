import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Servicespage } from "./pages/Servicespage";
import { ServiceFormPage } from "./components/services/ServiceFormPage";
import { Heart, CirclePile, ChevronDown, Sparkles, Footprints } from "lucide-react";
import { Historial } from "./pages/Historial";
import { Perfil } from "./pages/Perfil";
import { PerfilEditar } from "./pages/PerfilEditar";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/services" element={<Servicespage />} />
      <Route path="/historial" element={<Historial />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/perfil-editar" element={<PerfilEditar />} />

      {/* Cuidado */}
      <Route 
        path="/reserva-cuidado" 
        element={
          <ServiceFormPage 
            title="Reserva de Cuidado"
            description="Cuidamos a tu mascota mientras no estás. Con atención personalizada."
            icon={<Heart size={40} className="fill-current" />}
            bannerColor="bg-[#F3B1B1]"
          />
        } 
      />

      {/* Limpieza */}
      <Route 
        path="/reserva-limpieza" 
        element={
          <ServiceFormPage 
            title="Reserva de Limpieza"
            description="Baños y estética para que luzca increíble."
            icon={<CirclePile size={40} className="fill-current" />}
            bannerColor="bg-[#C2F8C7]"
          >
            
            <div className="mt-4">
              <label className="block font-bold text-gray-900 mb-2 ml-1">Tipo de Servicio de Limpieza</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#33A9DB]">
                  <Sparkles size={20} />
                </span>
                <select className="w-full bg-white rounded-2xl py-4 pl-12 pr-10 shadow-sm appearance-none outline-none focus:ring-2 focus:ring-[#33A9DB] text-gray-500">
                  <option>Baño Completo</option>
                  <option>Baño Seco</option>
                  <option>Cepillados</option>
                </select>
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <ChevronDown size={20} />
                </span>
              </div>
            </div>
          </ServiceFormPage>
        } 
      />

      {/* Paseos */}
      <Route 
        path="/reserva-paseos" 
        element={
          <ServiceFormPage 
            title="Reserva de Paseos"
            description="Paseos divertidos y seguros para estirar las patas."
            icon={<Footprints size={40} className="fill-current" />}
            bannerColor="bg-[#DBEAFE]"
          />
        } 
      />
    </Routes>
  );
}

export default App;