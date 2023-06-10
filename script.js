function convertLength() {
    var length = parseFloat(document.getElementById('lengthInput').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var conversionFactors = {
        'm': 1.0,      
        'cm': 0.01,     
        'mm': 0.001,    
        'km': 1000.0,   
        'ft': 0.3048,   
        'in': 0.0254    
    };

    var baseLength = length * conversionFactors[fromUnit];
    var result = baseLength / conversionFactors[toUnit];

    document.getElementById('result').innerHTML = length + ' ' + fromUnit + ' = ' + result + ' ' + toUnit;
}
