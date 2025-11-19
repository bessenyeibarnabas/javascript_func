/**
 * @typedef {{id: string, label: string}} FormField
 */

//global obj:
const globalObj = {
    /**
     * @type {string[]}
     */
    headerTomb : ["Nemzetiség", "szerző", "Mű"],

    /**
     * @type {FormField[]}
     */
    formTomb : [
        {id : "nemzetiseg", label : "Nemzetiség"},
        {id : "szerzo1", label : "Szerző"},
        {id : "mu1", label : "Mű"},
        {id : "szerzo2", label : "Szerző"},
        {id : "mu2", label : "Mű"},
    ]
}

/**
 * @type {CountryWriters[]}
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

/**
 * @type {string[]}
 */
generateTable(globalObj.headerTomb, "tbody")


renderTableBody(arr);
 
 
//html Form
 
/**
 * @type {HTMLFormElement}
 */
const bicus = document.getElementById("htmlform");
bicus.addEventListener("submit", htmlEventListener)
 
 
//js Form
 
const js_form = createForm("js_form", globalObj.formTomb)
 
document.body.appendChild(js_form)
 
js_form.addEventListener("submit",
    function (e){
        e.preventDefault()
 
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

        if(validateFields(nemzetiseg, szerzo1, mu1, "js_form")){
            /**
             * @type {string}
             */
            const nemzetisegValue = nemzetiseg.value;
            /**
             * @type {string}
             */
            const szerzo1Value = szerzo1.value;
            /**
             * @type {string}
             */
            const mu1Value = mu1.value;
            /**
             * @type {string}
             */
            const szerzo2Value = szerzo2.value;
            /**
             * @type {string}
             */
            const mu2Value = mu2.value


            /**
             * @type {CountryWriters}
             */
            const obj = {};
            obj.nationality = nemzetisegValue;
            obj.name1 = szerzo1Value;
            obj.work1 = mu1Value;
            obj.name2 = szerzo2Value !== "" ? szerzo2Value : undefined;
            obj.work2 = mu2Value !== "" ? mu2Value : undefined;

            arr.push(obj);
            renderTableBody(arr)

            js_form.reset()

        }

        for (const item of arr){
            console.log(item.nationality, item.name1, item.work1, item.name2, item.work2)
        }


    }
)

/**
 * órai-----------------------------2025_11_14
 * 
 * Doga
 * -html table, ahoz js table és js form(append +sor ) majd frissíti a table-t
 */

