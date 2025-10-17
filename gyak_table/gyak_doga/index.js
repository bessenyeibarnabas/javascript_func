/**
 *  @type {[theme: string, time: string, scientist1: string, scientist2: string]}
 */

const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

const th1 = document.createElement("th")
tr.appendChild(th1)
th1.innerText = "Fizika területe"

const th2 = document.createElement("th")
tr.appendChild(th2)
th2.innerText = "Időszak"

const th3 = document.createElement("th")
tr.appendChild(th3)
th3.innerText = "Képviselők"

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for(const i of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = i.theme

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.time

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.scientist1

    if(i.scientist2 === undefined){
        td3.colSpan = "2"
    }else{
        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.scientist2
    }
}