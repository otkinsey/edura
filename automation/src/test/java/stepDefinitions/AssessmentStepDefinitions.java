package stepDefinitions;

import org.junit.Assert;
import selenium.Wait;
import cucumber.TestContext;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pageObjects.AssessmentPage;
import pageObjects.Homepage;

public class AssessmentStepDefinitions{

	TestContext testContext;
	AssessmentPage assessmentPage;
	Wait wait;
	Homepage home;
	
	public AssessmentStepDefinitions(TestContext context) {
		testContext = context;
		assessmentPage = testContext.getPageObjectManager().getAssessmentPage();
		home = testContext.getPageObjectManager().getHomePage();
	}
	
	@Then("^I should be navigated to Assessment page$")
	public void i_should_be_navigated_to_Assessment_Page() throws Throwable{
		Thread.sleep(3000);
		String URL = home.getUrl();
		Assert.assertTrue("Url does not consist of Assessment", URL.contains("http://localhost:3000/assessment"));
		Assert.assertTrue("User is not navigated to Assessment Page", assessmentPage.assessmentPageTitle.isDisplayed());
	}
	
	@Given("^I am on Assessment page$")
	public void i_am_on_Assessment_page() throws Throwable{
		Thread.sleep(3000);
		home.clickAssessmentLink();
	}

	@Then("^I should see header image and title$")
	public void i_should_see_header_image_and_title() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Assessment header image is not displayed", assessmentPage.headerImage.isDisplayed());
		Assert.assertTrue("Assessment page title is not displayed", assessmentPage.assessmentPageTitle.isDisplayed());
	}

	@Then("^Why Assessment sections is displayed$")
	public void why_assessment_section_is_displayed() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Why Assessment section is not displayed", assessmentPage.whyAssessmentSection.isDisplayed());
	}
	
	@Then("^What are the different types of Assessment Section is displayed$")
	public void what_are_the_different_types_of_Assessment_Section_is_displayed() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("What are the different types of Assessment section is not displayed", 
				assessmentPage.whatAreTheDifferentTypesOfAssessment.isDisplayed());
	}
	
	@When("^I view Why Assessment section$")
	public void i_view_Why_Assessment_section() throws Throwable{
		assessmentPage.whyAssessmentSection.isDisplayed();
	}
	
	@Then("^I should see title and description$")
	public void i_should_see_title_and_description() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Why Assessment title is not displayed", assessmentPage.whyAssessmentTitle.isDisplayed());
		Assert.assertTrue("Why Assessment description is not displayed", assessmentPage.whyAssessmentSection.isDisplayed());
	}
	
	@Then("^I should see contact us button$")
	public void i_should_see_contact_us_button() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Contact Us button is not displayed", assessmentPage.whyAssessmentContactUs.isDisplayed());
	}
	
	@When("^I view What are different types of Assessment section$")
	public void i_view_What_are_different_types_of_Assessment_section() throws Throwable{
		assessmentPage.whatAreTheDifferentTypesOfAssessment.isDisplayed();
	}
	
	@Then("^I should see there Leadership Assessment section$")
	public void i_should_see_there_Leadership_Assessment_section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Leadership Assessment section is not displayed", assessmentPage.leadershipAssessmentSection.isDisplayed());
	}
	
	@Then("^I should see Organization Assessment section$")
	public void i_should_see_Organizational_Assessment_section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Organization Assessment section is not displayed", assessmentPage.organizationAssessmentSection.isDisplayed());
	}
	
	@Then("^I should see Portfolio Assessment section$")
	public void i_should_see_Portfolio_Assessment_section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Portfolio Assessment section is not displayed", assessmentPage.organizationAssessmentSection.isDisplayed());
	}
	
	@Then("^I should see Program Assessment section$")
	public void i_should_see_program_Assessment_Section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Program Assessment section is not displayed", assessmentPage.programAssessmentSection.isDisplayed());
	}
	
	@Then("^I should see Team Assessment section$")
	public void i_should_see_Team_Assessment_Section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Team Assessment section is not displayed", assessmentPage.teamAssessmentSection.isDisplayed());
	}
	
	@Then("^I should see Individual Role or Talent section$")
	public void i_should_see_Individual_Role_or_talent_Section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Individual role or Talent section is not displayed", assessmentPage.individualRoleSection.isDisplayed());
	}
	
	@Then("^I should see contact us below what are different types of Assessment section$")
	public void i_should_see_contact_us_below_what_are_different_types_of_Assessment_Section() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Contact us button below what are different types of Assessment section is not displayed", 
				assessmentPage.whyAssessmentContactUs.isDisplayed());
	}
	
	@When("^I view Leadership Assessment section$")
	public void i_view_Leadership_Assessment_Section() throws Throwable{
		assessmentPage.leadershipAssessmentSection.isDisplayed();
	}
	
	@Then("^I should see leadership title and description$")
	public void i_should_see_leadership_title_and_description() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Leadership title is not displayed", assessmentPage.leadershipAssessmentTitle.isDisplayed());
		Assert.assertTrue("Leadership description is not displayed", assessmentPage.leadershipAssessmentDescription.isDisplayed());
	}
	
	@Then("^I should see leadership image$")
	public void i_should_see_leadership_image() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Leadership image is not displayed", assessmentPage.leadershipAssessmentImage.isDisplayed());
	}
	
	@When("^I view Organization Assessment section$")
	public void i_view_Organization_Assessment_section() throws Throwable{
		assessmentPage.organizationAssessmentSection.isDisplayed();
	}
	
	@Then("^I should see organization title and description$")
	public void i_should_see_organization_title_and_description() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Organization title is not displayed", assessmentPage.organizationAssessmentTitle.isDisplayed());
		Assert.assertTrue("Organization description is not displayed", assessmentPage.organizationAssessmentDescription.isDisplayed());
	}
	
	@Then("^I should see organization image$")
	public void i_should_see_organization_image() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Organization image is not displayed", assessmentPage.organizationAssessmentImage.isDisplayed());
	}
	
	@When("^I view Portfolio Assessment section$")
	public void i_view_Portfolio_Assessment_section() throws Throwable{
		assessmentPage.portfolioAssessmentSection.isDisplayed();
	}
	
	@Then("^I should see portfolio title and description$")
	public void i_should_see_portfolio_title_And_Description() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Portfolio title is not displayed", assessmentPage.portfolioAssessmentTitle.isDisplayed());
		Assert.assertTrue("Portfolio description is not displayed", assessmentPage.portfolioAssessmentDescription.isDisplayed());
	}
	
	@Then("^I should see portfolio image$")
	public void i_should_see_portfolio_image() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Portfolio image is not displayed", assessmentPage.portfolioAssessmentImage.isDisplayed());
	}
	
	@When("^I view Program Assessment section$")
	public void i_view_Program_Assessment_Section() throws Throwable{
		assessmentPage.programAssessmentSection.isDisplayed(); 
	}
	
	@Then("^I should see program title and description$")
	public void i_should_see_program_title_and_description() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Program title is not displayed", assessmentPage.programAssessmentTitle.isDisplayed());
		Assert.assertTrue("Program description is not displayed", assessmentPage.programAssessmentDescription.isDisplayed());
	}
	
	@Then("^I should see program image$")
	public void i_should_see_program_image() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Program image is not displayed", assessmentPage.programAssessmentImage.isDisplayed());
	}
	
	@When("^I view Team Assessment section$")
	public void i_view_Team_Assessment_Section() throws Throwable{
		assessmentPage.teamAssessmentSection.isDisplayed();
	}
	
	@Then("^I should see team title and description$")
	public void i_should_see_team_title_and_description() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Team title is not displayed", assessmentPage.teamAssessmentTitle.isDisplayed());
		Assert.assertTrue("Team description is not displayed", assessmentPage.teamAssessmentDescription.isDisplayed());
	}
	
	@Then("^I should see team image$")
	public void i_should_see_team_image() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Team image is not displayed", assessmentPage.teamAssessmentImage.isDisplayed());
	}
	
	@When("^I view Individual Role or Talent section$")
	public void i_view_Individual_role_or_Talent_section() throws Throwable{
		assessmentPage.individualRoleSection.isDisplayed();
	}
	
	@Then("^I should see individual role title and description$")
	public void i_should_see_individual_role_title_and_description() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Individual Role title is not displayed", assessmentPage.individualRoleTitle.isDisplayed());
		Assert.assertTrue("Individual Role description is not displayed", assessmentPage.individualRoleDescription.isDisplayed());
	}
	
	@Then("^I should see individual role image$")
	public void i_should_see_individual_role_image() throws Throwable{
		Thread.sleep(3000);
		Assert.assertTrue("Team image is not displayed", assessmentPage.individualRoleImage.isDisplayed());
	}
	
	@When("^I click on contact us button on Assessment page$")
	public void i_click_on_contact_us_button_on_Assessment_page() throws Throwable{
		assessmentPage.clickContactUsButton();
	}
}