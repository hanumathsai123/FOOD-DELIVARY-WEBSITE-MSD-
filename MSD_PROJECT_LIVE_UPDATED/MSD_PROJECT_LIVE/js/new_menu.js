// new_menu.js - builds full menu for selected restaurant, items are shuffled per restaurant
const PARAMS = new URLSearchParams(location.search);
const REST_ID = PARAMS.get('restId') || '1000';
const REST_NAME = PARAMS.get('restName') || ('Restaurant '+REST_ID);
const CITY = PARAMS.get('city') || '';
document.getElementById('restInfo').textContent = REST_NAME + (CITY?(' — '+CITY):'');

let ALL_ITEMS = window.PRODUCTS || window.PRODUCTS || [];
if(!ALL_ITEMS) ALL_ITEMS = [];

function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]];} return arr; }
const MENU = shuffle(ALL_ITEMS.slice());

let CART = JSON.parse(localStorage.getItem('cart_v1')||'[]');
function saveCart(){ localStorage.setItem('cart_v1', JSON.stringify(CART)); }
function getQty(id){ const f = CART.find(x=>x.id==id); return f?f.qty:0; }
function inc(id){ const item = MENU.find(m=>m.id==id); if(!item) return; const f = CART.find(x=>x.id==id); if(f) f.qty++; else CART.push({id:item.id,name:item.name,price:item.price,img:item.img,qty:1}); saveCart(); updateUI(); }
function dec(id){ const i = CART.findIndex(x=>x.id==id); if(i>-1){ CART[i].qty--; if(CART[i].qty<=0) CART.splice(i,1); saveCart(); updateUI(); } }
function updateUI(){
  MENU.forEach(it=>{ const el = document.getElementById('qty-'+it.id); if(el){ const f = CART.find(x=>x.id==it.id); el.textContent = f?f.qty:0; } });
  const items = CART.reduce((s,it)=>s+it.qty,0);
  const total = CART.reduce((s,it)=>s+it.qty*it.price,0);
  const bottom = document.getElementById('bottomCart');
  if(bottom){ document.getElementById('cartCount').textContent = items; document.getElementById('cartTotal').textContent = '₹'+total.toFixed(2); if(items>0) bottom.classList.remove('hidden'); else bottom.classList.add('hidden'); }
  localStorage.setItem('cart_v1', JSON.stringify(CART));
}

window.addEventListener('click', function(e){
  if(e.target.classList.contains('inc')){ inc(Number(e.target.dataset.id)); }
  if(e.target.classList.contains('dec')){ dec(Number(e.target.dataset.id)); }
  if(e.target.id === 'checkoutBtn'){ window.location.href = 'checkout.html'; }
  if(e.target.id === 'backRest'){ history.back(); }
});

document.addEventListener('DOMContentLoaded', function(){
  const container = document.getElementById('menuList');
  container.innerHTML = '';
  MENU.forEach(it=>{
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `<img src="${it.img||'https://picsum.photos/seed/'+it.id+'/600/400'}" style="height:140px;object-fit:cover;border-radius:8px"/>
      <h3>${it.name}</h3>
      <div class="meta-row"><div class="small">${it.desc||''}</div><div style="font-weight:700">₹${Number(it.price).toFixed(2)}</div></div>
      <div class="center-controls"><div class="counter"><button class="dec" data-id="${it.id}">-</button><div class="qty" id="qty-${it.id}">${getQty(it.id)}</div><button class="inc" data-id="${it.id}">+</button></div></div>
      <div id="reviews-${REST_ID}" style="margin-top:10px"></div>
      <div id="review-form-${REST_ID}" style="margin-top:8px"></div>`;
    container.appendChild(card);
  });
  updateUI();
  renderReviewsSection(REST_ID);
});

function reviewKey(restId){ return 'reviews_' + restId; }
function loadReviews(restId){ try{ return JSON.parse(localStorage.getItem(reviewKey(restId))||'[]'); }catch(e){ return []; } }
function saveReview(restId, review){ const k = reviewKey(restId); const arr = loadReviews(restId); arr.unshift(review); localStorage.setItem(k, JSON.stringify(arr)); }

function renderReviewsSection(restId){
  const rlist = loadReviews(restId);
  const container = document.getElementById('reviews-'+restId);
  const form = document.getElementById('review-form-'+restId);
  if(!container || !form) return;
  container.innerHTML = '<div style="font-weight:700">Reviews ('+rlist.length+')</div>';
  if(rlist.length===0) container.innerHTML += '<div class="small" style="margin-top:6px">No reviews yet.</div>';
  rlist.forEach(rv=>{
    const d=document.createElement('div'); d.style.marginTop='8px';
    d.innerHTML = `<div style="font-weight:600">${'⭐'.repeat(rv.stars)} <span style="font-size:13px;color:#6b7280;margin-left:6px">${rv.time}</span></div><div style="margin-top:4px">${rv.text}</div>`;
    container.appendChild(d);
  });
  form.innerHTML = `<div style="margin-top:8px"><label style="font-weight:700">Leave a review</label><div style="margin-top:6px;display:flex;gap:8px;align-items:center"><select id="stars-${restId}" class="input" style="width:110px"><option value="5">5 ★</option><option value="4">4 ★</option><option value="3">3 ★</option><option value="2">2 ★</option><option value="1">1 ★</option></select><input id="reviewText-${restId}" class="input" placeholder="Write your review..." /><button class="btn btn-primary" id="submitReview-${restId}">Submit</button></div></div>`;
  document.getElementById('submitReview-'+restId).onclick = function(){
    const stars = Number(document.getElementById('stars-'+restId).value);
    const text = document.getElementById('reviewText-'+restId).value.trim();
    if(!text){ alert('Please write a short review'); return; }
    const rv = {stars, text, time: new Date().toLocaleString()};
    saveReview(restId, rv);
    renderReviewsSection(restId);
  };
}
