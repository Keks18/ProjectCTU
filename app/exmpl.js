		//KOD POLILINES//
// let fileInput = document.querySelector('#file-input');
let markerContent = ['Больница(26):','Стадион(90):','Украина(27):','Героев Чернобыля(77):','ЗКВ(14):','ЗКВ(15):','11ШКОЛА(44):','Проспект Мира(8):','Стадион(89):','Больница25:',];
// fileInput.addEventListener('change', function(event){ // Выбираем файл для считывания данных и отправляем в initMap
// 	let file = fileInput.files[0];
// 	let reader = new FileReader();
// 	reader.onload = function(event){
// 		//console.log(reader.result);
// 		initMap(reader.result.split('},'));
// 	}
// 	reader.readAsText(file);
// });
	
function initMap() {

    async function getData() {
    const response = await fetch("./data.json");
    const json = await response.json();
    return json;
    }

    async function handle() {
    data = await getData();


    for (let i = 0;i < data.length; i++) { // Добавляем к массиву полученные данные из БД
        markerContent[i] = markerContent[i] + "<br\/>" + "NumberBus: " + data[i].NumberBus + "<br\/>" + "<b>" + "AvgCountPassengers: " + data[i].AvgCountPassengers + "<\/b>" + "<br\/>" + "DayOfWeek: " + data[i].DayOfWeek;
}

  var map = new google.maps.Map(document.getElementById('map'), { // Создаем карту
    zoom: 15,
    center: {lat: 51.500567, lng: 31.284727},
    mapTypeId: 'terrain'
  });

  var markerCoordinate =[ // координаты маркеров
	{lat:51.512260, lng:31.349345}, 
	{lat:51.502015, lng:31.323899},
	{lat:51.495135, lng:31.293959},
	{lat:51.513139, lng:31.278101},
	{lat:51.541722, lng:31.261311},
	{lat:51.541232, lng:31.260666},
	{lat:51.512202, lng:31.278160},
	{lat:51.495991, lng:31.290602},
	{lat:51.502214, lng:31.325027},
	{lat:51.512150, lng:31.349836}];

  var flightPlanCoordinates = [ // Координаты маршрута по точкам
	{lat:51.541398, lng:31.260526},
    {lat:51.540375, lng:31.262933},
    {lat:51.534278, lng:31.266248},
    {lat:51.530759, lng:31.268176},
    {lat:51.514866, lng:31.276903},
    {lat:51.502141, lng:31.283867},
    {lat:51.501957, lng:31.283931},
    {lat:51.500567, lng:31.284727},
    {lat:51.500245, lng:31.284929},
    {lat:51.499950, lng:31.285190},
    {lat:51.499524, lng:31.285702},
    {lat:51.493600, lng:31.294178},
    {lat:51.492573, lng:31.292375},
    {lat:51.489665, lng:31.296509},
    {lat:51.489851, lng:31.296922},
    {lat:51.490011, lng:31.297264},
    {lat:51.490181, lng:31.297682},
    {lat:51.490505, lng:31.298606},
    {lat:51.490480, lng:31.298688},
    {lat:51.490481, lng:31.298867},
    {lat:51.490524, lng:31.299129},
    {lat:51.490864, lng:31.299770},
    {lat:51.492364, lng:31.302693},
    {lat:51.493074, lng:31.304129},
    {lat:51.493481, lng:31.304968},
    {lat:51.494004, lng:31.306019},
    {lat:51.494588, lng:31.307209},
    {lat:51.495241, lng:31.308523},
    {lat:51.495191, lng:31.309052},
    {lat:51.495223, lng:31.309849},
    {lat:51.495787, lng:31.312566},
    {lat:51.496263, lng:31.314739},
    {lat:51.496457, lng:31.315141},
    {lat:51.497105, lng:31.316171},
    {lat:51.498204, lng:31.317850},
    {lat:51.499512, lng:31.319854},
    {lat:51.500391, lng:31.321228},
    {lat:51.501109, lng:31.322361},
    {lat:51.501393, lng:31.322897},
    {lat:51.501811, lng:31.323867},
    {lat:51.502222, lng:31.324948},
    {lat:51.504242, lng:31.329888},
    {lat:51.504926, lng:31.332012},
    {lat:51.505776, lng:31.335244},
    {lat:51.506621, lng:31.338191},
    {lat:51.506881, lng:31.338832},
    {lat:51.508631, lng:31.342369},
    {lat:51.509679, lng:31.344254},
    {lat:51.510805, lng:31.346860},
    {lat:51.511447, lng:31.348290},
    {lat:51.512238, lng:31.350060},//КОНЕЧНАЯ В 1lng:
    {lat:51.512389, lng:31.349898},
    {lat:51.512411, lng:31.349781},
    {lat:51.512373, lng:31.349638},
    {lat:51.512342, lng:31.349583},
    {lat:51.512025, lng:31.349303},
    {lat:51.511898, lng:31.349225},
    {lat:51.510990, lng:31.347173},
    {lat:51.510354, lng:31.345690},
    {lat:51.509679, lng:31.344175},
    {lat:51.509237, lng:31.343387},
    {lat:51.508634, lng:31.342295},
    {lat:51.506919, lng:31.338802},
    {lat:51.506685, lng:31.338228},
    {lat:51.506541, lng:31.337814},
    {lat:51.506245, lng:31.336790},
    {lat:51.505791, lng:31.335167},
    {lat:51.505415, lng:31.333691},
    {lat:51.504970, lng:31.332005},
    {lat:51.504665, lng:31.331004},
    {lat:51.504259, lng:31.329808},
    {lat:51.503660, lng:31.328321},
    {lat:51.502270, lng:31.324927},
    {lat:51.502008, lng:31.324222},
    {lat:51.501664, lng:31.323345},
    {lat:51.501475, lng:31.322929},
    {lat:51.501268, lng:31.322519},
    {lat:51.501108, lng:31.322251},
    {lat:51.499355, lng:31.319495},
    {lat:51.496359, lng:31.314845},
    {lat:51.496294, lng:31.314663},
    {lat:51.495867, lng:31.312740},
    {lat:51.495463, lng:31.310823},
    {lat:51.495279, lng:31.309966},
    {lat:51.495241, lng:31.309263},
    {lat:51.495271, lng:31.308517},
    {lat:51.495463, lng:31.308339},
    {lat:51.496447, lng:31.307136},
    {lat:51.495370, lng:31.305191},
    {lat:51.494845, lng:31.304277},
    {lat:51.493893, lng:31.302553},
    {lat:51.492736, lng:31.300472},
    {lat:51.492804, lng:31.300348},
    {lat:51.493260, lng:31.299730},
    {lat:51.493608, lng:31.299232},
    {lat:51.494456, lng:31.298065},
    {lat:51.494890, lng:31.297444},
    {lat:51.495182, lng:31.297003},
    {lat:51.494250, lng:31.295397},
    {lat:51.494203, lng:31.295200},
    {lat:51.496919, lng:31.291095},
    {lat:51.498124, lng:31.289427},
    {lat:51.500775, lng:31.285692},
    {lat:51.501887, lng:31.284194},
    {lat:51.502132, lng:31.283934},
    {lat:51.510553, lng:31.279341},
    {lat:51.513757, lng:31.277577},
    {lat:51.517731, lng:31.275427},
    {lat:51.522676, lng:31.272725},
    {lat:51.533493, lng:31.266759},
    {lat:51.540739, lng:31.262803},
    {lat:51.541172, lng:31.262609},
    {lat:51.541204, lng:31.262437},
    {lat:51.542227, lng:31.260192},
    {lat:51.541847, lng:31.259878},
    {lat:51.541697, lng:31.259913},
    {lat:51.541398, lng:31.260526}
    //ЗАВЕРШЕНИЕ ЦИКЛА
  ];

    var flightPath = new google.maps.Polyline({// Рисуем маршрут
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 4.5
  });
    flightPath.setMap(map);
    for (var i = 0; i < markerCoordinate.length; i++) { // Создаем маркеры в нужном количестве и с нужным содержимым
    addMarker(markerCoordinate[i],markerContent[i]);
  }
  //
  function addMarker(coordinates, markerContent){// Создаем маркер
    var marker = new google.maps.Marker({
        position: coordinates, 
        map: map
    });
    var InfoWindow = new google.maps.InfoWindow({
    content: markerContent
  });
  marker.addListener('click', function(){// ФУНКЦИЯ ДЕЛАЕТ МАРКЕР КЛИКАБЕЛЬНЫМ, ПРИ КЛИКЕ ВЫВОДИТ КОНТЕНТ
    InfoWindow.open(map,marker);
  });
  }
  console.log(markerContent);
  }
handle();
}



