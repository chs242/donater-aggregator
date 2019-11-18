
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
  { name: "Bodner Stevie", sukkos2018: "-", pesach2018: "-", sukkos2019: "180", contactNum: "07456743231", contactMeth: "", rating: 5, comments: "geat guy" },
  { name: "Weiler Irwin", sukkos2018: "-", pesach2018: "-", sukkos2019: "100", contactNum: "07456743231", contactMeth: "mobile phone", rating: 4, comments: "lovely guy" },
  { name: "Bodner Stevie", sukkos2018: "1200", pesach2018: "360", sukkos2019: "200", contactNum: "07456743231", contactMeth: "", rating: 5, comments: "geat guy" },
  { name: "Bodner Stevie", sukkos2018: "1200", pesach2018: "360", sukkos2019: "200", contactNum: "07456743231", contactMeth: "", rating: 5, comments: "geat guy" },
  { name: "Bodner Stevie", sukkos2018: "1200", pesach2018: "360", sukkos2019: "200", contactNum: "07456743231", contactMeth: "", rating: 5, comments: "geat guy" },
  { name: "Bodner Stevie", sukkos2018: "1200", pesach2018: "360", sukkos2019: "200", contactNum: "07456743231", contactMeth: "", rating: 5, comments: "geat guy" },
  { name: "Cantor Aryeh", sukkos2018: "100", pesach2018: "360", sukkos2019: "250", contactNum: "07453546765", contactMeth: "", rating: 2, comments: "geat guy" },
  { name: "Bodner Stevie", sukkos2018: "1200", pesach2018: "360", sukkos2019: "200", contactNum: "07456743231", contactMeth: "", rating: 5, comments: "geat guy" },
];


//create Tabulator on DOM element with id "example-table"
let table = new Tabulator("#example-table", {

  height: 250, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
  data: tabledata, //assign data to table
  //responsiveLayout:"collapse", // collapse columns that no longer fit on the table into a list under the row
  layout: "fitColumns", //fit columns to width of table (optional)
  reactiveData: true, //enable reactive data


  columns: [ //Define Table Columns
    { title: "Name", field: "name", width: 200, align: "left" },
    {
      title: "Sukkos 2018", field: "sukkos2018", align: "center", width: 120, bottomCalc: "sum", bottomCalcParams: { symbol: "£" }, formatter: "money", formatterParams: {
        thousand: ",",
        symbol: "£",
      }
    },
    {
      title: "Pesach 2018", field: "pesach2018", align: "center", width: 120, bottomCalc: "sum", bottomCalcParams: { symbol: "£" }, formatter: "money", formatterParams: {
        thousand: ",",
        symbol: "£",
      }
    },
    {
      title: "Sukkos 2019", field: "sukkos2019", align: "center", width: 120, bottomCalc: "sum", bottomCalcParams: { symbol: "£" }, formatter: "money", formatterParams: {
        thousand: ",",
        symbol: "£",
      }
    },
    { title: "Contact Number", field: "contactNum", align: "center", width: 160, sorter: "date" },
    { title: "Contact Method ", field: "contactMeth", align: "left", width: 200, sorter: "date" },
    {
      title: "Rating", field: "rating", sorter: "date", align: "center", width: 100, formatter: "star", formatterParams: {
        stars: 5
      }
    },
    { title: "Comments", field: "comments", sorter: "date", align: "center" },

  ]
});


//function that wipes the input fields
function reloadInputFields(){
    inputName.value = "";
    inputSks18.value = "";
    inputPsch18.value = "";
    inputSks19.value = "";
    inputContNum.value = "";
    inputContMeth.value = "";
    inputRatings.value = "";
    inputComments.value ="";
}

function addEntry(e) {
  e.preventDefault();
  let myObject = {};
  myObject.name = inputName.value;
  myObject.sukkos2018 = inputSks18.value;
  myObject.pesach2018 = inputPsch18.value;
  myObject.sukkos2019 = inputSks19.value;
  myObject.contactNum = inputContNum.value;
  myObject.contactMeth = inputContMeth.value;
  myObject.rating = inputRatings.value;
  myObject.comments = inputComments.value;
  
  //adds the values of the input filed to the table
  tabledata.push(myObject);

  //wipes the input fields
  reloadInputFields();
};



submitButton.addEventListener("click", addEntry);















