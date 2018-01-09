
export const HELLO = 'HELLO';




const urlCategories = `${process.env.REACT_APP_BACKEND}/categories`;
const urlPosts = `${process.env.REACT_APP_BACKEND}/posts`;

export function getData(){

  return dispatch => {
  	fetch(urlPosts, {
    headers: { Authorization: "whatever-you-want" },
    credentials: "include"
  })
  .then(res => {
    return res.text();
  })
  .then(data => {
    return dispatch(showHello(data))
    
  });
  }
  
}

export function showHello(posts) {
  return {
  	type: HELLO,
    payload: posts
  }
};