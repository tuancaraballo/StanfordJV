/*--- setting up firebse ---*/
import * as firebase from 'firebase'

try {
  let config = {
    authDomain : process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL :  process.env.REACT_APP_DATABASE_URL,
    projectId : process.env.REACT_APP_PROJECT_ID,
    storageBucket : process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId : process.env.REACT_APP_MESSAGING_SENDER_ID,
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebaseRef;
// console.log(process.env);
//
// var config = {
//   apiKey: "AIzaSyBYahYt73gPPHaDKFNP80hWRx8RlgkAqSA",
//   authDomain: "cardinaljoinedventures.firebaseapp.com",
//   databaseURL: "https://cardinaljoinedventures.firebaseio.com",
//   projectId: "cardinaljoinedventures",
//   storageBucket: "cardinaljoinedventures.appspot.com",
//   messagingSenderId: "404594347225"
// };
// firebase.initializeApp(config);

// let database
// export const init = () => {
//   let config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
//   }
//   firebase.initializeApp(config)
//   database = firebase.database()
// }






//
//
// import firebase from 'firebase'
// console.log(process.env);
// try{}
//   let config = {
//     authDomain : process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL :  process.env.REACT_APP_DATABASE_URL,
//     projectId : process.env.REACT_APP_PROJECT_ID,
//     storageBucket : process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId : process.env.REACT_APP_MESSAGING_SENDER_ID,
//   };
//   console.log(config);
//   firebase.initializeApp(config);
//
// let dbReference = firebase.database();
// export default dbReference;
//
// let userId = '123';
// let obj = {
//   username: "carlos",
//   email: "carlos@stanford.edu"
// }
//
// // firebase.database().ref('users/' + userId).set({
// //     username: "carlos",
// //     email: "carlos@stanford.edu"
// //   });
// let firebaseRef = firebase.database().ref();
// console.log("Creating reference");
// let childObje = firebaseRef.child('users');
// childObje.set(obj);
// console.log("Reference to users", childObje);

//let landlordRef = firebaseRef.child(`users/`).push(obj);

//debugger;



//firebase.database.ref('/posts').push("hello");

// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
// var childRef = postRef.push().key;
// post
//
// //
// var updates = {};
// updates['/posts/' + newPostKey] = "Hello";
// firebase.database().ref().update(updates).then((result) =>{
//   console.log("Firebase response", result);
// });
// //
// //store.dispatch(addPost(post));
// firebaseRef.child(`posts/`).push(post);
//export default firebaseRef;
