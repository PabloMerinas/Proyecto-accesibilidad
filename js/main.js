// Import our custom CSS
import '../scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Import para el tema oscuro
import * as colorMode from './tema.js';
const btnSwitch = document.getElementById('btnSwitch');
    if (btnSwitch) {
        btnSwitch.addEventListener('click', colorMode.toggleColorMode);
    }


// Parte para las estadísticas
document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el elemento 'soapChart' existe
    let soapChartElement = document.getElementById('soapChart');
    
    // Si el elemento existe, proceder con la creación del gráfico
    if (soapChartElement) {
        let data = {
            labels: ['Jabón básico', 'Jabón de rosas', 'Jabón aromático', 'Jabón de jazmín', 'Jabón verde', 'Jabón de eucalisto', 'Jabón jabonsin'],
            datasets: [{
                label: 'Estadísticas sobre las ventas de Jabones',
                backgroundColor: '#3498db',
                borderColor: '#3498db',
                borderWidth: 1,
                data: [30, 45, 20, 60, 34, 23, 5],
            }]
        };

        let options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        let ctx = soapChartElement.getContext('2d');

        // Creo el gráfico
        let soapChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }
});

