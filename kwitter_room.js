var firebaseConfig = {
  apiKey: "AIzaSyAVZHez6SmyWanX9x7P4jdJV-p0CZRodF8",
  authDomain: "linkbook-140cb.firebaseapp.com",
  databaseURL: "https://linkbook-140cb-default-rtdb.firebaseio.com",
  projectId: "linkbook-140cb",
  storageBucket: "linkbook-140cb.appspot.com",
  messagingSenderId: "806247809943",
  appId: "1:806247809943:web:1a95f04840f7b8e714fad2",
  measurementId: "G-RVS5T0SDNW"
};
firebaseConfig.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!" ;
function addRoom() {
  Room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",Room_name);
  window.location="kwitter_page.html";
  

}
 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("roomname="+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) '>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
    
      //End code
      });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}
function logout() {
  localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}