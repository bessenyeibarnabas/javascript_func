/**
 * @type {{nationality:string, name1:string, work1:string, name2?:string, work2?:string}}
 */
const arr = [
    {
        nationality: "Orosz",
        name1: "Gogol",
        work1: "A köpönyeg",
        name2: "Csehov",
        work2: "A csinovnyik halála"
    },
    {
        nationality: "Cseh",
        name1: "Franz Kafka",
        work1: "Az átváltozás",
    },
    {
        nationality: "Magyar",
        name1: "Örkény István",
        work1: "Egyperces novellák",
        name2: "József Attila",
        work2: "Klárisok"
    },
    {
        nationality: 'Svájc',
        name1: 'Friedrich Dürrenmatt',
        work1: 'A fizikusok',
    }
]
 
const table = document.createElement("table");
document.body.appendChild(table);
 
const tomb = ["Nemzetiség", "Szerző", "Mű"];
 
const thead = document.createElement("thead");
const tr = document.createElement("tr");
table.appendChild(thead);
thead.appendChild(tr);
 
for(const item of tomb){
    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = item;
}
 
const tbody = document.createElement("tbody");
table.appendChild(tbody);
for(const obj of arr){
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
 
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
 
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
 
    td1.innerText = obj.nationality;
    /**
     * @type {HTMLTableCellElement}
     */
    td1.addEventListener("click", function (e){
        const target = e.target;
        target.classList.add("marked");
    })
 
    td2.innerText = obj.name1;
    td3.innerText = obj.work1;
 
    if(obj.name2){
        td1.rowSpan = "2";
 
        const tr = document.createElement("tr");
        tbody.appendChild(tr);
 
        const td4 = document.createElement("td");
        tr.appendChild(td4);
        td4.innerText = obj.name2;
 
        const td5 = document.createElement("td");
        tr.appendChild(td5);
        td5.innerText = obj.work2;
    }
}