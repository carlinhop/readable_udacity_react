export const HELLO = 'HELLO';
const urlCategories = `https://localhost:3001/posts/categories`;
const urlPosts = process.env.REACT_APP_BACKEND + ":3001/posts";

export function showHello(posts) {
  return {
  	type: HELLO,
    payload: posts
  }
};

export function getData(){

  return dispatch => {
  	fetch(urlPosts, {headers: { 'Authorization': 'carlos:whatever' }
    })
  .then(res => {
    return res.text();
  })
  .then(data => {
    return dispatch(showHello(data))
    
  	});
  }
  
}

