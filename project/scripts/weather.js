document.addEventListener('DOMContentLoaded', () => {
    const windChillForm = document.getElementById('windChillForm');
    const resultDiv = document.getElementById('result');

    // Wind chill calculation function
    const calculateWindChill = (temperature, windSpeed) => {
        if (temperature <= 50 && windSpeed > 3) {
            const windChill = 35.74 + (0.6215 * temperature) - 
                            (35.75 * Math.pow(windSpeed, 0.16)) + 
                            (0.4275 * temperature * Math.pow(windSpeed, 0.16));
            return Math.round(windChill * 10) / 10;
        }
        return null;
    };

    // Form submission handler
    windChillForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const temperature = parseFloat(document.getElementById('temperature').value);
        const windSpeed = parseFloat(document.getElementById('windSpeed').value);
        
        // Store values in localStorage
        localStorage.setItem('lastTemperature', temperature);
        localStorage.setItem('lastWindSpeed', windSpeed);

        const windChill = calculateWindChill(temperature, windSpeed);
        
        if (windChill !== null) {
            resultDiv.innerHTML = `
                <p>Temperature: ${temperature}°F</p>
                <p>Wind Speed: ${windSpeed} mph</p>
                <p>Wind Chill: ${windChill}°F</p>
            `;
        } else {
            resultDiv.innerHTML = `
                <p>Wind chill calculation is only valid for:</p>
                <ul>
                    <li>Temperatures at or below 50°F</li>
                    <li>Wind speeds above 3 mph</li>
                </ul>
            `;
        }
    });

    // Load last used values if they exist
    const lastTemp = localStorage.getItem('lastTemperature');
    const lastWind = localStorage.getItem('lastWindSpeed');
    
    if (lastTemp && lastWind) {
        document.getElementById('temperature').value = lastTemp;
        document.getElementById('windSpeed').value = lastWind;
    }
});