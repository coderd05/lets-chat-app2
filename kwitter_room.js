var firebaseConfig = {
      apiKey: "AIzaSyB6WsyuOBXZq82MvsqCJ-Gr7qkslqWjM2I",
      authDomain: "lets-chat-app-682e9.firebaseapp.com",
      projectId: "lets-chat-app-682e9",
      storageBucket: "lets-chat-app-682e9.appspot.com",
      messagingSenderId: "973338538971",
      appId: "1:973338538971:web:0815c5ecfe7c6f6e5c6dfe"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
      function addRoom()
      {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
})
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html"
      }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-" +Room_names);
      row=("<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>");
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_room.html";
}