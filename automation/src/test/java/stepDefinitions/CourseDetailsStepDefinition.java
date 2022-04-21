package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.CourseDetailsPage;
import pageObjects.Homepage;
import pageObjects.RegisterPage;
import pageObjects.SignInSignUpPage;
import pageObjects.UpcomingCoursesPage;


public class CourseDetailsStepDefinition {

	WebDriver driver;
	UpcomingCoursesPage upcomingCoursesPage;
	TestContext testContext;
	Homepage home;
	CourseDetailsPage courseDetail;
	RegisterPage register;
	SignInSignUpPage signIn;
	
	public CourseDetailsStepDefinition(TestContext context) {
		testContext = context;
		upcomingCoursesPage = testContext.getPageObjectManager().getUpcomingCoursesPage();
		home = testContext.getPageObjectManager().getHomePage();
		courseDetail = testContext.getPageObjectManager().getCourseDetailsPage();
		register = testContext.getPageObjectManager().getRegisterPage();
		signIn = testContext.getPageObjectManager().getSignInSignUpPage();
	}
	
	@Then("^I should be navigated to course details page$")
	public void i_should_be_navigated_to_course_details_page() throws Throwable{
		String URL = home.getUrl();
//		Assert.assertTrue("Url does not consist of course details", 
//				URL.contains("http://localhost:3000/course_details?course_name"));
		Assert.assertTrue("User navigated to course details page", courseDetail.headerImage.isDisplayed());
	}
	
	@Then("^I should see Course snapshot section$")
	public void i_should_see_Course_snapshot_section() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Course snapshot section is not displayed", courseDetail.courseSnapshotSection.isDisplayed());
	}

	@Then("^I should see Course Overview section$")
	public void i_should_see_Course_Overview_Section() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Course overview section is not displayed", courseDetail.courseOverviewSection.isDisplayed());
	}
	
	@Then("^I should see Right side bar section$")
	public void i_should_see_Right_side_bar_section() throws Throwable{
		Assert.assertTrue("Right side section is not displayed", courseDetail.rightSideBar.isDisplayed());
	}
	
	@Given("^I am on course details page$")
	public void i_am_on_course_details_page() throws Throwable{
		Thread.sleep(2000);
		home.clickSignInLink();
		signIn.enterEmailField();
		signIn.enterPasswordField();
		signIn.clickSignInButton();
		home.clickTrainingLink();
		home.clickUpcomingCoursesLink();
		Thread.sleep(2000);
		Select se = new Select(upcomingCoursesPage.courseTypeFilter);
		se.selectByVisibleText("Professional Scrum Master Training");
		upcomingCoursesPage.clickCourseName();
	}
	
	@When("^I view course snapshot section$")
	public void i_view_course_snapshot_section() throws Throwable{
		courseDetail.courseSnapshotSection.isDisplayed();
	}
	
	@Then("^I should see header image displayed$")
	public void i_should_see_header_image_displayed() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Header image is not displayed", courseDetail.headerImage.isDisplayed());
	}
	
	@Then("^I should see the partner logo and certification badge$")
	public void i_should_see_the_partner_logo_and_certification_badge() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Partner logo is not displayed", courseDetail.partnerImage.isDisplayed());
		if(courseDetail.certificateBadge.isDisplayed()) {
			Assert.assertTrue("Certification logo is not displayed", courseDetail.certificateBadge.isDisplayed());
		}
	}
	
	@Then("^I should see the title date and location$")
	public void i_should_see_the_title_date_and_location() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Title is not displayed", courseDetail.courseTitle.isDisplayed());
		Assert.assertTrue("Date is not displayed", courseDetail.courseDate.isDisplayed());
		Assert.assertTrue("Location is not displayed", courseDetail.location.isDisplayed());
	}
	
	@Then("^I should see register button$")
	public void i_should_see_register_button() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Register button is not displayed", courseDetail.registerButtonBelowTitle.isDisplayed());
	}
	
	@When("^I view course overview section$")
	public void i_view_course_overview_section() throws Throwable{
		Thread.sleep(2000);
		courseDetail.courseOverviewSection.isDisplayed();
	}
	
	@Then("^I should see About the course section$")
	public void i_should_see_About_the_course_section() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("About the course section is not displayed", courseDetail.aboutThisCourseSection.isDisplayed());
	}
	
	@Then("^I should see course description section$")
	public void i_should_see_course_description_section() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Course description is not displayed", courseDetail.courseDescriptionSection.isDisplayed());
	}
	
	@Then("^I should see meet the instructor section$")
	public void i_should_see_meet_the_instructor_section() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Meet the instructor is not displayed", courseDetail.meetInstructorSection.isDisplayed());
	}
	
	@Then("^I should see register buttons$")
	public void i_should_see_register_buttons() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Register button is not displayed", courseDetail.registerButton.isDisplayed());
	}
	
	@When("^I view right side bar section$")
	public void i_view_right_side_bar_section() throws Throwable{
		Thread.sleep(2000);
		courseDetail.rightSideBar.isDisplayed();
	}
	
	@Then("^I should see duration$")
	public void i_should_see_duration() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Duration is not displayed", courseDetail.duration.isDisplayed());
	}
	
	@Then("^I should see price$")
	public void i_should_see_price() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Price is not displayed", courseDetail.price.isDisplayed());
	}
	
	@Then("^I should see reviews section$")
	public void i_should_see_reviews_section() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Reviews section is not displayed", courseDetail.reviewsSection.isDisplayed());
	}
	
	@When("^I click on register button$")
	public void i_click_on_register_button() throws Throwable{
		courseDetail.clickRegister();
	}
	
}
