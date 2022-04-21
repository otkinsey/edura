@ContactUs @Automation
Feature: Contact Us Feature File


#Scenario: To validate navigation to Contact Us page from homepage
#	Given I am on edura homepage
#	When I click on Contact us in footer
#	Then I should be navigated to contact us page


Scenario: To validate contact us page sections
	Given I am on contact us page
	Then I should see header image with title for Contact us
	And I should see contact us details section
	And I should see contact us form


Scenario: To validate Contact us details section
	Given I am on contact us page
	When I view contact us details section
	Then I should see edura logo and address
	And I should see phone and timing displayed


Scenario: To validate contact us form
	Given I am on contact us page
	When I view contact us form
	Then I should see firstname lastname email fields
	And I should subject and message fields
	And I should see send button


#Scenario: To validate entering conatct us form
#	Given I am on contact us page
#	When I enter all the fields in contact us form and submit
#	Then I should see confirmation pop up box
	