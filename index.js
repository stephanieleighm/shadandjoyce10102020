var guestList = [];

var table1 = ["Kiera Mangusan", "Rio Isidro", "Millie Cabjuan", "Julian Cabjuan", "Jonard Penaflorida"];
var table2 = ["Hilario Isidro", "Emily Isidro", "Josefino Eclevia", "Cristina Eclevia", "Juvelyn Mangusan"];
var table3 = ["Jonathan Mandapat", "Bong Bangaoet", "Aischa Bangaoet", "Marlon de Vera", "Mae de Vera"];
var table4 = ["Steve Paatan", "Lily Ann Paatan", "Bea Paatan", "Sam Paatan", "Felix Liquette"];
var table5 = ["Roselie Guanso", "Ckena Salinas", "Stephanie Paatan", "Kate Paatan", "Erica Monique Ang"];
var table6 = ["Israel Yasay", "Margot Yasay", "Winnie Wong", "Samuel Raymond Perez", "Margie Foronda"];
var table7 = ["Ellen Paatan", "Guilay  Paatan", "Geraldine  Paatan", "Armand Dumpit", "Joy Dumpit"];
var table8 = ["Richard Caranto", "Valeree Batalier", "Daryl Inso", "Julie Ann Inso", "Noel Madulid"];
var table9 = ["Angel Pokling", "Enera Begya", "Jimmy Begya", "Vangie Elcanir", "Lalyn Sobremento"];
var table10 = ["Daverick Begya", "Hanna Abance", "Hansam Abance", "Reynan Inso", "Debegail Inso", "Jane Abance"]; //6
var table11 = ["Shanry Roberts", "Gurioni Asbucan", "Jerome Patingan", "Ronalie Sigang"]; //4
var table12 = ["Leo Deano", "Ellen Deano", "John Daniel Deano", "Axl Deano", "Rachel Soriano"];
var table13 = ["Ruben Refuerzo", "Rose Marie Refuerzo", "Rycklan Refuerzo", "Gayle Refuerzo"]; //4
var table14 = ["Jomar Ame", "Samuel Roxas", "Yaphel Paatan", "Glairu Paatan", "Gerald Paatan"];
var table15 = ["Raymond Pua", "Rocky de la Rosa", "Paul Schlaaff", "Melvin Purugganan", "Moises Gorospe"];
var table16 = ["Ferdinand Pascual", "Jherson Pascual", "Mary Joy Tumbaga", "Roldan Penano", "Dam Penano"];
var table17 = ["Kristine Marie Peralta", "Vin Zapanta", "Ann-Myra Zapanta", "Marck Dumpit", "Jeric Palispis"];
var table18 = ["Rolly Tipayno", "Rosel Barbero", "Tyron Bulasao", "Ruel Sumala"]; //4
var table19 = ["Lanz Fider", "Gabby Fider", "Ella Fider", "Nathan Bandonil", "Ezekiel Cardenas"];
var table20 = ["Abigail Crisostomo", "Gennica Marie Genove", "Jimsy Wales Clarence Genove", "Shulamite Lazaga Maches", "Lucky Salvador Crisostomo II"];
var table21 = ["Beverly Burcao", "Brent Burcao", "Michael Illingan", "Lovely Illingan", "Mcgyver Mendoza"];

document.getElementById("submitBtn").addEventListener("click", submit);

function concatenatingGuestList() {
  guestList = table1.concat(table2, table3, table4, table5, table6, table7, table8, table9, table10, table11, table12, table13, table14, table15, table16, table17, table18, table19, table20, table21);
}


function submit() {
  concatenatingGuestList();
  guestList = guestList.map(function(x){ return x.toUpperCase(); })
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var name = firstName + " " + lastName;
  name = name.toUpperCase();
  var tableAssignment = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21];
  guestIndex = guestList.indexOf(name);
  tableNumber = tableAssignment[guestIndex];
  alert("Your table number is " + tableNumber);

}




// function matchingTableNumber() {
//
//   var tables = [5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 4, 5, 4, 5, 5, 5, 5, 4, 5, 5, 5];
//   tables.forEach(pushingTableNumbers);
//
//   function pushingTableNumbers() {
//     for (var i = 0; i < tables[1]; i++) {
//       tableAssignment.push(i + 1);
//     }
//   }
// }




// function matchingTableNumber() {
//   for (var i=1; i<21; i++){
//     var x = "table"+(i);
//     console.log(x);
// console.log(x.length);
//     var y = x.length-1;
//     console.log(y);
//   }
// }



// function myFunction() {
//   var arr =[0,1,2,0,1,3];
//   var arr1 = [];
//   for (var i = 0; i < 5; i++) {
//     arr1.push("a");
//   }
// console.log(arr1);
// }
// myFunction();
// VM2870:7 (5) ["a", "a", "a", "a", "a"]
