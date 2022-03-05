package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.TestContext;
import io.cucumber.java.en.Then;
import pageObjects.TrainingPage;

public class TrainingStepDefinitions {
	TrainingPage trainingPage;
	TestContext testContext;
	
	
	public TrainingStepDefinitions(TestContext context) {
		testContext = context;
		trainingPage = testContext.getPageObjectManager().getTrainingPage();
	}
	
	@Then("^I should be navigated to Training page$")
	public void i_should_be_navigated_to_Training_Page() throws Throwable{
		String Url = trainingPage.getPageUrl();
		Assert.assertTrue("URL does not contain assessment", Url.contains("/Training"));
		Assert.assertTrue("User is not navigated to Assessment Page", trainingPage.trainingPageTitle.isDisplayed());
	}
}

