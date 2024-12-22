
// Haal het huidige jaar op en voeg het toe aan de pagina
document.getElementById('currentYear').textContent = new Date().getFullYear();


// JSON-data voor ontbij/lunch
const menuItems = [
  {
    "name": "Menemen",
    "image": "videos/eten-Fotos/menemen.jpg",
    "description": "Een pittige Turkse roerei gemaakt met tomaten, paprika en specerijen.",
    "price": "€ 7,50"
  },
  {
    "name": "Sucuklu Yumurta",
    "image": "videos/eten-Fotos/Sucuklu Yumurta.jpg",
    "description": "Gebakken eieren met Turkse sucuk (vleesworst) en tomaten.",
    "price": "€ 6,75"
  },
  {
    "name": "Sigara Böreği",
    "image": "videos/eten-Fotos/Sigara Böreği.jpg",
    "description": "Fritters gevuld met kaas en kruiden, vaak geserveerd als ontbijt.",
    "price": "€ 9,50"
  },
  {
    "name": "Kahvaltı Tabağı",
    "image": "videos/eten-Fotos/Kahvaltı Tabağı.jpg",
    "description": "Een traditioneel Turks ontbijt met verschillende kazen, olijven, brood, tomaten, komkommer en worst.",
    "price": "€ 11,50"
  },
  {
    "name": "Kuymak",
    "image": "videos/eten-Fotos/Kuymak.jpg",
    "description": "Een dunne, knapperige pizza met gehakt, tomaat, ui en kruiden.",
    "price": "€ 12,50"
  },
  {
    "name": "Peynirli Pide",
    "image": "videos/eten-Fotos/pide-with-cheese.jpg",
    "description": "Een brood gevuld met Turkse kaas en kruiden, vaak gegeten bij het ontbijt.",
    "price": "€ 11,50"
  },
  {
    "name": "Bal-Kaymak",
    "image": "videos/eten-Fotos/Bal-Kaymak.jpg",
    "description": "Vers brood met honing en room.",
    "price": "€ 4,50"
  },
  {
    "name": "Kumpir",
    "image": "videos/eten-Fotos/Kumpir.jpg",
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

  menuContainer.appendChild(menuItemElement);
});

function openNewPage(itemName) {
    window.location.href = `menu_single.html?item=${encodeURIComponent(itemName)}`;
}





// JSON-data voor dinner
const menuItemsa = [
  {
"name": "Adana Kebab",
"image": "videos/eten-Fotos/Adana Kebab.jpg",
"price": "€ 15,00",
"description": "Gegrild lamsvlees kebab met specerijen en pitabrood."
},
{
"name": "Iskender Kebab",
"image": "videos/eten-Fotos/iskender-kebab.jpg",
"price": "€ 18,00",
"description": "Gebroken kebab geserveerd op pita met tomatensaus en yoghurt."
},
{
"name": "Tavuk Shish",
"image": "videos/eten-Fotos/tavuk-shish.jpg",
"price": "€ 20,00",
"description": "Gegrilde kipspies met groenten."
},
{
"name": "Kuzu Tandir",
"image": "videos/eten-Fotos/Kuzu Tandir.jpg",
"price": "€ 22,00",
"description": "Langzaam gegaard lamsschenkel met kruiden en groenten."
},
{
"name": "Lahmacun",
"image": "videos/eten-Fotos/lahmacun.jpg",
"price": "€ 14,00",
"description": "Een Turkse pizza met gehakt en groenten."
},
{
"name": "Köfte",
"image": "videos/eten-Fotos/Köfte.jpg",
"price": "€ 17,00",
"description": "Gehaktballetjes gekruid met kruiden en geserveerd met salade."
},
{
"name": "Pide",
"image": "videos/eten-Fotos/Pide.jpg",
"price": "€ 19,00",
"description": "Een Turks brood met diverse toppings zoals kaas, ei en kruiden."
},
{
"name": "Dolma",
"image": "videos/eten-Fotos/Dolma.jpg",
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
    "image": "videos/eten-Fotos/baklava.jpg",
    "description": "Een bladerdeeg met gehakte noten en siroop.",
          "price": "€ 6,75"
  
  },
  {
    "name": "Revani",
    "image": "videos/eten-Fotos/Revani.jpg",
    "description": "Een zoete taart gemaakt van griesmeel, gegarneerd met siroop.",
          "price": "€ 6,75"
  },
  {
    "name": "Künefe",
    "image": "videos/eten-Fotos/Kunefe.jpg",
    "description": "Een Turkse dessert gemaakt van kaas en baklava-deeg.",
          "price": "€ 6,75"
  },
  {
    "name": "Sütlaç",
    "image": "videos/eten-Fotos/sutlac.jpg",
    "description": "Een zoete rijstepap met kaneel en suiker.",
          "price": "€ 6,75"
  },
  {
    "name": "Lokum (Turkish Delight)",
    "image": "videos/eten-Fotos/lokum.jpg",
    "description": "Gelatineblokjes gevuld met noten en bedekt met poedersuiker.",
          "price": "€ 6,75"
  },
  {
    "name": "Kazandibi",
    "image": "videos/eten-Fotos/Kazandibi.jpg",
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




  