@CourseDetails @Automation
Feature: Course Details Page Feature File


Scenario: To validate navigation to Course Detail Page
	Given I am on Upcoming Courses page
	And I click on any one of the course link
	Then I should be navigated to course details page
	And I should see header section
	And I should see footer section


Scenario: To validate course details page section
	Given I am on Upcoming Courses page
	And I click on any one of the course link
	Then I should be navigated to course details page
	And I should see Course snapshot section
	And I should see Course Overview section
	And I should see Right side bar section


Scenario: To validate course snapshot section
	Given I am on course details page
	When I view course snapshot section
	Then I should see header image displayed
	And I should see the partner logo and certification badge
	And I should see the title date and location 
	And I should see register button

@Automation
Scenario: To validate course overview section
	Given I am on course details page
	When I view course overview section
	Then I should see About the course section
	And I should see course description section
	And I should see meet the instructor section
	And I should see register buttons


Scenario: To validate right side bar section
	Given I am on course details page
	When I view right side bar section
	Then I should see duration
	And I should see price
	And I should see reviews section


Scenario: To validate clicking on register button
	Given I am on course details page
	When I click on register button
	Then I should be navigated to Register page