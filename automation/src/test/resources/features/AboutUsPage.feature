@AboutUs @Automation
Feature: About Us Feature File

#Scenario: To validate navigation to About Us page
#	Given I am on edura homepage
#	When I click on About us in footer
#	Then I should be navigated to About us page

Scenario: To validate About Us page sections
	Given I am on About Us page
	Then I should see about us header image and title
	And I should see Who we are section and What we do section
	And I should see Contact Us button on about us page

#Scenario: To validate navigation of contact us on about us page
#	Given I am on About Us page
#	When I click Contact us button on about us page
#	Then I should be navigated to contact us page
