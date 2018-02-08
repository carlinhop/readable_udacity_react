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
      return Object.assign({}, state, {
        posts: action.payload
      });
    case "GETCOMMENTS":
      if (state.comments) {
        console.log(action.payload);
        let oldComments = [...state.comments];
        let arrayOfCommentsId = Array.from(
          new Set(
            oldComments.map(comment => {
              return comment.id;
            })
          )
        );
        let arrayOfUniqueComments = action.payload.filter(comment => {
          return arrayOfCommentsId.indexOf(comment.id) == -1;
        });
        let newComments = oldComments.concat(arrayOfUniqueComments);
        return Object.assign({}, state, {
          comments: newComments
        });
      } else {
        return Object.assign({}, state, {
          comments: action.payload
        });
      }

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
    case "GETCATEGORIES":
      return Object.assign({}, state, {
        categories: action.payload.categories
      });
    case "DELETECOMMENT":
      let oldComments2 = state.comments.slice();
      return Object.assign({}, state, {
        comments: oldComments2.filter(comment => {
          return comment.id !== action.payload.id;
        })
      });
    case "DELETECATEGORY":
      let oldCategories = [...state.categories];
      let newCategories = oldCategories.filter(category => {
        return category.name !== action.payload;
      });
      return Object.assign({}, state, { categories: newCategories });
    case "PUTPOST":
      let oldPosts3 = [...state.posts];
      let oldPosts3Filtered = oldPosts3.filter(post => {
        return post["id"] !== action.payload["id"];
      });
      return Object.assign({}, state, {
        posts: oldPosts3Filtered.concat([action.payload])
      });
    case "PUTCOMMENT":
      let oldComments3 = [...state.posts];
      let oldComments3Filtered = oldComments3.filter(comment => {
        return comment["id"] !== action.payload["id"];
      });
      return Object.assign({}, state, {
        comments: oldComments3Filtered.concat([action.payload])
      });
    case "SORTPOSTSBYVOTE":
      let oldPosts4 = [...state.posts];
      let sortedPosts = oldPosts4.sort((a, b) => {
        if (a.voteScore > b.voteScore) {
          return -1;
        } else if (a.voteScore < b.voteScore) {
          return 1;
        } else {
          return 0;
        }
      });
      return Object.assign({}, state, { posts: sortedPosts, sorted: "byVote" });
    case "GETPOSTDETAILS":
      return Object.assign({}, state, { detailedPost: action.payload });

    default:
      return state;
  }
}
export default reducer;
