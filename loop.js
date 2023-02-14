//for of
var city = ["Mumbai", "Chennai", "Calcutta", "Jaipur","Canada"]
 for(mycity of city) {
    console.log(mycity);
 }


 let marks = [81,95,75];
   for(score of marks){
    score = score + 5;
    console.log(score);
   }
   //score = [81+5, 95+5, 75+5]
   //[86,100,80]


   var city = ["Mumbai",
               "Chennai",
               ["Rose","Lotus","Lily"],
               "Calcutta", 
                "Jaipur",
                "Canada",
];

  for(mycity of city){
    if(Array.isArray(mycity)){
        for(myflower of mycity){
            console.log(myflower);
        }
    } else {
        console.log(mycity);
    }
  }

//-----------------------------------------------------------------------------

//for in
//{}

var movie ={
    name: "Vikram",
    rating: 5,
    type: "Action"
};

for(key in movie){
    //console.log(key);
    console.log(movie[key]);
} 


const color = ["Red", "Black", "Pink"];

color.forEach(ele => console.log(ele));


var myObj = {
    "cars": {
        "car1":"Ford",
        "Car2":"BMW",
        "Car3": "Fiat"
    },"cars2": {
        "car1":"Ford2",
        "Car2":"BMW2",
        "Car3": "Fiat2"
    }
}
 for(x in myObj){
   console.log(myObj[x].car1);
 }
 Object.values(myObj).forEach((i) => console.log(i.car1));

 //---------------------------------------------------------------------------------

 //JSON stringify

 var student = {
     name : "Faiza",
     age : 27,
 };
  const myJson = JSON.stringify(student);
  console.log(myJson);

  //============================================================================================
  