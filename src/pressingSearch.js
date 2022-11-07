function pressingSearch(){
    const inputSearch = document.getElementById('search');
    let filter = '';
    filter = inputSearch.value.toLowerCase();
    const div = document.getElementsByClassName('block');
        for(const item of div){
    const title = item.firstElementChild.innerHTML.toLowerCase();
if(title.indexOf(filter) > -1){
    item.style.display = "";
} else {
    item.style.display = "none";
  }
}
window.location.hash=`${filter}`;
}