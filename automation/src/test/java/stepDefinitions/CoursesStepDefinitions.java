package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.CoursesPage;
import pageObjects.Homepage;

public class CoursesStepDefinitions {

	WebDriver driver;
	Homepage home;
	CoursesPage courses;
	TestContext testContext;
	
	
	public CoursesStepDefinitions(TestContext context) {
		testContext = context;
		home = testContext.getPageObjectManager().getHomePage();
		courses = testContext.getPageObjectManager().getCoursesPage();
	}
	
	@Then("^I should be navigated to Courses page$")
	public void i_should_be_navigated_to_courses_Page() throws Throwable{
		String Url = home.getUrl();
		Assert.assertTrue("URL does not contain courses", Url.contains("http://localhost:3000/courses"));
		Assert.assertTrue("User is not navigated to Courses Page", courses.coursesPageTitle.isDisplayed());
	}
	
	@Given("^I am on courses page$")
	public void i_am_on_courses_page() throws Throwable{
		home.clickTrainingLink();
		home.clickCoursesLink();
	}

	@Then("^I should see header image displayed along with title$")
	public void i_should_see_header_image_displayed_along_with_title() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Header image is not displayed", courses.headerImage.isDisplayed());
		Assert.assertTrue("Header title is not displayed", courses.coursesPageTitle.isDisplayed());
	}
	
	@Then("^I should see Dropdown filter section to the left$")
	public void i_should_see_Dropdown_filter_section_to_the_left() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Dropdown filter section is not displayed", courses.dropdownSection.isDisplayed());	
	}
	
	@Then("^I should see the overview of the courses on the right$")
	public void i_should_see_the_overview_of_the_Courses_on_the_right() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Course Overview section is not displayed", courses.courseOverviewSection.isDisplayed());	
	}
	
	@When("^I view the dropdown section$")
	public void i_view_the_dropdown_section() throws Throwable{
		Thread.sleep(2000);
		courses.dropdownSection.isDisplayed();
	}
	
	@Then("^I should see course type filter$")
	public void i_should_see_course_type_filter() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Course type label is not displayed", courses.courseTypeLabel.isDisplayed());
		Assert.assertTrue("Course type dropdown is not displayed", courses.courseTypeDropdown.isDisplayed());
	}
	
	@Then("^I should see certifying body filter$")
	public void i_should_see_certifying_body_filter() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Certifying Body label is not displayed", courses.certifyingBodyLabel.isDisplayed());
		Assert.assertTrue("Certifying Body dropdown is not displayed", courses.certifyingBodyDropdown.isDisplayed());
	}
	
	@Then("^I should see Role filter$")
	public void i_should_see_Role_filter() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Role label is not displayed", courses.roleLabel.isDisplayed());
		Assert.assertTrue("Role dropdown is not displayed", courses.roleDropdown.isDisplayed());
	}
	
	@Then("^I should see clear filter link$")
	public void i_should_see_clear_filter_link() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Clear filter link is not displayed", courses.clearFiltersLink.isDisplayed());
	}
	
	@Then("^I should see course details displayed in the overview section$")
	public void i_should_see_course_details_displayed_in_the_overview_section() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Selected course details is not displayed", courses.selectedCourseDetails.isDisplayed());
		Assert.assertTrue("Selected Course logo is not displayed", courses.selectedCourseLogo.isDisplayed());
		Assert.assertTrue("Selected Course link is not displayed", courses.selectedCourseLink.isDisplayed());
	}
	
	@When("^I filter by role$")
	public void i_filter_by_role() throws Throwable{
		Thread.sleep(2000);
		Select se = new Select(courses.roleDropdown);
		se.selectByVisibleText("Scrum Master");
	}
	
	@When("^I view Leadership section$")
	public void i_view_leadership_section() throws Throwable{
		Thread.sleep(2000);
		courses.leadershipSection.isDisplayed();
	}
	
	@Then("^I should see all leadership courses displayed$")
	public void i_should_see_all_leadership_courses_displayed() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Leadership title is not displayed", courses.leadershipTitle.isDisplayed());
		Assert.assertTrue("Leadership courses is not displayed", courses.leadershipTrainings.isDisplayed());
	}
	
	@When("^I view Scrum org section$")
	public void i_view_Scrum_org_section() throws Throwable{
		Thread.sleep(2000);
		courses.scrumOrgSection.isDisplayed();
	}
	
	@Then("^I should see all courses provided by scrum org displayed$")
	public void i_should_see_all_courses_provided_by_scrum_org_displayed() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Scrum org title is not displayed", courses.scrumOrgTitle.isDisplayed());
		Assert.assertTrue("Scrum org courses is not displayed", courses.scrumOrgTrainings.isDisplayed());
	}
	
	@When("^I view Scrum Alliance section$")
	public void i_view_Scrum_Alliance_section() throws Throwable{
		Thread.sleep(2000);
		courses.scrumAllianceSection.isDisplayed();
	}
	
	@Then("^I should see all courses provided by scrum alliance displayed$")
	public void i_should_see_all_courses_provided_by_scrum_alliance_displayed() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Scrum Alliance title is not displayed", courses.scrumAllianceTitle.isDisplayed());
		Assert.assertTrue("Scrum Alliance courses is not displayed", courses.scrumAllianceTrainings.isDisplayed());
	}
	
	@When("^I view Safe section$")
	public void i_view_Safe_section() throws Throwable{
		Thread.sleep(2000);
		courses.scaledAgileSection.isDisplayed();
	}
	
	@Then("^I should see all courses provided by Safe displayed$")
	public void i_should_see_all_courses_provided_by_Safe_displayed() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Sclaed Agile title is not displayed", courses.scaledAgileTitle.isDisplayed());
		Assert.assertTrue("Scaled Agile courses is not displayed", courses.scaledAgileTrainings.isDisplayed());
	}
	
	@When("^I view corporate trainings section$")
	public void i_view_corporate_trainings_section() throws Throwable{
		courses.corporateTrainingSection.isDisplayed();
	}
	
	@Then("^I should see all courses provided by corporate trainings displayed$")
	public void i_should_see_all_courses_provided_by_corporate_trainings_displayed() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Corporate Trainings title is not displayed", courses.corporateTrainingTitle.isDisplayed());
		Assert.assertTrue("Corporate Trainings courses is not displayed", courses.corporateTrainings.isDisplayed());
	}
	
	@When("^I see overview sections$")
	public void i_see_overview_sections() throws Throwable{
		Thread.sleep(2000);
		courses.courseOverviewSection.isDisplayed();
	}
	
	@Then("^I should see leadership safe scrum org scrum alliance and corporate training sections")
	public void i_should_see_leadership_safe_scrum_org_Scrum_Alliance_and_corporate_training_Section() throws Throwable{
		Thread.sleep(2000);
		Assert.assertTrue("Leadership section is not displayed", courses.leadershipSection.isDisplayed());
		Assert.assertTrue("Scaled Agile section is not displayed", courses.scaledAgileSection.isDisplayed());
		Thread.sleep(2000);
		Assert.assertTrue("Scrum Alliance section is not displayed", courses.scrumAllianceSection.isDisplayed());
		Assert.assertTrue("Scrum org section is not displayed", courses.scrumOrgSection.isDisplayed());
		Assert.assertTrue("Corporate training section is not displayed", courses.corporateTrainingSection.isDisplayed());
	}
	
	@When("^I click on course name link$")
	public void i_click_on_course_name_link() throws Throwable{
		Thread.sleep(2000);
		Select se = new Select(courses.courseTypeDropdown);
		se.selectByVisibleText("Certified Agile Leadership (CAL1)");
		courses.clickCourseLink();
	}
}

