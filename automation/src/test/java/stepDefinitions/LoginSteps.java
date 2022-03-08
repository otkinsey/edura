package stepDefinitions;

import org.junit.Assert;

import cucumber.TestContext;
import enums.Context;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import managers.FileReaderManager;
import pageObjects.LoginPage;
import pageObjects.UrlLaunchPage;
import testDataTypes.TestData;

public class LoginSteps {
	TestContext testContext;
	UrlLaunchPage urlLaunchPage;
	LoginPage loginPage;

	public LoginSteps(TestContext context) {
		testContext = context;
		loginPage = testContext.getPageObjectManager().getLoginPage();
		urlLaunchPage =  testContext.getPageObjectManager().getUrlLaunchPage();
	}
	
	@Given("^I am on gmail login page$")
	public void i_am_on_gmail_login_page() {
		loginPage.pageTitlePresent();
	}
	
	@When("^I enter \"([^\"]*)\" email and password and sign in$")
	public void i_enter_email_and_password_and_sign_in(String user) {
		TestData test = FileReaderManager.getInstance().getJsonReader().getUserByName(user);
		System.out.println(test.emailAddress);
		System.out.println(test.password);
		loginPage.enterEmailAddress(test);	
		loginPage.enterPassword(test);
		loginPage.clickLoginButton();
		System.out.println("Login successfull");
		testContext.scenarioContext.setContext(Context.FIRST_NAME, "Chaitra");
	}
	
	@Then("I should see protect your account box$")
	public void i_should_see_protect_your_account_box() {
		String name = (String)testContext.scenarioContext.getContext(Context.FIRST_NAME);
		Assert.assertEquals("Both are matching", "Chaitra", name);
		loginPage.verifyProtectYourAccount();
	}
}
