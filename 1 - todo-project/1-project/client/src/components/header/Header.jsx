import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [admin, setAdmin] = useState(false)

    const adminBtnHandel = async () =>{
        setAdmin(!admin)
    }



  return (
    <header>
        <nav className="xl:w-[1280px] lg:w-[1020px] md:w-[760px] sm:w-[730px] m-auto  py-[20px] px-[10px] flex justify-between">
            <div className="flex items-center gap-[30px]">
                <h2 className="text-2xl">Best Store</h2>
                <div className="flex items-center list-none gap-[10px]">
                    <Link to={`/`}> <li className={`text-1xl font-semibold`}>Home</li>
                    </Link>
                    <Link to={`/about`}>
                    <li className={`text-1xl font-semibold`}>About</li>
                    </Link>
                    <Link to={`/contact`}>
                    <li className="text-1xl font-semibold">Contact</li>
                    </Link>
                </div>
            </div>
            <div className="relative">
                <h4 onClick={adminBtnHandel} className="cursor-pointer text-1xl">Admin</h4>
                <div className={`absolute top-[40px] right-[0px] shadow-2xl p-[24px] flex flex-col gap-[12px] rounded-md ${admin ? "block" : "hidden"}`}>
                    <div className="flex flex-col gap-[8px]">
                       <Link to={`/admin/product`}>
                       <li className="list-none cursor-pointer">Products</li>
                       </Link>
                        <li className="list-none cursor-pointer">Profile</li>
                    </div>
                    <div className="">
                        <li className="list-none cursor-pointer">Logout</li>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;


// json-server --watch db.json --port 3004
