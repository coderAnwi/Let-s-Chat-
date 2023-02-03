//YOUR FIREBASE LINKS
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

   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");


    function send() {
     msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });

     document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}