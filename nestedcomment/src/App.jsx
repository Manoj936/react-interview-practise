import "./App.css";
import NestedComment from "./components/NestedComment";
import commentsData from "./constants/comments.json";
function App() {
  return (
    <>
    <h1>
      Nested comments
    </h1>
      <NestedComment comments={commentsData} />
    </>
  );
}

export default App;
