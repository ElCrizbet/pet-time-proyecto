export function Login() {
    return (
        <div className="flex flex-col items-center justify-center">
          <img src="Logo-PetTime.svg" alt="Logo Pet Time" />
          <h1 className="text-[#F29455] text-[32px] font-bold">Iniciar Sesión</h1>
          <form className="m-3.5">
            <input type="text" placeholder="✉️ Correo" className="border border-gray-300 rounded-[10px] py-5 px-6 w-full" />
            <input type="password" placeholder="🔒 Contraseña" className="border border-gray-300 rounded-[10px] py-5 px-6 w-full mt-6"  />
            <button type="submit" className="bg-[#32ACDC] rounded-[10px] py-5 px-6 w-full mt-16.5 font-semibold text-white">Iniciar Sesión</button>
          </form>
          <div>
            <span className="text-[#A8AFB9] font-semibold">¿No tienes una cuenta? <a href="/register" className="text-[#F29455]">Regístrate</a></span>
          </div>
        </div>
    )
}