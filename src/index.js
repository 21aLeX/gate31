// import fetch from 'node-fetch';

const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7';
const response = await fetch(url);
const answer = await response.json();
const divBox = document.createElement('div');
divBox.classList.add('boxBlock');
for (const item of answer) {
    // console.log(item);
    const div = document.createElement('div');
    div.classList.add('block');
    const h4 = document.createElement('h4')
    h4.innerHTML = item.title;
    const text = document.createElement('div')
    text.innerHTML = item.body;
    const checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox");
    div.setAttribute("id", item.id);
    checkbox.setAttribute("onclick", `check(${item.id})`);
    checkbox.classList.add('checkbox');
    div.append(h4);
    div.append(text);
    div.append(checkbox)
    divBox.append(div)

}

document.body.append(divBox)
