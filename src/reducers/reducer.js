const initialPostData = [
  {
    id: "8xf0y6ziyjabvozdd253nd",
    timestamp: 1467166872634,
    title: "Initial state --> Udacity is the best place to learn React",
    body: "Everyone says so after all.",
    author: "thingtwo",
    category: "react",
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    timestamp: 1468479767190,
    title: "Learn Redux in 10 minutes!",
    body: "Just kidding. It takes more than 10 minutes to learn technology.",
    author: "thingone",
    category: "redux",
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
];

function reducer(state = { posts: initialPostData }, action) {
  switch (action.type) {
    case "ALLPOSTS":
      return Object.assign({}, state, { posts: action.payload });
    case "GETCOMMENTS":
      return Object.assign({}, state, { comments: action.payload });
    case "POSTVOTE":
      if (action.typeOfVote === "post") {
        let oldPosts = state.posts.filter(post => {
          return post["id"] !== action.payload["id"];
        });

        let newPosts = oldPosts.concat(action.payload);

        return Object.assign({}, state, { posts: newPosts });
      } else {
        let oldComments = state.comments.filter(comment => {
          return comment["id"] !== action.payload["id"];
        });
        let newComments = oldComments.concat(action.payload);
        return Object.assign({}, state, { comments: newComments });
      }
    case "POSTCOMMENT":
      let oldComments = state.comments.slice();
      return Object.assign({}, state, {
        comments: oldComments.concat([action.payload])
      });
    case "POSTPOST":
      let oldPosts = state.posts.slice();
      return Object.assign({}, state, {
        posts: oldPosts.concat([action.payload])
      });
    case "DELETEPOST":
      let oldPosts2 = state.posts.slice();
      return Object.assign({}, state, {
        posts: oldPosts2.filter(post => {
          return post.id !== action.payload.id;
        })
      });

    default:
      return state;
  }
}
export default reducer;
