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
 
        /**
         * @type {CountryWriters}
         */
        const obj = {}
        obj.nationality = nemzetisegValue
        obj.name1 = szerzo1Value
        obj.work1 = mu1Value
        obj.name2 = szerzo2Value
        obj.work2 = mu2Value
 
        arr.push(obj);
        renderTableBody(arr)
    }
)