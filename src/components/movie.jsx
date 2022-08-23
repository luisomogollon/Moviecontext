import { Link } from "react-router-dom";

export default function Movie({ item }) {
  return (
    <div>
      <Link to={`/View/${item.id}`}>
        <div className="flex flex-wrap justify-center">
          <div className="w-100 px-2 p-10 ">
            <img src={item.cover} alt="Movie" />
          </div>
        </div>
      </Link>
    </div>
  );
}
