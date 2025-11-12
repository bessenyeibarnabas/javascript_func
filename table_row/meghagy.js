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
 
        const nemzetisegValue = val.querySelector("#nemzetiseg").value;
        const szerzo1Value = val.querySelector("#szerzo1").value;
        const mu1Value = val.querySelector("#mu1").value;
        const szerzo2Value = val.querySelector("#szerzo2").value;
        const mu2Value = val.querySelector("#mu2").value;
 
        /**
         * @type {{nationality:string, name1:string, work1:string, name2?:string, work2?:string}}
         */
        const obj = {
            nationality: nemzetisegValue,
            name1: szerzo1Value,
            work1: mu1Value
        };
 
        if(szerzo2Value && mu2Value){
            obj.name2 = szerzo2Value;
            obj.work2 = mu2Value;
        }
 
        arr.push(obj);
        renderTableBody(arr);})