import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../store/Store";
import { Link } from "react-router-dom";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const movie = store.getItem(params.movieId);
    setItem(movie);
  //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div class="pt-10 pb-20 bg-gray-900 body-font">
      <div id="card" class="">
        <h2 class="text-center font-serif text-gray-100   text-4xl xl:text-3xl">
          Movie Database
        </h2>

        <div class="container w-100  lg:w-3/5 mx-auto flex flex-col">
          <div
            v-for="card in cards"
            class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-10 w-100 mx-2"
          >
            <div class="h-64 w-50 md:w-1/2">
              <img
                class="inset-0 h-full w-70 object-cover object-center"
                src={item.cover}
                alt="Movie"
              />
            </div>
            <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
              <h3 class="font-semibold text-lg leading-tight truncate">
                {" "}
                {item?.title}
              </h3>

              <p class="mt-2 font-semibold text-sm   ">
                <b className="font-bold"> Director </b>: {item?.author}
              </p>
              <p class="mt-2  text-sm font-semibold">
                {" "}
                <b className="font-bold">Introduction</b> : {item?.intro}
              </p>
              <p class=" text-sm  tracking-wide  font-semibold italic mt-2">
                {" "}
                <b className="not-italic font-bold text-end ">Reviw:</b> <br />
                {item?.review}
              </p>
            </div>
            <Link
              className=" inline-flex items-center justify-center  mt-1 p-2 w-11 h-5 mr-2 text-pink-100 transition-colors duration-150 bg-pink-700 rounded-full focus:shadow-outline hover:bg-pink-800  "
              to="/"
            >
              back
            </Link>{" "}
          </div>

          <div>{item?.completed ? "Completado" : "No terminado"}</div>
        </div>
      </div>
    </div>
  );
}
