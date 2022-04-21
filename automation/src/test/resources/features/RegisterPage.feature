@Register @Automation
Feature: Register Feature File


Scenario: To validate Sections in Register page
	Given I am on Register page
	Then I should see header section
	And I should see footer section
	And I should see header image and title for register page
	And I should see registration form section
	

Scenario: To validate Registration form section
	Given I am on Register page
	When I view registration form section
	Then I should see Course registration title displayed
	And I should see course name country mailing address State fields
	And I should see zip code first name last name fields
	And I should see Credit card number expiration date and CVV fields
	And I should see Register and Reset button


#Scenario: To validate register button on register page
#	Given I am on Register page
#	When I enter all the fields and click on register button
#	Then I should see a confirmation pop up displayed


Scenario: To validate reset button  on register page
	Given I am on Register page
	When I enter details and click on reset button
	Then I should see that all the fields are reset to blank