function celsiusParaFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function celsiusParaKelvin(celsius) {
  return celsius + 273.15;
}

function converterTemperatura(celsius) {
  return {
    celsius,
    fahrenheit: celsiusParaFahrenheit(celsius),
    kelvin: celsiusParaKelvin(celsius),
  };
}

// testse
const temperaturas = [0, 25, 37, 100, -40];

temperaturas.forEach((c) => {
  const { fahrenheit, kelvin } = converterTemperatura(c);
  console.log(
    `${c}°C -> ${fahrenheit.toFixed(2)}°F | ${kelvin.toFixed(2)}K`
  );
});

module.exports = { celsiusParaFahrenheit, celsiusParaKelvin, converterTemperatura };