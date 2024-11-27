import axios from "axios";
import React, { useState } from "react";

function Home() {
  const [originalUrl, setoriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const RandomString = () => {
      const char =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const length = 6;
      let randomString = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        randomString += char[randomIndex];
      }
      return randomString;
    };

    const randomString = RandomString();

    try {
      const response = await axios.post("http://localhost:8000/api/getUrl",{
        originalUrl: originalUrl,
        shortUrl: randomString,
      });
      if(response){
        console.log("Urls added in database");
      }
      setShortUrl(randomString);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="p-12">
        <h1 className="text-3xl font-bold text-purple-700">Linkly</h1>
      </div>
      <div className="p-16 flex flex-col justify-center items-center gap-10">
        <div className="w-[60%] flex flex-col gap-6">
          <p className="text-white text-center font-bold text-5xl">SHORT IT</p>
          <img src="./text.svg" alt="" />
          
          <p className="text-xl w-[90%] ml-10 text-white text-center">
            Linkly is an efficient and easy-to-use URL shortening service that
            streamlines your online experience.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div className="border-2 p-2 rounded-full ">
            <form className="flex justify-between items-center" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter the link here"
                className="p-2 rounded-lg outline-none w-full bg-[#0B101B] text-white"
                value={originalUrl}
                onChange={(e) => setoriginalUrl(e.target.value)}
              />
              <button
                type="submit"
                className="p-3 bg-blue-600 w-[200px] rounded-full text-white"
              >
                Shorten Now!
              </button>
            </form>
          </div>
          <div className="flex justify-center items-center gap-4">
          <p className={shortUrl ? "block text-lg text-white" : "hidden"} >
            Here is your short URL : {window.location.origin}/m/{shortUrl}
          </p>
          <button className={shortUrl ? "block p-3 bg-blue-600 w-[100px] rounded-full text-white" : "hidden"}>Copy Link</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
