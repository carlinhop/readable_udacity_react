export const ALLPOSTS = "ALLPOSTS";
export const GETCOMMENTS = "GETCOMMENTS";
export const POSTVOTE = "POSTVOTE";
export const POSTCOMMENT = "POSTCOMMENT";
const urlCategories = "http://localhost:3001/posts/categories";
const urlPosts = "http://localhost:3001/posts";
const urlComments = "http://localhost:3001/posts/id/comments";
const urlPostsVotes = "http://localhost:3001/posts/id/";
const urlCommentsVotes = "http://localhost:3001/comments/id/";
const allComments = "http://localhost:3001/comments";

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