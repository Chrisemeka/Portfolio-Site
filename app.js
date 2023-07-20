const senderName = document.querySelector('#name');
const senderEmail = document.querySelector('#email');
const message = document.querySelector("#text");
const submit = document.querySelector('#submit');
const form = document.querySelector('form')


let body = `Name: ${senderName.value} <br/> Email: ${senderEmail.value} <br/> Message: ${message.value}`;

const sendEmail = () => {
    Email.send({
        SecureToken : "805cf372-4ad9-4ab1-abba-ba70df18b083",
        To : 'chrisemeka096@gmail.com',
        From : "anyanwuclinton693@gmail.com",
        Subject : "Contact Message",
        Body : body
    }).then(
      message => alert(message)
    );
}

submit.addEventListener('click', e => {
    e.preventDefault();

    sendEmail();

})