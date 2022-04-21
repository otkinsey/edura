package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.Homepage;
import pageObjects.UpcomingCoursesPage;

public class UpcomingCoursesStepDefinitions {
	
	WebDriver driver;
	UpcomingCoursesPage upcomingCoursesPage;
	TestContext testContext;
	Homepage home;
	
	public UpcomingCoursesStepDefinitions(TestContext context) {
		testContext = context;
		upcomingCoursesPage = testContext.getPageObjectManager().getUpcomingCoursesPage();
		home = testContext.getPageObjectManager().getHomePage();
		
	}

	@Then("^I should be navigated to upcoming Courses page$")
	public void i_should_be_navigated_to_upcoming_courses_page() throws Throwable{
		Thread.sleep(3000);
		String URL = home.getUrl();
		Assert.assertTrue("Url does not consist of Upcoming courses", URL.contains("http://localhost:3000/upcoming_courses"));
		Assert.assertTrue("User is not navigated to Upcoming courses Page", upcomingCoursesPage.upcomingCoursesHeader.isDisplayed());
	}
	
	@Then("^I should see Background image displayed with title Upcoming courses$")
	public void i_should_see_Background_image_displayed_with_title_Upcoming_courses() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Background image is not displayed", upcomingCoursesPage.backgroundImage.isDisplayed());
		Thread.sleep(3000);		
		Assert.assertTrue("Upcoming courses title is not displayed", upcomingCoursesPage.upcomingCoursesHeader.isDisplayed());
	}
	
	@Then("^I should see Course filters section to the left side of the page$")
	public void i_should_see_Course_filters_section_to_the_left_side_of_the_page() throws Throwable{
		Assert.assertTrue("Course filters section is not displayed", upcomingCoursesPage.courseFilterSection.isDisplayed());
	}
	
	@Then("^I should see Calendar section with list of courses on right of the page$")
	public void i_should_see_Calendar_section_with_list_of_courses_on_right_of_the_page() throws Throwable{
		Assert.assertTrue("Calendar section is not displayed", upcomingCoursesPage.courseFilterSection.isDisplayed());
	}
	
	@Given("^I am on Upcoming Courses page$")
	public void i_am_on_Upcoming_Courses_page() throws Throwable{
		home.clickTrainingLink();
		home.clickUpcomingCoursesLink();
		Thread.sleep(3000);
	}
	
	@When("^I view course filter section$")
	public void i_view_course_filter_section() throws Throwable{
		upcomingCoursesPage.courseFilterSection.isDisplayed();
	}
	
	@Then("^I should see title as Course filters$")
	public void i_should_see_title_as_Course_filters() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Course filters title is not displayed", upcomingCoursesPage.courseFilterTitle.isDisplayed());
	}
	
	@Then("^I should see filters for course type certifying body and Month$")
	public void i_should_see_filters_for_course_type_certifying_body_and_Month() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Course type filter is not displayed", upcomingCoursesPage.courseTypeFilter.isDisplayed());
		Assert.assertTrue("Certifying body filter is not displayed", upcomingCoursesPage.certifyingBodyFilter.isDisplayed());
		Assert.assertTrue("Month filter is not displayed", upcomingCoursesPage.monthFilter.isDisplayed());
	}
	
	@Then("^I should see filters for City Country and Date$")
	public void i_should_see_filters_for_City_Country_and_Date() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("City filter is not displayed", upcomingCoursesPage.cityFilter.isDisplayed());
		Assert.assertTrue("Country filter is not displayed", upcomingCoursesPage.countryFilter.isDisplayed());
		Assert.assertTrue("Date filter is not displayed", upcomingCoursesPage.dateFilter.isDisplayed());
	}
	
	@Then("^I should see Clear filter button$")
	public void i_should_see_Clear_filter_button() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Clear filter is not displayed", upcomingCoursesPage.clearFilterButton.isDisplayed());
	}
	
	@When("^I view calendar section$")
	public void i_view_calendar_section() throws Throwable{
		upcomingCoursesPage.courseCalendarSection.isDisplayed();
	}

	@Then("^I should see Calendar icon with title as Calendar$")
	public void i_should_see_Calendar_icon_with_title_as_Calendar() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("City filter is not displayed", upcomingCoursesPage.cityFilter.isDisplayed());
	}
	
	@Then("^I should see columns for instructor course name location and Date$")
	public void i_should_see_columns_for_instructor_course_name_location_and_Date() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Instructor column is not displayed", upcomingCoursesPage.instructorColumn.isDisplayed());
		Assert.assertTrue("Course Name column is not displayed", upcomingCoursesPage.courseNameColumn.isDisplayed());
		Assert.assertTrue("Location column is not displayed", upcomingCoursesPage.locationColumn.isDisplayed());
		Assert.assertTrue("Date column is not displayed", upcomingCoursesPage.dateColumn.isDisplayed());
	}
	
	@When("^I filter by course type$")
	public void i_filter_by_course_type() throws Throwable{
		Thread.sleep(3000);
		Select se = new Select(upcomingCoursesPage.courseTypeFilter);
		se.selectByVisibleText("CSM - Certified Scrum Master");
	}
	
	@Then("^I should see that the calendar displays courses filtered by selected course type$")
	public void i_should_see_that_the_calendar_displays_courses_filtered_by_selected_course_type() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Selected type course is displayed on the calendar section", upcomingCoursesPage.selectedCourseName.isDisplayed());
	}
	
	@When("^I filter by certifying body$")
	public void i_filter_by_certifying_body() throws Throwable{
		Thread.sleep(3000);
		Select se = new Select(upcomingCoursesPage.certifyingBodyFilter);
		se.selectByVisibleText("Edura");
	}
	
	@Then("^I should see that the calendar displays courses filtered by selected certifying body$")
	public void i_should_see_that_the_calendar_displays_courses_filtered_by_selected_Certyfying_body() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Selected type course is displayed on the calendar section",
				upcomingCoursesPage.selectedCourseName.isDisplayed());
	}

	@When("^I filter by Month$")
	public void i_filter_by_Month() throws Throwable{
		Thread.sleep(3000);
		Select se = new Select(upcomingCoursesPage.monthFilter);
		se.selectByVisibleText("October");
	}
	
	@Then("^I should see that the calendar displays courses filtered by selected Month$")
	public void i_should_see_that_the_calendar_displays_courses_filtered_by_selected_Month() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Selected type course filtered by month is displayed on the calendar section", 
				upcomingCoursesPage.selectedCourseByMonth.isDisplayed());
	}
	
	@When("^I filter by City$")
	public void i_filter_by_City() throws Throwable{
		Thread.sleep(3000);
		Select se = new Select(upcomingCoursesPage.cityFilter);
		se.selectByVisibleText("Boston");
	}
	
	@Then("^I should see that the calendar displays courses filtered by selected City$")
	public void i_should_see_that_the_calendar_displays_courses_filtered_by_selected_city() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Selected type course filtered by city is displayed on the calendar section", 
				upcomingCoursesPage.selectedCourseByCity.isDisplayed());
	}
	
	@When("^I filter by country$")
	public void i_filter_by_country() throws Throwable{
		Thread.sleep(3000);
		Select se = new Select(upcomingCoursesPage.countryFilter);
		se.selectByVisibleText("India");
	}
	
	@Then("^I should see that the calendar displays courses filtered by selected country$")
	public void i_should_see_that_the_calendar_displays_courses_filtered_by_selected_country() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Selected type course filtered by country is displayed on the calendar section", 
				upcomingCoursesPage.selectedCourseByCity.isDisplayed());
	}
	
	@When("^I filter by date$")
	public void i_filter_by_date() throws Throwable{
		Thread.sleep(3000);
		Select se = new Select(upcomingCoursesPage.dateFilter);
		se.selectByVisibleText("9/10/22");
	}
	
	@Then("^I should see that the calendar displays courses filtered by selected date$")
	public void i_should_see_that_the_calendar_displays_courses_filtered_by_selected_date() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Selected type course filtered by date is displayed on the calendar section", 
				upcomingCoursesPage.selectedByDate.isDisplayed());
	}
	
	@When("^I apply any filter and click on clear filter button$")
	public void i_apply_any_filter_and_click_on_clear_filter_button() throws Throwable{
		Thread.sleep(3000);
		Select se = new Select(upcomingCoursesPage.certifyingBodyFilter);
		se.selectByVisibleText("Edura");
		Thread.sleep(3000);
		upcomingCoursesPage.clickClearFilterButton();
	}
	
	@Then("^I should see that all the filter selections are reset to Select filter option and all courses are displayed$")
	public void i_should_see_that_the_filter_selections_are_reset_to_Select_filter_option_and_all_courses_are_displayed() throws Throwable{
		String expected = "Select Filter Option";
		Assert.assertEquals("Course Type filter is not reset", expected, upcomingCoursesPage.selectedCourseName.getText());
		Assert.assertEquals("Certifying body filter is not reset", expected, upcomingCoursesPage.selectedCourseName.getText());
		Assert.assertEquals("Month filter is not reset", expected, upcomingCoursesPage.selectedCourseByMonth.getText());
		Assert.assertEquals("City filter is not reset", expected, upcomingCoursesPage.selectedCourseByCity.getText());
		Assert.assertEquals("Country filter is not reset", expected, upcomingCoursesPage.selectedCourseByCity.getText());
		Assert.assertEquals("Date filter is not reset", expected, upcomingCoursesPage.selectedByDate.getText());
	}
	
	@When("^I click on any one of the course link$")
	public void i_click_on_any_of_the_course_link() throws Throwable{
		Thread.sleep(3000);
		Select se = new Select(upcomingCoursesPage.courseTypeFilter);
		se.selectByVisibleText("Professional Scrum Master Training");
		upcomingCoursesPage.clickCourseName();
	}
}

