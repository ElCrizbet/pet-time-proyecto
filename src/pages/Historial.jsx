import BottomNavbar from "../components/home/Navbar";
import { Heart, CircleDashed, Footprints, PlusCircle, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export function Historial() {
  const navigate = useNavigate();
  const dateInputRef = useRef(null);
  const [tieneServicios, setTieneServicios] = useState(true);
  
  // 1. Estado para la fecha seleccionada (por defecto hoy)
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());

  // Función para formatear la fecha del título (Hoy o fecha elegida)
  const formatearFechaTitulo = () => {
    const hoy = new Date();
    if (fechaSeleccionada.toDateString() === hoy.toDateString()) {
      return "Hoy";
    }
    const opciones = { day: 'numeric', month: 'short' };
    return fechaSeleccionada.toLocaleDateString('es-ES', opciones).toUpperCase();
  };

  // Función para los botones de las tarjetas (ej: ABR 12)
  const obtenerFechaTarjeta = (fecha) => {
    const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SET", "OCT", "NOV", "DIC"];
    return `${meses[fecha.getMonth()]} ${fecha.getDate()}`;
  };

  const mockHistorial = [
    {
      id: 1,
      tipo: "Paseos",
      mascota: "Tobby",
      fecha: `${formatearFechaTitulo()} 3:00 PM - 5:00 PM`,
      descripcion: "Caminata en el parque los amigos",
      color: "bg-[#B1D5F3]",
      icon: <Footprints size={20} className="text-[#1A6FA3]" />,
    },
    {
      id: 2,
      tipo: "Limpieza",
      mascota: "Tobby",
      fecha: `${formatearFechaTitulo()} 3:00 PM - 5:00 PM`,
      descripcion: "Limpieza profunda de pelaje",
      color: "bg-[#C2F8C7]",
      icon: <CircleDashed size={20} className="text-[#1A7A2E]" />,
    },
    {
      id: 3,
      tipo: "Cuidado",
      mascota: "Tobby",
      fecha: `${formatearFechaTitulo()} 3:00 PM - 5:00 PM`,
      descripcion: "Cuidado intensivo post-operación",
      color: "bg-[#F3B1B1]",
      icon: <Heart size={20} className="text-[#A31A1A]" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 pb-24">
      {/* Header */}
      <div className="flex justify-between px-5 py-2.5 bg-[#32ACDC] text-white rounded-b-xl">
        <h1 className="font-bold">
          <span className="text-[#96C268]">Pet</span> Time
        </h1>
      </div>

      <main className="p-5">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold text-gray-900">
            Historial de Servicios
          </h1>

          {/* 2. Selector de fecha interactivo */}
          <div 
            className="relative flex items-center gap-1 cursor-pointer"
            onClick={() => dateInputRef.current.showPicker()} 
          >
            <span className="text-[#32ACDC] text-sm font-semibold">
              {formatearFechaTitulo()}
            </span>
            <ChevronDown size={16} className="text-[#32ACDC]" />
            
            {/* Input oculto pero funcional */}
            <input
              ref={dateInputRef}
              type="date"
              className="absolute opacity-0 pointer-events-none"
              onChange={(e) => setFechaSeleccionada(new Date(e.target.value + 'T00:00:00'))}
            />
          </div>
        </div>

        {/* Botón toggle solo para demo */}
        <button
          onClick={() => setTieneServicios(!tieneServicios)}
          className="mb-4 text-xs text-gray-400 underline w-full text-center"
        >
          {tieneServicios ? "Ver pantalla vacía" : "Ver con servicios"}
        </button>

        {!tieneServicios ? (
          <div className="flex flex-col items-center justify-center mt-16 gap-4">
            <div className="w-48 h-48 bg-[#E8F4FF] rounded-3xl flex items-center justify-center relative">
              <img
                src="/reloj.svg" 
                alt="Reloj decorativo"
                className="w-48 h-48 object-contain"
              />
            </div>
            <p className="text-[#32ACDC] font-bold text-lg">Sin servicios registrados</p>
            <button
              onClick={() => navigate("/services")}
              className="bg-[#32ACDC] text-white font-semibold py-3 px-8 rounded-[10px]"
            >
              Agregar un servicio
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {mockHistorial.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 shadow-sm flex items-center gap-3"
              >
                <div className={`${item.color} rounded-xl p-3 w-12 h-12 flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-[13px] text-gray-800">
                    {item.tipo} - {item.mascota}
                  </p>
                  <p className="text-[11px] text-gray-400">{item.fecha}</p>
                  <p className="text-[11px] text-gray-500">{item.descripcion}</p>
                </div>
                <button className="bg-[#32ACDC] text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {obtenerFechaTarjeta(fechaSeleccionada)}
                </button>
              </div>
            ))}

            <button
              onClick={() => navigate("/services")}
              className="mt-4 bg-[#32ACDC] text-white font-semibold py-3 rounded-[10px] flex items-center justify-center gap-2"
            >
              <PlusCircle size={18} />
              Reservar servicio
            </button>
          </div>
        )}
      </main>

      <BottomNavbar />
    </div>
  );
}