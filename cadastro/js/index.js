var element = document.getElementById("map");

/*
Build list of map types.
You can also use var mapTypeIds = ["roadmap", "satellite", "hybrid", "terrain", "OSM"]
but static lists suck when Google updates the default list of map types.
*/

var mapTypeIds = [];

for(var type in google.maps.MapTypeId) {
  mapTypeIds.push(google.maps.MapTypeId[type]);
}

mapTypeIds.push("OSM");

var map = new google.maps.Map(element, {
  center: new google.maps.LatLng(-23.4914908, -46.718843),
  zoom: 15,
  mapTypeId: "OSM",
  mapTypeControlOptions: {
    mapTypeIds: mapTypeIds
  }
});

map.mapTypes.set("OSM", new google.maps.ImageMapType({
  getTileUrl: function(coord, zoom) {
    //See above example if you need smooth wrapping at 180th meridian
    return "https://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
  },
  tileSize: new google.maps.Size(256, 256),
  name: "OpenStreetMap",
  maxZoom: 18
}));



/*-----------------cidade e estados--------------------------*/
function populateUFs() {
  const ufSelect = document.querySelector("select[name=uf]");
  
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then(res => res.json())
  .then( estados => {

    //Repetição de todos estados
    for(const estado of estados) {
      ufSelect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
    }
  })
}

populateUFs();


function getCidades(event) {
  const cidadeSelect = document.querySelector("select[name=city]");

  const ufValue = event.target.value;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
  
  //Limpando o campo e ao seleciona o campo do estado automaticamente bloquea o campo cidade
  cidadeSelect.innerHTML = "<option value>Selecione a cidade</option>"
  cidadeSelect.disabled = true

  fetch(url)
  .then(res => res.json())
  .then( cities => {

    //Repetição de todos estados
    for(const city of cities) {
      cidadeSelect.innerHTML += `<option value="${city.id}">${city.nome}</option>`
    }
    cidadeSelect.disabled = false
  })
}

document
.querySelector("select[name=uf]")
.addEventListener("change", getCidades);



/*-----------------Button Cadastrou--------------------------*/

let form = document.getElementById('form_contato');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
  1
  let email = document.getElementById('txt_email');  
  document.getElementById('message').innerHTML = "Enviaremos notificações para o seu email " + email.value;
  
  
  if( email == '' || !er.test(email) ) { 
    alert('Campo preenchido corretamente'); 
      
    return false; 
  }
  
  //Se passou por essas validações exibe um alert
  alert( 'formulário enviado com sucesso!' );
});


function clicou() {
 
  let x = document.getElementById('cadastrou');

  if (x.style.display === "none") {
    x.style.display = "block";
    alert("Obrigado por preenche os dados");

    window.location.href = "http://www.w3schools.com"
  } else {
    x.style.display = "none";
  }
}