import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ServiceCard = ({ icon, title, description, items, color, buttonColor, path }) => {
  const navigate = useNavigate();
  
  if (!items) return null;

  return (
    <div className="bg-[#E9F0F7] rounded-2xl p-6 relative shadow-sm">
      <div className="flex gap-4 mb-4">
        <div className={`p-3 rounded-xl ${color} flex items-center justify-center w-14 h-14`}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 leading-tight">{description}</p>
        </div>
      </div>

      <ul className="space-y-2 ml-2 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <span className="mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>

      <button 
        type="button"
        onClick={() => {
          if (path) {
            navigate(path);
          } else {
            console.warn("No se ha definido un path para el servicio:", title);
          }
        }}
        className={`absolute bottom-6 right-6 p-2 rounded-xl ${buttonColor} text-gray-800 shadow-md active:scale-95 transition-transform z-10 hover:brightness-95`}
      >
        <ArrowRight size={24} />
      </button>

    </div>
  );
};