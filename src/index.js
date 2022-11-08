//очистка адресной строки
history.pushState("", document.title, window.location.pathname);

//запрос
const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7';
const response = await fetch(url);
const answer = await response.json();

//создание эл-ов
const divBox = document.createElement('div');
divBox.classList.add('boxBlock');
for (const item of answer) {
    const div = document.createElement('div');
    div.classList.add('block');
    div.setAttribute("id", item.id);
    const h4 = document.createElement('h4');
    h4.innerHTML = item.title;
    const text = document.createElement('div');
    text.innerHTML = item.body;
    const checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", `check(${item.id})`);
    div.append(h4);
    div.append(text);
    div.append(checkbox);
    divBox.append(div);
}
document.body.append(divBox)
