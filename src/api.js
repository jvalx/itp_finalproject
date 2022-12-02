
// Getting all posts
export function fetchPosts() {
  return fetch('http://localhost:8000/posts').then((response) => {
    return response.json();
  })
}

export function fetchPost(postId) {
  return fetch(
    `http://localhost:8000/posts/${postId}?_expand=user&_embed=comments`).then((response) => {
        return response.json();
  })
}

export function fetchCommentsForPost(postId) {
  return fetch(`http://localhost:8000/posts/${postId}/comments`).then((response) => {
    return response.json();
  })
}
export function fetchComments(commentID) {
  return fetch(`http://localhost:8000/comments/${commentID}`).then((response) => {
    return response.json();
  })
}

// POST /comments
export function saveComment(name, body, postId, time ) {
  return fetch("http://localhost:8000/comments", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      body: body, // text from textarea
      postId: postId,
      time: time
    }),
    headers: {
      "Content-type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

// DELETE /comments/:id
export function deleteComment(commentId) {
  return fetch(
    `http://localhost:8000/comments/${commentId}`,
    {
      method: "DELETE",
    }
  );
}
// PUT /posts/:id, full update
// PATCH /posts/:id, partial update
export function updateComment(commentID, updatedBody) {
  return fetch(
    `https://localhost:8000/comments/${commentID}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        body: updatedBody,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  ).then((response) => {
    if (response.status >= 400) {
      return Promise.reject();
    }

    return response.json();
  });
}

// PUT /posts/:id, full update
// PATCH /posts/:id, partial update
export function updatePost(postId, updatedTitle, updatedBody) {
  return fetch(
    `https://localhost:8000/posts/${postId}`,
    {
      method: "PATCH",
      body: JSON.stringify({
        title: updatedTitle,
        body: updatedBody,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  ).then((response) => {
    if (response.status >= 400) {
      return Promise.reject();
    }

    return response.json();
  });
}