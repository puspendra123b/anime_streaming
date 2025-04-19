import { DetailsCard } from "../components/DetailsCard";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { PageName } from "../components/PageName";
import Loader from "../components/Loader";
import axios from "axios";
import { useLocation } from "react-router-dom";

export function SearchResult({ id, Pagename }) {
  const [movie, setMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(3);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const location = useLocation()
  const state = location.state

  const handlePageChange = (newPage) => {
    // if (newPage > 0 && newPage <= totalPages) {
    // console.log("page",newPage);
    setCurrentPage(newPage);
    window.scrollTo(0, 0); // Scroll to top when page changes
    // }
  };

  const fetchSearchAnime = async (title) => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api-check-one-ecru.vercel.app/api/anime/search?title=${title}`
      );
      setMovie(result.data);
    } catch (error) {
      setMovie([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchAnime(state.title)
  }, []);

  return (
    <div className="bg-[#242424] h-full min -h-screen">
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

        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400 hover:bg-indigo-700 transition-colors"
        >
          Previous
        </button>

        <div className="px-4 py-2 bg-gray-100 rounded font-medium">
          Page {currentPage}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded bg-indigo-600 text-white disabled:bg-gray-400 hover:bg-indigo-700 transition-colors"
        >
          Next
        </button>

      </div>
    </div>
  );
}
