
// Haal het huidige jaar op en voeg het toe aan de pagina
document.getElementById('currentYear').textContent = new Date().getFullYear();


// JSON-data voor ontbij/lunch
const menuItems = [
  {
    "name": "Mercimek Corbasi",
    "image": "img/eten_fotos/mercimek_corbasi.jpg",
        "price": "€ 6,75",
    "description": "Linzensoep, een traditioneel Turks gerecht."
  },
  {
    "name": "Mewsim Corbasi",
    "image": "img/eten_fotos/sutlac.jpg",
        "price": "€ 6,75",
    "description": "Speciale mewsim soep."
  },
  {
    "name": "Mewsim Salata",
    "image": "img/eten_fotos/sutlac.jpg",
        "price": "€ 9,50",
    "description": "Seizoenssalade met sla, komkommer, mais, wortel en dressing."
  },
  {
    "name": "Yoghurt Bowl",
    "image": "img/eten_fotos/yoghurt_bowl.jpeg",
        "price": "€ 12,50",
    "description": "Een frisse en romige kom met yoghurt, perfect voor een gezond ontbijt of snack."
  },
  {
    "name": "Mozzarella Caprese",
    "image": "img/eten_fotos/mozzarella_caprese.jpg",
        "price": "€ 12,50",
    "description": "Een klassieke Italiaanse salade met romige mozzarella, tomaat en verse basilicum."
  },
  /*{
    "name": "Somon Füme",
    "image": "img/eten_fotos/somon_fume.jpg",
        "price": "€ 14,90",
    "description": "Rookzalige gerookte zalm, ideaal voor een lichte en smaakvolle maaltijd."
  },
  {
    "name": "Akdeniz Salatasi",
    "image": "img/eten_fotos/akdeniz_salatasi.jpg",
        "price": "€ 11,50",
    "description": "Een frisse salade geïnspireerd door de smaken van de Middellandse Zee, met olijven, feta en groenten."
  },
  {
    "name": "Tavuk Crouton",
    "image": "img/eten_fotos/tavuk_crouton.jpg",
        "price": "€ 15,90",
    "description": "Knapperige stukjes kip met croutons, ideaal als een hartige en vullende salade."
  },
  {
    "name": "Cevizli Kasik Salatasi",
    "image": "img/eten_fotos/cevizli_kasik_salatasi.jpg",
        "price": "€ 13,90",
    "description": "Een salade met walnoten en een mix van frisse groenten, heerlijk als bijgerecht. "
  },
  {
    "name": "Avokado Salatasi",
    "image": "img/eten_fotos/avokado_salatasi.jpg",
        "price": "€ 14,90",
    "description": "Een gezonde salade met avocado en een lichte dressing, vol smaak en goed voor je gezondheid."
  },
  {
    "name": "Karides Salatasi",
    "image": "img/eten_fotos/karides_salatasi.jpg",
        "price": "€ 13,90",
    "description": "Een frisse salade met garnalen, perfect voor liefhebbers van zeevruchten"
  }*/
];

const menuContainer = document.getElementById('menu-items');

menuItems.forEach(item => {
  const menuItemElement = document.createElement('article');
  menuItemElement.classList.add('menu-item-list', 'col-md-6', 'col-sm-12');
  
  menuItemElement.innerHTML = `
  <a href="menu_single.html?item=${encodeURIComponent(item.name)}" class="menu-item-link">
    <div class="item-img">
      <div class="overlay_content">
        <div class="overlay_item"> 
          <img src="${item.image}" alt="">
        </div>
      </div>
    </div>
    <h3>${item.name}<span class="price">${item.price}</span></h3>
    <p>${item.description}</p>
  </a> 
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
        "price": "€ 22,90",
    "description": "Pittige gehaktspies van de grill."
  },
  {
    "name": "Sebzeli Kebab",
    "image": "img/eten_fotos/sebzeli_kebab.jpg",
        "price": "€ 23,90",
    "description": "Een kebab met gegrilde groenten, een heerlijke combinatie van smaken."
  },
  {
    "name": "Beyti Kebab",
    "image": "img/eten_fotos/beyti_kebab.jpg",
        "price": "€ 26,90",
    "description": "Gegrild vlees in een zachte wrap, geserveerd met een heerlijke yoghurtsaus."
  },
  {
    "name": "Shoarma",
    "image": "img/eten_fotos/shoarma.jpg",
        "price": "€ 21,90",
    "description": "Mals vlees gekruid met aromatische specerijen, geserveerd met een frisse salade."
  },
  {
    "name": "Sis Kebab",
    "image": "img/eten_fotos/sis_kebab.jpg",
        "price": "€ 27,90",
    "description": "Traditionele kebab van gegrild vlees op een spies, een smaakvolle traktatie."
  },/*
  {
    "name": "mewsim Köfte",
    "image": "img/eten_fotos/sutlac.jpg",
        "price": "€ 18,90",
    "description": "Gehaktballetjes op de grill met patat."
  },
  {
    "name": "Tavuk Sis",
    "image": "img/eten_fotos/tavuk_sis.jpg",
        "price": "€ 20,90",
    "description": "Mals kipfilet aan een spies, gegrild tot perfectie."
  },
  {
    "name": "Tavuk Göğsü",
    "image": "img/eten_fotos/tavuk_gogsu.jpg",
        "price": "€ 20,90",
    "description": "Gegrilde kipfilet, een lichte en smakelijke keuze."
  },
  {
    "name": "Kuzu Pirzola",
    "image": "img/eten_fotos/kuzu_pirzola.jpg",
        "price": "€ 28,90",
    "description": "Gegrilde lamskoteletjes, vol van smaak en perfect voor een stevige maaltijd."
  },
  {
    "name": "Ali Nazik",
    "image": "img/eten_fotos/ali_nazik.jpg",
        "price": "€ 27,90",
    "description": "Gegrild vlees geserveerd op een bedje van romige yoghurt en aubergine."
  },
  {
    "name": "Mix Grill",
    "image": "img/eten_fotos/mix_grill.jpg",
        "price": "€ 28,90",
    "description": "Een variatie van gegrild vlees, perfect voor wie van verschillende smaken houdt."
  },
  {
    "name": "Mix Grill (2 personen)",
    "image": "img/eten_fotos/mix_grill.jpg",
        "price": "€ 52,50",
    "description": "Een royale portie mix grill, ideaal voor twee personen."
  },
  {
    "name": "Mix Grill (3 personen)",
    "image": "img/eten_fotos/mix_grill.jpg",
        "price": "€ 75,00",
    "description": "Een grote mix grill voor drie personen, voor een feestelijke maaltijd."
  }*/
];

  const menuContainera = document.getElementById('menu-items2');

  menuItemsa.forEach(item => {
    const menuItemElement = document.createElement('article');
    menuItemElement.classList.add('menu-item-list', 'col-md-6', 'col-sm-12');
    
    menuItemElement.innerHTML = `
    <a href="menu_single.html?item=${encodeURIComponent(item.name)}" class="menu-item-link">
      <div class="item-img">
        <div class="overlay_content">
          <div class="overlay_item"> 
            <img src="${item.image}" alt="">
          </div>
        </div>
      </div>
      <h3>${item.name}<span class="price">${item.price}</span></h3>
      <p>${item.description}</p>
    </a> 
  `;

    menuContainera.appendChild(menuItemElement);
  });

  function openNewPage(itemName) {
      window.location.href = `menu_single.html?item=${encodeURIComponent(itemName)}`;
  }




// JSON-data voor toetje
const menuItemsc = [
  {
    "name": "Sütlac",
    "image": "img/eten_fotos/sutlac.jpg",
    "description": "Een zoete rijstepap met kaneel en suiker.",
    "price": "€ 6,00"
  },
  {
    "name": "Kazandibi",
    "image": "img/eten_fotos/kazandibi.jpg",
    "description": "Een gebakken melkpudding.",
    "price": "€ 6,50"
  },
  {
    "name": "Künefe",
    "image": "img/eten_fotos/kunefe.jpg",
    "description": "Een Turks dessert gemaakt van kaas en baklava-deeg.",
    "price": "€ 8,90"
  },
  {
    "name": "San Sebastian Cheesecake",
    "image": "img/eten_fotos/san_sebastian_cheesecake.jpg",
    "description": "Cheesecake gemaakt met een zachte, romige binnenkant.",
    "price": "€ 8,50"
  },
  {
    "name": "Cheesecake",
    "image": "img/eten_fotos/cheesecake.jpg",
    "description": "Klassieke cheesecake met een knapperige bodem.",
    "price": "€ 8,50"
  },/*
  {
    "name": "Red Velvet Cake",
    "image": "img/eten_fotos/red_velvet_cake.jpg",
    "description": "Een luchtige taart met een vleugje cacao.",
    "price": "€ 8,50"
  },
  {
    "name": "Cikolatali Sufle",
    "image": "img/eten_fotos/cikolatali_sufle.jpg",
    "description": "Chocolade lava cake met een warme kern.",
    "price": "€ 8,90"
  },
  {
    "name": "Baklava Burger",
    "image": "img/eten_fotos/baklava_burger.jpeg",
    "description": "Unieke combinatie van baklava in burgerstijl.",
    "price": "€ 10,90"
  },
  {
    "name": "Baklava Burger met IJs",
    "image": "img/eten_fotos/baklava_burger_met_ijs.jpg",
    "description": "Baklava burger geserveerd met vanille-ijs.",
    "price": "€ 12,90"
  },
  {
    "name": "Fruitschaal",
    "image": "img/eten_fotos/fruitschaal.jpg",
    "description": "Een frisse selectie van seizoensfruit.",
    "price": "€ 7,50"
  },
  {
    "name": "Diverse Soorten IJs (3 bollen)",
    "image": "img/eten_fotos/diverse_soorten_ijs.jpg",
    "description": "Keuze uit drie smaken ijs.",
    "price": "€ 8,25"
  },
  {
    "name": "Bolletje Vanille IJs",
    "image": "img/eten_fotos/bolletje_vanille_ijs.jpg",
    "description": "Een klassiek bolletje vanille-ijs.",
    "price": "€ 3,00"
  }*/
];


  const menuContainerc = document.getElementById('menu-items3');

  menuItemsc.forEach(item => {
    const menuItemElement = document.createElement('article');
    menuItemElement.classList.add('menu-item-list', 'col-md-6', 'col-sm-12');
    
  menuItemElement.innerHTML = `
  <a href="menu_single.html?item=${encodeURIComponent(item.name)}" class="menu-item-link">
    <div class="item-img">
      <div class="overlay_content">
        <div class="overlay_item"> 
          <img src="${item.image}" alt="">
        </div>
      </div>
    </div>
    <h3>${item.name}<span class="price">${item.price}</span></h3>
    <p>${item.description}</p>
  </a> 
`;
    menuContainerc.appendChild(menuItemElement);
  });

  function openNewPage(itemName) {
      window.location.href = `menu_single.html?item=${encodeURIComponent(itemName)}`;
  }




  