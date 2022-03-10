package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.TestContext;
import io.cucumber.java.en.Then;
import pageObjects.ContactUsPage;
import pageObjects.Homepage;

public class ContactUsStepDefinitions {
	WebDriver driver;
	Homepage home;
	TestContext testContext;
	ContactUsPage contactUsPage;
	
	public ContactUsStepDefinitions(TestContext context) {
		testContext = context;
		contactUsPage = testContext.getPageObjectManager().getContactUsPage();
		home = testContext.getPageObjectManager().getHomePage();
	}
	
	@Then("^I should be navigated to contact us page$")
	public void i_should_be_navigated_to_contact_us_Page() throws Throwable{
//		String URL = home.getUrl();
//		Assert.assertTrue("Url does not consist of Contact", URL.contains("/contact"));
		Assert.assertTrue("User is not navigated to Assessment Page", contactUsPage.contactUsPageTitle.isDisplayed());
	}
}

