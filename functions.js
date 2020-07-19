function displayPicture(element){
	var frame = document.getElementById("telaGrande");
	frame.innerHTML = element.alt;
	frame.style.backgroundImage = "url('" + element.src + "')"; 
}

function undisplayPicture(){
	var frame = document.getElementById("frame");
	frame.innerHTML = "Quadro";
	frame.style.backgroundImage = "none"; 
}

function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    saveMessage(name, company, email, phone, message)
    
    return false;
}

function saveMessage(name, company, email, phone, message){
    // DatabaseReference
    var newDatabaseReference = databaseReference.push();

    newDatabaseReference.set(
	{
	    name: name,
	    company: company,
	    email: email,
	    phone: phone,
	    message: message
	}
    )
}


var firebaseConfig = {
    apiKey: "AIzaSyC8RuUpbwRAyAJngAwi4GtN4kw-JW4q8Fg",
    authDomain: "banco-de-dados-7d310.firebaseapp.com",
    databaseURL: "https://banco-de-dados-7d310.firebaseio.com",
    projectId: "banco-de-dados-7d310",
    storageBucket: "banco-de-dados-7d310.appspot.com",
    messagingSenderId: "93434781411",
    appId: "1:93434781411:web:3981369724df9e7ed52fd6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var databaseReference = firebase.database().ref("mais-um-teste-banco-de-dados")
