package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.TestContext;
import io.cucumber.java.en.Then;
import pageObjects.AssessmentPage;


public class AssessmentStepDefinitions {
	
	WebDriver driver;

	TestContext testContext;
	AssessmentPage assessmentPage;
	
	public AssessmentStepDefinitions(TestContext context) {
		testContext = context;
		assessmentPage = testContext.getPageObjectManager().getAssessmentPage();
	}
	
	@Then("^I should be navigated to Assessment page$")
	public void i_should_be_navigated_to_Assessment_Page() throws Throwable{
		Thread.sleep(5000);
//		String URL = home.getUrl();
//		Assert.assertTrue("Url does not consist of Assessment", URL.contains("/Assessment"));
		Assert.assertTrue("User is not navigated to Assessment Page", assessmentPage.assessmentPageTitle.isDisplayed());
	
	}
}
