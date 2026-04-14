export function HomeRegisterPet() {
    return (
        <div className="flex flex-col justify-center items-center bg-[#E5ECF5] rounded-[10px] m-5 pb-4.25">
            <img src="/dog-icon.svg" alt="Icono de perro" width={110}/>
            <span className="text-[#B3B3B3] font-semibold">Aún no hay mascotas registradas</span>
            <button className="bg-[#CFD5DB] py-2 px-3.25 rounded-[10px] mt-3.25">Registra una mascota</button>
        </div>
    )
}