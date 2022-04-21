package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;

import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.AboutUsPage;
import pageObjects.ContactUsPage;
import pageObjects.Homepage;

public class AboutUsStepDefinition {
	WebDriver driver;
	Homepage home;
	TestContext testContext;
	ContactUsPage contactUsPage;
	AboutUsPage aboutUs;
	
	public AboutUsStepDefinition(TestContext context) {
		testContext = context;
		contactUsPage = testContext.getPageObjectManager().getContactUsPage();
		home = testContext.getPageObjectManager().getHomePage();
		aboutUs =  testContext.getPageObjectManager().getAboutUsPage();		
	}
	
	@When("^I click on About us in footer$")
	public void i_click_on_About_us_in_footer() throws Throwable{
		Thread.sleep(3000);
		home.clickAboutUsLink();
	}
	
	@Then("^I should be navigated to About us page$")
	public void i_should_be_navigated_to_About_us_page() throws Throwable{
		Thread.sleep(5000);
		String URL = home.getUrl();
	//	Assert.assertTrue("Url does not consist of About us", URL.contains("http://localhost:3000/about_us"));
		Assert.assertTrue("User is not navigated to Assessment Page", aboutUs.aboutUsTitle.isDisplayed());
	}
	
	@Given("^I am on About Us page$")
	public void i_am_on_About_Us_page() throws Throwable{
		aboutUs.navigateToAboutUs( );
		Assert.assertTrue("User is not navigated to Assessment Page", aboutUs.aboutUsTitle.isDisplayed());
	}
	
	@Then("^I should see about us header image and title$")
	public void i_should_see_about_us_header_image_and_title() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Header image is not displayed", aboutUs.headerImage.isDisplayed());
		Assert.assertTrue("Title is not displayed", aboutUs.aboutUsTitle.isDisplayed());
	}
	
	@Then("^I should see Who we are section and What we do section$")
	public void i_should_see_Who_we_are_section_and_What_we_do_section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Who we are section is not displayed", aboutUs.whoWeAreTitle.isDisplayed());
		Assert.assertTrue("What we do section is not displayed", aboutUs.whatWeDoTitle.isDisplayed());
	}
	
	@Then("^I should see Contact Us button on about us page$")
	public void i_should_see_Contact_us_button_on_about_us_page() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Contact us button is not displayed", aboutUs.contactUsButton.isDisplayed());
	}

	@When("^I click Contact us button on about us page$")
	public void i_click_Contact_us_button_on_about_us_page() throws Throwable{
		Thread.sleep(3000);
		aboutUs.clickContactUsButton();
	}
}
