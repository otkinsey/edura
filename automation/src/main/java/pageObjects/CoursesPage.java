package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import selenium.Wait;

public class CoursesPage {
	WebDriver driver;
	Wait wait;
	public CoursesPage(WebDriver driver) {
		
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(xpath = ".//h1[text()='Courses']")
	public WebElement coursesPageTitle;
	
	@FindBy(css = "div.jumbotron")
	public WebElement headerImage;
	
	@FindBy(css = "#trainings > div.filters")
	public WebElement dropdownSection;

	@FindBy(css = "#trainings > div:nth-child(2)")
	public WebElement courseOverviewSection;
	
	@FindBy(xpath = ".//label[text()='Course Type']")
	public WebElement courseTypeLabel;
	
	@FindBy(id = "filter_button_course_name")
	public WebElement courseTypeDropdown;
	
	@FindBy(xpath = ".//label[text()='Certifying body']")
	public WebElement certifyingBodyLabel;
	
	@FindBy(id = "filter_button_certifying_body")
	public WebElement certifyingBodyDropdown;
	
	@FindBy(xpath = ".//label[text()='Role']")
	public WebElement roleLabel;
	
	@FindBy(id = "filter_button_role")
	public WebElement roleDropdown;
	
	@FindBy(xpath = ".//a[text()='Clear Filters']")
	public WebElement clearFiltersLink;
	
	@FindBy(css = "div.training")
	public WebElement selectedCourseDetails;
	
	@FindBy(css = "div.training>img")
	public WebElement selectedCourseLogo;
	
	@FindBy(css = "div.training a")
	public WebElement selectedCourseLink;

	@FindBy(css = "#leadership")
	public WebElement leadershipSection;
	
	@FindBy(css = "#leadership h3")
	public WebElement leadershipTitle;
	
	@FindBy(css = "#leadership>div>div")
	public WebElement leadershipTrainings;
	
	@FindBy(css = "#scrum\\.org")
	public WebElement scrumOrgSection;
	
	@FindBy(css = "#scrum\\.org h3")
	public WebElement scrumOrgTitle;
	
	@FindBy(css = "#scrum\\.org > div.trainings_list")
	public WebElement scrumOrgTrainings;
	
	@FindBy(css = "#scaled\\ agile\\ 5\\.0")
	public WebElement scaledAgileSection;
	
	@FindBy(css = "#scaled\\ agile\\ 5\\.0 h3")
	public WebElement scaledAgileTitle;
	
	@FindBy(css ="#scaled\\ agile\\ 5\\.0 >div.trainings_list")
	public WebElement scaledAgileTrainings;
	
	@FindBy(css = "#scrum\\ alliance")
	public WebElement scrumAllianceSection;
	
	@FindBy(css = "#scrum\\ alliance h3")
	public WebElement scrumAllianceTitle;
	
	@FindBy(css = "#scrum\\ alliance >div.trainings_list")
	public WebElement scrumAllianceTrainings;
	
	@FindBy(css = "#corporate\\ trainings")
	public WebElement corporateTrainingSection;
	
	@FindBy(css = "#corporate\\ trainings h3")
	public WebElement corporateTrainingTitle;
	
	@FindBy(css = "#corporate\\ trainings >div.trainings_list")
	public WebElement corporateTrainings;

	@FindBy(css = "a.course_link")
	public WebElement courseLink;
	
	public void clickCourseLink() throws Throwable{
		wait.waitUntilObjectFound(driver, courseLink);
		String text = courseLink.getText();
		System.out.println();
		wait.clickUsingJavaScriptExecutor(driver, courseLink);
		//wait.waitUntilObjectClickable(driver, courseLink);
		//courseLink.click();
	}
}
