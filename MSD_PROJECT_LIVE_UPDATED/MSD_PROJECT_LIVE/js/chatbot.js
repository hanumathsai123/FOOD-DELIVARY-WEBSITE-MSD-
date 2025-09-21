
function setupChatbot(){
  const chatBtn = document.getElementById('chatBtn');
  const chatBox = document.getElementById('chatBox');
  const chatSend = document.getElementById('chatSend');
  const chatInput = document.getElementById('chatInput');
  const chatBody = document.getElementById('chatBody');
  if(!chatBtn) return;
  chatBtn.addEventListener('click', ()=> chatBox.classList.toggle('open'));
  chatSend.addEventListener('click', ()=>{
    const q = chatInput.value.trim(); if(!q) return;
    const el = document.createElement('div'); el.innerHTML = `<b>You:</b> ${q}`; chatBody.appendChild(el);
    setTimeout(()=>{ const r = document.createElement('div'); r.innerHTML = `<b>Bot:</b> Try Veg Thali + Masala Chai — ₹248`; chatBody.appendChild(r); chatBody.scrollTop = chatBody.scrollHeight; },700);
    chatInput.value='';
  });
}
document.addEventListener('DOMContentLoaded', setupChatbot);
