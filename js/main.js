const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

// Form event listener
searchForm.addEventListener("submit", e =>{
    // Get search term
    const searchTerm = searchInput.value;
    
    // Get sort
    const sortBy = document.querySelector("input[name='sortby']:checked").value;
    console.log(sortBy);

    // Get limit
    const searchLimit = document.getElementById("limit").value;
    console.log(searchLimit);

    // Check input
    if(searchTerm === ''){
        // Show message
        showMessage('Please add a search term', 'alert-danger');
    }

    // Clear Input
    searchInput.value = '';

    // Search Reddit
    


    e.preventDefault();
});

// Show message function
function showMessage(message, className){
    // create div
    const div = document.createElement('div');
    
    // Add classes
    div.className = `alert ${className}`;
    
    // Add text
    div.appendChild(document.createTextNode(message));

    // Get parent
    const searchContainer = document.getElementById('search-container');

    // Get search
    const search = document.getElementById('search');

    // Insert Message
    searchContainer.insertBefore(div, search);

    // Timeout alert
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
}