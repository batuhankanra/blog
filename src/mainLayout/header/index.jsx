import { IoHomeOutline } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";
import { LuSun } from "react-icons/lu";


export default function Header() {
  return (
    <div className='flex items-center justify-between pt-[40px] p-[80px]'>
      <div className="pl-2">
        <Link to={"/"} className="text-2xl bg-[#fff] rounded-full p-2 drop-shadow-xl flex items-center justify-center  border border-gray-400 ">
          <IoHomeOutline/> 
        </Link>
      </div>
      <div  className="text-xl bg-[#fff] rounded-full py-3 border border-gray-400  px-4 drop-shadow-xl flex items-center justify-center  gap-x-3 ">
        <Link to="/writing" className="flex items-center jutify-center gap-x-1 font-medium"><GoPencil /> <span>Yazılarım</span></Link>
        <Link to="/project" className="flex items-center jutify-center gap-x-1 font-medium"><GoPencil /> <span>Projelerim</span></Link>
        <Link to="/about" className="flex items-center jutify-center gap-x-1 font-medium"><GoPencil /> <span>Hakkımda</span></Link>
      </div>
      <div className="pr-2">
        <Link to={"/"} className="text-2xl bg-[#fff] rounded-full p-2 drop-shadow-xl flex items-center justify-center border border-gray-400  ">
          <LuSun /> 
        </Link>
      </div>
    </div>
  )
}
