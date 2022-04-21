package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import selenium.Wait;

public class UpcomingCoursesPage {
	
	WebDriver driver;
	Wait wait;
	
	public UpcomingCoursesPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(css = "#root > div > div > div.jumbotron > h1")
	public WebElement upcomingCoursesHeader;
	
	@FindBy(css = "div.jumbotron")
	public WebElement backgroundImage;
	
	@FindBy(css = "div#course_filters")
	public WebElement courseFilterSection;
	
	@FindBy(css = "div#course_calendar")
	public WebElement courseCalendarSection;
	
	@FindBy(css = "div#course_filters h3")
	public WebElement courseFilterTitle;
	
	@FindBy(css = "select#filter_button_course_name")
	public WebElement courseTypeFilter;
	
	@FindBy(css = "select#filter_button_certifying_body")
	public WebElement certifyingBodyFilter;
	
	@FindBy(css = "select#filter_button_month")
	public WebElement monthFilter;
	
	@FindBy(css = "select#filter_button_city")
	public WebElement cityFilter;
	
	@FindBy(css = "select#filter_button_country")
	public WebElement countryFilter;
	
	@FindBy(css = "select#filter_button_start_date")
	public WebElement dateFilter;
	
	@FindBy(xpath = "//*[@id='course_filters']/a")
	public WebElement clearFilterButton;
	
	@FindBy(css = "tr.table_headings>th#instructor_image")
	public WebElement instructorColumn;
	
	@FindBy(css = "tr.table_headings>th#course_name")
	public WebElement courseNameColumn;
	
	@FindBy(css = "tr.table_headings>th#location")
	public WebElement locationColumn;
	
	@FindBy(css = "tr.table_headings>th#date")
	public WebElement dateColumn;
	
	@FindBy(xpath = ".//select[@id = 'filter_button_course_name']/option")
	public WebElement courseNameField;
	
	@FindBy(css = "#course_name > a")
	public WebElement selectedCourseName;

	@FindBy(css = "td#date")
	public WebElement selectedCourseByMonth;
	
	@FindBy(css = "td#location")
	public WebElement selectedCourseByCity;
	
	@FindBy(css = "td#date")
	public WebElement selectedByDate;
	
	
	public void clickClearFilterButton() throws Throwable {
		wait.waitUntilObjectFound(driver, clearFilterButton);
		//wait.clickUsingJavaScriptExecutor(driver, clearFilterButton);
		clearFilterButton.click();
	}
	
	public void clickCourseName() throws Throwable{
		wait.waitUntilObjectFound(driver, selectedCourseName);
		selectedCourseName.click();
		//wait.clickUsingJavaScriptExecutor(driver, selectedCourseName);
	}
}
