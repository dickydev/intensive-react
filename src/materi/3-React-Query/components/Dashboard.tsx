import { usePosts } from "../features/posts/hooks";

const Dashboard = () => {
  const { data } = usePosts();
  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
