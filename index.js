function highlightCurrentPage() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.topNavBarLinks a');

    // Get the current page's URL pathname
    const currentPath = window.location.pathname;

    // Loop through links and add 'active' class if href matches pathname
    for (const link of navLinks) {
        if (link.href.endsWith(currentPath)) {
            link.classList.add('active');
            break; // Exit loop after finding the first match
        }
    }
}

// Call the function on page load
highlightCurrentPage();