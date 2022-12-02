import { Outlet, useLoaderData, Link } from "react-router-dom";
import {useEffect} from "react"
export default function Post() {
  const post = useLoaderData();

  console.log("inside of post; post user.name: ");
  console.log(post.user.name);
  useEffect(() => {
    document.title = "Project " + post.id;
}, []);

  return (
    <div className="post-page">
      <h1>{post.title}</h1>
      <h4>{post.user.name}</h4>
      <p>{post.body}</p>

      <h3>Comments</h3>

      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <Link to={`/posts/${post.id}/comments`} className="nav-link">
            Comments ({post.comments.length})
          </Link>
        </li>
        <li className="nav-item">
          <Link to={`/posts/${post.id}/comments/new`} className="nav-link">
            Leave a Comment
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}