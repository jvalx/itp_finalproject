import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  Link,
  useNavigate,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Root from './routes/Root';
import Index from './routes/Index';
import Contact from './routes/Contact';
import Post from './routes/Post';
import LeaveComment from './routes/LeaveComment';
import EditPost from './routes/EditPost';
import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';
import EditComments from './routes/EditComments';
import Admin from './routes/Admin';
import Comments from './Comments';

import {
  fetchPosts,
  fetchPost,
  fetchCommentsForPost,
  saveComment,
  deleteComment,
  updatePost,
  updateComment,
  fetchComments,
} from './api.js';
import 'bootstrap/dist/css/bootstrap.css';
import { toast } from 'react-toastify';
import preval from 'preval.macro';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/posts',
        element: <Index />,
        loader() {
          return fetchPosts();
        },
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/posts/:id', // id is a dynamic segment
        loader({ params }) {
          return fetchPost(params.id);
        },
        // TODO: have this also display the post fully
        element: <Post />,
        children: [
          // the parent route is post
          {
            path: '/posts/:id/comments',
            loader({ params }) {
              return fetchCommentsForPost(params.id);
            },
            element: <Comments />,
          },
          {
            path: '/posts/:id/comments/new',
            element: <LeaveComment />,

            action({ request, params }) {
              return request.formData().then((formData) => {
                const buildTimestamp = preval`module.exports = new Date().toLocaleString();`;
                const currentDate = new Date();

                // Format the date and time in a human-readable format
                const dateString = currentDate.toLocaleDateString();
                console.log(dateString, 'date string');
                return saveComment(
                  formData.get('name'),
                  formData.get('comment'),
                  params.id,
                  buildTimestamp
                ).then(() => {
                  toast.success('Your comment was posted.');
                  return redirect(`/posts/${params.id}/comments`);
                });
              });
            },
          },
        ],
      },
      {
        path: '/comments/:id/edit',
        element: <EditComments />,
        loader({ params }) {
          console.log(params.id, 'params in api');
          return fetchCommentsForPost(params.id);
        },
        action({ request, params }) {
          return request.formData().then((formData) => {
            console.log('in api edit comments');
            console.log(params);
            console.log('comment edit comments');
            console.log(params.id);
            console.log('body comments');
            console.log(formData.get('body'));
            return updateComment(params.id, formData.get('body')).then(
              () => {
                toast.success('You successfully updated the comment.');
                return redirect(`/posts/`);
              },
              () => {
                toast.error('Uh oh!');
              }
            );
          });
        },
      },

      {
        path: '/comments/:commentId/destroy',
        action({ request, params }) {
          return request.formData().then((formData) => {
            return deleteComment(params.commentId).then(() => {
              toast.success('Your comment was deleted. ');
              const postId = formData.get('postId');
              return redirect(`/posts/${postId}/comments`);
            });
          });
        },
      },
      {
        path: '/posts/:postId/edit',
        element: <EditPost />,
        loader({ params }) {
          return fetchPost(params.postId);
        },
        action({ request, params }) {
          return request.formData().then((formData) => {
            return updatePost(
              params.postId,
              formData.get('title'),
              formData.get('body')
            ).then(
              () => {
                toast.success('You successfully updated the post.');
              },
              () => {
                toast.error('Uh oh!');
              }
            );
          });
        },
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: '/admin',
        element: <Admin />,
        loader() {
          return fetchPosts();
        },
      },
    ],
  },
]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     < RouterProvider router={router}/>
//   </React.StrictMode>
// );
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
