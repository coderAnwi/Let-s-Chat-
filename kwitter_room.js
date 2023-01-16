const firebaseConfig = {
      apiKey: "AIzaSyBwVFRMbm2IYGKfxJHEwu0h91b5kYevxGA",
  authDomain: "let-s-chat-b6c01.firebaseapp.com",
  databaseURL: "https://let-s-chat-b6c01-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-b6c01",
  storageBucket: "let-s-chat-b6c01.appspot.com",
  messagingSenderId: "685406545115",
  appId: "1:685406545115:web:e6e5e584017dc4ebcd58fe"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
