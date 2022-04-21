@TermsConditions @Automation
Feature: Terms and Conditions feature file

#Scenario: To validate navigation to terms and conditions page
#	Given I am on edura homepage
#	When I click on terms and conditions link in footer
#	Then I should be navigated to terms and conditions page

Scenario: To validate Terms and Conditions page
	Given I am on terms and conditions page
	Then I should see header image with title for terms and conditions page
	And I should see description about various Terms and condition on the page
	And I should see scroll to top icon the page