var firebaseConfig = {
    apiKey: "AIzaSyBkuFGgKNl5S2czJ6PHaIuSK69tKtdelvc",
    authDomain: "lets-chat-831cb.firebaseapp.com",
    projectId: "lets-chat-831cb",
    storageBucket: "lets-chat-831cb.appspot.com",
    messagingSenderId: "679905882717",
    appId: "1:679905882717:web:df43f72e7b7d53c0fa13b4",
    measurementId: "G-2J2E8S1Q1N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user(){
      window.location = "lets_chat2.html";
      user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);

  }