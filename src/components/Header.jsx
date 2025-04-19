import { useNavigate } from "react-router-dom";
import logo from "/images/anipieceLogo.png";
import rikka from "/images/rikka.gif";
import { Search } from "./Search";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export function Header() {
  const navigate = useNavigate();
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center h-14 mt-0">
        <div className="ml-3">
          <img
            onClick={() => navigate("/home")}
            className="h-11 cursor-pointer"
            src={logo}
            alt="aniPiece"
          />
        </div>
        <div className="flex">
          {isSearch ? (
            <div className="mt-6 sm:w-80 mr-1 sm:mr-5">
              <Search />
            </div>
          ) : (
            <button
              className="mr-5"
              onClick={() => {
                setIsSearch(true);
              }}
            >
              <CiSearch size={30} color="white" />
            </button>
          )}

          {/* <button
            onClick={() => navigate("/admin-login")}
            className="bg-[#ffdd95] py-1 px-2 font-semibold rounded-2xl mx-3"
          >
            Login
          </button> */}
        </div>
      </div>
      <div className="h-24 flex items-center bg-black">
        <img className="h-14 rounded-full ml-4" src={rikka} alt="" />
        <h4 className="text-[#14ee9f] text-lg md:text-xl font-semibold ml-4">
          Share AniPiece To Your Friends
        </h4>
      </div>
    </div>
  );
}
