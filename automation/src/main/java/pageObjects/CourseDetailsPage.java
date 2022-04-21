package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import selenium.Wait;

public class CourseDetailsPage {
	
	WebDriver driver;
	Wait wait;
	
	public CourseDetailsPage(WebDriver driver) {
		
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(id = "course_details")
	public WebElement courseDetailsPage;
	
	@FindBy(id = "course_jumbotron")
	public WebElement headerImage;
	
	@FindBy(css = "#course_header_images")
	public WebElement courseHeaderImage;
	
	@FindBy(css = "div#course_header_images> img#partner_image")
	public WebElement partnerImage;
	
	@FindBy(css = "div#course_header_details> img#cert_image")
	public WebElement certificateBadge;
	
	@FindBy(css = "div#course_header_images h2")
	public WebElement courseTitle;
	
	@FindBy(css = "div#course_header_images>div>div:nth-child(2)")
	public WebElement courseDate;
	
	@FindBy(css = "div#course_header_images>div>div:nth-child(3)")
	public WebElement location;
	
	@FindBy(css = "div#course_header_details a.button.btn-primary")
	public WebElement registerButtonBelowTitle;

	@FindBy(css = "div#course_details>div:nth-child(1)")
	public WebElement courseSnapshotSection;
	
	@FindBy(css = "div#course_details>div:nth-child(2)")
	public WebElement courseOverviewSection;
	
	@FindBy(css = "#course_content > div > div:nth-child(2)")
	public WebElement rightSideBar;
	
	@FindBy(css = "#about_this_course > h3")
	public WebElement aboutThisCourseSection;
	
	@FindBy(css = "#left_course_panel > div:nth-child(2)")
	public WebElement courseDescriptionSection;
	
	@FindBy(css = "#meet_the_instructor > div")
	public WebElement meetInstructorSection;
	
	@FindBy(css = "#left_course_panel > div:nth-child(4) > a")
	public WebElement registerButton;
	
	@FindBy(css = "#course_effort")
	public WebElement duration;
	
	@FindBy(css = "#course_price")
	public WebElement price;
	
	@FindBy(css = "#course_reviews")
	public WebElement reviewsSection;
	
	public void clickRegister() throws Throwable {
		Thread.sleep(5000);
		wait.waitUntilObjectFound(driver, registerButtonBelowTitle);
	//	wait.clickUsingJavaScriptExecutor(driver, registerButtonBelowTitle);
		registerButtonBelowTitle.click();
	//	registerButton.click();
	}
	

}
