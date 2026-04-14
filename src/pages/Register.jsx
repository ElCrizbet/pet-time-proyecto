import { useState } from "react";
import { RegisterFirstStep } from "../components/register/FirstStep";
import { RegisterSecondStep } from "../components/register/SecondStep";
import { RegisterThirdStep } from "../components/register/ThirdStep";
import { useNavigate } from "react-router-dom";

export function Register() {

    // navigate
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [isCompleteStepOne, setIsCompleteStepOne] = useState(false);
    const [isCompleteStepTwo, setIsCompleteStepTwo] = useState(false);
    const [formRegister, setFormRegister] = useState({
        email: "",
        password: "",
        name: "",
        lastName: "",
        birthDate: "",
        dni: "",
        phone: "",
        gender: "",
    })

    const handleSecondStep = (email, password) => {
        setFormRegister({
            email,
            password,
        })
        setIsCompleteStepOne(true);
        setStep(2);
    }

    const handleFirstStep = () => {
      setIsCompleteStepTwo(false);
      setStep(1);
    }

    const handleBackToSecondStep = () => {
      setIsCompleteStepTwo(false);
      setStep(2);
    }

    const handleThirdStep = (name, lastName, birthDate, dni, phone, gender) => {
      setFormRegister({
        ...formRegister,
        name,
        lastName,
        birthDate,
        dni,
        phone,
        gender
      });
      setIsCompleteStepTwo(true);
      setStep(3);
    };

    const handleRegister = (petName, petBirthDate, petType, petBreed, petGender) => {
      const finalForm = {
        ...formRegister,
        petName,
        petBirthDate,
        petType,  
        petBreed,
        petGender
      }
      console.log(finalForm);

      // redirigir al home
      navigate("/home");
    }

  return (
    <div className="flex flex-col items-center justify-center">
      <img src="Logo-PetTime.svg" alt="Logo Pet Time" />
      <h1 className="text-[#F29455] text-[24px] font-bold">
        Datos de la sesión
      </h1>
      <div className="flex items-center justify-center gap-7.5 mt-11 mb-7.5">
        <div className={(step === 1 ? "bg-[#32ACDC] text-white" : isCompleteStepOne ? "text-white bg-[#96C268]" : "text-[#A8AFB9] bg-white") + " rounded-full w-12.5 h-12.5 flex items-center justify-center"}>1</div>
        <div className={(step === 2 ? "bg-[#32ACDC] text-white" : isCompleteStepTwo ? "text-white bg-[#96C268]" : "text-[#A8AFB9] bg-white") + " rounded-full w-12.5 h-12.5 flex items-center justify-center"}>2</div>
        <div className={(step === 3 ? "bg-[#32ACDC] text-white" : "text-[#A8AFB9] bg-white") + " rounded-full w-12.5 h-12.5 flex items-center justify-center"}>3</div>
      </div>
      <form className="m-3.5">
        {
            step === 1 ? <RegisterFirstStep handleSecondStep={handleSecondStep} /> : step === 2 ? <RegisterSecondStep handlerFirstStep={handleFirstStep} handleThirdStep={handleThirdStep} /> : <RegisterThirdStep handlerSecondStep={handleBackToSecondStep} handleRegister={handleRegister} />
        }
      </form>
      <div className="mb-10">
        <span className="text-[#A8AFB9] font-semibold">
          ¿No tienes una cuenta?{" "}
          <a href="/login" className="text-[#F29455] underline">
            Iniciar Sesión
          </a>
        </span>
      </div>
    </div>
  );
}
