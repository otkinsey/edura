Feature: Login feature

@Login
Scenario Outline: Login to Gmail
	Given I am on gmail login page
	When I enter "<user>" email and password and sign in
	Then I should see protect your account box
	
	Examples:
	|user|
	|Chaitra|
