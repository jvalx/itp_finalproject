import { Form, useLoaderData, useParams, Link } from "react-router-dom";
import preval from 'preval.macro';

export default function Comments() {
  const comments = useLoaderData();
  const params = useParams();
  
  const postId = params.id;
  const buildTimestamp = preval`module.exports = new Date().toLocaleString();`;
  
  const strAscending = [...comments].sort((a, b) =>
    a.time < b.time ? 1 : -1,
  );
  console.log(strAscending);

  return (
    <ol>
      {strAscending.map((comment) => {
        return (
          <li key={comment.id}>
            <div>{comment.name} commented at :  {comment.time}</div> 
            <h6>{comment.body}</h6>
              <p></p>
              <Link to={`/comments/${comment.id}/edit`}>
                <button type="submit" className="btn btn-sm btn-primary">
                  Edit
                </button>
              </Link>
            
            <Form method="post" action={`/comments/${comment.id}/destroy`}>
              <input type="hidden" name="postId" value={postId} />
              
              <button type="submit" className="btn btn-sm btn-danger">
                Delete
              </button>
            </Form>

            
          </li>
        );
      })}
    </ol>
  );
}