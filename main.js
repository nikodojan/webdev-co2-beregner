var emissionData = {
  "bil": 170,
  "fly": 130,
  "bus": 30,
  "skib": 230,
  "tog": 20,
  "elløbehjul": 65,
  "cykel": 0
}

function calculateEmission(transport, distance){
  let gramPerKilometer = emissionData[transport];
  return gramPerKilometer * distance / 1000;
}

console.log(calculateEmission('bil', 1))