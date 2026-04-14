import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, User, Calendar, ChevronDown, LogOut } from 'lucide-react';

export const ServiceFormPage = ({ title, description, icon, bannerColor, children }) => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      
      <header className="bg-[#33A9DB] px-4 py-3 flex justify-between items-center text-white shadow-sm">
        <h1 className="font-bold"><span className="text-[#96C268]">Pet</span> Time</h1>
        <button onClick={() => navigate('/login')}><LogOut size={24} /></button>
      </header>

      
      <div className="p-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 font-semibold text-gray-800">
          <ChevronLeft size={24} /> Regresar
        </button>
      </div>

      <main className="px-6 flex-1 pb-10">
       
        <div className={`${bannerColor} rounded-2xl p-4 flex items-center gap-4 mb-8 shadow-sm`}>
          <div className="bg-white/30 p-2 rounded-full text-white">{icon}</div>
          <div>
            <h2 className="font-bold text-lg text-gray-900">{title}</h2>
            <p className="text-sm text-gray-800 opacity-90">{description}</p>
          </div>
        </div>

        <form className="space-y-6">
          
          <div>
            <label className="block font-bold text-gray-900 mb-2 ml-1">Mascota a Cuidar</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#33A9DB]"><User size={20} /></span>
              <select className="w-full bg-white rounded-2xl py-4 pl-12 pr-10 shadow-sm appearance-none outline-none focus:ring-2 focus:ring-[#33A9DB] text-gray-500">
                <option value="">Selecciona una mascota</option>
                <option value="1">Firulais</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"><ChevronDown size={20} /></span>
            </div>
          </div>

          <div>
            <label className="block font-bold text-gray-900 mb-2 ml-1">Fecha de Inicio</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#33A9DB]"><Calendar size={20} /></span>
              <input type="datetime-local" className="w-full bg-white rounded-2xl py-4 pl-12 pr-4 shadow-sm outline-none focus:ring-2 focus:ring-[#33A9DB] text-gray-500" />
            </div>
          </div>

          
          {children}

          <button type="button" className="w-full bg-[#33A9DB] text-white font-bold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform mt-4">
            Registrar Servicio
          </button>
        </form>
      </main>
    </div>
  );
};