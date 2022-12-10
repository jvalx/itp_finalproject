import { Outlet, useLoaderData, Link } from 'react-router-dom';
import { useEffect } from 'react';
export default function Post() {
  const post = useLoaderData();

  useEffect(() => {
    document.title = 'Project ' + post.id;
  }, []);

  return (
    <div className ="container">
    <div className="post-page">
      <h1>{post.title}</h1>
      <div>
        {post.imageLink.map((pic) => {
          return (
            <div>
              <img
                src={pic.icon}
                class="rounded float-start"
                alt="mapping-pics"
              />
              <br />
            </div>
          );
        })}
      </div>

      <h1>{post.body}</h1>
      <h4>{post.info}</h4>

      <h5>Comments</h5>

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
    </div>
  );
}
