import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

function Home() {
  const [originalUrl, setoriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();


   

    try {
      const response = await axios.post("/api/getUrl",{
        originalUrl: originalUrl,
      });
      if(response){
        console.log("Urls added in database");
        console.log(response.data.url)
        setShortUrl(response.data.url);
      }
    

    } catch (error) {
      console.error(error);
    }
  };
  const [share, setShare] = useState(false);
  const parms = useParams();

  useEffect(() => {
    setShare(!parms.id);
  }, [parms.id]);

  

  const handleCopyUrl = () => {
    const currentUrl = window.location.href+"m/"+shortUrl;
    console.log(currentUrl)
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Link copied to clipboard!"); 
      })
      .catch((err) => {
        console.error("Failed to copy Link: ", err);
      });
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
          <button onClick={handleCopyUrl} className={shortUrl ? "block p-3 bg-blue-600 w-[100px] rounded-full text-white" : "hidden"}>Copy Link</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
