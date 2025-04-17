import { useNavigate } from "react-router-dom";
import logo from "/images/logo.png";

import { Background } from "../components/Background";
import TopBar from "../components/Topbar";
import Template from "../components/Template";
import { Search } from "../components/Search";
import back from "/images/back.webp";
import { Logo } from "../../public/images/SVG/svgIcons";
export function Frontpage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#242424] h-full min-h-screen">
      <TopBar />
      <img className="h-72 w-full md:px-28" src={back} alt="background" />
      <div className="p-5 -mt-10">
        <Template>
          <div className="col-span-2 md:col-span-1">
          {/* <img className="h-12 w-36 m-3" src={logo} alt="aniwatch" /> */}
      <Logo />
            <Search />
          </div>
          <p className="text-white col-span-2 md:col-span-1">
            <b>Top search: </b>{" "}
            <i>
              {" "}
              Solo Leveling, One Piece, Ninja Kamui, Mashle: Magic andMuscles
              Season 2, Jujutsu Kaisen 2nd Season, Naruto: Shippuden, Classroom
              of the Elite III, Mashle: Magic and Muscles, Attack on Titan{" "}
            </i>
          </p>
        </Template>
      </div>
    </div>
  );
}

// const styles={
//     topbar : {
//         margin : "100px 20px 40px 40px",
//         fontWeight : "bold",
//         color : "#fff",
//         textDecoration : "none",
//         cursor : "pointer"
//     }
// }
