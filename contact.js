let btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
  e.preventDefault()
  let name = document.getElementById('name').value;
  let number = document.getElementById('number').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  var body = 'Name: '+name + '<br/> Email: ' +email + '<br/> Number: ' +number + '<br/> Message: ' +message;

    Email.send({
      SecureToken : "5c10bedb-1bde-4e92-8c4e-a22a3adbcd3c",
      To : 'filmbyanz@gmail.com',
      From : "filmbyanz@gmail.com",
      Subject : "Message",
      Body : body
    }).then(
    message => alert(message)
    );
})
