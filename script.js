const root=document.documentElement;
const toggle=document.getElementById('themeToggle');
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const saved=localStorage.getItem('d3d-theme');

if(saved) root.dataset.theme=saved;

function sync(){
  toggle.textContent=root.dataset.theme==='dark'?'☾':'☼';
}

sync();

toggle.addEventListener('click',()=>{
  root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
  localStorage.setItem('d3d-theme',root.dataset.theme);
  sync();
});

menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

nav.querySelectorAll('a').forEach(a=>
  a.addEventListener('click',()=>nav.classList.remove('open'))
);


// Customer enquiry form - Web3Forms submission
const customerForm = document.getElementById('customerForm');
const customerName = document.getElementById('customerName');
const customerPhone = document.getElementById('customerPhone');
const customerSubmit = document.getElementById('customerSubmit');
const formStatus = document.getElementById('formStatus');

if (
  customerForm &&
  customerName &&
  customerPhone &&
  customerSubmit &&
  formStatus
) {

  const phoneLooksValid = (value) => {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
  };

  const updateSubmitState = () => {
    const nameValid = customerName.value.trim().length >= 2;
    const phoneValid = phoneLooksValid(customerPhone.value.trim());

    customerName.setAttribute(
      'aria-invalid',
      String(customerName.value.length > 0 && !nameValid)
    );

    customerPhone.setAttribute(
      'aria-invalid',
      String(customerPhone.value.length > 0 && !phoneValid)
    );

    customerSubmit.disabled = !(nameValid && phoneValid);
  };

  customerName.addEventListener('input', updateSubmitState);
  customerPhone.addEventListener('input', updateSubmitState);

  updateSubmitState();


  customerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    updateSubmitState();

    if (customerSubmit.disabled) {
      return;
    }

    if (!customerForm.checkValidity()) {
      customerForm.reportValidity();
      return;
    }

    const originalButtonHTML = customerSubmit.innerHTML;

    customerSubmit.disabled = true;
    customerSubmit.innerHTML = 'Sending...';
    formStatus.textContent = 'Sending your enquiry...';

    try {

      const formData = new FormData(customerForm);

      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: formData
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {

        formStatus.textContent =
          'Thank you! Your enquiry has been sent successfully.';

        customerForm.reset();
        updateSubmitState();

      } else {

        console.error('Web3Forms error:', result);

        formStatus.textContent =
          result.message ||
          'Unable to send your enquiry. Please try again.';

        customerSubmit.disabled = false;
      }

    } catch (error) {

      console.error('Form submission error:', error);

      formStatus.textContent =
        'Something went wrong. Please try again.';

      customerSubmit.disabled = false;

    } finally {

      customerSubmit.innerHTML = originalButtonHTML;
    }
  });
}
