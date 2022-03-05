package stepDefinitions;

import org.junit.Assert;

import cucumber.TestContext;
import io.cucumber.java.en.Then;
import pageObjects.AssessmentPage;

public class AssessmentStepDefinitions{

	TestContext testContext;
	AssessmentPage assessmentPage;
	
	public AssessmentStepDefinitions(TestContext context) {
		
		testContext = context;
		assessmentPage = testContext.getPageObjectManager().getAssessmentPage();
	}
	
	@Then("^I should be navigated to Assessment page$")
	public void i_should_be_navigated_to_Assessment_Page() throws Throwable{
		String Url = assessmentPage.getPageUrl();
		Assert.assertTrue("URL does not contain assessment", Url.contains("/Assessment"));
		Assert.assertTrue("User is not navigated to Assessment Page", assessmentPage.assessmentPageTitle.isDisplayed());
	}
}