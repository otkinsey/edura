package managers;

import org.openqa.selenium.WebDriver;

import pageObjects.AssessmentPage;
import pageObjects.ContactUsPage;
import pageObjects.GooglePage;
import pageObjects.Homepage;
import pageObjects.LoginPage;
import pageObjects.TrainingPage;
import pageObjects.UrlLaunchPage;


public class PageObjectManager {
	private WebDriver driver;
	private GooglePage google;
	private Homepage home;
	private UrlLaunchPage urlLaunchPage;
	private LoginPage loginPage;
	private AssessmentPage assessmentPage;
	private TrainingPage trainingPage;
	private ContactUsPage contactUsPage;
	
	public PageObjectManager(WebDriver driver) {
		this.driver = driver;
	}
	
	public Homepage getHomePage() {
		return (home == null) ? home = new Homepage(driver) : home;
	}

	public GooglePage getGooglePage() {
		return (google == null) ? google = new GooglePage(driver) : google;
	}
	
	public UrlLaunchPage getUrlLaunchPage() {
		return (urlLaunchPage == null) ? urlLaunchPage = new UrlLaunchPage(driver) : urlLaunchPage;
	}
	
	public LoginPage getLoginPage() {
		return (loginPage == null) ? loginPage = new LoginPage(driver) : loginPage;
	}
	
	public AssessmentPage getAssessmentPage() {
		return (assessmentPage == null) ? assessmentPage = new AssessmentPage(driver) : assessmentPage;
	}
	
	public TrainingPage getTrainingPage() {
		return (trainingPage == null) ? trainingPage = new TrainingPage(driver) : trainingPage;
	}
	
	public ContactUsPage getContactUsPage() {
		return (contactUsPage == null) ? contactUsPage = new ContactUsPage(driver) : contactUsPage;
	}
	
//	public Wait getWebdriverWait() {
//		return (wait == null) ? wait = new Wait(driver) : wait;
//	}

}
