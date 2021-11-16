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
    room_name=localStorage.getItem("room_name");
function send() {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
