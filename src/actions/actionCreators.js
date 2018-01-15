export const ALLPOSTS = "ALLPOSTS";
export const GETCOMMENTS = "GETCOMMENTS";
const urlCategories = "http://localhost:3001/posts/categories";
const urlPosts = "http://localhost:3001/posts";
const urlComments = "http://localhost:3001/posts/id/comments";

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
