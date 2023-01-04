//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAftUbjXjAXRsiSMJOx8bRvYqLrQycM6Ic",
      authDomain: "classtest-74dd2.firebaseapp.com",
      databaseURL: "https://classtest-74dd2-default-rtdb.firebaseio.com",
      projectId: "classtest-74dd2",
      storageBucket: "classtest-74dd2.appspot.com",
      messagingSenderId: "490649434940",
      appId: "1:490649434940:web:c302a1f49cb7d05cf1bc39"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addroom() {
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
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name)
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
