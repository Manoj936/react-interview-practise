import { useState, useEffect, useRef } from "react";
import "./App.css";
import JobCard from "./components/JobCard";

const JOB_STORIES_IDS_API =
  "https://hacker-news.firebaseio.com/v0/jobstories.json";

const JOB_STORIES_DETAILS_API = "https://hacker-news.firebaseio.com/v0/item/";

function App() {
  const [jobs, setJobs] = useState([]);
  const [btnText, setBtnText] = useState("Load More");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsIds = useRef([]);
  const itemsPerPage = 6;

  useEffect(() => {
    fetchStoriesId();
  }, []);

  const fetchStoriesId = async () => {
    const storyIds = await fetch(JOB_STORIES_IDS_API);
    let allTheStories = await storyIds.json();
    itemsIds.current = await allTheStories;
    fetchJobs();
  };

  const fetchJobs = async () => {
    console.log({currentPage})
    setBtnText("fetching...");
    let tempJobIds;
    tempJobIds = itemsIds.current.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );
    const allJobs = await Promise.all(
      tempJobIds.map(
        async (item) =>
          await fetch(`${JOB_STORIES_DETAILS_API}${item}.json`).then((res) =>
            res.json()
          )
      )
    );
    setJobs((prev)=>[...prev, ...allJobs]);
    setBtnText("Load More");
    setCurrentPage(prev=> prev+1)
  };

  return (
    <>
      <div className="container">
        {!jobs.length && <h2>Please wait...</h2>}
        {jobs.length > 0 &&
          jobs.map((item, index) => (
            <JobCard key={index} {...item} index={index} />
          ))}
        <button className="loadBtn" disabled={jobs.length === itemsIds.current.length} onClick={() => fetchJobs()}>
          {btnText }
        </button>
      </div>
    </>
  );
}

export default App;
