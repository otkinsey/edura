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

	Scenario: To validate clicking on Training Link
		Given I am on edura homepage
		When I view header section
		And I click on training link
		Then I should see dropdown menu
		
	Scenario: To Validate Scrolling Image section
		Given I am on edura homepage
		When I view Scrolling images section
		Then I should see background image
		And I should see title description and button displayed
		And I should see scrolling carousal buttons
		
	Scenario: To validate our services section
		Given I am on edura homepage
		When I view Our Services section 
		Then I should see Our Services Title
		And I should see Assessment service and Courses Service images
		And I should see Assessment and Courses subtitles
		And I should see Assessment and courses description
		And I should see Assessment and courses learn more link

	
	Scenario: To validate Assessment learn more link navigation
		Given I am on edura homepage
		And I view Our Services section
		When I click on assessment learn more link
		Then I should be navigated to Assessment page

	
	Scenario: To validate Courses learn more link navigation
		Given I am on edura homepage
		And I view Our Services section
		When I click on courses learn more link
		Then I should be navigated to Training page

	Scenario: To validate About Us section
		Given I am on edura homepage
		When I view About Us section
		Then I should see About Us title is displayed
		And I should see Who We are button is displayed
		And I should see What we do button is displayed
		And I should see Contact Us button is displayed
		And I should see description displayed to right of the buttons

	
	Scenario: To validate Who we are in About us section
		Given I am on edura homepage
		And I view About Us section
		When I click on Who Are we button
		Then The description should show subtitle who are we
		And The details about who we are should be displayed
	
	Scenario: To validate What we do in About us section
		Given I am on edura homepage
		And I view About Us section
		When I click on What we do button
		Then The description should show subtitle what we do
		And The details about what we do should be displayed
	
	Scenario: To validate Contact us in About us section
		Given I am on edura homepage
		And I view About Us section
		When I click on contact us button
		Then I should be navigated to contact us page
		
	Scenario: To validate Our Partners Section
		Given I am on edura homepage
		When I view Our Partners section
		Then I should see Our Partner title displayed
		And I should see scrum org logo displayed
		And I should see scrum alliance logo displayed
		And I should see SAFE agile logo displayed
	
	@sample	
	Scenario: To click on Scrum.org logo
		Given I am on edura homepage
		And I view Our Partners section
		When I click on Scrum org logo
		Then I should be navigated to scrum org page
		
Scenario: To click on Scrum alliance logo
		Given I am on edura homepage
		And I view Our Partners section
		When I click on Scrum alliance logo
		Then I should be navigated to scrum alliance page
		
Scenario: To click on SAfe agile logo
		Given I am on edura homepage
		And I view Our Partners section
		When I click on Safe agile logo
		Then I should be navigated to safe agile page

Scenario: To Validate Get Inspired Section
		Given I am on edura homepage
		When I view get inspired section
		Then I should see Get inspired title
		And I should see the reviews displayed
		And I should see left and right carousal buttons

Scenario: To Validate Stay Connected Section
	    Given I am on edura homepage
		When I view Stay Connected section
		Then I should see Stay Connected title displayed
		And I should see First name and Last name field displayed
		And I should see email Address field displayed
		And I should see checkbox for I am permitting to contact me
		And I should see Sign Up button
		
Scenario: To validate footer section
		Given I am on edura homepage
		When I view footer section
		Then I should see logo displayed
		Then I should see Related links section displayed
		Then I should see Follow us links displayed with social media icons