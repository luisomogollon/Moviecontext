import React from "react";
import { useAppContext } from "../store/Store";
import Movie from "../components/movie";
import { Link } from "react-router-dom";
import { RiDeleteBin2Line } from "react-icons/ri";

export default function Home() {
  const { items, deleteItems } = useAppContext();

  const handleDeleteList = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete everything?")) {
      deleteItems();
    }
  };

  return (
    <div className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-10 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-white">
            <div className="container flex flex-wrap justify-center space-x-2 ">
              {items.map((item) => (
                <Movie key={item.id} item={item} />
              ))}
            </div>{" "}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            You can record the data of your favorite movie with its cover and
            your personal review <br />
            Don't forget to put the director's name
          </p>
        </div>
        <br />
        <div>
          <p className="leading-relaxed text-center">
            {" "}
            Go to Create
          </p>
          <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">
            {" "}
            <Link to="/Create">Create </Link>
          </button>
        </div>
        <button
          onClick={handleDeleteList}
          className=" flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded"
        >
          <RiDeleteBin2Line className=" mt-1 mr-2" />
          Delete all
        </button>
      </div>
    </div>
  );
}
