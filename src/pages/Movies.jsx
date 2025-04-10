import { DetailsCard } from "../components/DetailsCard";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { SideTrey } from "../components/SIdeTray";
import { PageName } from "../components/PageName";
import Loader from "../components/Loader";
import axios from "axios";

export function Movies({ id, Pagename }) {
  //   [
  //   {
  //     name: "One Piece",
  //     image: "",
  //     platform: "TV",
  //     quality: "HD",
  //   },
  //   {
  //     name: "Jujustu Kaisen",
  //     platform: "OVA",
  //     quality: "HD",
  //   },
  //   {
  //     name: "Naruto",
  //     platform: "TV",
  //     quality: "HD",
  //   },
  //   {
  //     name: "Naruto",
  //     platform: "TV",
  //     quality: "HD",
  //   },
  //   {
  //     name: "Naruto",
  //     platform: "TV",
  //     quality: "HD",
  //   },
  //   {
  //     name: "Naruto",
  //     platform: "TV",
  //     quality: "HD",
  //   },
  //   {
  //     name: "Naruto",
  //     platform: "TV",
  //     quality: "HD",
  //   },
  //   {
  //     name: "Naruto",
  //     platform: "TV",
  //     quality: "HD",
  //   },
  // ]
  const [movie, setMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:3000/getAllCollection", {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   }).then(async (res) => {
  //     const result = await res.json();
  //     setMovie(result);
  //   });
  // }, []);

  const handlePageChange = (newPage) => {
    // if (newPage > 0 && newPage <= totalPages) {
    // console.log("page",newPage);
    setCurrentPage(newPage);
    window.scrollTo(0, 0); // Scroll to top when page changes
    // }
  };

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api-check-one-ecru.vercel.app/api/anime?page=${currentPage}`
      );
      setMovie(result.data);
    } catch (error) {
      setMovie([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  return (
    <div className="bg-[#242424] h-full min-h-screen">
      <Header />

      {loading ? (
        <Loader size="large" color="purple" fullScreen={true} />
      ) : (
        <div>
          <PageName id={id} prop={Pagename} />
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 m-4">
              {movie.length > 0 &&
                movie.map((movie) => <DetailsCard prop={movie} />)}
            </div>
            {/* <div className="w-[400px] hidden md:block">
            <SideTrey prop={movie} />
          </div> */}
          </div>
        </div>
      )}

      <div className="flex items-center justify-center space-x-2 mt-6">
        {/* <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400 hover:bg-indigo-700 transition-colors"
        >
          First
        </button> */}

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400 hover:bg-indigo-700 transition-colors"
        >
          Previous
        </button>

        <div className="px-4 py-2 bg-gray-100 rounded font-medium">
          Page {currentPage}
          {/* of {totalPages} */}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400 hover:bg-indigo-700 transition-colors"
        >
          Next
        </button>

        {/* <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400 hover:bg-indigo-700 transition-colors"
        >
          Last
        </button> */}
      </div>
    </div>
  );
}
