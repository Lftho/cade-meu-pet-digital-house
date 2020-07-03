/*
✅primeiro validar dentro do input foi um email

✅se ele digitou email, mostra a mensagem

✅se ele não digitou nada, mostra uma mensagem...por favor informar o email
*/

let form = document.getElementById('form_contato');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
  1
  let email = document.getElementById('txt_email');  
  document.getElementById('message').innerHTML = "Enviaremos notificações para o seu email " + email.value;
  
  
  if( email == '' || !er.test(email) ) { 
    alert('Campo preenchido corretamente'); 
    
    window.location.href()
    
    return false; 
  }
  
  //Se passou por essas validações exibe um alert
  alert( 'formulário enviado com sucesso!' );
});