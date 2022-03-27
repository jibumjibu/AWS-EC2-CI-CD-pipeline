
var select;
var table;
var reset;

function adminLogin(form) {

    if (form.userid.value == "admin" && form.pwd.value == "123") {
        window.open('AdminPage.html');
    }

}

function category(){
    select = document.getElementById('category');
    switch (select.value){
        case "Fruit & Veg": table = document.getElementById("fruit"); break;
        case     "Starchy": table = document.getElementById("starchy"); break;
        case       "Dairy": table = document.getElementById("dairy"); break;
        case     "Protein": table = document.getElementById("protein"); break;
    }
}

function addItem() {

    var itemName = document.getElementById("itemName").value;
    var price = "$"+document.getElementById("price").value;

    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    cell1.innerHTML = itemName;
    cell2.innerHTML = price;
}

function toggleCategory(a) {

    var fruit = document.getElementById("fruit");
    var starch= document.getElementById("starch");
    var dairy = document.getElementById("dairy");
    var protein = document.getElementById("protein");

    if(a == 0) {
        starch.style.display = "";
        dairy.style.display = "";
        protein.style.display = "";
        fruit.style.display = "";
    }

    if(a == 1) {
        fruit.style.display = "";
        starch.style.display = 'none';
        dairy.style.display = "none";
        protein.style.display = "none"; 
    }
    if(a == 2) {
        starch.style.display = "";
        fruit.style.display = "none";
        dairy.style.display = "none";
        protein.style.display = "none";
    }
    if(a == 3) {
        dairy.style.display = "";
        fruit.style.display = "none";
        starch.style.display = "none";
        protein.style.display = "none";
    }
    if(a == 4) {
        protein.style.display = "";
        fruit.style.display = "none";
        dairy.style.display = "none";
        starch.style.display = "none";
    }

}

function searchDisplay() {

    var y = document.getElementById("query").value;

    var apple = document.getElementById("apple");
    var mango = document.getElementById("mango");
    var grapes = document.getElementById("grapes");
    var bread = document.getElementById("bread");
    var wheat = document.getElementById("wheat");
    var oats = document.getElementById("oats");
    var egg = document.getElementById("egg");
    var fish = document.getElementById("fish");
    var beef = document.getElementById("beef");
    var milk = document.getElementById("milk");
    var butter = document.getElementById("butter");
    var cheese = document.getElementById("cheese");

    const cat = [apple, mango, grapes, bread, wheat, oats, egg, fish, beef, milk, butter, cheese]

    if(y == 'apple'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == apple)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'mango'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == mango)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'grapes'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == grapes)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'bread'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == bread)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'wheat'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == wheat)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'oats'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == oats)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'egg'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == egg)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'fish'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == fish)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'beef'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == beef)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'milk'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == milk)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'butter'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == butter)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    if(y == 'cheese'){
        for(let i = 0; i<cat.length; i++){
            
            if(cat[i] == cheese)
            cat[i].style.display = "";
            else
            cat[i].style.display = "none";
        }
            
    }
    reset = 1;
}