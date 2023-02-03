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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " 😎";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name", name);

      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";

}