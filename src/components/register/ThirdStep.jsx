import { useState } from "react";

export function RegisterThirdStep({handlerSecondStep, handleRegister}) {

    const [petName, setPetName] = useState("");
    const [petBirthDate, setPetBirthDate] = useState("");
    const [petType, setPetType] = useState("");
    const [petBreed, setPetBreed] = useState("");
    const [petGender, setPetGender] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegister(petName, petBirthDate, petType, petBreed, petGender);
    }

    const handleBack = (e) => {
        e.preventDefault();
        handlerSecondStep();
    }

  return (
    <>
      <input
        type="text"
        placeholder="Nombre de la Mascota"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 font-semibold"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha de nacimiento de la Mascota"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 font-semibold text-[#A2A2A2]"
        value={petBirthDate}
        onChange={(e) => setPetBirthDate(e.target.value)}
      />
      {/* combox de tipo de mascota */}
      <select
        name="pet_type"
        id="pet_type"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 text-[#A2A2A2] font-semibold"
        value={petType}
        onChange={(e) => setPetType(e.target.value)}
      >
        <option value="">Tipo de mascota</option>
        <option value="perro">Perro</option>
        <option value="gato">Gato</option>
        <option value="ave">Ave</option>
        <option value="roedor">Roedor</option>
      </select>
      <input
        type="text"
        placeholder="Raza de la Mascota"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 font-semibold"
        value={petBreed}
        onChange={(e) => setPetBreed(e.target.value)}
      />
      <select
        name="pet_gender"
        id="pet_gender"
        className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mb-6 text-[#A2A2A2] font-semibold"
        value={petGender}
        onChange={(e) => setPetGender(e.target.value)}
      >
        <option value="">Sexo</option>
        <option value="macho">Macho</option>
        <option value="hembra">Hembra</option>
      </select>

      <div className="flex items-center justify-between mt-7.5 gap-3.75">
        <button
          className="rounded-[10px] border border-[#F29455] text-[#F29455] font-semibold bg-white w-1/2 p-5.25"
          onClick={handleBack}
        >
          Atras
        </button>
        <button
          className="rounded-[10px] border border-[#32ACDC] text-white font-semibold bg-[#32ACDC] w-1/2 p-5.25 flex justify-center items-center gap-1.5"
          onClick={handleSubmit}
        >
          Regístrate
        </button>
      </div>
    </>
  );
}
