function init() {
    console.log('init');
    console.log(fleetSalesObject);
    SetupCascadingDropDowns();
}

function SetupCascadingDropDowns() {
    console.log('Setting up cascading dropdowns');

    const selectU = document.getElementById('selectU');
    const selectModel = document.querySelector('#selectModel');
    const selectVersion = document.querySelector('#selectVersion');

    selectU.options.add(new Option('Select Manufacturer', ''));
    selectModel.options.add(new Option('Select Model', ''));
    selectVersion.options.add(new Option('--------', ''));

    for (let mf in fleetSalesObject) {
        const option = document.createElement('option');
        option.value = mf;
        option.text = mf;
        selectU.appendChild(option);
    }
}
    console.log('selectU.onchange');

    for(let make in fleetSalesObject){

        const option = document.createElement('option');
        option.value = mf;
        option.innerText = mf;
        carMakeSelect.appendChild(option);
    }
    selectNf.onchange = function(){
        selectModel.option.Add(new Option (`select Model`, ''));

    for(let model in fleetSalesObject[selectMake.value]){
        const option = document.createElement('option');
        option.value = model;
        option.innerText = model;
        selectModel.appendChild(option);
    }   
}
