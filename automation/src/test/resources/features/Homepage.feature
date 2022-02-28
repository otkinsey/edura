@Homepage
Feature: Homepage Feature file

	Scenario: To check all sections of homepage are displayed
		Given I am on edura homepage
		Then I should see header section
		And I should see scrolling images section
		And I should see Our Services section
		And I should see About Us section
		And I should see Our partners section
		And I should see Get inspired section
		And I should see Stay connected section
		And I should see footer section

	Scenario: To validate header section
		Given I am on edura homepage
		When I view header section
		Then I should see Edura logo
		And I should see Assessment Training and Resources links
		And I should see Sign in and Sign Up link
		And I should see social media icons
		And I should see view courses link

	Scenario: Clicking on Assessment Link
		Given I am on edura homepage
		When I view header section
		And I click on Assessment link
		Then I should be navigated to Assessment page

	Scenario: Click on Training Link
		Given I am on edura homepage
		When I view header section
		And I click on training link
		Then I should see dropdown menu
		
	Scenario: To Validate Scrolling Image section
		Given I am on edura homepage
		When I view Scrolling images section
		Then I should see background image
		And I should see title description and button displayed
		And scrolling carousal buttons
		
	Scenario: To validate our services section
		Given I am on edura homepage
		When I view Our Services section 
		Then I should see Our Services Title
		And I should see Assessment service and Courses Service images
		And I should see Assessment and Courses subtitles
		And I should see Assessment and courses description
		And I should see Assessment and courses learn more link

		