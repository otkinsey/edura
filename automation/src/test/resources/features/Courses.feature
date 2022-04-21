@Courses @Automation
Feature: Courses Feature File


Scenario: To validate courses page
	Given I am on courses page
	Then I should see header section
	And I should see footer section
	And I should see header image displayed along with title
	And I should see Dropdown filter section to the left
	And I should see the overview of the courses on the right


Scenario: To validate the Dropdown filter section
	Given I am on courses page
	When I view the dropdown section
	Then I should see course type filter
	And I should see certifying body filter
	And I should see Role filter
	And I should see clear filter link


Scenario: To validate the course type filter
	Given I am on courses page
	When I filter by course type
	Then I should see course details displayed in the overview section


Scenario: To validate the certfying body filter
	Given I am on courses page
	When I filter by certifying body
	Then I should see course details displayed in the overview section


Scenario: To validate the role filter
	Given I am on courses page
	When I filter by role
	Then I should see course details displayed in the overview section


Scenario: To validate Leadership courses
	Given I am on courses page
	When I view Leadership section
	Then I should see all leadership courses displayed 


Scenario: To validate Scrum org courses
	Given I am on courses page
	When I view Scrum org section
	Then I should see all courses provided by scrum org displayed 


Scenario: To validate Scrum Alliance courses
	Given I am on courses page
	When I view Scrum Alliance section
	Then I should see all courses provided by scrum alliance displayed


Scenario: To validate Safe courses
	Given I am on courses page
	When I view Safe section
	Then I should see all courses provided by Safe displayed


Scenario: To validate Corporate Training courses
	Given I am on courses page
	When I view corporate trainings section
	Then I should see all courses provided by corporate trainings displayed


Scenario: To validate courses details
	Given I am on courses page
	When I see overview sections
	Then I should see leadership safe scrum org scrum alliance and corporate training sections

#
#Scenario: To validate course link
#	Given I am on courses page
#	When I click on course name link
#	Then I should be navigated to course details page