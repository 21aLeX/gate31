function pressingSearch() {
    const inputSearch = document.getElementById('search');
    const filter = inputSearch.value.toLowerCase();
    const div = document.getElementsByClassName('block');
    for (const itemDiv of div) {
        const titleDiv = itemDiv.firstElementChild.innerHTML.toLowerCase();
        if (titleDiv.indexOf(filter) > -1) {
            itemDiv.style.display = "";
        } else {
            itemDiv.style.display = "none";
        }
    }
    window.location.hash = `${filter}`;
}