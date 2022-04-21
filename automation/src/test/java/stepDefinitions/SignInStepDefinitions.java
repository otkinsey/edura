package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.CoursesPage;
import pageObjects.Homepage;
import pageObjects.SignInSignUpPage;

public class SignInStepDefinitions {

	WebDriver driver;
	Homepage home;
	CoursesPage courses;
	TestContext testContext;
	SignInSignUpPage signIn;
	
	
	public SignInStepDefinitions(TestContext context) {
		testContext = context;
		home = testContext.getPageObjectManager().getHomePage();
		courses = testContext.getPageObjectManager().getCoursesPage();
		signIn = testContext.getPageObjectManager().getSignInSignUpPage();
	}
	
	@When("^I click on sign in button in header$")
	public void i_click_on_sign_in_button_in_header() throws Throwable{
		home.clickSignInLink();
	}
	
	@Then("^I should be navigated to sign in page$")
	public void i_should_be_navigated_to_sign_in_page() throws Throwable{
		Thread.sleep(3000);
		String URL = home.getUrl();
		Assert.assertTrue("Url does not consist of Sign in", URL.contains("http://localhost:3000/sign_in"));
		Assert.assertTrue("User is not navigated to Sign In page", signIn.signInPage.isDisplayed());
	}
	
	@Given("^I am on sign in page$")
	public void i_am_on_sign_in_page() throws Throwable{
		Thread.sleep(3000);
		home.clickSignInLink();
	}
	
	@Then("^I should see Sign in Tab$")
	public void i_should_see_Sign_in_Tab() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Sign In tab is not displayed", signIn.signInTab.isDisplayed());
	}
	
	@Then("^I should see Sign up tab$")
	public void i_should_see_Sign_up_tab() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Sign Up tab is not displayed", signIn.signUpTab.isDisplayed());
	}
	
	@When("^I click on Sign up tab$")
	public void i_click_on_Sign_up_tab() throws Throwable{
		Thread.sleep(3000);
		signIn.clickSignUpTab();
	}
	
	@Then("^I should see First name last name email fields$")
	public void i_should_see_First_name_last_name_email_field() throws Throwable{
		Assert.assertTrue("First Name is not displayed", signIn.firstName.isDisplayed());
		Assert.assertTrue("Last Name is not displayed", signIn.lastName.isDisplayed());
		Assert.assertTrue("Email Field is not displayed", signIn.emailAddress.isDisplayed());
	}
	
	@Then("^I should see password and verify password fields$")
	public void i_should_see_password_and_verify_password_field() throws Throwable{
		Assert.assertTrue("Password is not displayed", signIn.password.isDisplayed());
		Assert.assertTrue("Verify Password is not displayed", signIn.verifyPassword.isDisplayed());
	}
	
	@Then("^I should see sign up field$")
	public void i_should_see_sign_up_field() throws Throwable{
		Assert.assertTrue("Sign up is not displayed", signIn.signUpButton.isDisplayed());
	}
	
	@Given("^I am on sign up tab$")
	public void i_am_on_sign_up_tab() throws Throwable{
		home.clickSignInLink();
		signIn.clickSignUpTab();
	}
	
	@When("^I enter all details and click sign up$")
	public void i_enter_all_details_and_click_sign_up() throws Throwable{
		Thread.sleep(3000);
		signIn.firstName.sendKeys("Okoa");
		Thread.sleep(3000);
		signIn.lastName.sendKeys("Kinsey");
		Thread.sleep(3000);
		signIn.emailAddress.sendKeys("test123@gmail.com");
		Thread.sleep(3000);
		signIn.password.sendKeys("password");
		Thread.sleep(3000);
		signIn.verifyPassword.sendKeys("password");
		Thread.sleep(3000);
		signIn.clickSignUpButton();		
	}
	
	@Then("^I should see sign in page displayed with Sign in and Go back buttons$")
	public void i_should_see_sign_in_page_displayed_with_Sign_in_and_Go_back_button() throws Throwable{
		Thread.sleep(5000);
		Assert.assertTrue("Sign in button is not displayed", signIn.signIn.isDisplayed());
		Assert.assertTrue("Go back button is not displayed", signIn.goBackButton.isDisplayed());
	}
	
	@When("^I enter email and password and click sign in$")
	public void i_enter_email_and_password_and_click_sign_in() throws Throwable{
		Thread.sleep(3000);
		signIn.enterEmailField();
		Thread.sleep(3000);
		signIn.enterPasswordField();
		Thread.sleep(3000);
		signIn.clickSignInButton();
	}
	
	@Then("^I should see username and log out link in header$")
	public void i_should_see_username_and_log_out_link_in_header() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Username and Log out link is not displayed", signIn.userGreeting.isDisplayed());
	}
	
	@When("^I click on forgot password$")
	public void i_click_on_forgot_password() throws Throwable{
		Thread.sleep(3000);
		signIn.clickForgotPassword();
	}
	
	@Then("^I should be displayed with email field and send button$")
	public void i_should_be_displayed_with_email_field_and_send_button() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Email address Field on forgot password form is not displayed", signIn.forgotPasswordEmail.isDisplayed());
		Assert.assertTrue("Send button on forgot password form is not displayed", signIn.forgotPasswordSend.isDisplayed());
	}
	
	@When("^I click forgot password and submit email address$")
	public void i_click_forgot_password_and_submit_email_address() throws Throwable{
		Thread.sleep(3000);
		signIn.clickForgotPassword();
		Thread.sleep(3000);
		signIn.forgotPasswordEmail.sendKeys("chaitraj8@gmail.com");
		Thread.sleep(3000);
		signIn.clickSend();
	}
}
