function convertLength() {
    // Get input values
    var length = parseFloat(document.getElementById('lengthInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;

    // Define conversion factors
    var conversionFactors = {
        'm': 1.0,       // Meter
        'cm': 0.01,     // Centimeter
        'mm': 0.001,    // Millimeter
        'km': 1000.0,   // Kilometer
        'ft': 0.3048,   // Foot
        'in': 0.0254    // Inch
    };

    // Convert length to base unit (meter)
    var baseLength = length * conversionFactors[fromUnit];

    // Convert length from base unit to the target unit
    var result = baseLength / conversionFactors[toUnit];

    // Display the result
    document.getElementById('result').innerHTML = length + ' ' + fromUnit + ' = ' + result + ' ' + toUnit;
}
