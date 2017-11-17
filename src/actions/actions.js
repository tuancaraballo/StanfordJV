import firebaseRef from '../firebase/firebase.js'

// Helper action creator to add resulting post to the reducer
let addPostHelper = (post) => {
  return {
    type: 'ADD_POST',
    post
  };
};

//debugger;

//export function registerLandlordFirebase(landlord) {
// export function addPost(post){
//   //debugger;
//   return dispatch => {
//     let newPostRef = firebaseRef.child("posts").push(post);
//     console.log("NewPost", newPostRef);
//     //debugger;
//     newPostRef.then((result) => {
//       console.log("Result from firebase");
//       dispatch(addPostHelper({
//         ...post,
//         id: newPostRef.key
//       }));
//     });
//   }
// }

export function addPost(post){
  return dispatch => firebaseRef.child("posts").push(post);
}

export function deletePost(key){
  return dispatch => firebaseRef.child(key).remove();
}


let fetchPostHelper = (posts) =>{
  return {
    type: 'FETCH_POST',
    posts
  };
}

// export function fetchPosts(){
//   return(dispatch, getState) => {
//     const postsRef = firebaseRef.child('posts');
//     postsRef.on('value', snap => {
//       dispatch(fetchPostHelper(snap.val()));
//     })
//   }
// }
export function fetchPosts(){
    const postsRef = firebaseRef.child('posts');
    return dispatch => {
      postsRef.on('value', snap => {
        dispatch(
          {
            type: 'FETCH_POST',
            posts: snap.val(),
          }
        );
      });
    }
}



// export function fetchPosts1(){
//     const postsRef = firebaseRef.child('posts');
//     postsRef.on('value', snap => {
//       // dispatch(fetchPostHelper(snap.val()));
//       return {
//         type: 'FETCH_POST',
//         payload: snap.val()
//       }
//     })
//   }
// }
