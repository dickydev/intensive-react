import PostList from "./materi/1-Fetch/PostList";
import PostListAxios from "./materi/2-Axios/components/PostList";
import Dashboard from "./materi/3-React-Query/components/Dashboard";
import PostListRQ from "./materi/3-React-Query/components/PostList";

const App = () => {
  return (
    <>
      <h1>Belajar Axios dan React Query</h1>
      <PostList />
      <PostListAxios />
      <PostListRQ />
      <Dashboard />
    </>
  );
};

export default App;
