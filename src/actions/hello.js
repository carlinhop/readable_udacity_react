export const HELLO = "HELLO";
const urlCategories = "http://localhost:3001/posts/categories";
const urlPosts = "http://localhost:3001/posts";

export function showHello(posts) {
  return {
    type: HELLO,
    payload: posts
  };
}

export function getData() {
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
        return dispatch(showHello(JSON.parse(data)));
      });
  };
}
