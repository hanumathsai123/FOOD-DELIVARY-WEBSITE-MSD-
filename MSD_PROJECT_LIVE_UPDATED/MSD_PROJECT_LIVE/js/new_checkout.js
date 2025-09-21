// checkout script: render cart and place order
let CART = JSON.parse(localStorage.getItem('cart_v1')||'[]');
function formatR(x){ return '₹'+Number(x).toFixed(2); }
function renderCheckout(){
  const div = document.getElementById('checkoutItems');
  div.innerHTML = '';
  if(!CART || CART.length===0){ div.innerHTML = '<div class="small">Cart is empty</div>'; return; }
  let tot = 0;
  CART.forEach(it=>{
    const row = document.createElement('div'); row.style.display='flex'; row.style.justifyContent='space-between'; row.style.marginTop='8px';
    row.innerHTML = `<div>${it.name} × ${it.qty}</div><div>${formatR(it.price*it.qty)}</div>`;
    div.appendChild(row);
    tot += it.price*it.qty;
  });
  document.getElementById('placeOrder').addEventListener('click', function(){
    const addr = document.getElementById('addr').value.trim();
    if(!addr){ alert('Enter delivery address'); return; }
    const pay = document.querySelector('input[name="payMethod"]:checked').value;
    sessionStorage.setItem('lastOrder', JSON.stringify({items:CART,total:tot,addr:addr,payment:pay,eta:35}));
    localStorage.removeItem('cart_v1');
    window.location.href = 'success.html';
  });
}
document.addEventListener('DOMContentLoaded', renderCheckout);
<button onclick="window.location.href='success.html'">Place Order</button>

