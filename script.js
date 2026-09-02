const root=document.documentElement;const toggle=document.getElementById('themeToggle');const menuBtn=document.getElementById('menuBtn');const nav=document.getElementById('nav');const saved=localStorage.getItem('d3d-theme');if(saved)root.dataset.theme=saved;function sync(){toggle.textContent=root.dataset.theme==='dark'?'☾':'☼';}sync();toggle.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('d3d-theme',root.dataset.theme);sync();});menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));


// Customer enquiry form validation and email handoff.
// GitHub Pages is static hosting, so this prepares a pre-filled email in the visitor's mail app.
const customerForm = document.getElementById('customerForm');
const customerName = document.getElementById('customerName');
const customerPhone = document.getElementById('customerPhone');
const customerSubmit = document.getElementById('customerSubmit');
const formStatus = document.getElementById('formStatus');

if (customerForm && customerName && customerPhone && customerSubmit) {
  const phoneLooksValid = (value) => {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
  };

  const updateSubmitState = () => {
    const nameValid = customerName.value.trim().length >= 2;
    const phoneValid = phoneLooksValid(customerPhone.value.trim());
    customerName.setAttribute('aria-invalid', String(customerName.value.length > 0 && !nameValid));
    customerPhone.setAttribute('aria-invalid', String(customerPhone.value.length > 0 && !phoneValid));
    customerSubmit.disabled = !(nameValid && phoneValid);
  };

  customerName.addEventListener('input', updateSubmitState);
  customerPhone.addEventListener('input', updateSubmitState);
  updateSubmitState();

  customerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    updateSubmitState();
    if (customerSubmit.disabled) return;

    const data = new FormData(customerForm);
    const recipient = ['Rashika.srivastava', 'daddy3dglobal.com'].join('@');
    const subject = `Website enquiry — ${data.get('name') || 'New customer'}`;
    const body = [
      'New enquiry from Daddy3D Global website',
      '',
      `Name: ${data.get('name') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Service interest: ${data.get('interest') || ''}`,
      '',
      'Project brief:',
      `${data.get('message') || ''}`
    ].join('\\n');

    formStatus.textContent = 'Opening your email app with the enquiry details…';
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
