
console.log(Tabulator);

const inputName = document.getElementById("input-name");
const inputSks18 = document.getElementById("input-sks18");
const inputPsch18 = document.getElementById("input-psch18");
const inputSks19 = document.getElementById("input-sks19");
const inputContNum = document.getElementById("cont-num"); 
const inputContMeth = document.getElementById("cont-meth");
const inputRatings = document.getElementById("ratings");
const inputComments = document.getElementById("comments");
const submitButton = document.getElementById("submit-button");

//define some sample data
let tabledata = [
    {name:"Bodner Stevie", sukkos2018:"1200", pesach2018:"360", sukkos2019:"200", contactNum:"07456743231", contactMeth:"", rating:5, comments:"geat guy"},
    {name:"Bodner Stevie", sukkos2018:"1200", pesach2018:"360", sukkos2019:"200", contactNum:"07456743231", contactMeth:"", rating:5, comments:"geat guy"},
    {name:"Bodner Stevie", sukkos2018:"1200", pesach2018:"360", sukkos2019:"200", contactNum:"07456743231", contactMeth:"", rating:5, comments:"geat guy"},
    {name:"Bodner Stevie", sukkos2018:"1200", pesach2018:"360", sukkos2019:"200", contactNum:"07456743231", contactMeth:"", rating:5, comments:"geat guy"},
    {name:"Bodner Stevie", sukkos2018:"1200", pesach2018:"360", sukkos2019:"200", contactNum:"07456743231", contactMeth:"", rating:5, comments:"geat guy"},
];


//create Tabulator on DOM element with id "example-table"
let table = new Tabulator("#example-table", {
    
    height:250, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data:tabledata, //assign data to table
    //responsiveLayout:"collapse", // collapse columns that no longer fit on the table into a list under the row
    layout:"fitColumns", //fit columns to width of table (optional)
    addRowPos:"bottom",

    
    columns:[ //Define Table Columns
        {title:"Name", field:"name", width:200, align:"left"},
        {title:"Sukkos 2018", field:"sukkos2018", align:"center", width: 120, bottomCalc:"sum", bottomCalcParams:{symbol:"£"}, formatter:"money", formatterParams:{
            thousand:",",
            symbol:"£",
        }},
        {title:"Pesach 2018", field:"pesach2018", align:"center", width: 120, bottomCalc:"sum", bottomCalcParams:{symbol:"£"}, formatter:"money", formatterParams:{
            thousand:",",
            symbol:"£",
        }},
        {title:"Sukkos 2019", field:"sukkos2019", align:"center", width: 120, bottomCalc:"sum", bottomCalcParams:{symbol:"£"}, formatter:"money", formatterParams:{
            thousand:",",
            symbol:"£",
        }},
        {title:"Contact Number", field:"contactNum", align:"center", width:160, sorter:"date"},
        {title:"Contact Method ", field:"contactMeth", align:"left", width: 200, sorter:"date"},
        {title:"Rating", field:"rating", sorter:"date", align:"center", width:100, formatter:"star", formatterParams:{
            stars: 5
        }},
        {title:"Comments", field:"comments", sorter:"date", align:"center"},

    ]
});

function addEntry(){
    let myObject = {};
    myObject.name = inputName.value;
    myObject.sukkos2018 = inputSks18.value;
    myObject.pesach2018 = inputPsch18.value;
    myObject.sukkos2019 = inputSks19.value;
    myObject.contactNum = inputContNum.value;
    myObject.contactMeth = inputContMeth.value;
    myObject.rating = inputRatings.value;
    myObject.comments = inputComments.value;
    
    table.addRow(myObject);
};

submitButton.addEventListener("click", addEntry());















