
console.log("Happy Birthday!");
// Function to set content based on language
function setLanguage(language) {
    const headerElement = document.getElementById('birthday-header');
    const messageElement = document.getElementById('birthday-message');
  
    if (language === 'en') {
      headerElement.textContent = 'Happy Birthday!';
      messageElement.textContent = 'Wishing you a day filled with joy and laughter!';
    } else if (language === 'es') {
      headerElement.textContent = '¡Feliz Cumpleaños!';
      messageElement.textContent = 'Deseándote un día lleno de alegría y risas.';
    }
    // Add more languages as needed
  }
  
  // Set the default language
  setLanguage('en');
  
  // Example: Change language to Spanish after 3 seconds
  setTimeout(() => {
    setLanguage('es');
  }, 3000);
  