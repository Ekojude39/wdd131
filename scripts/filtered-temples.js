const lastmodified = document.querySelector("#last-modified");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

const formattedDate = `${currentDay}/${currentMonth}/${currentYear}`;

if (lastmodified) lastmodified.textContent = formattedDate;

document.querySelector("#last-modified").textContent = document.lastModified;

document.querySelector("#last-modified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});


const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},

	{
	  templeName: "Salt Lake Utah",
	  location: "Salt Lake City, Utah, United States",
	  dedicated: "1893, April, 6",
	  area: 253016,
	  imageUrl:
	  "images/salt-lake-temple-main.jpg"
	},
	{
	  templeName: "Adelaide Australia",
	  location: "Marden, South Australia Australia",
	  dedicated: "2000, June, 15",
	  area: 10700,
	  imageUrl:
	  "images/adelaide-australia-temple-main.jpg"
	},
	{
	  templeName: "Provo City Center",
	  location: "Provo, Utah United States",
	  dedicated: "2016, March, 20",
	  area: 7905,
	  imageUrl:
	  "images/provo-city-center-temple-main.jpg"
	}
];

// Function to create temple cards
function createTempleCards(templeArray) {
	const imagesSection = document.querySelector('.images');
	imagesSection.innerHTML = ''; // clear previous content
  
	templeArray.forEach(temple => {
	  const templeCard = document.createElement('div');
	  templeCard.classList.add('temple-card');
  
	  templeCard.innerHTML = `
		<h3>${temple.templeName}</h3>
		<p><span class="location">LOCATION:</span> <span class="ps">${temple.location}</span></p>
		<p><span class="dedicated">DEDICATED:</span> <span class="ps">${temple.dedicated}</span></p>
		<p><span class="area">AREA:</span> <span class="ps">${temple.area} sq ft</span></p>
		<img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
	  `;
  
	  imagesSection.appendChild(templeCard);
	});
  }
  
  // Function to filter temples based on category
  function filterTemples(category) {
	let filteredTemples;
  
	switch (category) {
	  case 'Old':
		filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
		break;
	  case 'New':
		filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
		break;
	  case 'Large':
		filteredTemples = temples.filter(temple => temple.area > 90000);
		break;
	  case 'Small':
		filteredTemples = temples.filter(temple => temple.area < 10000);
		break;
	  default:
		filteredTemples = temples;
	}
  
	createTempleCards(filteredTemples);
  }
  
  // Event listeners for navigation menu
  document.getElementById('Home').addEventListener('click', () => filterTemples('Home'));
  document.getElementById('Old').addEventListener('click', () => filterTemples('Old'));
  document.getElementById('New').addEventListener('click', () => filterTemples('New'));
  document.getElementById('Large').addEventListener('click', () => filterTemples('Large'));
  document.getElementById('Small').addEventListener('click', () => filterTemples('Small'));
  
  // Initial load of all temples
  createTempleCards(temples);