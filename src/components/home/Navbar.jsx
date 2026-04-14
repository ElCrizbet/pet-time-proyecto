import { Home, LayoutGrid, FileText, User } from 'lucide-react';
import { Link } from "react-router-dom";

const BottomNavbar = () => {
  const menuItems = [
    { name: 'Inicio', icon: <Home size={28} strokeWidth={1.5} />, href: '/home' },
    { name: 'Servicios', icon: <LayoutGrid size={28} strokeWidth={1.5} />, href: '/services'},
    { name: 'Historial', icon: <FileText size={28} strokeWidth={1.5} />, href: '/historial' },
    { name: 'Perfil', icon: <User size={28} strokeWidth={1.5} />, href: '/perfil' },
  ];

  return (
    <div className="fixed bottom-4 left-0 right-0 px-4 w-full max-w-xl mx-auto z-50">
      <nav className="bg-[#94C163] .rounded-[24px] py-3 px-6 shadow-lg">
        <ul className="flex justify-center gap-18 items-center mx-auto">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex flex-col items-center gap-1 text-white hover:opacity-80 transition-opacity"
              >
                {item.icon}
                <span className="text-xs font-medium tracking-wide">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BottomNavbar;