let btn = document.getElementById('btn');
btn.addEventListener('click', function(e){
  e.preventDefault()
  let name = document.getElementById('name').value;
  let number = document.getElementById('number').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  var body = 'Name: '+name + '<br/> Email: ' +email + '<br/> Number: ' +number + '<br/> Message: ' +message;

    Email.send({
      SecureToken : "3e147d8f-84c3-44e0-b2e0-677cbe1cbb3c",
      To : 'filmbyanz@gmail.com',
      From : "filmbyanz@gmail.com",
      Subject : "Message",
      Body : body
    }).then(
    message => alert(message)
    );
})
