// define the variables
let batchNum = document.getElementById("batchNum");
let batchAmount = document.getElementById("bAmount");
let waterQu = document.getElementById("waterQ");
let jelatin = document.getElementById("jelatin");
let starch = document.getElementById("starch");
let rework = document.getElementById("rework");
let suger = document.getElementById("suger");
let glucouse = document.getElementById("glucouse");
let premix = document.getElementById("premix");
let water = document.getElementById("water");
let submitBtn = document.getElementById("submit");

let flavoursInput = document.getElementById("fInput");
let colorType = document.getElementById("typeValue");
let colorConc = document.getElementById("concValue");

// add new feature
let new_water =document.getElementById('new_water');
let new_jelatin =document.getElementById('new_jelatin');
let new_starch =document.getElementById('new_starch');
let new_rework =document.getElementById('new_rework');

let all_values;
console.log(all_values)
console.log(new_jelatin)
console.log(new_water)
console.log(new_starch)
console.log(new_rework)
submitBtn.addEventListener('click', function(event){
    if (new_water.value === ""){
        new_water.style.border = "1px solid #f00"
    }else{
        new_water.style.border = "1px solid #0f0"
    }

    if (new_jelatin.value === ""){
        new_jelatin.style.border = "1px solid #f00"
    }else{
        new_jelatin.style.border = "1px solid #0f0"
    }
    if (new_starch.value === ""){
        new_starch.style.border = "1px solid #f00"
    }else{
        new_starch.style.border = "1px solid #0f0"
    }
    if (new_rework.value === ""){
        new_rework.style.border = "1px solid #f00"
    }else{
        new_rework.style.border = "1px solid #0f0"
    }
    
    all_values = Number(new_water.value) + Number(new_jelatin.value) + Number(new_starch.value) + Number(new_rework.value);
    let batch_amount = batchNum.value * 20;
    let water_quantity = Number(new_water.value) / all_values * batch_amount;
    let jelatin_u = Number(new_jelatin.value) / all_values * batch_amount;
    let starch_u = Number(new_starch.value) / all_values * batch_amount;
    let rework_u = Number(new_rework.value) / all_values * batch_amount;
    let suger_u =  29 * batchNum.value;
    let glucouse_u = 45 * batchNum.value ;
    let premix_u = batch_amount;
    let water_u = 2 * batchNum.value;


    batchAmount.innerHTML = batch_amount.toPrecision(4);
    waterQu.innerHTML = water_quantity.toPrecision(4);
    jelatin.innerHTML = jelatin_u.toPrecision(4);
    starch.innerHTML = starch_u.toPrecision(4);
    rework.innerHTML = rework_u.toPrecision(4);

    suger.innerHTML = suger_u.toPrecision(4);
    glucouse.innerHTML = glucouse_u.toPrecision(4);
    premix.innerHTML = premix_u.toPrecision(4);
    water.innerHTML = water_u.toPrecision(4);
})




let flavours = [
    {
        id : 1,
        fName : "mango",
        fColor: "50 اصفر غروب الشمس  120 + طرطازين",
        colorConc : "17.6 : 1"
    },
    {
        id : 2,
        fName : "orange",
        fColor: " اصفر غروب الشمس  (20) +  50 طرطازين",
        colorConc : "42.9 : 1"
    },
    {
        id : 3,
        fName : "lemon",
        fColor: " 50 طرطازين",
        colorConc : "60 : 1"
    },
    {
        id : 4,
        fName : "strawberry",
        fColor: " 50 احمر كارموزين",
        colorConc : "60 : 1"
    },
    {
        id : 5,
        fName : "pineapple",
        fColor: " 70 اخضر زراعى  5 + طرطازين",
        colorConc : "40 : 1"
    },
    {
        id : 6,
        fName : "apple",
        fColor: " 20 اخضر زراعى 10 + طرطازين",
        colorConc : "100 : 1"
    },
    {
        id : 7,
        fName : "grapes",
        fColor: " 30  ازرق لامع 15 + احمر كارموزين",
        colorConc : "66.7 : 1"
    },
    {
        id : 8,
        fName : "vanilla",
        fColor: "  ازرق لامع  25 + 3 لتر ماء",
        colorConc : "120 : 1"
    },
    {
        id : 9,
        fName : "peach",
        fColor: " 40 احمر كارموزين  10 + طرطازين",
        colorConc : "60 : 1"
    },
    {
        id : 10,
        fName : "cola",
        fColor: "  كارميل  1.5 + 3 لتر ماء",
        colorConc : "2 : 1"
    }
];



document.addEventListener('click', function(event) {
    for(let i =0; i <flavours.length; i++){
        if(event.target.id == flavours[i].fName ){
            flavoursInput.innerHTML = event.target.id;
            colorType.innerHTML = flavours[i].fColor;
            colorConc.innerHTML = flavours[i].colorConc;
        }
    }
    
  });




