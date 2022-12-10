import { Form, useLoaderData, useNavigate, Link } from 'react-router-dom';

export default function EditComments() {
  const comment = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate(`/posts`);
  };

  return (
    <>
      <h1>Edit</h1>
      <Form method="post">
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            className="form-control"
            id="body"
            rows="3"
            name="body"
            // defaultValue={comment.body}
          />
        </div>
        <button onClick={handleUpdate} className="btn btn-primary">
          {/* <Link to={`/posts/${comment.postId}/comments`} className="nav-link">
            Update
          </Link> */}
          Update
        </button>
      </Form>
    </>
  );
}
