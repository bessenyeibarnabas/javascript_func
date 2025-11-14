/**
 * @type {{nationality:string, name1:string, work1:string, name2?:string, work2?:string}[]}
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
tbody.id = "tbody_t";
table.appendChild(tbody);

//html form

/**
 * @type {HTMLFormElement}
 */


const bicus = document.getElementById("htmlform");
bicus.addEventListener("submit",
    function (e){
        e.preventDefault();
        /**
         * @type {HTMLFormElement}
         */
        const val = e.target;
 
 
        /**
         * @type {HTMLInputElement}
         */
        const nemzetiseg = val.querySelector("#nemzetiseg");
        /**
         * @type {string}
         */
        const nemzetisegValue = nemzetiseg.value;
 
        /**
         * @type {HTMLInputElement}
         */
        const szerzo1 = val.querySelector("#szerzo1");
        /**
         * @type {string}
         */
        const szerzo1Value = szerzo1.value;
 
        /**
         * @type {HTMLInputElement}
         */
        const mu1 = val.querySelector("#mu1");
        /**
         * @type {string}
         */
        const mu1Value = mu1.value;
 
        /**
         * @type {HTMLInputElement}
         */
        const szerzo2 = val.querySelector("#szerzo2");
        /**
         * @type {string}
         */
        const szerzo2Value = szerzo2.value;
 
        /**
         * @type {HTMLInputElement}
         */
        const mu2 = val.querySelector("#mu2");
        /**
         * @type {string}
         */
        const mu2Value = mu2.value;
 
        /**
         * @type {{nationality:string, name1:string, work1:string, name2?:string, work2?:string}}
         */
        const obj = {};
        obj.nationality = nemzetisegValue;
        obj.name1 = szerzo1Value;
        obj.work1 = mu1Value;
        obj.name2 = szerzo2Value;
        obj.work2 = mu2Value;

 
        const povmat = document.getElementById("tbody_t");

        const tr = document.createElement("tr");
        povmat.appendChild(tr);

        arr.push(obj)
        renderTableBody(arr)
    });
/**
 * @param {{nationality:string, name1:string, work1:string, name2?:string, work2?:string}[]}
 */

function renderTableBody(data) {
    const tbody = document.getElementById("tbody_t")
    tbody.innerHTML = ""

    for (const obj of data){
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
        target.classList.add("marked")
        const parentRow = target.parentElement
            const tbodyOrigin = parentRow.parentElement
   
            const markedCell = tbodyOrigin.querySelector(".marked")
   
            if (markedCell !== null) {
                markedCell.classList.remove("marked")
            }
            target.classList.add("marked")
        });

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
}
renderTableBody(arr)

 
//form




/**
 * 
 * @param {HTMLFormElement} form
 * @param {string} labelText
 * @param {string} id
 */

function createElement(form, labelText, id){
    const label = document.createElement("label")
    label.htmlFor = id
    label.innerText = labelText

    const input = document.createElement("input")
    input.type ="text"
    input.id = id
    input.name = id

    form.appendChild(label)
    form.appendChild(document.createElement("br"))
    form.appendChild(input)
    form.appendChild(document.createElement("br"))
    form.appendChild(document.createElement("br"))
}


const src_f = document.createElement("form")
src_f.id = "src_f"
document.body.appendChild(src_f)

createElement(src_f, "Nemzetiség", "nemzetiseg")
createElement(src_f, "Szerző 1", "szerzo1")
createElement(src_f, "Mű 1", "mu1")
createElement(src_f, "Szerző 2", "szerzo2")
createElement(src_f, "Mű 2", "mu2")

const button = document.createElement("button")
button.innerText = "hozzáadás"
src_f.appendChild(button)
        
src_f.addEventListener("submit", function(e){
    e.preventDefault();

    const nemzetiseg = src_f.querySelector("#nemzetiseg").value
    const szerzo1 = src_f.querySelector("#szerzo1").value
    const mu1 = src_f.querySelector("#mu1").value
    const szerzo2 = src_f.querySelector("#szerzo2").value
    const mu2 = src_f.querySelector("#mu2").value

    const obj = {
        nationality: nemzetiseg,
        name1: szerzo1,
        work1: mu1
    };

    if (szerzo2 && mu2) {
        obj.name2 = szerzo2;
        obj.work2 = mu2
    }

    arr.push(obj)
    renderTableBody(arr)
})

