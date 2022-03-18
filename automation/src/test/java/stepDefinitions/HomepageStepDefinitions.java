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
	
	@When("^I view Our Services section$")
	public void i_view_Our_Services_section() throws Throwable{
		Assert.assertTrue("Our services section is not displayed", home.ourServicesSection.isDisplayed());
	}
	
	@Then("^I should see Our Services Title$")
	public void i_should_see_Our_Services_Title() throws Throwable{
		Assert.assertTrue("Our services title is not displayed", home.ourServicesTitle.isDisplayed());
	}
	
	@Then("^I should see Assessment service and Courses Service images$")
	public void i_should_see_Assessment_service_and_Courses_Service_images() throws Throwable{
		Assert.assertTrue("Assessment image in our services is not displayed", home.ourServiceAssessmentImage.isDisplayed());
		Assert.assertTrue("Courses image in our services is not displayed", home.ourServiceCoursesImage.isDisplayed());
	}
	
	@Then("^I should see Assessment and Courses subtitles$")
	public void i_should_see_Assessment_and_Courses_subtitles() throws Throwable{
		Assert.assertTrue("Assessment subtitle in our services is not displayed", home.ourServicesAssessmentSubtitle.isDisplayed());
		Assert.assertTrue("Courses subtitle in our services is not displayed", home.ourServicesCoursesSubtitle.isDisplayed());
	}
	
	@Then("^I should see Assessment and courses description$")
	public void i_should_see_Assessment_and_courses_description() throws Throwable{
		Assert.assertTrue("Assessment description in our services is not displayed", home.ourServicesAssessmentDescription.isDisplayed());
		Assert.assertTrue("Courses description in our services is not displayed", home.ourServicesCoursesDescription.isDisplayed());
	}
	
	@Then("^I should see Assessment and courses learn more link$")
	public void i_should_see_Assessment_and_courses_learn_more_link() throws Throwable{
		Assert.assertTrue("Assessment learn more link in our services is not displayed", home.ourServicesAssessmentLearnMoreLink.isDisplayed());
		Assert.assertTrue("Courses learn more link in our services is not displayed", home.ourServicesCoursesLearnMoreLink.isDisplayed());
	}
	
	@When("^I click on assessment learn more link$")
	public void i_click_on_assessment_learn_more_link() throws Throwable{
		home.clickAssessmentLearnMoreLink();
	}
	
	@When("^I click on courses learn more link")
	public void i_click_on_courses_learn_more_link() throws Throwable{
		home.clickCoursesLearnMoreLink();
	}
	
	@When("^I view About Us section$")
	public void i_view_About_Us_section() throws Throwable{
		Assert.assertTrue("About us section is not displayed", home.aboutUsSection.isDisplayed());
	}
	
	@Then("^I should see About Us title is displayed$")
	public void i_should_see_About_Us_title_is_displayed() throws Throwable{
		Assert.assertTrue("About us title is not displayed", home.aboutUsTitle.isDisplayed());
	}

	@Then("^I should see Who We are button is displayed$")
	public void i_should_see_Who_We_are_button_is_displayed() throws Throwable{
		Assert.assertTrue("Who we are button is not displayed", home.whoWeAreButton.isDisplayed());
	}
	
	@Then("^I should see What we do button is displayed$")
	public void i_should_see_What_we_do_button_is_displayed() throws Throwable{
		Assert.assertTrue("What we do button is not displayed", home.whatWeDoButton.isDisplayed());
	}
	
	@Then("^I should see Contact Us button is displayed$")
	public void i_should_see_Contact_Us_button_is_displayed() throws Throwable{
		Assert.assertTrue("Contact Us button is not displayed", home.contactUsButton.isDisplayed());
	}
	
	@Then("^I should see description displayed to right of the buttons$")
	public void i_should_see_description_displayed_to_right_of_the_button() throws Throwable{
		Assert.assertTrue("Description is not displayed", home.aboutUsDescription.isDisplayed());
	}
	
	@When("^I click on Who Are we button$")
	public void i_click_on_Who_Are_we_button() throws Throwable{
		home.clickWhoWeAreButton();

	}
	
	@Then("^The description should show subtitle who are we$")
	public void i_description_should_show_subtitle_who_are_we() throws Throwable{
		Assert.assertTrue("Subtitle is not displayed", home.whoWeAreSubtitle.isDisplayed());
	}
	
	@Then("^The details about who we are should be displayed$")
	public void i_details_about_who_we_are_should_be_displayed() throws Throwable{
		Assert.assertTrue("Who we are details is not displayed", home.whoWeAreDescription.isDisplayed());
	}
	
	@When("^I click on What we do button$")
	public void i_click_on_What_we_do_button() throws Throwable{
		home.clickWhatWeDoButton();
	}
	
	@Then("^The description should show subtitle what we do$")
	public void The_description_should_show_subtitle_what_we_do() throws Throwable{
		Assert.assertTrue("What we do subtitle is not displayed", home.whatWeDoSubtitle.isDisplayed());
	}
	
	@Then("The details about what we do should be displayed$")
	public void The_details_about_what_we_do_should_be_displayed() throws Throwable{
		Assert.assertTrue("What we do description is not displayed", home.whatWeDoDescription.isDisplayed());
	}
	
	@When("^I click on contact us button$")
	public void i_click_on_contact_us_button() throws Throwable{
		home.clickContactUsButton();
	}
	
	@When("^I view Our Partners section$")
	public void i_view_Our_Parnetrs_Section() throws Throwable{
		Assert.assertTrue("Our Partners section is not displayed", home.ourPartnersSection.isDisplayed());
	}
	
	@Then("^I should see Our Partner title displayed$")
	public void i_should_see_Our_Partner_title_displayed() throws Throwable{
		Assert.assertTrue("Our Partners title is not displayed", home.ourPartnersTitle.isDisplayed());
	}
	
	@Then("^I should see scrum org logo displayed$")
	public void i_should_see_scrum_org_logo_displayed() throws Throwable{
		Assert.assertTrue("Scrum.org logo is not displayed", home.scrumOrgLogo.isDisplayed());
	}
	
	@Then("^I should see scrum alliance logo displayed$")
	public void i_should_see_scrum_alliance_logo_displayed() throws Throwable{
		Assert.assertTrue("Scrum Alliance logo is not displayed", home.scrumAllianceLogo.isDisplayed());
	}
	
	@Then("^I should see SAFE agile logo displayed$")
	public void i_should_see_SAFE_agile_logo_displayed() throws Throwable{
		Assert.assertTrue("Safe logo is not displayed", home.safeLogo.isDisplayed());
	}
	
	@When("^I click on Scrum org logo$")
	public void i_click_on_Scrum_org_logo() throws Throwable{
		home.clickScrumOrgLogo();
	}
	
	@Then("^I should be navigated to scrum org page$")
	public void i_should_be_navigated_to_scrum_org_page() throws Throwable{
		System.out.println("Executing then statement after performing click operation");
		Thread.sleep(10000);
		String Url = home.getUrl();
		Assert.assertTrue("User not navigated to Scrum org website", Url.contains("https://www.scrum.org"));
	}
	
	@When("^I click on Scrum alliance logo$")
	public void i_click_on_Scrum_alliance_logo() throws Throwable{
		home.clickScrumAllianceLogo();
	}
	
	@Then("^I should be navigated to scrum alliance page$")
	public void i_should_be_navigated_to_scrum_alliance_page() throws Throwable{
		String Url = home.getUrl();
		Assert.assertTrue("User not navigated to Scrum Alliance website", Url.contains("https://www.scrumalliance.org/"));
	}
	
	@When("^I click on Safe agile logo$")
	public void i_click_on_Safe_agile_logo() throws Throwable{
		home.clickSafeLogo();
	}
	
	@Then("^I should be navigated to safe agile page$")
	public void i_should_be_navigated_to_safe_agile_page() throws Throwable{
		String Url = home.getUrl();
		Assert.assertTrue("User not navigated to Safe website", Url.contains("https://www.scaledagileframework.com/"));
	}
	
	@When("^I view get inspired section$")
	public void i_view_get_inspired_section() throws Throwable{
		Assert.assertTrue("Get inspired section is not displayed", home.getInspiredSection.isDisplayed());
	}
	
	@Then("^I should see Get inspired title$")
	public void i_should_see_Get_inspired_title() throws Throwable{
		Assert.assertTrue("Get inspired title is not displayed", home.getInspiredTitle.isDisplayed());
	}
	
	@Then("^I should see the reviews displayed$")
	public void i_should_see_the_reviews_displayed() throws Throwable{
		Assert.assertTrue("Get inspired reviews is not displayed", home.getInspiredReviews.isDisplayed());
	}
	
	@Then("^I should see left and right carousal buttons$")
	public void i_should_see_left_and_right_carousal_buttons() throws Throwable{
		Assert.assertTrue("Get inspired left carousal is not displayed", home.getInspiredLeftSliderCarousal.isDisplayed());
		Assert.assertTrue("Get inspired right carousal is not displayed", home.getInspiredRightSliderCarousal.isDisplayed());
	}
	
	@When("^I view Stay Connected section$")
	public void i_view_Stay_Connected_section() throws Throwable{
		Assert.assertTrue("Stay Connected section is not displayed", home.stayConnectedSection.isDisplayed());
	}
	
	@Then("^I should see Stay Connected title displayed$")
	public void i_should_see_stay_connected_title_displayed() throws Throwable{
		Assert.assertTrue("Stay Connected title is not displayed", home.stayConnectedTitle.isDisplayed());
	}
	
	@Then("^I should see First name and Last name field displayed$")
	public void i_should_see_First_name_and_Last_name_field_displayed() throws Throwable{
		Assert.assertTrue("First name in Stay Connected is not displayed", home.firstNameField.isDisplayed());
		Assert.assertTrue("Last name in Stay Connected is not displayed", home.lastNameField.isDisplayed());
	}
	
	@Then("^I should see email Address field displayed$")
	public void i_should_see_email_Address_field_displayed() throws Throwable{
		Assert.assertTrue("Email Address in Stay Connected is not displayed", home.emailAddressField.isDisplayed());
	}
	
	@Then("^I should see checkbox for I am permitting to contact me$")
	public void i_should_see_checkbox_for_I_am_permitting_to_contact_me() throws Throwable{
		Assert.assertTrue("Checkbox for I am permitting to contact me in Stay Connected is not displayed", home.checkBox.isDisplayed());
	}
	
	@Then("^I should see Sign Up button$")
	public void i_should_see_Sign_Up_button() throws Throwable{
		Assert.assertTrue("Sign Up button in Stay Connected is not displayed", home.stayConnectedSignUpButton.isDisplayed());
	}
	
	@When("^I view footer section$")
	public void i_view_footer_section() throws Throwable{
		Assert.assertTrue("Footer is not displayed", home.footerSection.isDisplayed());
	}
	
	@Then("^I should see logo displayed$")
	public void i_should_see_logo_displayed() throws Throwable{
		Assert.assertTrue("Footer logo is not displayed", home.footerLogo.isDisplayed());
	}
	
	@Then("^I should see Related links section displayed$")
	public void i_should_see_Related_links_section_displayed() throws Throwable{
		Assert.assertTrue("Related links section in footer is not displayed", home.relatedLinkSection.isDisplayed());
	}
	
	@Then("^I should see Follow us links displayed with social media icons$")
	public void i_should_see_Follow_us_links_displayed_with_social_media_icons() throws Throwable{
		Assert.assertTrue("Follow us links with social media icons in footer is not displayed", home.followUsLinks.isDisplayed());
	}
}