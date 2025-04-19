import { useNavigate } from "react-router-dom";

export function DetailsCard({ prop }) {
  const navigate = useNavigate();
  return (
    <div className="m-1">
        <a
          onClick={() =>
            navigate("/watch/anime", {
              state: {
                url: prop.embed_url,
                title : prop.title,
                episode: prop.episode ? prop.episode : '1'
              },
            })
          }
        >
      <div>
          <img
            className="max-h-[300px] w-[220px] cursor-pointer"
            src={prop.thumbnail_url}
            alt=""
          />
      </div>
      <div className="font-bold text-white mt-1 max-w-[220px] whitespace-nowrap overflow-hidden text-ellipsis">
        {prop.title}
      </div>

      <div className="mt-1 text-[#6B7478]">
        {"TV"} | {"HD"}
      </div>
        </a>
    </div>
  );
}
