package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.CourseDetailsPage;
import pageObjects.CoursesPage;
import pageObjects.Homepage;
import pageObjects.RegisterPage;
import pageObjects.SignInSignUpPage;
import pageObjects.UpcomingCoursesPage;

public class RegisterStepDefinition {

	WebDriver driver;
	TestContext testContext;
	Homepage home;
	RegisterPage register;
	CoursesPage courses;
	CourseDetailsPage courseDetail;
	SignInSignUpPage signIn;
	UpcomingCoursesPage upcomingCourses;
	
	public RegisterStepDefinition(TestContext context) {
		testContext = context;
		home = testContext.getPageObjectManager().getHomePage();
		register = testContext.getPageObjectManager().getRegisterPage();
		courses = testContext.getPageObjectManager().getCoursesPage();
		courseDetail = testContext.getPageObjectManager().getCourseDetailsPage();
		signIn =  testContext.getPageObjectManager().getSignInSignUpPage();
		upcomingCourses = testContext.getPageObjectManager().getUpcomingCoursesPage();
	}
	
	@Then("^I should be navigated to Register page$")
	public void i_should_be_navigated_to_register_page() throws Throwable{
		Thread.sleep(5000);
		String URL = home.getUrl();
		Assert.assertTrue("Url does not consist of Register", URL.contains("http://localhost:3000/register"));
		Assert.assertTrue("User is not navigated to Register Page", register.registerTitle.isDisplayed());
	}
	
	@Given("^I am on Register page$")
	public void i_am_on_Register_page() throws Throwable{
		home.clickTrainingLink();
		home.clickUpcomingCoursesLink();
		Select se = new Select(upcomingCourses.courseTypeFilter);
		se.selectByVisibleText("CSM - Certified Scrum Master");
		upcomingCourses.clickCourseName();
		register.navigateToRegisterPage();
		if(signIn.signInLink.isDisplayed()) {
			Thread.sleep(5000);
			signIn.clickSignInLink();
			signIn.enterEmailField();
			signIn.enterPasswordField();
			signIn.clickSignInButton();
			register.navigateToBack();
			Thread.sleep(5000);
			Select se1 = new Select(register.courseFilter);
			se1.selectByVisibleText("CSM - Certified Scrum Master");
			String course = register.courseFilter.getText();
			System.out.println(course);
			Thread.sleep(3000);
		}
		else {
			Thread.sleep(5000);
			String URL = home.getUrl();
			Select se1 = new Select(register.courseFilter);
			se.selectByVisibleText("CSM - Certified Scrum Master");
			Assert.assertTrue("Url does not consist of Register", URL.contains("http://localhost:3000/register"));
			Assert.assertTrue("User is not navigated to Register Page", register.registerTitle.isDisplayed());
		}
	
	}
	
	@Then("^I should see header image and title for register page$")
	public void i_should_see_header_image_title_for_register_page() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Header image not displayed", register.headerImage.isDisplayed());
		Assert.assertTrue("Header title is not displayed", register.registerTitle.isDisplayed());
	}
	
	@Then("^I should see registration form section$")
	public void i_should_see_registration_form_section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Registration form section is not displayed", register.registrationFormSection.isDisplayed());
	}
	
	@When("^I view registration form section$")
	public void i_view_registration_form_section() throws Throwable{
		register.registrationFormSection.isDisplayed();
	}
	
	@Then("^I should see Course registration title displayed$")
	public void i_should_see_Course_registration_title_displayed() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Course Registration title not displayed", register.courseRegistrationTitle.isDisplayed());
	}
	
	@Then("^I should see course name country mailing address State fields$")
	public void i_should_see_course_name_country_mailing_address_state_field() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Course name is not displayed", register.courseFilter.isDisplayed());
		Assert.assertTrue("Country is not displayed", register.countryField.isDisplayed());
		Assert.assertTrue("Mailing address is not displayed", register.mailingAddressField.isDisplayed());
		Assert.assertTrue("State is not displayed", register.stateField.isDisplayed());
	}
	
	@Then("^I should see zip code first name last name fields$")
	public void i_should_see_zip_code_first_name_last_name_fields() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Zip code is not displayed", register.zipcodeField.isDisplayed());
		Assert.assertTrue("First name is not displayed", register.firstNameField.isDisplayed());
		Assert.assertTrue("Last name is not displayed", register.lastNameField.isDisplayed());
	}
	
	@Then("^I should see Credit card number expiration date and CVV fields$")
	public void i_should_see_Credit_card_number_expiration_date_and_CVV_fields() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Credit card number is not displayed", register.creditCardNumber.isDisplayed());
		Assert.assertTrue("Expiration date is not displayed", register.expirationDateField.isDisplayed());
		Assert.assertTrue("CVV is not displayed", register.cvvField.isDisplayed());
	}
	
	@Then("^I should see Register and Reset button$")
	public void i_should_see_Register_and_Reset_button() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Register button is not displayed", register.registerButton.isDisplayed());
		Assert.assertTrue("Reset button is not displayed", register.resetButton.isDisplayed());
	}
	
	@When("^I enter all the fields and click on register button$")
	public void i_enter_all_the_fields_and_click_on_register_button() throws Throwable{
		Thread.sleep(3000);
		register.countryField.sendKeys("USA");
		Thread.sleep(3000);
		register.mailingAddressField.sendKeys("Fremont street");
		Thread.sleep(3000);
		register.stateField.sendKeys("MA");
		Thread.sleep(3000);
		register.zipcodeField.sendKeys("01752");
		Thread.sleep(3000);
		register.firstNameField.sendKeys("Chaitra");
		Thread.sleep(3000);
		register.lastNameField.sendKeys("Joshi");
		Thread.sleep(3000);
		register.creditCardNumber.sendKeys("1111 1111 1111 1111");
		Thread.sleep(3000);
		register.expirationDateField.sendKeys("09/26");
		Thread.sleep(3000);
		register.cvvField.sendKeys("111");
		Thread.sleep(3000);
		register.clickRegisterButton();
	}
	
	@Then("^I should see a confirmation pop up displayed$")
	public void i_should_see_a_confirmation_pop_up_displayed() throws Throwable{
		Assert.assertTrue("Confirmation pop up is not displayed", register.registerConfirmationPopUp.isDisplayed());
		Assert.assertTrue("Success label in the pop up is not displayed", register.successLabel.isDisplayed());
	}
	
	@When("^I enter details and click on reset button$")
	public void i_enter_details_and_click_on_reset_button() throws Throwable{
		Thread.sleep(3000);
		register.countryField.sendKeys("USA");
		Thread.sleep(3000);
		register.mailingAddressField.sendKeys("Fremont street");
		Thread.sleep(3000);
		register.stateField.sendKeys("MA");
		Thread.sleep(3000);
		register.zipcodeField.sendKeys("01752");
		Thread.sleep(3000);
		register.firstNameField.sendKeys("Chaitra");
		Thread.sleep(3000);
		register.lastNameField.sendKeys("Joshi");
		Thread.sleep(3000);
		register.creditCardNumber.sendKeys("1111 1111 1111 1111");
		Thread.sleep(3000);
		register.expirationDateField.sendKeys("09/26");
		Thread.sleep(3000);
		register.cvvField.sendKeys("111");
		register.clickResetButton();
	}
	
	@Then("^I should see that all the fields are reset to blank$")
	public void i_should_see_that_all_the_fields_are_reset_to_blank() throws Throwable{
		Thread.sleep(5000);
		String country = register.countryField.getText();
		Assert.assertEquals("Country field not reset", "", country);
		String mailingAddress = register.mailingAddressField.getText();
		Assert.assertEquals("Mailing address field not reset", "", mailingAddress);
		String state = register.stateField.getText();
		Assert.assertEquals("State field not reset", "", state);
		String zipcode = register.zipcodeField.getText();
		Assert.assertEquals("Zip code field not reset", "", zipcode);
		String firstname = register.firstNameField.getText();
		Assert.assertEquals("First Name field not reset", "", firstname);
		String lastName = register.lastNameField.getText();
		Assert.assertEquals("Last Name field not reset", "", lastName);
		String CreditCardno = register.creditCardNumber.getText();
		Assert.assertEquals("Credit card no field not reset", "", CreditCardno);
		String ExpirationDate = register.expirationDateField.getText();
		Assert.assertEquals("Expiration date Field field not reset", "", ExpirationDate);
		String Cvv = register.cvvField.getText();
		Assert.assertEquals("CVV field not reset", "", Cvv);	
	}
}