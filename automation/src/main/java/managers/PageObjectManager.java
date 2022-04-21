package managers;

import org.openqa.selenium.WebDriver;

import pageObjects.AboutUsPage;
import pageObjects.AssessmentPage;
import pageObjects.ContactUsPage;
import pageObjects.CourseDetailsPage;
import pageObjects.GooglePage;
import pageObjects.Homepage;
import pageObjects.LoginPage;
import pageObjects.RegisterPage;
import pageObjects.SignInSignUpPage;
import pageObjects.TermsConditionPage;
import pageObjects.CoursesPage;
import pageObjects.UpcomingCoursesPage;
import pageObjects.UrlLaunchPage;


public class PageObjectManager {
	private WebDriver driver;
	private GooglePage google;
	private Homepage home;
	private UrlLaunchPage urlLaunchPage;
	private LoginPage loginPage;
	private AssessmentPage assessmentPage;
	private CoursesPage courses;
	private ContactUsPage contactUsPage;
	private UpcomingCoursesPage upcomingCoursesPage;
	private CourseDetailsPage courseDetail;
	private RegisterPage register;
	private SignInSignUpPage signIn;
	private AboutUsPage aboutUs;
	private TermsConditionPage termsCondition;
	
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
	
	public ContactUsPage getContactUsPage() {
		return (contactUsPage == null) ? contactUsPage = new ContactUsPage(driver) : contactUsPage;
	}

	public UpcomingCoursesPage getUpcomingCoursesPage() {
		return (upcomingCoursesPage == null) ? upcomingCoursesPage = new UpcomingCoursesPage(driver) : upcomingCoursesPage;
	}
	
	public CourseDetailsPage getCourseDetailsPage() {
		return (courseDetail == null) ? courseDetail = new CourseDetailsPage(driver) : courseDetail;
	}
	
	public CoursesPage getCoursesPage() {
		return (courses == null) ? courses = new CoursesPage(driver) : courses;
	}
	
	public RegisterPage getRegisterPage() {
		return (register == null) ? register = new RegisterPage(driver) : register;
	}
	
	public SignInSignUpPage getSignInSignUpPage() {
		return (signIn == null) ? signIn = new SignInSignUpPage(driver) : signIn;
	}
	
	public AboutUsPage getAboutUsPage() {
		return (aboutUs == null) ? aboutUs = new AboutUsPage(driver) : aboutUs;
	}
	
	public TermsConditionPage getTermsConditionsPage() {
		return (termsCondition == null) ? termsCondition = new TermsConditionPage(driver) : termsCondition;
	}

}
