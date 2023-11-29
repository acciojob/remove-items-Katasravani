//your JS code here. If required.
// script.js

function removeColor() {
    // Get the dropdown list reference by its ID
    let colorSelect = document.getElementById('colorSelect');

    // Remove the selected option
    colorSelect.remove(colorSelect.selectedIndex);
}
