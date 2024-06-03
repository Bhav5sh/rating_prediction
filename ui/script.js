// Get the "Click Here to Explore" link
const exploreLink = document.getElementById('explore-link');

// Add a click event listener to the link
exploreLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior

  // Perform any desired action or navigation logic here
  console.log('Explore link clicked!');
});