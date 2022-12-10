import { Form } from 'react-router-dom';

export default function LeaveComment() {
  return (
    <Form method="post">
      <div className="form-floating mb-3">
        <textarea className="form-control" id="comment-input" name="name" />
        <label htmlFor="comment-input">Who's writing this comment?</label>
      </div>

      <div className="form-floating mb-3">
        <textarea className="form-control" id="comment-input" name="comment" />
        <label htmlFor="comment-input">Leave a comment here</label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
}
