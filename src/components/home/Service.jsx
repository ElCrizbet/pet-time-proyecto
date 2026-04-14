export function HomeService({ icon, color, title, description }) {
  return (
    <div className="bg-[#E5ECF5] px-3.75 py-2.5 rounded-[10px] flex items-center gap-4.5">
      <div>
        <div className={"bg-[" + color + "] rounded-[10px] p-2.5"}>{icon}</div>
      </div>
      <div>
        <h2 className="font-semibold text-[14px]">{title}</h2>
        <p className="text-[12px]">{description}</p>
      </div>
    </div>
  );
}
