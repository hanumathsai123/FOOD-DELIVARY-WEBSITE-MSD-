
function renderCartPage(){
  const cartDiv = document.getElementById('cart-items');
  if(!cartDiv) return;
  cartDiv.innerHTML = '';
  let tot = 0;
  if(!CART || CART.length===0){
    cartDiv.innerHTML = '<div style="color:#6b7280">Your cart is empty</div>';
  } else {
    CART.forEach(it=>{
      const row = document.createElement('div'); row.className='cart-row';
      row.innerHTML = `
        <img src="${it.img}" style="width:64px;height:56px;object-fit:cover;border-radius:8px" />
        <div style="flex:1">
          <div style="font-weight:700">${it.name}</div>
          <div style="color:#6b7280;font-size:13px">${formatR(it.price)} × ${it.qty}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:6px;align-items:center;justify-content:center">
          <button class="inc" data-id="${it.id}">+</button>
          <button class="dec" data-id="${it.id}">-</button>
        </div>
      `;
      cartDiv.appendChild(row);
      tot += it.price * it.qty;
    });
  }
  const totalDisplay = document.getElementById('cartTotal'); if(totalDisplay) totalDisplay.textContent = formatR(tot);

  cartDiv.addEventListener('click', e=>{
    if(e.target.classList.contains('inc')){ changeQty(Number(e.target.dataset.id),1); renderCartPage(); }
    if(e.target.classList.contains('dec')){ changeQty(Number(e.target.dataset.id),-1); renderCartPage(); }
  });
}
document.addEventListener('DOMContentLoaded', ()=>{ renderCartPage(); });
