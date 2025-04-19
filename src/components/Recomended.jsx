import { DetailsCard } from "../components/DetailsCard";
import { useEffect, useState } from "react";
import { SideTrey } from "../components/SIdeTray";
import axios from "axios";

export function Recomended({ id, Pagename }) {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(true);

  const  fetchAnime = async (page)=> {
    try {
      const result = await axios.get(`https://api-check-one-ecru.vercel.app/api/anime?page=${4}`)

      if(result.status === 200){
        // fetchAnime(page+1)
        setMovie(result.data)
      }
    } catch (error) {
      setMovie([]);
    }
  }

  useEffect(() => {
    fetchAnime(1);
  }, []);

  return (
    <div className="p-5 h-full">
      <h2 className="text-[#ffdd95] ml-4 text-2xl font-semibold">
        Recommended for you
      </h2>
      <div className="flex justify-between">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 m-4">
          {movie.map((movie) => (
            <DetailsCard prop={movie} />
          ))}
        </div>
        {/* <div className="w-[400px]">
          <SideTrey prop={movie} />
        </div> */}
      </div>
    </div>
  );
}
