import { useNavigate } from "react-router-dom";

import { Background } from "../components/Background";
import TopBar from "../components/Topbar";
import Template from "../components/Template";
import { Search } from "../components/Search";
import back from "/images/back.webp";
export function Frontpage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#242424] h-full min-h-screen">
      <TopBar />
      <img className="h-72 w-full md:px-28" src={back} alt="background" />
      <div className="p-12 -mt-20">
        <Template>
          <div className="col-span-2 md:col-span-1">
            <Search />
          </div>
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
