export const ALLPOSTS = "ALLPOSTS";
export const GETCOMMENTS = "GETCOMMENTS";
export const POSTVOTE = "POSTVOTE";
const urlCategories = "http://localhost:3001/posts/categories";
const urlPosts = "http://localhost:3001/posts";
const urlComments = "http://localhost:3001/posts/id/comments";
const urlVotes = "http://localhost:3001/posts/id/";

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

export function postVote(post) {
  return {
    type: POSTVOTE,
    payload: post
  };
}

export function postVoteData(postID, option) {
  return dispatch => {
    let urlPostVoteUrl = urlVotes.replace("id", postID);

    fetch(urlPostVoteUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "carlos"
      },
      body: JSON.stringify({ option: option }),
      method: "POST"
    })
      .then(res => {
        return res.text();
      })
      .then(data => {
        console.log(JSON.parse(data));
        return dispatch(postVote(JSON.parse(data)));
      });
  };
}
