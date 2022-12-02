import { Form, useLoaderData } from "react-router-dom";

export default function EditComments() {
  const comment = useLoaderData();

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
            defaultValue={comment.body}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </Form>
    </>
  );
}
