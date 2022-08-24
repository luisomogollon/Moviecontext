import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../store/Store";

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext();
  const navigate = useNavigate();

  function handleChange(e) {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "intro":
        setIntro(e.target.value);

        break;
      case "author":
        setAuthor(e.target.value);
        break;

      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(e.target.value);
        break;

      default:
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newMovie);
    navigate("/");
  }

  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="text-gray-400 bg-gray-900 body-font relative "
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Add Movie
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           <br/>
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <div htmlFor="name" className="leading-7 text-sm text-gray-400">
                  Title
                </div>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  value={title}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Director
                </label>
                <input
                  type="text"
                  name="author"
                  onChange={handleChange}
                  value={author}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Introduction
                </label>
                <input
                  type="text"
                  name="intro"
                  onChange={handleChange}
                  value={intro}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-400"
                >
                  Cover
                </label>
                <input
                  type="file"
                  name="cover"
                  onChange={handleOnChangeFile}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                {cover && (
                  <img alt="uploaded cover img" src={cover} width="200" />
                )}
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-400"
                >
                  Review
                </label>
                <textarea
                  type="text"
                  name="review"
                  onChange={handleChange}
                  value={review}
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-red-500 focus:bg-gray-900 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center p-4">
              <input
                name="completed"
                type="checkbox"
                onChange={handleChange}
                value={completed}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className=" px-2 text-sm items-star font-medium"
              >
                I agree {" "}
                <button
                  href="#"
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  
                </button>
                .
              </label>
            </div>

            <div className="p-10 w-full">
              <button
                type="submit"
                value="Register Movie"
                className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
              >
                Register Movie
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <button className="text-red-400">example@email.com</button>
              <p className="leading-normal my-5">
                49 Smith St.
                <br />
                Saint Cloud, MN 56301
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Create;
