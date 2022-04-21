package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import selenium.Wait;


public class AssessmentPage {
	
	WebDriver driver;
	Wait wait;
	public AssessmentPage(WebDriver driver) {

		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(xpath = ".//h1[text()='Assessments']")
	public WebElement assessmentPageTitle;
	
	@FindBy(css = "div#assessments div.jumbotron")
	public WebElement headerImage;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(1)>div>div")
	public WebElement whyAssessmentSection;

	@FindBy(css = "div.assessment_row>div>div>h1:nth-child(1)")
	public WebElement whyAssessmentTitle;
	
	@FindBy(xpath = ".//h1[text()='What Are the Different Types of Assessment?']")
	public WebElement whatAreTheDifferentTypesOfAssessment;
	
	@FindBy(xpath = "//*[@id='assessments']/div[2]/div[1]/div/div/a")
	public WebElement whyAssessmentContactUs;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(2)>div")
	public WebElement leadershipAssessmentSection;
	
	@FindBy(xpath = ".//h3[text()='Leadership Assessment ']")
	public WebElement leadershipAssessmentTitle;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(2)>div>div>div>p")
	public WebElement leadershipAssessmentDescription;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(2)>div>img")
	public WebElement leadershipAssessmentImage;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(2)>div")
	public WebElement organizationAssessmentSection;
	
	@FindBy(xpath = ".//h3[text()='Organization Assessment']")
	public WebElement organizationAssessmentTitle;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(3)>div>div>div>p")
	public WebElement organizationAssessmentDescription;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(3)>div>img")
	public WebElement organizationAssessmentImage;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(4)>div")
	public WebElement portfolioAssessmentSection;
	
	@FindBy(xpath = ".//h3[text()='Portfolio Assessment']")
	public WebElement portfolioAssessmentTitle;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(4)>div>div>div>p")
	public WebElement portfolioAssessmentDescription;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(4)>div>img")
	public WebElement portfolioAssessmentImage;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(5)>div")
	public WebElement programAssessmentSection;
	
	@FindBy(xpath = ".//h3[text()='Program Assessment']")
	public WebElement programAssessmentTitle;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(5)>div>div>div>p")
	public WebElement programAssessmentDescription;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(5)>div>img")
	public WebElement programAssessmentImage;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(6)>div")
	public WebElement teamAssessmentSection;
	
	@FindBy(xpath = ".//h3[text()='Team Assessment']")
	public WebElement teamAssessmentTitle;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(6)>div>div>div>p")
	public WebElement teamAssessmentDescription;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(6)>div>img")
	public WebElement teamAssessmentImage;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(7)>div")
	public WebElement individualRoleSection;
	
	@FindBy(xpath = ".//h3[text()='Individual Role/Talent']")
	public WebElement individualRoleTitle;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(7)>div>div>div>p")
	public WebElement individualRoleDescription;
	
	@FindBy(css = "#assessments>div:nth-child(2)>div:nth-child(7)>div>img")
	public WebElement individualRoleImage;
	
	@FindBy(css = "#assessments>a.btn-primary.button")
	public WebElement contactUsAboveFooter;

	
	public void checkAssessmentTitle() throws Throwable {
		wait.waitUntilObjectFound(driver, assessmentPageTitle);
		assessmentPageTitle.isDisplayed();
	}
	
	public void clickContactUsButton() throws Throwable{
		wait.waitUntilObjectFound(driver, contactUsAboveFooter);
		wait.clickUsingJavaScriptExecutor(driver, contactUsAboveFooter);
		//contactUsAboveFooter.click();
	}
}
