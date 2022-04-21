@Automation
@UpcomingCourses
Feature: Upcoming Courses Feature file 


Scenario: To Validate Upcoming course page
		Given I am on edura homepage
		When I click on training link
		And I click on Upcoming courses
		Then I should see Background image displayed with title Upcoming courses
		And I should see Course filters section to the left side of the page
		And I should see Calendar section with list of courses on right of the page


Scenario: To validate course filter section
		Given I am on Upcoming Courses page
		When I view course filter section
		Then I should see title as Course filters
		And I should see filters for course type certifying body and Month
		And I should see filters for City Country and Date
		And I should see Clear filter button

	
Scenario: To validate calendar section
		Given I am on Upcoming Courses page
		When I view calendar section
		Then I should see Calendar icon with title as Calendar
		And I should see columns for instructor course name location and Date


Scenario: To filter by Course type
		Given I am on Upcoming Courses page
		When I filter by course type
		Then I should see that the calendar displays courses filtered by selected course type

	
Scenario: To filter by Certifying body
		Given I am on Upcoming Courses page
		When I filter by certifying body
		Then I should see that the calendar displays courses filtered by selected certifying body

Scenario: To filter by Month
		Given I am on Upcoming Courses page
		When I filter by Month
		Then I should see that the calendar displays courses filtered by selected Month

Scenario: To filter by City
		Given I am on Upcoming Courses page
		When I filter by City
		Then I should see that the calendar displays courses filtered by selected City

Scenario: To filter by Country
		Given I am on Upcoming Courses page
		When I filter by country
		Then I should see that the calendar displays courses filtered by selected country

Scenario: To filter by Date
		Given I am on Upcoming Courses page
		When I filter by date
		Then I should see that the calendar displays courses filtered by selected date

#@sample	
#Scenario: To validate clear filter button
#		Given I am on Upcoming Courses page
#		When I apply any filter and click on clear filter button
#		Then I should see that all the filter selections are reset to Select filter option and all courses are displayed