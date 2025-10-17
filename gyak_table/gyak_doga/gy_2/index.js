/**
 * @type {[war: string, team1: string, team1Size: string, team2: string, team2Size: string]}
 */


const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const table = document.createElement("table")
document.body.appendChild(table)

const tomb = ["Harc megnevezése","Szembenálló felek","Haderő"]

const thead = document.createElement("thead")
table.appendChild(thead)

const tr = document.createElement("tr")
thead.appendChild(tr)

for(const tart of tomb){
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
    td1.innerText = i.war

    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = i.team1

    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = i.team1Size

    if(i.team2){
        td1.colSpanSpan = "2";

        const tr = document.createElement("tr")
        tbody.appendChild(tr)

        const td4 = document.createElement("td")
        tr.appendChild(td4)
        td4.innerText = i.team2

        const td5 = document.createElement("td")
        tr.appendChild(td5)
        td5.innerText = i.team2Size


    }
}
