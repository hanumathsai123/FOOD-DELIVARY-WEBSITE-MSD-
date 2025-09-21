// new_restaurants.js - builds restaurants for a selected city and links to menu
const SOURCE_ITEMS = window.PRODUCTS || window.PRODUCTS || [];
const CITY = new URLSearchParams(location.search).get('city') || '';
document.getElementById('cityTitle').textContent = CITY ? ('Restaurants in ' + CITY) : 'Restaurants';

const CITY_RESTAURANTS = {
  "Guntur": ["Royal Biryani","Spicy Bites","Andhra Tandoori","Veggie Hub","Curry Point","Pizza Treat","Chill & Grill"],
  "Vijayawada": ["Roti Mahal","BBQ Nation","Masala Express","Food Junction","Rice Bowl","Biryani House"],
  "Vizag": ["Coastal Curry","Sea View Dine","Tandoori Tales","Veggie Delight","Andhra Meals","FastBite"],
  "Nellore": ["Spice Route","Curry Leaf","Biryani Adda","Family Kitchen","Andhra Rasoi"],
  "Tirupati": ["Temple Tiffins","Veg Delight","Andhra Ruchulu","Hot Plate","Foodies Choice"]
};

const restNames = CITY_RESTAURANTS[CITY] || [];
const RESTS = restNames.map((name,i)=>({ id: 1000 + i, name, city: CITY, rating: +(3.8 + Math.random()*1.2).toFixed(1), time:35 }));

function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [arr[i],arr[j]]=[arr[j],arr[i]];} return arr; }

function renderRests(){
  const grid = document.getElementById('restGrid');
  grid.innerHTML='';
  RESTS.forEach(r=>{
    const menu = shuffle(SOURCE_ITEMS.slice()).slice(0, SOURCE_ITEMS.length);
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `\n      <img src="${menu[0] && menu[0].img ? menu[0].img : 'https://picsum.photos/seed/'+r.id+'/800/400'}" style="height:140px;object-fit:cover;border-radius:8px;"/>\n      <h3>${r.name}</h3>\n      <div class="meta-row"><div>⭐ ${r.rating}</div><div>Delivery in ${r.time} mins</div></div>\n      <div style="margin-top:8px">${menu.slice(0,3).map(m=>'<div style="display:flex;gap:8px;align-items:center;margin-top:8px"><img src="'+(m.img||'https://picsum.photos/seed/'+m.id+'/200/140')+'" style="width:72px;height:56px;object-fit:cover;border-radius:8px"/><div><div style="font-weight:700">'+m.name+'</div><div class="small">₹'+Number(m.price).toFixed(2)+'</div></div></div>').join('')}</div>\n      <div style="margin-top:10px"><button class="btn btn-primary viewMenu" data-name="${encodeURIComponent(r.name)}" data-id="${r.id}">View Menu</button> <button class="btn btn-ghost viewReviews" data-id="${r.id}">Reviews</button></div>\n    `;
    grid.appendChild(card);
  });
  document.querySelectorAll('.viewMenu').forEach(b=> b.addEventListener('click', function(){
    const rid = this.dataset.id; const rname = decodeURIComponent(this.dataset.name||'');
    window.location.href = 'menu.html?restId=' + rid + '&restName=' + encodeURIComponent(rname) + '&city=' + encodeURIComponent(CITY);
  }));
  document.querySelectorAll('.viewReviews').forEach(b=> b.addEventListener('click', function(){
    const rid = this.dataset.id;
    alert('Scroll to restaurant menu to leave reviews after opening its menu (demo).');
  }));
  document.getElementById('backBtn').addEventListener('click', function(){ window.location.href='city.html'; });
  document.getElementById('searchInput').addEventListener('input', function(e){
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('#restGrid .card').forEach(card=>{
      card.style.display = card.textContent.toLowerCase().includes(q) ? 'block' : 'none';
    });
  });
}
renderRests();
