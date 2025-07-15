import { Octokit } from "octokit";
import React, { useEffect, useState } from "react";
import {
  arrowUp,
  lightMode,
  link,
  linkedin,
  location,
  profile,
  search,
  x,
} from "../assets";
import { debounceFunction } from "../util/debounceFunction";

const octokit = new Octokit({
  auth: "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",
});

function SearchBar() {
  const [searchData, setSearchData] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  const handleSearch = debounceFunction(async (value) => {
    if (value.length > 0) {
      const response = await octokit.request("GET /search/users", {
        q: value.trim(),
      });
      console.log("response data", response.data.items);
      setSelectedUser({});
      setSearchData(response.data.items);
    } else {
      createdBy();
    }
  }, 500);

  const createdBy = () => {
    const response = handleUser("abhishekjmd");
    setSelectedUser(response.data);
    console.log("response", response.data);
  };

  useEffect(() => {
    createdBy();
  }, []);

  const accountCreationTime = (time) => {
    return new Date(time).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleProfileVisit = (url) => {
    window.open(url);
  };

  const handleUser = async (username) => {
    try {
      const response = await octokit.request(`GET /users/${username}`, {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });
      setSearchData([]);
      setSelectedUser(response.data);
      console.log("response", response.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex w-[100vw]  flex-col lg:h-[100vh] h-auto bg-[#141C2F] overflow-y-scroll lg:overflow-y-hidden justify-center items-center">
      <div className="w-[90%] lg:w-[60%] lg:mt-0 mt-8 h-auto  flex items-center justify-between">
        <p className="lg:hidden text-white font-medium font-mono lg:text-xl text-sm">
          DevBorder — Explore,
          <br /> Connect, Learn
        </p>
        <p className="hidden lg:block text-white font-medium font-mono lg:text-xl text-sm">
          DevBorder — Explore,
           Connect, Learn
        </p>
        <div className="flex gap-3 justify-center items-center">
          <p className="text-white font-medium font-mono uppercase lg:text-xs text-sm">
            light
          </p>
          <img className="h-4 w-4 text-white" src={lightMode} />
        </div>
      </div>
      <div className="flex p-2 lg:py-3 justify-between items-center rounded-xl mt-10  bg-[#1F2A48] w-[90%] lg:w-[60%]">
        <div className="w-[60%] flex gap-3 ml-3">
          <img className="lg:h-7 lg:w-7 h-5 w-5" src={search} />
          <input
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search Github username..."
            className="text-white w-[70%] lg:w-[60%] text-[11px]  lg:text-lg font-mono outline-0"
          />
        </div>
        <button
          onClick={handleSearch}
          className="lg:py-2 lg:px-3 py-1 px-2 bg-[#0079FF] rounded-md text-white text-sm"
        >
          search
        </button>
      </div>
      <div
        className={`flex flex-col  lg:mt-1  items-center w-[90%] lg:w-[60%] lg:max-h-[70vh] ${
          searchData.length > 0 ? "overflow-scroll" : "overflow-hidden"
        } overflow-x-hidden`}
      >
        {searchData &&
          searchData.map((item, index) => {
            const isFirst = index === 0;
            const isLast = index === searchData.length - 1;
            return (
              <div
                className={`flex lg:p-2 p-3 justify-between m-2 items-center rounded-xl  bg-[#1F2A48] w-[95%] ${
                  isFirst ? "lg:mt-10 mt-4" : ""
                }  ${isLast ? "lg:mb-10 mg-4" : ""}`}
              >
                <div
                  onClick={() => handleUser(item?.login)}
                  className="flex gap-3 lg:gap-5 justify-center items-center cursor-pointer"
                >
                  <img
                    className="lg:h-12 lg:w-12 h-10 w-10  rounded-[50%]"
                    src={item.avatar_url}
                  />
                  <p className="text-white font-medium capitalize text-sm lg:text-xl">
                    {item?.login}
                  </p>
                </div>
                <button
                  onClick={() => handleProfileVisit(item.html_url)}
                  className="flex gap-2 py-1.5 px-2 lg:py-2 lg:px-3 justify-center items-center cursor-pointer bg-[#141C2F] rounded-md text-white text-xs lg:text-sm"
                >
                  visit profile
                  <img src={arrowUp} className="lg:h-5 lg:w-5 h-3 w-3" />
                </button>
              </div>
            );
          })}

        {selectedUser && Object.keys(selectedUser).length > 0 && (
          <div className="flex p-4 lg:p-7 gap-4 lg:gap-8 h-auto justify-center lg:items-center rounded-xl mt-5  bg-[#1F2A48] w-[100%]">
            <div className="h-[100%]">
              <img
                src={selectedUser?.avatar_url}
                className="lg:h-20 lg:w-20 h-15 w-15 rounded-[50%]"
              />
            </div>
            <div className=" w-[65%] lg:w-[75%] flex flex-col gap-2 lg:gap-1">
              <div className="flex w-[100%]  justify-between items-center">
                <div
                  className="flex flex-row gap-1 lg:gap-2 items-center cursor-pointer"
                  onClick={() => handleProfileVisit(selectedUser?.html_url)}
                >
                  <p className="text-white font-mono text-sm lg:text-xl underline decoration-1 underline-offset-3">
                    {selectedUser?.name}
                  </p>
                  {/* <img src={arrowUp} className="h-5 w-5" /> */}
                </div>
                <p className="text-white font-mono text-xs">
                  {accountCreationTime(selectedUser?.created_at)}
                </p>
              </div>
              <p className="text-[#0079FF] text-[12px]">
                @{selectedUser?.login}
              </p>
              <div className="flex flex-col gap-1">
                {selectedUser.login === "abhishekjmd" ? (
                  <>
                    <p className="text-gray-300 text-[13px] font-mono">
                      I'm actively seeking Frontend Engineer opportunities —
                      remote, hybrid, or onsite in Ahmedabad.{"\n"}
                    </p>
                    <p className="text-gray-300 text-[13px] font-mono">
                      With 1.5 years of hands-on experience through internships
                      and freelance projects, I've worked extensively with
                      React.js, Next.js, and React Native, building responsive
                      and user-centric web and mobile applications.
                    </p>
                    <p className="text-gray-300 text-[13px] font-mono">
                      My core skills include HTML, CSS, JavaScript, and I'm
                      currently expanding my backend knowledge by learning
                      NestJS.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-300 text-[13px] font-mono">
                      {selectedUser?.bio}
                    </p>
                  </>
                )}
              </div>
              <div className="flex w-[100%] mt-2 p-2 lg:mt-5 lg:p-3.5 justify-evenly items-center rounded-xl bg-[#141D2F]">
                <div className="flex flex-col justify-center items-center gap-1">
                  <span className="text-gray-300 font-mono text-[10px] lg:text-xs">
                    Repos
                  </span>
                  <span className="text-white font-mono text-sm lg:text-xl">
                    {selectedUser?.public_repos}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <span className="text-gray-300 font-mono text-[10px] lg:text-xs">
                    Followers
                  </span>
                  <span className="text-white font-mono text-sm lg:text-xl">
                    {selectedUser?.followers}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <span className="text-gray-300 font-mono text-[10px] lg:text-xs">
                    Following
                  </span>
                  <span className="text-white font-mono text-sm lg:text-xl">
                    {selectedUser?.following}
                  </span>
                </div>
              </div>
              <div className="flex w-[100%] mt-5 lg:justify-evenly items-center ">
                <div className="flex flex-col  lg:flex-row lg:gap-0 gap-2 w-[100%]">
                  <div
                    className={`flex lg:flex-col w-[100%] gap-5 lg:gap-3 ${
                      selectedUser.login === "abhishekjmd"
                        ? "items-start"
                        : "items-start ml-4"
                    }`}
                  >
                    {selectedUser?.login === "abhishekjmd" && (
                      <div
                        className="flex items-center justify-center gap-2 cursor-pointer"
                        onClick={() =>
                          handleProfileVisit(
                            "https://www.linkedin.com/in/abhishekjmd/"
                          )
                        }
                      >
                        <img src={linkedin} className="lg:h-5 lg:w-5 h-3 w-3" />
                        <span className="text-gray-300 font-mono text-[10px] lg:text-xs">
                          abhishekjmd
                        </span>
                      </div>
                    )}

                    <div
                      className={`flex items-center justify-center gap-2 ${
                        selectedUser?.twitter_username ? "cursor-pointer" : ""
                      }`}
                      onClick={() => {
                        selectedUser?.twitter_username &&
                          handleProfileVisit(
                            `https://x.com/${selectedUser?.twitter_username}`
                          );
                      }}
                    >
                      <img src={x} className="lgh-4 lg:w-4 h-2.5 w-2.5" />
                      <span className="text-gray-300 font-mono text-[10px] lg:text-xs">
                        {selectedUser?.twitter_username
                          ? selectedUser?.twitter_username
                          : "Twitter not provided"}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`flex flex-col w-[100%] lg:mt-0 mt-1 lg:gap-3 lg:justify-evenly justify-center  ${
                      selectedUser.login === "abhishekjmd"
                        ? "lg:items-start"
                        : "lg:items-center"
                    }`}
                  >
                    {selectedUser?.login === "abhishekjmd" && (
                      <div
                        className="flex items-center justify-center gap-2 cursor-pointer"
                        onClick={() =>
                          handleProfileVisit(
                            "https://abhishek-tiwari.vercel.app/"
                          )
                        }
                      >
                        <img src={link} className="lg:h-4 lg:w-4 h-2.5 w-2.5" />
                        <span className="text-gray-300 font-mono text-[10px] lg:text-xs">
                          abhishek-tiwari.vercel.app/
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-center gap-2">
                      <img
                        src={location}
                        className="lg:h-4 lg:w-4 h-2.5 w-2.5"
                      />
                      <span className="text-gray-300 font-mono text-[10px] lg:text-xs">
                        {selectedUser?.location
                          ? selectedUser?.location
                          : "location not provided"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
