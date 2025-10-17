
const arr = [
    {
        szerzo: "Katona József",
        mu: "Bánk bán",
        szereplo: "Gertrudis királyné",
    },
    {
        szerzo: "Mikszáth Kálmán",
        mu: "Beszterce ostroma",
        szereplo: "Pongrác István gróf",
        szereplo2: "Estella",
    },
    {
        szerzo: "Arany János",
        mu: "Toldi",
        szereplo: "Toldi Miklósé",
    },

]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.append(thead)

const tr = document.createElement("tr")
thead.append(tr)

const fejlec = ["Szerző","Mű","Szereplők"]

for(const tart of fejlec){
    const th = document.createElement("th")
    tr.appendChild(th)
    th.innerText = tart
}

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for(const i of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = i.szerzo

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.mu

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.szereplo

    if(i.szereplo2){
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.szereplo2

    }else{
        td3.colSpan = "2"
    }
}