import { MoveRight } from "lucide-react";
import { useState } from "react";

export function RegisterFirstStep({handleSecondStep}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSecondStep(email, password);
  };


  return (
    <>
      <input
        type="text"
        placeholder="✉️ Correo"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full font-semibold text-[#A2A2A2]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="🔒 Contraseña"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mt-6 font-semibold text-[#A2A2A2]"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-[#32ACDC] rounded-[10px] py-5 px-6 w-full mt-16.5 font-semibold text-white flex items-center justify-center gap-1.25"
        onClick={handleSubmit}
      >
        Siguiente
        <MoveRight size={30} strokeWidth={1.5} />
      </button>
    </>
  );
}
