let container = document.createElement("div");
container.className = "container";
container.id = "container1";


//append 16 rows to container
for(let i=0; i<16; i++){
    let row = document.createElement("div");
    row.className = "row";
    row.id = "row" + i;

    for(let j=0; j<16; j++){
        let div = document.createElement("div");
        div.className = "cell";
        div.id = "div" + i + j;
        row.appendChild(div);
    }

    container.appendChild(row);
}

document.body.appendChild(container);

