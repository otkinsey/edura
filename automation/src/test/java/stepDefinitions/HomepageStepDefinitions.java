package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.Homepage;
import pageObjects.UrlLaunchPage;

public class HomepageStepDefinitions {
	
	WebDriver driver;

	TestContext testContext;
	Homepage home;
	UrlLaunchPage urlLaunchPage;
	
	public HomepageStepDefinitions(TestContext context) {
		testContext = context;
		home = testContext.getPageObjectManager().getHomePage();
		urlLaunchPage =  testContext.getPageObjectManager().getUrlLaunchPage();
	}
	
	@Given("^I am on edura homepage")
	public void i_am_on_edura_homepage() throws Throwable{
		home.verifyHomepage();
	}
	
	@Then("^I should see header section$")
	public void i_should_see_header_section() throws Throwable{
	     home.checkHeaderSection();
	}
	
	@Then("^I should see scrolling images section$")
	public void i_should_see_scrolling_images_section() throws Throwable{
		home.checkScrollingImagesSection();
	}
	
	@Then("^I should see Our Services section$")
	public void i_should_see_Our_Services_Section() throws Throwable{
		home.checkOurServicesSection();
	}
	
	@Then("^I should see About Us section$")
	public void i_should_see_About_Us_section() throws Throwable{
		home.checkAboutUsSection();
	}
	
	@Then("I should see Our partners section$")
	public void i_should_see_Our_partners_section() throws Throwable{
		home.checkOurPartnersSection();
	}
	
	@Then("^I should see Get inspired section$")
	public void i_should_see_Get_inspired_section() throws Throwable{
		home.checkGetInspiredSection();
	}
	
	@Then("^I should see Stay connected section$")
	public void i_should_see_Stay_connected_section() throws Throwable{
		home.checkStayConnectedSection();
	}
	
	@Then("^I should see footer section$")
	public void i_should_see_footer_section() throws Throwable{
		home.checkFooterSection();
	}
	
	@When("^I view header section$")
	public void i_view_header_section() throws Throwable{
		Assert.assertTrue("Header section is not displayed", home.headerSection.isDisplayed());
	}
	
	@Then("^I should see Edura logo")
	public void i_should_see_Edura_logo() throws Throwable{
		Assert.assertTrue("Edura logo is not displayed",home.eduraLogo.isDisplayed());
	}
	
	@Then("^I should see Assessment Training and Resources links$")
	public void i_should_see_Assessment_Training_and_Resources_links() throws Throwable{
		Assert.assertTrue("Assessment link is not displayed", home.assessmentLink.isDisplayed());
		Assert.assertTrue("Training link is not displayed", home.trainingLink.isDisplayed());
		Assert.assertTrue("Resources link is not displayed", home.resourcesLink.isDisplayed());
	}
	
	@Then("^I should see Sign in and Sign Up link$")
	public void i_should_see_Sign_in_and_Sign_Up_link() throws Throwable{
		Assert.assertTrue("Sign Up link is not displayed", home.signUpLink.isDisplayed());
		Assert.assertTrue("Sign In link is not displayed", home.signInLink.isDisplayed());
	}
	
	@Then("^I should see social media icons$")
	public void i_should_see_social_media_icons() throws Throwable{
		Assert.assertTrue("Social media icons is not displayed", home.socialMediaLinks.isDisplayed());
	}
	
	@Then("^I should see view courses link$")
	public void i_should_see_view_courses_link() throws Throwable{
		Assert.assertTrue("View Courses Button is not displayed", home.viewCoursesButton.isDisplayed());
	}
	
	@When("^I click on Assessment link$")
	public void i_click_on_Assessment_link() throws Throwable{
		home.clickAssessmentLink();
	}	
	
	@When("^I click on training link$")
	public void i_click_on_training_link() throws Throwable{
		home.clickTrainingLink();
	}
	
	@Then("^I should see dropdown menu$")
	public void i_should_see_dropdown_menu() throws Throwable{
		Assert.assertTrue("Public link is displayed",home.publicTrainingLink.isDisplayed());
		Assert.assertTrue("Corporate link is displayed",home.corporateLink.isDisplayed());
		Assert.assertTrue("Upcoming Courses link is displayed",home.upcomingCoursesLink.isDisplayed());
	}
	
	@When("^I view Scrolling images section$")
	public void i_view_scrolling_images_section() throws Throwable{
		Assert.assertTrue("Scrolling images section is not displayed", home.scrollingImagesSection.isDisplayed());
	}
	
	@Then("^I should see background image$")
	public void i_should_see_background_image() throws Throwable{
		Assert.assertTrue("Background image is not displayed", home.scrollingBackgroundImage.isDisplayed());
	}
	
	@Then("^I should see title description and button displayed$")
	public void i_should_see_title_description_and_button_displayed() throws Throwable{
		Assert.assertTrue("Title is not displayed", home.scrollingSectionTitle.isDisplayed());
		Assert.assertTrue("Description is not displayed", home.scrollingSectionDescription.isDisplayed());
		Assert.assertTrue("Button is not displayed", home.scrollingSectionButton.isDisplayed());
	}
	
	@Then("^I should see scrolling carousal buttons$")
	public void i_should_see_scrolling_carousal_buttons() throws Throwable{
		Assert.assertTrue("Left carousal button is not displayed", home.leftCarousalButton.isDisplayed());
		Assert.assertTrue("Right carousal button is not displayed", home.rightCarousalButton.isDisplayed());
	}
}
