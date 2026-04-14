import BottomNavbar from "../components/home/Navbar";
import { Mail, Lock, MapPin, Phone, Edit2, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const camposEditar = [
  { icon: <Mail size={18} className="text-gray-500" />, label: "Correo electrónico", valor: "stefan.dominguez@gmail.com" },
  { icon: <Lock size={18} className="text-gray-500" />, label: "Contraseña", valor: "••••••••" },
  { icon: <MapPin size={18} className="text-gray-500" />, label: "Dirección", valor: "Urb. Prolongación 23 San Borja" },
  { icon: <Phone size={18} className="text-gray-500" />, label: "Teléfono", valor: "Tel: 968332274" },
];

export function PerfilEditar() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-slate-50 pb-24">
      <div className="flex justify-between items-center px-5 py-2.5 bg-[#32ACDC] text-white rounded-b-xl">
        <button onClick={() => navigate("/perfil")} className="flex items-center gap-1">
          <ChevronLeft size={22} />
          <span className="font-semibold">Regresar</span>
        </button>
        <h1 className="font-bold">
          <span className="text-[#96C268]">Pet</span> Time
        </h1>
      </div>

      <main className="p-5">
        {/* Avatar */}
        <div className="flex flex-col items-center mt-4 mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-2 border-4 border-white shadow">
            <img
              src="https://i.pravatar.cc/150?img=11"
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="bg-[#32ACDC] text-white text-xs font-semibold px-4 py-1 rounded-full mb-2">
            Cambiar foto
          </button>
          <h2 className="font-bold text-lg text-gray-900">Stefan Dominguez</h2>
          <p className="text-[12px] text-gray-400">stefan.dominguez@gmail.com</p>
          <p className="text-[12px] text-gray-400">Tel: 968332274</p>
        </div>

        {/* Campos editables */}
        <div className="flex flex-col gap-3 mb-6">
          {camposEditar.map((campo, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {campo.icon}
                  <span className="text-[14px] font-semibold text-gray-700">
                    {campo.label}
                  </span>
                </div>
                <Edit2 size={16} className="text-gray-400" />
              </div>
              <p className="text-[12px] text-gray-400 mt-1 ml-7">
                {campo.valor}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-[#32ACDC] text-white font-semibold py-3 rounded-[10px]"
        >
          Cerrar sesión
        </button>
      </main>

      <BottomNavbar />
    </div>
  );
}