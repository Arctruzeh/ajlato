import { fishingData } from '../data/fishing-spots.js';

    function updateContent(imageNumber) {
        const spinner = document.getElementById('loadingSpinner');
        const imageElement = document.getElementById('selectedImage');
        spinner.classList.remove('d-none');
        imageElement.classList.add('d-none');

        const img = new Image();
        img.onload = function() {
            imageElement.src = this.src;
            spinner.classList.add('d-none');
            imageElement.classList.remove('d-none');
            updateAccordion(imageNumber);
        };
        img.src = `images/${imageNumber}.png`;
    }

    function updateAccordion(imageNumber) {
        const accordion = document.getElementById('fishingSpots');
        accordion.innerHTML = '';
        
        fishingData[imageNumber].forEach((spot, index) => {
            const isFirst = index === 0;
            accordion.innerHTML += `
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button ${!isFirst ? 'collapsed' : ''}" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#spot${index}">
                            ${spot.title}
                        </button>
                    </h2>
                    <div id="spot${index}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" 
                         data-bs-parent="#fishingSpots">
                        <div class="accordion-body">
                            ${spot.description}
                        </div>
                    </div>
                </div>
            `;
        });
    }

    document.getElementById('imageSelect').addEventListener('change', function() {
        updateContent(this.value);
    });

    // Get the currently selected value on page load
    const currentSelection = document.getElementById('imageSelect').value;
    // Initialize with current selection instead of hardcoding ANCLOTE1
    updateContent(currentSelection);