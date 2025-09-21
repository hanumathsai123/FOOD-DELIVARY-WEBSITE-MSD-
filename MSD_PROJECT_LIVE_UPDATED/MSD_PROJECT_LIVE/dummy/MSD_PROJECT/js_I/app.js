
// App: render products, cart, recs, search, nav updates
let CART = JSON.parse(localStorage.getItem('cart_v1')||'[]');
let USER = JSON.parse(localStorage.getItem('user_v1')||'null');

function formatR(x){return '₹'+Number(x).toFixed(2)}
function saveCart(){localStorage.setItem('cart_v1',JSON.stringify(CART));}
function saveUser(){localStorage.setItem('user_v1',JSON.stringify(USER));}
function loadUser(){USER = JSON.parse(localStorage.getItem('user_v1')||'null'); updateAuthUI();}
function showToast(msg){ const t = document.createElement('div'); t.textContent=msg; t.style.position='fixed'; t.style.left='50%'; t.style.transform='translateX(-50%)'; t.style.bottom='24px'; t.style.background='rgba(0,0,0,0.85)'; t.style.color='white'; t.style.padding='10px 14px'; t.style.borderRadius='8px'; t.style.zIndex=120; document.body.appendChild(t); setTimeout(()=>t.style.opacity='0',2200); setTimeout(()=>t.remove(),2600); }

function renderProducts(list, containerId='productGrid'){
  const container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
  if(!container) return;
  container.innerHTML='';
  list.forEach(p=>{
    const el = document.createElement('article'); el.className='card';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="meta"><div class="tag">${p.tags.join(', ')}</div><div style="text-align:right">
        <div style="font-weight:700">${formatR(p.price)}</div>
        <button data-id="${p.id}" class="btn btn-primary addBtn" style="margin-top:8px">Add</button>
      </div></div>
    `;
    container.appendChild(el);
  });
}

function renderRecs(containerId='recList'){
  const container = document.getElementById(containerId);
  if(!container) return;
  const picks = PRODUCTS.slice(0,3);
  container.innerHTML='';
  picks.forEach(p=>{ const d=document.createElement('div'); d.style.display='flex'; d.style.alignItems='center'; d.style.gap='8px'; d.innerHTML = `<img src="${p.img}" style="width:48px;height:36px;object-fit:cover;border-radius:6px"/><div style="font-size:13px">${p.name}</div>`; container.appendChild(d);} );
}

function renderCartPanel(){
  const cartPanel = document.getElementById('cartItems');
  if(!cartPanel) return;
  cartPanel.innerHTML='';
  let tot=0;
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
    cartPanel.appendChild(row);
    tot += it.price * it.qty;
  });
  const totalEl = document.getElementById('cartTotal'); if(totalEl) totalEl.textContent = formatR(tot);
  const cartCount = document.getElementById('cartCount'); if(cartCount) cartCount.textContent = CART.reduce((s,it)=>s+it.qty,0);
}

function addToCart(id){
  const p = PRODUCTS.find(x=>x.id===id); if(!p) return;
  const found = CART.find(x=>x.id===id);
  if(found) found.qty += 1; else CART.push({...p,qty:1});
  saveCart(); renderCartPanel(); showToast('Added to cart'); updateCartBadge();
}

function changeQty(id, delta){
  const i = CART.findIndex(x=>x.id===id); if(i===-1) return;
  CART[i].qty += delta; if(CART[i].qty<=0) CART.splice(i,1);
  saveCart(); renderCartPanel(); updateCartBadge();
}

window.addEventListener('click', e=>{
  if(e.target.classList.contains('addBtn')) addToCart(Number(e.target.dataset.id));
  if(e.target.classList.contains('inc')) changeQty(Number(e.target.dataset.id),1);
  if(e.target.classList.contains('dec')) changeQty(Number(e.target.dataset.id),-1);
});

function setupSearch(inputId='searchInput', gridId='productGrid'){
  const input = document.getElementById(inputId); const grid = document.getElementById(gridId);
  if(!input || !grid) return;
  input.addEventListener('input', e=>{
    const q = e.target.value.trim().toLowerCase(); if(!q){ renderProducts(PRODUCTS, grid); return; }
    const filtered = PRODUCTS.filter(p=> p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q));
    renderProducts(filtered, grid);
  });
}

function updateCartBadge(){ const badges = document.querySelectorAll('#cartCount'); badges.forEach(b=>b.textContent = CART.reduce((s,it)=>s+it.qty,0)); }

function updateAuthUI(){
  const navAuth = document.querySelectorAll('#authBtn, #navAuth, #loginLink');
  navAuth.forEach(a=>{ if(USER) a.textContent = 'Hi, '+USER.name; else a.textContent = 'Login'; });
  const logout = document.querySelectorAll('#logoutBtn'); logout.forEach(btn=>{ if(USER) btn.style.display='inline-block'; else btn.style.display='none'; });
  const logoutBtn = document.getElementById('logoutBtn');
  if(logoutBtn){ logoutBtn.onclick = ()=>{ localStorage.removeItem('user_v1'); USER = null; updateAuthUI(); location.reload(); } }
}

// initialize on page load
document.addEventListener('DOMContentLoaded', ()=>{ loadUser(); renderRecs(); renderCartPanel(); updateCartBadge(); updateAuthUI(); });
