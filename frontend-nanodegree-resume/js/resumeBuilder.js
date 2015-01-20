var name = "Yifen Wu";
var formattedName = HTMLheaderName.replace("%data%",name);
 

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);

var skills = ["awesome", "JS", "HTML","C++"];

$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

$("#main").append(skills);
