import BottomNavbar from "../components/home/Navbar";
import { Mail, Lock, MapPin, Phone, Edit2, PlusCircle, ChevronRight, Settings2, Check, X, LogOut, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

const mockPerfilInicial = {
  nombre: "Stefan Dominguez",
  email: "stefan.dominguez@gmail.com",
  telefono: "968332219",
  direccion: "Calle principal n° 123 San Borja",
  mascotas: [
    { id: 1, nombre: "Tobby", tipo: "Perro", raza: "Golden Retriever", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=150" },
    { id: 2, nombre: "Luna", tipo: "Gato", raza: "Siamés", img: "https://images.unsplash.com/photo-1513245543132-31f507417b26?q=80&w=150" },
  ],
};

export function Perfil() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  // --- ESTADOS ---
  const [perfil, setPerfil] = useState(mockPerfilInicial);
  const [editandoCampo, setEditandoCampo] = useState(null); 
  const [valorTemporal, setValorTemporal] = useState("");
  const [mostrarModalMascota, setMostrarModalMascota] = useState(false);
  const [nuevaMascota, setNuevaMascota] = useState({ nombre: "", tipo: "Perro", raza: "" });

  // --- LÓGICA DE EDICIÓN DE CAMPOS (Lápices funcionales) ---
  const activarEdicion = (id, valorActual) => {
    setEditandoCampo(id);
    setValorTemporal(valorActual);
  };

  const guardarCambio = (id) => {
    setPerfil({ ...perfil, [id]: valorTemporal });
    setEditandoCampo(null);
  };

  // --- LÓGICA DE MASCOTAS (Navegación a servicios/historial/perfil) ---
  const irADetalleMascota = (id) => {
    // Aquí puedes redirigir según necesites, por defecto al perfil
    navigate(`/mascota-perfil/${id}`);
  };

  const manejarAgregarMascota = (e) => {
    e.preventDefault();
    const mascotaCompleta = {
      ...nuevaMascota,
      id: Date.now(),
      img: nuevaMascota.tipo === "Gato" 
        ? "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=150" 
        : "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=150"
    };
    setPerfil({ ...perfil, mascotas: [...perfil.mascotas, mascotaCompleta] });
    setMostrarModalMascota(false);
    setNuevaMascota({ nombre: "", tipo: "Perro", raza: "" });
  };

  const camposConfig = [
    { id: "email", icon: <Mail size={22} />, label: "Correo electrónico", valor: perfil.email, type: "email" },
    { id: "password", icon: <Lock size={22} />, label: "Contraseña", valor: "********", type: "password" },
    { id: "direccion", icon: <MapPin size={22} />, label: "Dirección", valor: perfil.direccion, type: "text" },
    { id: "telefono", icon: <Phone size={22} />, label: "Teléfono", valor: perfil.telefono, type: "tel" },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 pb-24 font-sans">
      {/* Header Estilo Wireframe 2 */}
      <div className="flex justify-between items-center px-6 py-4 bg-[#32ACDC] text-white .rounded-b-[2rem] shadow-lg">
        <h1 className="font-bold text-xl tracking-tight">Pet <span className="text-[#96C268]">Time</span></h1>
        <div className="flex gap-3">
            <button onClick={() => navigate("/login")}>
                <LogOut size={24} />
            </button>
        </div>
      </div>

      <main className="p-6">
        {/* Avatar interactivo */}
        <div className="flex flex-col items-center mt-4 mb-10">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full overflow-hidden border-[5px] border-white shadow-2xl">
              <img src="https://i.pravatar.cc/150?img=11" alt="Perfil" className="w-full h-full object-cover" />
            </div>
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 bg-[#96C268] p-2.5 rounded-full border-4 border-white text-white shadow-lg active:scale-90 transition-all"
            >
              <Camera size={18} />
            </button>
          </div>
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" />
          
          <h2 className="font-bold text-2xl text-gray-800 mt-5">{perfil.nombre}</h2>
          <div className="flex flex-col items-center text-gray-400 text-sm mt-1">
            <span>{perfil.email}</span>
            <span className="text-xs font-medium">Telf: {perfil.telefono}</span>
          </div>
        </div>

        {/* Sección de Campos (Lápices funcionales integrados) */}
        <div className="flex flex-col gap-4 mb-10">
          <h3 className="font-black text-[10px] text-gray-300 uppercase tracking-[0.2em] px-2">Información de cuenta</h3>
          {camposConfig.map((campo) => (
            <div key={campo.id} className="bg-white rounded-[22px] p-4 shadow-sm border border-gray-100 flex items-center justify-between group">
              <div className="flex items-center gap-4 flex-1">
                <div className={`p-3 rounded-2xl ${editandoCampo === campo.id ? 'bg-blue-50 text-[#32ACDC]' : 'bg-gray-50 text-gray-400'}`}>
                  {campo.icon}
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-tighter">{campo.label}</span>
                  {editandoCampo === campo.id ? (
                    <input
                      autoFocus
                      type={campo.type}
                      value={valorTemporal}
                      onChange={(e) => setValorTemporal(e.target.value)}
                      className="text-sm font-semibold text-gray-700 border-b-2 border-[#32ACDC] outline-none py-0.5 bg-transparent w-full"
                    />
                  ) : (
                    <span className="text-sm font-bold text-gray-600 truncate">{campo.valor}</span>
                  )}
                </div>
              </div>
              <div className="ml-3">
                {editandoCampo === campo.id ? (
                  <div className="flex gap-2">
                    <button onClick={() => guardarCambio(campo.id)} className="p-2 bg-green-50 text-green-600 rounded-xl"><Check size={18} /></button>
                    <button onClick={() => setEditandoCampo(null)} className="p-2 bg-red-50 text-red-600 rounded-xl"><X size={18} /></button>
                  </div>
                ) : (
                  <button onClick={() => activarEdicion(campo.id, campo.valor)} className="p-2 text-gray-200 hover:text-[#32ACDC] transition-colors">
                    <Edit2 size={18} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mascotas Interactiva (Envío a perfil/servicios) */}
        <div className="mb-10">
          <h3 className="font-bold text-gray-700 mb-4 px-2 flex justify-between items-center">
            Mis Mascotas
            <span className="text-[10px] bg-blue-100 text-[#32ACDC] px-2 py-1 rounded-md">{perfil.mascotas.length}</span>
          </h3>
          <div className="flex flex-col gap-3">
            {perfil.mascotas.map((m) => (
              <div 
                key={m.id} 
                onClick={() => irADetalleMascota(m.id)}
                className="bg-white .rounded-[24px] p-3 flex items-center gap-4 shadow-sm border border-gray-50 active:scale-[0.98] transition-all cursor-pointer hover:border-blue-200"
              >
                <div className="relative">
                    <img src={m.img} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" alt={m.nombre} />
                    <div className="absolute -bottom-1 -right-1 bg-[#96C268] w-5 h-5 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-800">{m.nombre}</p>
                  <p className="text-xs text-gray-400 font-medium">{m.tipo} · {m.raza}</p>
                </div>
                <div className="flex flex-col gap-1 items-end">
                    <button className="text-[10px] font-bold text-[#32ACDC] hover:underline">Ver Historial</button>
                    <ChevronRight size={20} className="text-gray-200" />
                </div>
              </div>
            ))}
            
            {/* Agregar Mascota Funcional */}
            <button 
              onClick={() => setMostrarModalMascota(true)}
              className="border-2 border-dashed border-blue-200 text-[#32ACDC] font-bold py-5 .rounded-[24px] flex items-center justify-center gap-3 text-sm bg-white hover:bg-blue-50 transition-all active:scale-95"
            >
              <PlusCircle size={22} /> Agregar nueva mascota
            </button>
          </div>
        </div>

        <button 
          onClick={() => navigate("/login")} 
          className="w-full bg-[#32ACDC] text-white font-black py-5 rounded-[22px] shadow-xl shadow-blue-100 active:scale-95 transition-all uppercase tracking-widest text-xs"
        >
          Cerrar Sesión
        </button>
      </main>

      {/* Modal para Agregar Mascota */}
      {mostrarModalMascota && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center">
          <div className="bg-white w-full max-w-md rounded-t-[3rem] p-10 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-black text-gray-800 tracking-tighter">Nueva Mascota</h2>
              <button onClick={() => setMostrarModalMascota(false)} className="p-2 bg-gray-100 rounded-full text-gray-400"><X size={20} /></button>
            </div>
            <form onSubmit={manejarAgregarMascota} className="space-y-5">
              <div className="space-y-1">
                <label className="text-[10px] font-black text-gray-300 uppercase ml-2">Nombre</label>
                <input required className="w-full bg-gray-50 rounded-2xl p-5 outline-none focus:ring-2 focus:ring-[#32ACDC] font-bold text-gray-600" placeholder="Ej. Tobby" value={nuevaMascota.nombre} onChange={(e) => setNuevaMascota({...nuevaMascota, nombre: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-300 uppercase ml-2">Tipo</label>
                  <select className="w-full bg-gray-50 rounded-2xl p-5 outline-none font-bold text-gray-600 appearance-none" value={nuevaMascota.tipo} onChange={(e) => setNuevaMascota({...nuevaMascota, tipo: e.target.value})}>
                    <option value="Perro">Perro</option>
                    <option value="Gato">Gato</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-gray-300 uppercase ml-2">Raza</label>
                  <input className="w-full bg-gray-50 rounded-2xl p-5 outline-none font-bold text-gray-600" placeholder="Poodle..." value={nuevaMascota.raza} onChange={(e) => setNuevaMascota({...nuevaMascota, raza: e.target.value})} />
                </div>
              </div>
              <button type="submit" className="w-full bg-[#32ACDC] text-white font-black py-5 rounded-2xl shadow-lg mt-4 active:scale-95 transition-all">GUARDAR MASCOTA</button>
            </form>
          </div>
        </div>
      )}

      <BottomNavbar />
    </div>
  );
}