// import { Radio } from "../Radio";
import { MoveRight } from "lucide-react";
import { useState } from "react";

export function RegisterSecondStep({handlerFirstStep, handleThirdStep}) {

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [dni, setDni] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleThirdStep(name, lastName, birthDate, dni, phone, gender);
  }

  const handleBack = (e) => {
    e.preventDefault();
    handlerFirstStep();
  }

  return (
    <>
      <input
        type="text"
        placeholder="Nombre"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 font-semibold text-[#A2A2A2]"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apellido"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 font-semibold text-[#A2A2A2]"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha de nacimiento"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 font-semibold text-[#A2A2A2]"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="DNI"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 font-semibold text-[#A2A2A2]"
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teléfono"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-3.75 font-semibold text-[#A2A2A2]"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <div className="flex flex-col gap-3">
        <label className="text-[16px] text-[#A2A2A2] font-semibold">Sexo</label>
        <div className="flex items-center gap-12 mt-2">
          <label className="flex items-center gap-2 text-[14px]">
            <input type="radio" name="sexo" value="masculino" onChange={(e) => setGender(e.target.value)} />
            Masculino
          </label>
          <label className="flex items-center gap-2 text-[14px]">
            <input type="radio" name="sexo" value="femenino" onChange={(e) => setGender(e.target.value)} />
            Femenino
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between mt-7.5 gap-3.75">
        <button className="rounded-[10px] border border-[#F29455] text-[#F29455] font-semibold bg-white w-1/2 p-5.25" onClick={handleBack}>
          Atras
        </button>
        <button className="rounded-[10px] border border-[#32ACDC] text-white font-semibold bg-[#32ACDC] w-1/2 p-5.25 flex justify-center items-center gap-1.5" onClick={handleSubmit}>
          Siguiente <MoveRight size={30} strokeWidth={1.5} />
        </button>
      </div>

      {/* <div>
        <Radio />
      </div> */}
    </>
  );
}
