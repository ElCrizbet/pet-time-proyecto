import { LogOut } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between px-5 py-2.5 bg-[#32ACDC] text-white rounded-b-xl">
      <h1 className="font-bold"><span className="text-[#96C268]">Pet</span> Time</h1>
      <LogOut />
    </div>
  );
}
