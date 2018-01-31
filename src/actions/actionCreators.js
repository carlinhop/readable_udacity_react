export const ALLPOSTS = "ALLPOSTS";
export const GETCOMMENTS = "GETCOMMENTS";
export const POSTVOTE = "POSTVOTE";
export const POSTCOMMENT = "POSTCOMMENT";
export const POSTPOST = "POSTPOST";
export const DELETEPOST = "DELETEPOST";
export const GETCATEGORIES = "GETCATEGORIES";
export const DELETECOMMENT = "DELETECOMMENT";
export const DELETECATEGORY = "DELETECATEGORY";
export const PUTPOST = "PUTPOST";
export const PUTCOMMENT = "PUTCOMMENT";

const urlCategories = "http://localhost:3001/categories";
const urlPosts = "http://localhost:3001/posts";
const urlComments = "http://localhost:3001/posts/id/comments";
const urlPostsVotes = "http://localhost:3001/posts/id";
const urlCommentsVotes = "http://localhost:3001/comments/id/";
const allComments = "http://localhost:3001/comments";
const urlAddPost = "http://localhost:3001/posts";

export function getPosts(posts) {
  return {
    type: ALLPOSTS,
    payload: posts
  };
}

export function getPostData() {
  return dispatch => {
    fetch(urlPosts, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      }
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(getPosts(JSON.parse(data)));
      });
  };
}

export function getComments(comments) {
  return {
    type: GETCOMMENTS,
    payload: comments
  };
}

export function getCommentsData(postID) {
  return dispatch => {
    let urlPostCommentUrl = urlComments.replace("id", postID);

    fetch(urlPostCommentUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      }
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(getComments(JSON.parse(data)));
      });
  };
}

export function postVote(post, typeOfVote) {
  return {
    type: POSTVOTE,
    payload: post,
    typeOfVote
  };
}

export function postVoteData(id, typeOfVote, vote) {
  return dispatch => {
    let urlVotes =
      typeOfVote === "post"
        ? urlPostsVotes.replace("id", id)
        : urlCommentsVotes.replace("id", id);

    fetch(urlVotes, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },
      body: JSON.stringify({ option: vote }),
      method: "POST"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(postVote(JSON.parse(data), typeOfVote));
      });
  };
}

export function postComment(comments, typeOfVote) {
  return {
    type: POSTCOMMENT,
    payload: comments
  };
}

export function postCommentData(id, timestamp, body, owner, parentId) {
  return dispatch => {
    fetch(allComments, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },
      body: JSON.stringify({ id, timestamp, body, owner, parentId }),
      method: "POST"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(postComment(JSON.parse(data)));
      });
  };
}

export function postPost(post) {
  return {
    type: POSTPOST,
    payload: post
  };
}

export function postPostData(id, timestamp, title, body, author, category) {
  return dispatch => {
    fetch(urlAddPost, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },
      body: JSON.stringify({ id, timestamp, title, body, author, category }),
      method: "POST"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(postPost(JSON.parse(data)));
      });
  };
}

export function deletePost(post) {
  return {
    type: DELETEPOST,
    payload: post
  };
}

export function deletePostData(id) {
  return dispatch => {
    let urlDeletePost = urlPostsVotes.replace("id", id);
    fetch(urlDeletePost, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },
      body: JSON.stringify({ id }),
      method: "DELETE"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        console.log(JSON.parse(data));
        return dispatch(deletePost(JSON.parse(data)));
      });
  };
}

export function getCategories(categories) {
  return {
    type: GETCATEGORIES,
    payload: categories
  };
}

export function getCategoriesData() {
  return dispatch => {
    fetch(urlCategories, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },

      method: "GET"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        console.log(JSON.parse(data));
        return dispatch(getCategories(JSON.parse(data)));
      });
  };
}
export function deleteComment(comment) {
  return {
    type: DELETECOMMENT,
    payload: comment
  };
}

export function deleteCommentData(id) {
  let urlDeleteComment = urlCommentsVotes.replace("id", id);
  return dispatch => {
    fetch(urlDeleteComment, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },

      method: "DELETE"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        console.log(JSON.parse(data));
        return dispatch(deleteComment(JSON.parse(data)));
      });
  };
}

export function deleteCategoryData(category) {
  return {
    type: DELETECATEGORY,
    payload: category
  };
}

export function putPost(post) {
  return {
    type: PUTPOST,
    payload: post
  };
}

export function putPostData(id, title, body) {
  let urlPutPost = urlPostsVotes.replace("id", id);
  return dispatch => {
    fetch(urlPutPost, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },
      body: JSON.stringify({ title, body }),
      method: "PUT"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(putPost(JSON.parse(data)));
      });
  };
}

export function putComment(comment) {
  return {
    type: PUTCOMMENT,
    payload: comment
  };
}

export function putCommentData(id, timestamp, body) {
  let putCommentUrl = urlCommentsVotes.replace("id", id);
  return dispatch => {
    fetch(putCommentUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },
      body: JSON.stringify({ id, timestamp, body }),
      method: "PUT"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        return dispatch(putComment(JSON.parse(data)));
      });
  };
}
