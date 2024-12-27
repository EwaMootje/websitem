
// Haal het huidige jaar op en voeg het toe aan de pagina
document.getElementById('currentYear').textContent = new Date().getFullYear();


// JSON-data voor ontbij/lunch
const menuItems = [
  {
    "name": "Menemen",
    "image": "img/eten_fotos/menemen.jpg",
    "description": "Een pittige Turkse roerei gemaakt met tomaten, paprika en specerijen.",
    "price": "€ 7,50"
  },
  {
    "name": "Sucuklu Yumurta",
    "image": "img/eten_fotos/sucuklu_yumurta.jpg",
    "description": "Gebakken eieren met Turkse sucuk (vleesworst) en tomaten.",
    "price": "€ 6,75"
  },
  {
    "name": "Sigara Böreği",
    "image": "img/eten_fotos/sigara_boregi.jpg",
    "description": "Fritters gevuld met kaas en kruiden, vaak geserveerd als ontbijt.",
    "price": "€ 9,50"
  },
  {
    "name": "Kahvaltı Tabağı",
    "image": "img/eten_fotos/kahvalti_tabagi.jpg",
    "description": "Een traditioneel Turks ontbijt met verschillende kazen, olijven, brood, tomaten, komkommer en worst.",
    "price": "€ 11,50"
  },
  {
    "name": "Kuymak",
    "image": "img/eten_fotos/kuymak.jpg",
    "description": "Een dunne, knapperige pizza met gehakt, tomaat, ui en kruiden.",
    "price": "€ 12,50"
  },
  {
    "name": "Peynirli Pide",
    "image": "img/eten_fotos/pide_with_cheese.jpg",
    "description": "Een brood gevuld met Turkse kaas en kruiden, vaak gegeten bij het ontbijt.",
    "price": "€ 11,50"
  },
  {
    "name": "Bal-Kaymak",
    "image": "img/eten_fotos/bal_Kaymak.jpg",
    "description": "Vers brood met honing en room.",
    "price": "€ 4,50"
  },
  {
    "name": "Kumpir",
    "image": "img/eten_fotos/kumpir.jpg",
    "description": "Een grote aardappel gevuld met boter, kaas, groenten en ham.",
    "price": "€ 7,50"
  }
];

const menuContainer = document.getElementById('menu-items');

menuItems.forEach(item => {
  const menuItemElement = document.createElement('article');
  menuItemElement.classList.add('menu-item-list', 'col-md-6', 'col-sm-12');
  
  menuItemElement.innerHTML = `
    <div class="item-img">
      <div class="overlay_content">
        <div class="overlay_item"> 
          <img src="${item.image}" alt="">
          <div class="overlay">
            <div class="icons">
              <div class="button">
              </div>
              <a class="close-overlay hidden">x</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h3><a href="menu_single.html?item=${encodeURIComponent(item.name)}">${item.name}</a> <span class="price">${item.price}</span></h3>
    <p>${item.description}</p>
  `;

  menuContainer.appendChild(menuItemElement);
});

function openNewPage(itemName) {
    window.location.href = `menu_single.html?item=${encodeURIComponent(itemName)}`;
}





// JSON-data voor dinner
const menuItemsa = [
  {
"name": "Adana Kebab",
"image": "img/eten_fotos/adana_kebab.jpg",
"price": "€ 15,00",
"description": "Gegrild lamsvlees kebab met specerijen en pitabrood."
},
{
"name": "Iskender Kebab",
"image": "img/eten_fotos/iskender_kebab.jpg",
"price": "€ 18,00",
"description": "Gebroken kebab geserveerd op pita met tomatensaus en yoghurt."
},
{
"name": "Tavuk Shish",
"image": "img/eten_fotos/tavuk_shish.jpg",
"price": "€ 20,00",
"description": "Gegrilde kipspies met groenten."
},
{
"name": "Kuzu Tandir",
"image": "img/eten_fotos/kuzu_tandir.jpg",
"price": "€ 22,00",
"description": "Langzaam gegaard lamsschenkel met kruiden en groenten."
},
{
"name": "Lahmacun",
"image": "img/eten_fotos/lahmacun.jpg",
"price": "€ 14,00",
"description": "Een Turkse pizza met gehakt en groenten."
},
{
"name": "Köfte",
"image": "img/eten_fotos/kofte.jpg",
"price": "€ 17,00",
"description": "Gehaktballetjes gekruid met kruiden en geserveerd met salade."
},
{
"name": "Pide",
"image": "img/eten_fotos/Pide.jpg",
"price": "€ 19,00",
"description": "Een Turks brood met diverse toppings zoals kaas, ei en kruiden."
},
{
"name": "Dolma",
"image": "img/eten_fotos/dolma.jpg",
"price": "€ 21,00",
"description": "Gevulde druivenbladeren met rijst, kruiden en kruiden."
}
];

  const menuContainera = document.getElementById('menu-items2');

  menuItemsa.forEach(item => {
    const menuItemElement = document.createElement('article');
    menuItemElement.classList.add('menu-item-list', 'col-md-6', 'col-sm-12');
    
    menuItemElement.innerHTML = `
      <div class="item-img">
        <div class="overlay_content">
          <div class="overlay_item"> 
            <img src="${item.image}" alt="">
            <div class="overlay">
              <div class="icons">
                <div class="button">
                  <a href="${item.image}" rel="lightbox"><i class="fa fa-expand"></i></a>
                  <a href="menu_single.html?item=${encodeURIComponent(item.name)}"><i class="fa fa-shopping-cart"></i></a>
                </div>
                <a class="close-overlay hidden">x</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3><a href="menu_single.html?item=${encodeURIComponent(item.name)}">${item.name}</a> <span class="price">${item.price}</span></h3>
      <p>${item.description}</p>
    `;

    menuContainera.appendChild(menuItemElement);
  });

  function openNewPage(itemName) {
      window.location.href = `menu_single.html?item=${encodeURIComponent(itemName)}`;
  }




// JSON-data voor toetje
const menuItemsc = [
  {
    "name": "Baklava",
    "image": "img/eten_fotos/baklava.jpg",
    "description": "Een bladerdeeg met gehakte noten en siroop.",
          "price": "€ 6,75"
  
  },
  {
    "name": "Revani",
    "image": "img/eten_fotos/revani.jpg",
    "description": "Een zoete taart gemaakt van griesmeel, gegarneerd met siroop.",
          "price": "€ 6,75"
  },
  {
    "name": "Künefe",
    "image": "img/eten_fotos/kunefe.jpg",
    "description": "Een Turkse dessert gemaakt van kaas en baklava-deeg.",
          "price": "€ 6,75"
  },
  {
    "name": "Sütlaç",
    "image": "img/eten_fotos/sutlac.jpg",
    "description": "Een zoete rijstepap met kaneel en suiker.",
          "price": "€ 6,75"
  },
  {
    "name": "cheesecake",
    "image": "img/eten_fotos/cheesecake.jpg",
    "description": "Cheesecake gemaakt met kaneel",
          "price": "€ 6,75"
  },
  {
    "name": "Kazandibi",
    "image": "img/eten_fotos/kazandibi.jpg",
    "description": "Een gebakken melkpudding.",
          "price": "€ 6,75"
  },

];

  const menuContainerc = document.getElementById('menu-items3');

  menuItemsc.forEach(item => {
    const menuItemElement = document.createElement('article');
    menuItemElement.classList.add('menu-item-list', 'col-md-6', 'col-sm-12');
    
    menuItemElement.innerHTML = `
      <div class="item-img">
        <div class="overlay_content">
          <div class="overlay_item"> 
            <img src="${item.image}" alt="">
            <div class="overlay">
              <div class="icons">
                <div class="button">
                  <a href="${item.image}" rel="lightbox"><i class="fa fa-expand"></i></a>
                  <a href="menu_single.html?item=${encodeURIComponent(item.name)}"><i class="fa fa-shopping-cart"></i></a>
                </div>
                <a class="close-overlay hidden">x</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3><a href="menu_single.html?item=${encodeURIComponent(item.name)}">${item.name}</a> <span class="price">${item.price}</span></h3>
      <p>${item.description}</p>
    `;

    menuContainerc.appendChild(menuItemElement);
  });

  function openNewPage(itemName) {
      window.location.href = `menu_single.html?item=${encodeURIComponent(itemName)}`;
  }




  