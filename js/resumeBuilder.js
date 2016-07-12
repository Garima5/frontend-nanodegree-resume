 var bio = {
     "name": "Garima Aggarwal",
     "role": "Web developer",
     "contacts": {
         "mobile": "0783xxxxxxxx",
         "email": "garimaaxxx@gmail.com",
         "github": "Garima5",
         "linkedin": "https://in.linkedin.com/in/garimaaggarwal500",
         "location": "India"
     },
     "welcomeMessage": "Creativity is the key to innovation",
     "skills": ["python,java,HTML,CSS", "Drawing,painting", "public speaking", "creativity,awesomeness", "science fiction nerd"],
     "biopic": "images/fry.jpg"
 };
 var education = {
     "schools": [{
         "name": "Guru Nanak Dev University",
         "location": "Amritsar",
         "degree": "B.Tech",
         "majors": ["CS"],
         "dates": "2018",
         "url": "http://gndu.ac.in/"
     }],
     "onlineCourses": [{
         "title": "Introduction To Programming Nanodegree",
         "school": "Udacity",
         "dates": "2015",
         "url": "example.com"
     }, {
         "title": "Introduction To Programming Using Python",
         "school": "Edx MITx",
         "dates": "2015",
         "url": " https://verify.edx.org/cert/75f9173eba0e49c195ffdbf2aee52b5f"
     }, {
         "title": "Java Programming: Solving Problems with Softwar",
         "school": "Coursera Duke University",
         "dates": "2016",
         "url": "https://verify.edx.org/cert/c73e589378be4875915ab702a36f7e38"
     }]
 };
 var work = {
     "jobs": [{
         "employer": "Gx",
         "title": "head",
         "dates": "2018-future",
         "location": "Mountain View,California",
         "description": "A reasearch and developement in space and technology"
     }, {
         "employer": "Gy",
         "title": "head",
         "dates": "2018-future",
         "location": "London",
         "description": "A reasearch and developement in space and technology"
     }]
 };
 var projects = {
     "project": [{
             "title": "A web page featuring HTML CSS notes 1",
             "date": "2015",
             "description": "A part of Introduction to programming nanodegree.A backend in Python to host a web page containing HTML and CSS notes on Google App Engine",
             "images": [
                 "images/movie.png", "images/website.png"
             ]

         }, {
             "title": "A web page featuring HTML CSS notes 2",
             "date": "2015",
             "description": "A part of Introduction to programming nanodegree.A backend in Python to host a web page containing HTML and CSS notes on Google App Engine",
             "images": ["images/website.png",
                 "images/movie.png"
             ]

         }

     ]
 };

 function display_bio() {


     var formattedName = HTMLheaderName.replace("%data%", bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);     
     var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
     var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
     var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
     var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
     var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
     var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
     var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
     var skillset = HTMLskillsStart;
     $("#header").prepend(formattedRole);
     $("#header").prepend(formattedName);
     $("#topContacts").append(formattedMobile);
     $("#topContacts").append(formattedEmail);
     $("#topContacts").append(formattedGithub);
     $("#topContacts").append(formattedLinkedin);
     $("#topContacts").append(formattedLocation);
     $("#image").append(formattedBiopic);
     $("#image").append(formattedWelcomeMessage);
     $("#image").append(skillset);
     $("#footerContacts").append(formattedMobile);
     $("#footerContacts").append(formattedEmail);
     $("#footerContacts").append(formattedGithub);
     $("#footerContacts").append(formattedLinkedin);
     $("#footerContacts").append(formattedLocation);
     if (bio.skills.length > 0) {
         for (var skill = 0; skill < bio.skills.length; skill++) {

             var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);

             $("#skills").append(formattedSkills);
         }
     }
 }
 bio.display = function() {
     display_bio();
 };
 bio.display();

 ////////---------Work Experience---------------/////////////////

 function display_work() {

     if (work.jobs.length > 0) {
         var workStart = HTMLworkStart;
         for (var job=0;job<work.jobs.length;job++) {
             var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
             var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
             var formattedJobTitle = formattedEmployer + formattedTitle;
             var formattedJobDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);            
             var formattedJobDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
             $("#workExperience").append(workStart);
             $(".work-entry:last").append(formattedJobTitle);             
             $(".work-entry:last").append(formattedJobDate);
             $(".work-entry:last").append(formattedJobDescription);

         }
     }
 }


 work.display = function() {
     display_work();
 };
 work.display();


 ////////-----------projects-----------/////////////

 function display_projects() {
     if (projects.project.length > 0) {


         var projectStart = HTMLprojectStart;


         for (var project=0;project<projects.project.length;project++) {
             var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project].title);
             var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.project[project].date);
             var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project].description);

             $("#projects").append(projectStart);

             $(".project-entry:last").append(formattedProjectTitle);

             $(".project-entry:last").append(formattedProjectDate);
             $(".project-entry:last").append(formattedProjectDescription);
             if (projects.project[project].images.length > 0) {
                 for (var img=0;img<projects.project[project].images.length;img++) {
                     var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[project].images[img]);
                     $(".project-entry:last").append(formattedProjectImage);
                 }
             }
         }
     }
 }
 projects.display = function() {
     display_projects();
 };
 projects.display();

 ///////////--------Education----------////////////
 function display_education() {
     var educationStart = HTMLschoolStart;

     if (education.schools.length > 0) {

         for (var j = 0; j < education.schools.length; j++) {
             var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[j].name);
             var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[j].degree);
             var formattedDegreeTitle = formattedSchoolName + formattedDegree;
             var formattedDegreeDate = HTMLschoolDates.replace("%data%", education.schools[j].dates);
             var formattedSchoollocation = HTMLschoolLocation.replace("%data%", education.schools[j].location);
             var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[j].majors[0]);
             $("#education").append(educationStart);
             $(".education-entry").append(formattedDegreeTitle);             
             $(".education-entry").append(formattedDegreeDate);
             $(".education-entry").append(formattedSchoollocation);
             $(".education-entry").append(formattedmajor);
         }
     }
     //////////----Online Courses-----/////////////
     if (education.onlineCourses.length > 0) {

         var onlineCoursesStart = HTMLonlineClasses;
         $(".education-entry:last").append(onlineCoursesStart);
         for (var i = 0; i < education.onlineCourses.length; i++) {
             var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
             var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
             var formattedonlineSchoolTitle = formattedonlineTitle + formattedonlineSchool;
             var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
             var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
             $("#education").append(educationStart);
             $(".education-entry:last").append(formattedonlineSchoolTitle);             
             $(".education-entry:last").append(formattedonlineDates);
             $(".education-entry:last").append(formattedonlineURL);
         }
     }
 }
 education.display = function() {
     display_education();
 };
 education.display();

 function locationizer(work_obj) {
     var locationArray = [];
     for (var job=0;job<work_obj.jobs.length;job++) {
         var newLocation = work_obj.jobs[job].location;
         locationArray.push(newLocation);
     }
     return locationArray;
 }

 $("#mapDiv").append(googleMap);
