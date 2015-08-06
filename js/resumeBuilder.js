/*biography object*/
var bio = {
			"name" : "Marc Anderson",
			"role" : "Aspiring Web Developer</em>",
			"contact_info" : {
								"location": "Fort Worth, Texas",
								"phone": "832-398-6724",
								"email": "marc_anderson_1981@yahoo.com",
								"github": '<a class="icons" href="https://github.com/marc1981" target="_blank"><i class="fa fa-github-square fa-3x"></i></a>',
								"linkedIn": '<a class="icons" href="https://www.linkedin.com/pub/marc-anderson/1b/325/a31" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a>',
								"facebook": '<a class="icons" href="https://www.facebook.com/marc.anderson.9843" target="_blank"><i class="fa fa-facebook-square fa-3x"></i></a>',
								"twitter": '<a class="icons" href="https://twitter.com/MarcTAnderson"><i class="fa fa-twitter-square fa-3x"></i></a>'
							},
			"bioPic" : "images/marc.jpg",
			"welcome_message" : "Fake it 'til you make it.",
			"skills" : ["Web Design", "Biological Research", "Writing", "Basic Graphic Design", "Adobe Suite"]
};

/*education object*/
var education = {

				"schools" : [
								{
									"school" : "University of Houston",
									"location" : "Houston, Texas",
									"majors" : ["Biology", " Biochemistry"],
									"degree" : "Bachelor of Science",
									"honors" : "Magna Cum Laude",
									"graduated" : "2000 - 2004",
									"school_site" : "http://www.uh.edu/"
								},

								{
									"school" : "University of Houston",
									"location" : "Houston, Texas",
									"degree" : "Ph.D.",
									"field_of_study" : "Cell Biology",
									"graduated" : "2008 - 2013",
									"dissertation" : "AN ACCOUNT OF CHEMICAL AND MECHANICAL REGULATION OF TRPC6 CHANNELS IN PODOCYTES",
									"school_site" : "http://www.uh.edu/"
								}

							]

				}


var continuingEducation = {

							"onlineCourses" : [
								{
									"title" : "Front End Web Developer Nanodegree",
									"school" : "Udacity",
									"website" : "https://www.udacity.com",
									"dates" : "July 2015 - Present",
									"url" : "https://www.udacity.com"
								},
								{
									"title" : "Introduction to Programming Nanodegree",
									"school" : "Udacity",
									"website" : "https://www.udacity.com",
									"dates" : "February 2015 - June 2015",
									"url" : "https://www.udacity.com"
								},
								{
									"title" : "Learn JavaScript and jQuery From Scratch",
									"school" : "Udemy",
									"website" : "https://www.udemy.com",
									"dates" : "June 2015",
									"url" : "https://www.udemy.com/learn-javascript-jquery-from-scratch"
								},
								{
									"title" : "The Complete Web Developer Course",
									"school" : "Udemy",
									"website" : "https://www.udemy.com",
									"dates" : "March 2015 - May 2015",
									"url" : "https://www.udemy.com/complete-web-developer-course"
								},
								{
									"title" : "Python 101",
									"school" : "Udemy",
									"website" : "https://www.udemy.com",
									"dates" : "March 2015 - April 2015",
									"url" : "https://www.udemy.com/kypython-101"
								}

							]
						}

/*work object*/
var work = {
			"jobs" : [
				{
					"employer" : "University of Houston",
					"title" : "Post Doctoral Research Associate",
					"location" : "Houston, TX",
					"dates" : "January 2013 - August 2013",
					"description" : "Electrophysiologist. Studied the chemical and mechanical gating of TRPC6 ion channels in podocytes."
				},
				{
					"employer" : "University of Houston",
					"title" : "Animal Care Assistant",
					"location" : "Houston, TX",
					"dates" : "January 2008 - July 2008",
					"description" : "Cared for lab animals, including rats, mice, rabbits, frogs, and monkeys. \
					Responsible for cleaning animals' housing units, daily feeding, and assisting the primary veterinarian."
				},
				{
					"employer" : "Texas A&M",
					"title" : "Research Assistant",
					"location" : "College Station, TX",
					"dates" : "August 2006 - July 2007",
					"description" : "Purified proteins from the gastrointestinal tract of dogs, cats, and sea lions. \
					Using solvent extraction and FPLC, obtained alpha 1 protease inhibitor from canine \
					and feline pancreas. This was then used as a diagnostic marker for gastrointestinal \
					disorders."
				}
			]
		}

/*project object*/
var projects = {
				"projects" : [
					{
						"project_name" : "Short Biography Page",
						"project_date" : "June 2015",
						"project_description" : "This was my first project for my Front End Web Development Nanodegree. It served as an introduction to HTML and basic CSS.",
						"project_image" : "images/zero_project.png"
					},
					{
						"project_name" : "Portfolio Design",
						"project_date" : "July 2015",
						"project_description" : "This a was an educational project for my Front-End Web Development Nanodegree. It was designed to demonstrate my understanding of Bootstrap and the proper placement of HTML elements.",
						"project_image" : "images/first_project.png"
					},
					{
						"project_name" : "Resume Page",
						"project_date" : "I'm assuming this will be completed in August of 2015",
						"project_description" : "You're looking at it. Whoa, that's meta.",
						"project_image" : "images/wormhole.png"
					}

				]
}
education.displayEducation = function(){
	for(school in education.schools){
		$("#education").append(HTMLschoolStart);

		var formattedschoolName = HTMLschoolName.replace("#", education.schools[school].school_site).replace("%data%", education.schools[school].school);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].graduated);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		if(education.schools[school].majors){
			var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			} else {
				var formattedschoolMajor = HTMLschoolField.replace("%data%", education.schools[school].field_of_study);
			};
		if(education.schools[school].honors){
			var formattedHonorsOrDissertation = HTMLschoolHonors.replace("%data%", education.schools[school].honors);
		} else {
			var formattedHonorsOrDissertation = HTMLschoolDissertation.replace("%data%", education.schools[school].dissertation);
		};
		$(".education-entry:last").append(formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor + formattedHonorsOrDissertation);
	};
	$('#education').append(HTMLonlineClasses);
	for(onlineCourse in continuingEducation.onlineCourses){
		$("#education").append(HTMLonlineStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("#", continuingEducation.onlineCourses[onlineCourse].url).replace("%data%", continuingEducation.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", continuingEducation.onlineCourses[onlineCourse].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", continuingEducation.onlineCourses[onlineCourse].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("#", continuingEducation.onlineCourses[onlineCourse].website).replace("%data%", continuingEducation.onlineCourses[onlineCourse].school + ' Website');
		$(".online-entry:last").append(formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL);
	};

}

education.displayEducation();


/*encapsulated function object -- used to display jobs*/
work.displayWork = function(){
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription);
	};
}

work.displayWork();

/*encapsulated function object -- used to display contact information*/
bio.displayContact = function(){
		var formattedLocation = HTMLlocation.replace("%data%", bio.contact_info.location);
		var formattedPhone = HTMLcontactGeneric.replace("%contact%", "phone").replace("%data%", bio.contact_info.phone);
		var formattedEmail = HTMLemail.replace("%data%", bio.contact_info.email);
		var formattedGithub = HTMLcontactGenericIcon.replace("%contact%", bio.contact_info.github);
		var formattedLinkedIn = HTMLcontactGenericIcon.replace("%contact%", bio.contact_info.linkedIn);
		var formattedFacebook = HTMLcontactGenericIcon.replace("%contact%", bio.contact_info.facebook);
		var formattedTwitter = HTMLcontactGenericIcon.replace("%contact%", bio.contact_info.twitter);
		$("#topContacts:last").prepend(formattedLocation + formattedPhone + formattedEmail + formattedGithub + formattedLinkedIn + formattedFacebook + formattedTwitter);
};

bio.displayContact();

/*next lines of code are to insert picture and welcome message into the header*/
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#name-role").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#name-role").append( formattedRole );

var formattedHTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
$("#name-role").append(formattedHTMLwelcomeMsg);

/*if statement used to insert skills into header*/
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	//$("#header").append(carouselPlace);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

var fomattedHTMLbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#name-pic").append(fomattedHTMLbioPic);

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    finalName = name[0] + "  " + name[1];
    return finalName;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

/*encapsulated function object -- used to display projects*/
projects.display = function(){
	for(project in projects.projects){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].project_name);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].project_date);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].project_description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].project_image);
		$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription + formattedImage);
	};
};

projects.display();
