import "./App.css";
import PostList from "./features/post/PostList";
import AddPostForm from "./features/post/AddPostForm";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList />
    </div>
  );
}

export default App;
