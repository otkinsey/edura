package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
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
		Thread.sleep(3000);
		String URL = home.getUrl();
		//Assert.assertTrue("Url does not consist of Contact", URL.contains("http://localhost:3000/contact"));
		Assert.assertTrue("User is not navigated to Assessment Page", contactUsPage.contactUsPageTitle.isDisplayed());
	}
	
	@When("^I click on Contact us in footer$")
	public void i_click_on_Contact_us_in_footer() throws Throwable{
		Thread.sleep(3000);
		home.clickContactUsLink();
	}
	
	@Given("^I am on contact us page$")
	public void i_am_on_contact_us_page() throws Throwable{
		Thread.sleep(3000);
		contactUsPage.navigateToContactUs();
	}
	
	@Then("^I should see header image with title for Contact us$")
	public void i_should_see_header_image_with_title_For_Contact_us() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Header image is not displayed", contactUsPage.headerImage.isDisplayed());
		Assert.assertTrue("Title is not displayed", contactUsPage.contactUsTitle.isDisplayed());
	}
	
	@Then("^I should see contact us details section$")
	public void i_should_see_contact_us_details_section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Contact us details section is not displayed", contactUsPage.contactDetailsSection.isDisplayed());
	}
	
	@Then("^I should see contact us form$")
	public void i_should_see_contact_us_form() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Contact us form is not displayed", contactUsPage.contactForm.isDisplayed());
	}
	
	@When("^I view contact us details section$")
	public void i_view_contact_us_details_section() throws Throwable{
		contactUsPage.contactDetailsSection.isDisplayed();
	}
	
	@Then("^I should see edura logo and address$")
	public void i_should_see_edura_logo_and_address() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Edura logo is not displayed", contactUsPage.eduraLogo.isDisplayed());
		Assert.assertTrue("Address form is not displayed", contactUsPage.address.isDisplayed());
	}
	
	@Then("^I should see phone and timing displayed$")
	public void i_should_see_phone_and_timing_displayed() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Phone is not displayed", contactUsPage.phone.isDisplayed());
		Assert.assertTrue("Timing is not displayed", contactUsPage.hours.isDisplayed());
	}

	@When("^I view contact us form$")
	public void i_view_contact_us_form() throws Throwable{
		contactUsPage.contactForm.isDisplayed();
	}
	
	@Then("^I should see firstname lastname email fields$")
	public void i_should_see_firstname_lastname_email_fields() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Firstname is not displayed", contactUsPage.firstname.isDisplayed());
		Assert.assertTrue("Lastname is not displayed", contactUsPage.lastname.isDisplayed());
	}
	
	@Then("^I should subject and message fields$")
	public void i_should_subject_and_message_field() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Subject is not displayed", contactUsPage.subject.isDisplayed());
		Assert.assertTrue("Message is not displayed", contactUsPage.message.isDisplayed());
	}
	
	@Then("^I should see send button$")
	public void i_should_see_send_button() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Send button is not displayed", contactUsPage.sendButton.isDisplayed());
	}

	@When("^I enter all the fields in contact us form and submit$")
	public void i_enter_all_the_fields_in_contact_us_form_and_submit() throws Throwable{
		Thread.sleep(3000);
		contactUsPage.firstname.sendKeys("Test");
		Thread.sleep(3000);
		contactUsPage.lastname.sendKeys("Test");
		Thread.sleep(3000);
		contactUsPage.emailAddress.sendKeys("Test@123.com");
		Thread.sleep(3000);
		contactUsPage.subject.sendKeys("Test");
		Thread.sleep(3000);
		contactUsPage.message.sendKeys("Test");
		Thread.sleep(3000);
		contactUsPage.clickSendButton();
	}
	
	@Then("^I should see confirmation pop up box$")
	public void i_should_see_confirmation_pop_up_box() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Confirmation pop up box is not displayed", contactUsPage.confirmationPopUp.isDisplayed());
	}
}

