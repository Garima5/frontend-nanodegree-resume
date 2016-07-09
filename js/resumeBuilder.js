
 var bio=
 {
 	"name":"Garima Aggarwal",
 	"role":"Web developer",
 	"contact":
 	{
 		"mobile":"0783xxxxxxxx",
 		"email":"garimaaxxx@gmail.com",
 		"github":"Garima5",
 		"linkedin":"https://in.linkedin.com/in/garimaaggarwal500",
 		"location":"India"
 	},
 	"welcomeMessage":"Creativity is the key to innovation",
 	"skills":["python,java,HTML,CSS","Drawing,painting","public speaking","creativity,awesomeness","science fiction nerd"],
 	"biopic":"images/fry.jpg"
 };
 var education=
 {
 	"schools":
 	[
 		{"name":"Guru Nanak Dev University",
 		"location":"Amritsar",
 		"degree":"B.Tech",
 		"majors":["CS"],
 		"dates":2018,
 		"url":"example.com"
 	}
 	],
 	"onlineCourses":
 	[
 	{
 		"title":"Introduction To Programming Nanodegree",
 		"school":"Udacity",
 		"dates":2015,
 		"url":"example.com"
 	},
 	{
 		"title":"Introduction To Programming Using Python",
 		"school":"Edx MITx",
 		"dates":2015,
 		"url":"example.com"
 	},
 	{
 		"title":"Java Programming: Solving Problems with Softwar",
 		"school":"Coursera Duke University",
 		"dates":2016,
 		"url":"example.com"
 	}
 	]
 };
 var work=
 {
 	"jobs":
 	[
 		{
 			"employer":"Gx",
 			"title":"head",
 			"dates":"2018-future",
 			"location":"Mountain View,California",
 			"description":"A reasearch and developement in space and technology"
 		},
 		{
 			"employer":"Gx",
 			"title":"head",
 			"dates":"2018-future",
 			"location":"London",
 			"description":"A reasearch and developement in space and technology"
 		}
 	]
 };
 var projects=
 {
 	"project":
 	[
 	{
 		"title":"A web page featuring HTML CSS notes",
 		"date":"2015",
 		"description":"A part of Introduction to programming nanodegree.A backend in Python to host a web page containing HTML and CSS notes on Google App Engine",
 		"images":[
 		"images/movie.png","images/website.png"]

 	},
 	{
 		"title":"A web page featuring HTML CSS notes",
 		"date":"2015",
 		"description":"A part of Introduction to programming nanodegree.A backend in Python to host a web page containing HTML and CSS notes on Google App Engine",
 		"images":["images/website.png",
 		"images/movie.png"]

 	}

 	]
 };
 var formattedName=HTMLheaderName.replace("%data%",bio.name);
 var formattedRole=HTMLheaderRole.replace("%data%",bio.role);

 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);
 var formattedMobile=HTMLmobile.replace("%data%",bio.contact.mobile);
 var formattedEmail=HTMLemail.replace("%data%",bio.contact.email);
 var formattedGithub=HTMLgithub.replace("%data%",bio.contact.github);
 var formattedLinkedin=HTMLlinkedin.replace("%data%",bio.contact.linkedin);
 var formattedLocation=HTMLlocation.replace("%data%",bio.contact.location);
 var formattedBiopic=HTMLbioPic.replace("%data%",bio.biopic);
 var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
 
 var skillset=HTMLskillsStart;
 var skillset=HTMLskillsStart;
 var contactHenric= HTMLcontactGeneric;

 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedGithub);
 $("#topContacts").append(formattedLinkedin);
 $("#topContacts").append(formattedLocation);
 $("#image").append(formattedBiopic);
 $("#image").append(formattedWelcomeMessage);
 $("#image").append(skillset);
 if(bio.skills.length>0)
 {


 for(var g=0;g<bio.skills.length;g++)
 {


 var formattedSkills=HTMLskills.replace("%data%",bio.skills[g]);
 
 $("#skills").append(formattedSkills);
}
 }
 
 $("#footerContacts").append(formattedMobile);
 $("#footerContacts").append(formattedEmail);
 $("#footerContacts").append(formattedGithub);
 $("#footerContacts").append(formattedLinkedin);
 $("#footerContacts").append(formattedLocation);
 ////////---------Work Experience---------------/////////////////
 var workStart=HTMLworkStart;
 
function display_work()
{


for(var job in work.jobs)
{
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
 var formattedJobTitle=formattedEmployer+formattedTitle
 var formattedJobDate=HTMLworkDates.replace("%data%",work.jobs[job].dates);
 var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
 var formattedJobDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description); 
 $("#workExperience").append(workStart);
 $(".work-entry:last").append(formattedJobTitle);
 //$(".job-title:last").append(formattedTitle);
 $(".work-entry:last").append(formattedJobDate);
 $(".work-entry:last").append(formattedJobDescription);

}
}
display_work();


 
 ////////-----------projects-----------/////////////
 
  
  var projectStart=HTMLprojectStart;
  projects.display=function()
  {
  	for(project in projects.project)
 {
 var formattedProjectTitle=HTMLprojectTitle.replace("%data%",projects.project[project].title);
 var formattedProjectDate=HTMLprojectDates.replace("%data%",projects.project[project].date); 
 var formattedProjectDescription=HTMLprojectDescription.replace("%data%",projects.project[project].description);
 
 $("#projects").append(projectStart);
 
 $(".project-entry:last").append(formattedProjectTitle);
 
 $(".project-entry:last").append(formattedProjectDate);
 $(".project-entry:last").append(formattedProjectDescription);
 if(projects.project[project].images.length>0)
 {
 	for(img in projects.project[project].images )
 	{
 		var formattedProjectImage=HTMLprojectImage.replace("%data%",projects.project[project].images[img]);
 		$(".project-entry:last").append(formattedProjectImage);
 	}
 } 
}
  }
projects.display();
  
 ///////////--------Education----------////////////
  var educationStart=HTMLschoolStart;
 for(var j=0;j<education.schools.length;j++)
 {
 var formattedSchoolName=HTMLschoolName.replace("%data%",education.schools[j].name);
 var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[j].degree); 
 var formattedDegreeTitle=formattedSchoolName + formattedDegree
 var formattedDegreeDate=HTMLschoolDates.replace("%data%",education.schools[j].dates);
 var formattedSchoollocation=HTMLschoolLocation.replace("%data%",education.schools[j].location);
 var formattedmajor=HTMLschoolMajor.replace("%data%",education.schools[j].majors[0]);
 $("#education").append(educationStart);
 
 $(".education-entry").append(formattedDegreeTitle);
 //$(".degree").append(formattedDegree); 
 $(".education-entry").append(formattedDegreeDate);
 $(".education-entry").append(formattedSchoollocation);
 $(".education-entry").append(formattedmajor);
}
 //////////----Online Courses-----/////////////
var onlineCoursesStart=HTMLonlineClasses;
$(".education-entry:last").append(onlineCoursesStart);
for(var i=0;i<education.onlineCourses.length;i++)
{
 var formattedonlineTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
 var formattedonlineSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school); 
 var formattedonlineSchoolTitle=formattedonlineTitle + formattedonlineSchool;
 var formattedonlineDates=HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
 var formattedonlineURL=HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
  $("#education").append(educationStart);
  
  $(".education-entry:last").append(formattedonlineSchoolTitle);
 // $(".online-title").append(formattedonlineSchool);
 $(".education-entry:last").append(formattedonlineDates);
 $(".education-entry:last").append(formattedonlineURL);
}
 
 function locationizer(work_obj)
 {
 	var locationArray=[];
 	for(var job in work_obj.jobs)
 	{
 		var newLocation=work_obj.jobs[job].location;
 		locationArray.push(newLocation);

 	}
 	return locationArray;
 }
var name=bio.name;
 function inName(name)

 {
 	name=name.trim().split(" ");
 	console.log(name);
 	name[1]=name[1].toUpperCase();
 	name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
 	return name[0]+" "+name[1];

 }

 $("#main").append(internationalizeButton);
 $("#mapDiv").append(googleMap);
