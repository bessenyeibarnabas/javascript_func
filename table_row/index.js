/**
*    @type {{nationality: string, author: string, work: string}}
*/
const arr = [
    {
        nationality: 'Orosz',
        author: 'Gogol',
        work: 'A köpönyeg'
    },
    {
        nationality: 'Orosz',
        author: 'Csehov',
        work: 'A csinovnyik halála'
    },
    {
        nationality: 'Cseh',
        author: 'Franz Kafka',
        work: 'Az átváltozás'
    },
    {
        nationality: 'Magyar',
        author: 'Örkény István',
        work: 'Egyperces Novellák'
    },
    {
        nationality: 'Magyar',
        author: 'József Attila',
        work: 'Klárisok'
    },
    {
        nationality: 'Svájc',
        author: 'Friedrich Dürrenmatt',
        work: 'A fizikusok'
    }
];

const tomb = ["Nemzetiség","Szerző","Mű"]

const table = document.createElement("table")
document.body.appendChild(table);

const thead = document.createElement("thead")
table.appendChild(thead);

const tr = document.createElement("tr")
thead.appendChild(tr);

for(const item of tomb){
    const th = document.createElement("th");
    tr.appendChild(th);
    th.innerText = item;
}

const tbody = document.createElement("tbody")
table.appendChild(tbody);
for(const tart of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td = document.createElement("td");
    td.innerText = tart.nationality;
    tr.appendChild(td);

    const td2 = document.createElement("td");
    td2.innerText = tart.author;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = tart.work;
    tr.appendChild(td3);

    if (tart.nationality) {
        td.rowSpan = 2; 
    }
}


