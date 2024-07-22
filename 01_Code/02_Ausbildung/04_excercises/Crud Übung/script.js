let books = ['Parry Hotter'];
let readBooks = [];


function render(){
    document.getElementById('content').innerHTML = ``;

    for (let i = 0; i < books.length; i++) {
        document.getElementById('content').innerHTML += `    
            <li id="list">
                <span id="list${i}">${books[i]}</span>   <a onclick="del(${[i]})" href="#">X</a>

            </li>    
        `;
    };

}


function add(){
    let book = document.getElementById('input').value;
    books.push(book)
    render();
}


function del(position){
    befDel(position);
    books.splice(position, 1);
    render();
}


function befDel(position){
    let readBook = document.getElementById(`list${position}`).innerHTML;
    readBooks.push(readBook);
    renderRead();
}


function renderRead(){
    document.getElementById('read').innerHTML = ``;

    for (let i = 0; i < readBooks.length; i++) {
        document.getElementById('read').innerHTML += `    
            <li id="list">
                <span id="list${i}">${readBooks[i]}</span>
            </li>    
        `;
    };

}