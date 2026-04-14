import { Heart, CirclePile, Footprints } from "lucide-react";
import { Header } from "../components/Header";
import { ServiceCard } from "../components/services/ServiceCard";
import BottomNavbar from "../components/home/Navbar";
import { useNavigate } from "react-router-dom";

export function Servicespage() {
  const navigate = useNavigate();

  const servicesData = [
    {
      title: "Cuidado",
      description: "Cuidamos a tu mascota mientras no estás.",
      icon: <Heart size={24} className="text-[#F16969]" />,
      color: "bg-[#F3B1B1]",
      buttonColor: "bg-[#F3B1B1]",
      items: ["Alimentación", "Supervisión", "Espacios seguros"],
      path: "/reserva-cuidado"
    },
    {
      title: "Limpieza",
      description: "Mantenemos a tu mascota saludable.",
      icon: <CirclePile size={24} className="text-[#5EF069]" />,
      color: "bg-[#C2F8C7]",
      buttonColor: "bg-[#C2F8C7]",
      items: ["Baños completos", "Baños secos", "Cepillados"],
      path: "/reserva-limpieza"
    },
    {
      title: "Paseos",
      description: "Sacamos a pasear a tu mascota con cuidado y diversión.",
      icon: <Footprints size={24} className="text-[#43A3F1]" />,
      color: "bg-[#B1D5F3]",
      buttonColor: "bg-[#B1D5F3]",
      items: ["Rutas seguras y divertidas", "Ejercicios al aire libre", "Horarios Flexibles"],
      path: "/reserva-paseos"
    }
  
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-32">
      <Header />
      
      <main className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Servicios</h1>
        <p className="mb-8">
          Elige el servicio que necesitas hoy
        </p>

        {/* tarjetas renderizado*/}
        <div className="flex flex-col gap-4">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              buttonColor={service.buttonColor}
              items={service.items}
              path={service.path}
            />
          ))}
        </div>
      </main>

      <BottomNavbar />
    </div>
  );
}