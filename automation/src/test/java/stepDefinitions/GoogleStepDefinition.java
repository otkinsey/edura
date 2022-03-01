package stepDefinitions;

import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.GooglePage;
import pageObjects.UrlLaunchPage;

public class GoogleStepDefinition {
	
	GooglePage google;
	TestContext testContext;
	UrlLaunchPage urlLaunchPage;

	
	public GoogleStepDefinition(TestContext context) {
		testContext = context;
		google = testContext.getPageObjectManager().getGooglePage();
		urlLaunchPage =  testContext.getPageObjectManager().getUrlLaunchPage();
	}
	
	@Given("^I am on Google page$")
	public void i_am_on_Google_page() throws Throwable{
		google.verifySearchField();
	}
	
	@When("^I type for name and click search$")
	public void i_type_for_name_and_click_search() throws Throwable{
		google.enterInSearchField();
		Thread.sleep(5000);
		google.clickSearchButton();
	}
	
	@Then("^I should see search results$")
	public void i_should_see_search_results() throws Throwable{
		google.verfiySearchResults();
	}

}
