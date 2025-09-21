
function saveUser(){ localStorage.setItem('user_v1', JSON.stringify(USER)); }
function loadUser(){ USER = JSON.parse(localStorage.getItem('user_v1')||'null'); }

function setupLoginPage(){
  const phoneInput = document.getElementById('phoneInput');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const step2 = document.getElementById('step2');
  const otpInput = document.getElementById('otpInput');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  if(!sendOtpBtn) return;

  sendOtpBtn.addEventListener('click', ()=>{
    const phone = phoneInput.value.trim();
    if(!/^\d{10}$/.test(phone)){ alert('Enter valid 10-digit mobile'); return; }
    step2.style.display='block';
    const info = document.getElementById('otpInfo'); if(info) info.textContent = 'OTP sent: 123456';
  });

  verifyOtpBtn.addEventListener('click', ()=>{
    const otp = otpInput.value.trim();
    if(otp==='123456'){
      USER = {name:'User_'+(phoneInput.value.slice(-4)), phone: phoneInput.value};
      saveUser();
      alert('Logged in as '+USER.name);
      window.location.href = 'city.html';
    } else alert('Invalid OTP (123456)');
  });
}

function setupSignupPage(){
  const nameInput = document.getElementById('nameInput');
  const phoneInput = document.getElementById('phoneInput');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const step2 = document.getElementById('step2');
  const otpInput = document.getElementById('otpInput');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  if(!sendOtpBtn) return;

  sendOtpBtn.addEventListener('click', ()=>{
    const phone = phoneInput.value.trim();
    if(!nameInput.value.trim()){ alert('Enter name'); return; }
    if(!/^\d{10}$/.test(phone)){ alert('Enter valid 10-digit mobile'); return; }
    step2.style.display='block';
    const info = document.getElementById('otpInfo'); if(info) info.textContent = 'OTP sent: 123456';
  });

  verifyOtpBtn.addEventListener('click', ()=>{
    const otp = otpInput.value.trim();
    if(otp==='123456'){
      USER = {name: nameInput.value.trim(), phone: phoneInput.value};
      saveUser();
      alert('Signed up as '+USER.name);
      window.location.href = 'city.html';
    } else alert('Invalid OTP (123456)');
  });
}
