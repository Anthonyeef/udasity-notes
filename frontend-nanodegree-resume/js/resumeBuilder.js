var bio = {
    "name" : "Yifen Wu",
    "role"  :"Web Developer",
    "contacts"  :{
        "mobile":"91859524",
        "email" :"anthonyeef@gmail.com",
        "github":"Anthonyeef",      
    },
    "welcomeMessage":"An apple a day, keep the doctor away!",
    "skills":["awesomeness","delivering things","protecting the universe"],
    "bioPic":"images/fry.jpg"
}
var work ={};
    work.position = "internship";
    work.years = 1;
var education = {};
    education["name"] = "China University of Petrolium";
    education["city"] = "Beijing";
    education["years"]= "4"; 

$("#main").append(work["position"]);
$("#main").append(education.name);

 