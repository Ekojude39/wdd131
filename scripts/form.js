document.addEventListener("DOMContentLoaded", () => {
    const lastmodified = document.querySelector("#last-modified");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;

if (lastmodified) lastmodified.textContent = formattedDate;

// JavaScript for USA page

// Footer: Display current year and last modified date
document.querySelector("#last-modified").textContent = document.lastModified;

// Wind Chill Calculation
// JavaScript for USA page

// Footer: Display current year and last modified date
document.querySelector("#last-modified").textContent = document.lastModified;

    const products = [
        { id: "fc-1888", name: "Samsung Galaxy S24 Utra", averagerating: 4.5 },
        { id: "fc-2050", name: "Dell XPS 14", averagerating: 4.7 },
        { id: "fs-1987", name: "Iphone 16 Pro Max", averagerating: 3.5 },
        { id: "ac-2000", name: "Alienware m16", averagerating: 3.9 },
        { id: "jj-1969", name: "Lenovo Legion 7i", averagerating: 5.0 }
    ];
    
    const productSelect = document.getElementById("product-name");
    
    // Populate the select options dynamically (excluding the placeholder)
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Use the product id as the value
        option.textContent = product.name; // Display the product name
        productSelect.appendChild(option);
    });

    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0', 10);
    localStorage.setItem('reviewCount', reviewCount);

    document.querySelector('form').onsubmit = function (event) {
        event.preventDefault(); // Optional: Remove if default behavior is desired
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);
        alert(`Review submitted! Total reviews: ${reviewCount}`);
        // Redirect to review.html manually
        window.location.href = "review.html";
    };
});
