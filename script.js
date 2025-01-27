const toggle = document.querySelector('.navbar .toggle');
const menu = document.querySelector('.navbar .menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  let errorMessage = '';

  if (name.trim() === '') {
      errorMessage += 'Ime je obavezno. <br>';
  }

  if (email.trim() === '') {
      errorMessage += 'Email je obavezan. <br>';
  } else if (!isValidEmail(email)) {
      errorMessage += 'Molimo unesite važeći email. <br>';
  }

  if (message.trim() === '') {
      errorMessage += 'Poruka je obavezna. <br>';
  }

  if (errorMessage !== '') {
      document.getElementById('error-message').innerHTML = errorMessage;
  } else {
      alert('Forma je uspešno poslana!');
      document.getElementById('contact-form').reset();
  }
});

function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(email);
}
