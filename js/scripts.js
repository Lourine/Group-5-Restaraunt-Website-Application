

function logIn() {
  var inputName= document.getElementById("username").value
  var inputPassword= document.getElementById("password").value

  if (inputName ==="" || inputPassword ==="") {
    document.getElementById("alert").innerHTML=("Kindly input all fields")
    event.preventDefault()
  }
  else {
    document.getElementById("alert").innerHTML=("Welcome to Mama's Kitchen")
  }
}