console.log('bobbyhadz.com');

// Form submission canceled because the form is not connected

const form = document.createElement('form');

const btn = document.createElement('button');

form.appendChild(btn);

btn.innerHTML = 'Submit';

btn.addEventListener('click', () => {
  console.log('form submitted');
});

// 👇️ attach the form to the body element
document.body.appendChild(form);
