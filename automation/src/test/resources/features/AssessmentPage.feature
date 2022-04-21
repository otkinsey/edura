@Assessments @Automation
Feature: Assessment Feature File


Scenario: To validate Sections in Assessment page
	Given I am on Assessment page
	Then I should see header section
	And I should see footer section
	And I should see header image and title
	And Why Assessment sections is displayed
	And What are the different types of Assessment Section is displayed


Scenario: To validate Why Assessment section
	Given I am on Assessment page
	When I view Why Assessment section
	Then I should see title and description
	And  I should see contact us button


Scenario: To validate What are the different types of Assessment
	Given I am on Assessment page
	When I view What are different types of Assessment section
	Then I should see there Leadership Assessment section
	And I should see Organization Assessment section
	And I should see Portfolio Assessment section
	And I should see Program Assessment section
	And I should see Team Assessment section
	And I should see Individual Role or Talent section
	And I should see contact us below what are different types of Assessment section


Scenario: To validate Leadership Assessment section
	Given I am on Assessment page
	When I view Leadership Assessment section
	Then I should see leadership title and description
	And I should see leadership image

	
Scenario: To validate Organization Assessment section
	Given I am on Assessment page
	When I view Organization Assessment section
	Then I should see organization title and description
	And I should see organization image

	
Scenario: To validate Portfolio Assessment section
	Given I am on Assessment page
	When I view Portfolio Assessment section
	Then I should see portfolio title and description
	And I should see portfolio image


Scenario: To validate Program Assessment section
	Given I am on Assessment page
	When I view Program Assessment section
	Then I should see program title and description
	And I should see program image


Scenario: To validate Team Assessment section
	Given I am on Assessment page
	When I view Team Assessment section
	Then I should see team title and description
	And I should see team image


Scenario: To validate Individual Role or Talent section
	Given I am on Assessment page
	When I view Individual Role or Talent section
	Then I should see individual role title and description
	And I should see individual role image


#Scenario: To validate navigation of contact us button
#	Given I am on Assessment page
#	When I click on contact us button on Assessment page
#	Then I should be navigated to contact us page