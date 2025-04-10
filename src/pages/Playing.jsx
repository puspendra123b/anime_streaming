import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";
import { Recomended } from "../components/Recomended";
import VideoPlayer from "../components/VideoPlayer";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader";

export function Playing() {
  const [episodes, setEpisodes] = useState([]);
  const location = useLocation();
  const { state } = location;
  const [title, setTitle] = useState(state.title);
  const [url, setUrl] = useState(state.url);
  const [loading, setLoading] = useState(true);

  const fetchEpisodes = async () => {
    setLoading(true);
    try {
      const result = await axios.get(
        `https://api-check-one-ecru.vercel.app/api/episodes?title=${title}`
      );
      setEpisodes(result.data);
    } catch (error) {
      setEpisodes([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, [title]);

  const extractedAndSorted = episodes
    .map((item) => {
      const match = item.link_url.match(/(\d+(?:\.\d+)?)$/);
      const parsed = match ? parseFloat(match[1]) : 0;
      return { ...item, parsedEpisode: parsed };
    })
    .sort((a, b) => a.parsedEpisode - b.parsedEpisode); // Sort by episode number

  // console.log(extractedAndSorted);

  return (
    <div className="bg-[#242424] h-full min-h-screen">
      <Header />
      {
        loading ? (<Loader size="large" color="purple" fullScreen={true} />) : (
          <>
          <div className="m-2 grid grid-cols-2 bg-[#2E3234] p-2">
            <div className="w-full h-full md:w-[80%] mx-auto bg-red col-span-2">
              <VideoPlayer url={url} />
            </div>
            <div className="col-span-2 mt-5">
              <div className="flex items-center justify-between mb-2 font-bold text-white">
                <h5 className="ml-2">List of episodes: </h5>
                <input
                  className="text-black font-normal p-1 rounded-md text-sm mr-2 h-6 w-24"
                  type="text"
                  placeholder="No. of episode"
                />
              </div>
              <div className="text-white grid grid-cols-5 sm:grid-cols-10 md:grid-cols-12 gap-4 w-full mt-4">
                {extractedAndSorted.map((ep, key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setUrl(ep.embed_url);
                      setTitle(ep.title);
                    }}
                    className="bg-slate-100 text-black w-14 rounded-md place-content-center"
                  >
                    {ep.parsedEpisode}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Recomended />
          </>
        )
      }
    </div>
  );
}
