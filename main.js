var emissionData = {
  "bil": 170,
  "fly": 130,
  "bus": 30,
  "skib": 230,
  "tog": 20,
  "elløbehjul": 65,
  "cykel": 0
}

function calculateEmission(){
  let transport = document.getElementById('transport').value;
  let distance = document.getElementById('distance').value;
  let gramPerKilometer = emissionData[transport];
  let emission = gramPerKilometer * distance / 1000;
  document.getElementById('result').innerText = emission;
  //return gramPerKilometer * distance / 1000;
}

//console.log(calculateEmission('bil', 1))