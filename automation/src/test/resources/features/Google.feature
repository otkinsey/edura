Feature: Test

@Test
Scenario: launch google and search chaitra joshi
	Given I am on Google page
	When I type for name and click search
	Then I should see search results