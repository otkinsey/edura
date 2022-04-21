@SignIn @Automation
Feature: Sign in Sign Up feature file


Scenario: To validate navigation to Sign in Sign up page
	Given I am on edura homepage
	When I click on sign in button in header
	Then I should be navigated to sign in page


Scenario: To validate Sign in Sign up page
	Given I am on sign in page
	Then I should see Sign in Tab
	And I should see Sign up tab


Scenario: To validate Sign up tab
	Given I am on sign in page
	When I click on Sign up tab
	Then I should see First name last name email fields
	And I should see password and verify password fields
	And I should see sign up field


Scenario: To validate all fields on sign up
	Given I am on sign up tab
	When I enter all details and click sign up
	Then I should see sign in page displayed with Sign in and Go back buttons


Scenario: To validate sign  in tab
	Given I am on sign in page
	When I enter email and password and click sign in 
	Then I should see username and log out link in header
	

Scenario: To validate forgot passwored link
	Given I am on sign in page
	When I click on forgot password
	Then I should be displayed with email field and send button