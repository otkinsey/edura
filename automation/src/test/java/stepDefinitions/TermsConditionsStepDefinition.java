package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pageObjects.Homepage;
import pageObjects.TermsConditionPage;

public class TermsConditionsStepDefinition {
	
	WebDriver driver;
	Homepage home;
	TestContext testContext;
	TermsConditionPage terms;
	
	public TermsConditionsStepDefinition(TestContext context) {
		testContext = context;
		terms = testContext.getPageObjectManager().getTermsConditionsPage();
		home = testContext.getPageObjectManager().getHomePage();
	}
	
	@Given("^I am on terms and conditions page$")
	public void i_am_on_terms_and_conditions_page() throws Throwable{
		terms.navigateToTermsCondition();
	}

	@Then("^I should see header image with title for terms and conditions page$")
	public void i_should_see_header_image_with_title_for_terms_and_conditions_page() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Header image is not displayed", terms.headerImage.isDisplayed());
		Assert.assertTrue("Title is not displayed", terms.title.isDisplayed());
	}
	
	@Then("^I should see description about various Terms and condition on the page$")
	public void i_should_see_description_about_various_Terms_and_condition_on_the_page() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Description is not displayed", terms.description.isDisplayed());
	}
	
	@Then("^I should see scroll to top icon the page$")
	public void i_should_see_scroll_to_top_icon_page() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Scroll to top is not displayed", terms.scrollToTopIcon.isDisplayed());
	}
}
