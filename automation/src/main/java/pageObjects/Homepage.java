package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import selenium.Wait;

public class Homepage {
	WebDriver driver;
	Wait wait;
	
	public Homepage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(css = "div.App")
	public WebElement homepageValidation;
	
	@FindBy(css = "#header")
    public WebElement headerSection;
    
	@FindBy(css = "div.carousel-inner")
	public WebElement scrollingImagesSection;
	
	@FindBy(css = "section#our_services")
	public WebElement ourServicesSection;
	
	@FindBy(css = "section#about_us h1")
	public WebElement aboutUsSection;
	
	@FindBy(css = "section#our_partners")
	public WebElement ourPartnersSection;
	
	@FindBy(css = "section#get_inspired h1")
	public WebElement getInspiredSection;
	
	@FindBy(css = "section#stay_connected")
	public WebElement stayConnectedSection;
	
	@FindBy(xpath = "(.//section[@id='footer'])[1]")
	public WebElement footerSection;
	
	@FindBy(css = "section#header a#logo")
	public WebElement eduraLogo;
	
	@FindBy(css = "li#assessment_main_nav")
	public WebElement assessmentLink;
	
	@FindBy(css = "li#training_main_nav")
	public WebElement trainingLink;
	
	@FindBy(css = "#header > ul:nth-child(3) > li > a:nth-child(1)")
	public WebElement signUpLink;
	
	@FindBy(css = "#header > ul:nth-child(3) > li > a")
	public WebElement signInLink;
	
	@FindBy(css = "#header > ul.social_media_links")
	public WebElement socialMediaLinks;
	
	@FindBy(xpath = ".//a[text()='Course Calendar']")
	public WebElement courseCalendarButton;
	
	@FindBy(css = "#training_main_nav>ul>li:nth-child(1)>a")
	public WebElement CoursesLink;
	
	@FindBy(css = "#training_main_nav>ul>li:nth-child(2)>a")
	public WebElement upcomingCoursesLink;
	
	@FindBy(css = "#slider > div > div.carousel-inner")
	public WebElement scrollingBackgroundImage;
	
	@FindBy(css = "div.slide.active.carousel-item > div h1")
	public WebElement scrollingSectionTitle;
	
	@FindBy(css = "div.slide.active.carousel-item > div .slideText")
	public WebElement scrollingSectionDescription;
	
	@FindBy(css = "div.slide.active.carousel-item > div >a")
	public WebElement scrollingSectionButton;
	
	@FindBy(css = "span.carousel-control-prev-icon")
	public WebElement leftCarousalButton;
	
	@FindBy(css = "span.carousel-control-next-icon")
	public WebElement rightCarousalButton;
	
	@FindBy(css = "#our_services h1")
	public WebElement ourServicesTitle;
	
	@FindBy(css = "#our_services>div>div:nth-child(1)>img")
	public WebElement ourServiceAssessmentImage;
	
	@FindBy(css = "#our_services>div>div:nth-child(2)>img")
	public WebElement ourServiceCoursesImage;
	
	@FindBy(css = "#our_services>div>div:nth-child(2) h2")
	public WebElement ourServicesCoursesSubtitle;
	
	@FindBy(css = "#our_services>div>div:nth-child(1) h2")
	public WebElement ourServicesAssessmentSubtitle;
	
	@FindBy(css = "#our_services>div>div:nth-child(2) p")
	public WebElement ourServicesCoursesDescription;
	
	@FindBy(css = "#our_services>div>div:nth-child(1) p")
	public WebElement ourServicesAssessmentDescription;
	
	@FindBy(css = "#our_services>div>div:nth-child(2) a")
	public WebElement ourServicesCoursesLearnMoreLink;

	@FindBy(xpath = ".//a[@href='Assessment']")
	public WebElement ourServicesAssessmentLearnMoreLink;
	
	@FindBy(css = "#about_us h1")
	public WebElement aboutUsTitle;

	@FindBy(xpath = ".//button[text()='who we are']")
	public WebElement whoWeAreButton;
	
	@FindBy(xpath = "//*[@id='button_what_we_do']")
	public WebElement whatWeDoButton;
	
	@FindBy(css = "#about_us > div > div:nth-child(1) > a")
	public WebElement contactUsButton;
	
	@FindBy(css = "#about_us #about_us_text")
	public WebElement aboutUsDescription;
	
	@FindBy(css = "#about_us #about_us_slide_who_we_are h2")
	public WebElement whoWeAreSubtitle;
	
	@FindBy(xpath = ".//*[@id='about_us_slide_who_we_are']")
	public WebElement whoWeAreDescription;
	
	@FindBy(css = "#about_us_slide_what_we_do")
	public WebElement whatWeDoSubtitle;
	
	@FindBy(xpath = ".//*[@id='about_us_slide_what_we_do']")
	public WebElement whatWeDoDescription;
	
	@FindBy(css = "#our_partners h1")
	public WebElement ourPartnersTitle;

	@FindBy(css = "#our_partners > div:nth-child(2) > div:nth-child(1) > a")
	public WebElement scrumAllianceLogo;
	
	@FindBy(xpath = ".//a[@href='https://www.scrum.org']")
	public WebElement scrumOrgLogo;
	
	@FindBy(css = "#our_partners>div>div:nth-child(3)>a")
	public WebElement safeLogo;
	
	@FindBy(css = "#get_inspired h1")
	public WebElement getInspiredTitle;
	
	@FindBy(css = "#get_inspired #view-window")
	public WebElement getInspiredReviews;
	
	@FindBy(css = "#get-inspired > svg:nth-child(1)")
	public WebElement getInspiredLeftSliderCarousal;
	
	@FindBy(css = "#get-inspired > svg:nth-child(3)")
	public WebElement getInspiredRightSliderCarousal;
	
	@FindBy(css = "#stay_connected h1")
	public WebElement stayConnectedTitle;
	
	@FindBy(css = " div.flex.row1>div:nth-child(1)>input[type=text]")
	public WebElement firstNameField;
	
	@FindBy(css = " div.flex.row1>div:nth-child(2)>input[type=text]")
	public WebElement lastNameField;
	
	@FindBy(css = " div.row2>input[type=text]")
	public WebElement emailAddressField;
	
	@FindBy(css = "form>div:nth-child(3)>input[type=checkbox]")
	public WebElement checkBox;
	
	@FindBy(css = "#stay_connected>div>form>button")
	public WebElement stayConnectedSignUpButton;
	
	@FindBy(css = "#footer img")
	public WebElement footerLogo;
	
	@FindBy(css = "#footer > div:nth-child(2)")
	public WebElement relatedLinkSection;
	
	@FindBy(css = "#footer > div:nth-child(3)")
	public WebElement followUsLinks;

	@FindBy(css = "#training_main_nav > ul > li:nth-child(1) > a")
	public WebElement courses;

	@FindBy(xpath = ".//a[text()='About Us']")
	public WebElement aboutUsFooterLink;

	@FindBy(xpath = ".//a[text()=' Contact Us']")
	public WebElement contactUsFooterLink;

	public void clickAboutUsLink() throws Throwable {
		wait.waitUntilObjectClickable(driver, aboutUsFooterLink);
		//wait.clickUsingJavaScriptExecutor(driver, aboutUsFooterLink);
		aboutUsFooterLink.click();
	}
	
	public void clickContactUsLink() throws Throwable{
		wait.waitUntilObjectClickable(driver, contactUsFooterLink);
		//wait.clickUsingJavaScriptExecutor(driver, aboutUsFooterLink);
		contactUsFooterLink.click();
	}
	
    public void checkHeaderSection() {
    	headerSection.isDisplayed();
    }
    
    public void verifyHomepage() {
    	homepageValidation.isDisplayed();
    }
    

    public String getUrl() {
    	String URL = driver.getCurrentUrl();
    	return URL;
    }
    
    public void checkScrollingImagesSection() {
    	scrollingImagesSection.isDisplayed();
    }
    
    public void checkAboutUsSection() {
    	aboutUsSection.isDisplayed();
    }
    
    public void checkOurServicesSection() {
    	ourServicesSection.isDisplayed();
    }
    
    public void checkOurPartnersSection() {
    	ourPartnersSection.isDisplayed();
    }
    
    public void checkGetInspiredSection() {
    	getInspiredSection.isDisplayed();
    }
    
    public void checkStayConnectedSection() {
    	stayConnectedSection.isDisplayed();
    }
    
    public void checkFooterSection() {
    	footerSection.isDisplayed();
    }
 
    public void clickAssessmentLink() throws Throwable {
    	wait.waitUntilObjectClickable(driver, assessmentLink);
    	assessmentLink.click();
    }
    
    public void clickTrainingLink() throws Throwable {
    	wait.waitUntilObjectClickable(driver, trainingLink);
    	trainingLink.click();
    }
    
    public void clickAssessmentLearnMoreLink() throws Throwable {
    	wait.waitUntilObjectFound(driver, ourServicesAssessmentLearnMoreLink);
    	System.out.println("Waited for the element");
    	wait.clickUsingJavaScriptExecutor(driver, ourServicesAssessmentLearnMoreLink);
    	System.out.println("Element clicked successfully");
    }
    
    public void clickCoursesLearnMoreLink() throws Throwable {
    	System.out.println("Waited for the element");
    	wait.waitUntilObjectFound(driver, ourServicesAssessmentLearnMoreLink);
    	wait.clickUsingJavaScriptExecutor(driver, ourServicesAssessmentLearnMoreLink);
    	//ourServicesCoursesLearnMoreLink.click();
    	System.out.println("Element clicked successfully");
    }
    
    public void clickWhoWeAreButton() throws Throwable {
    	wait.waitUntilObjectFound(driver, whatWeDoButton);
    	wait.clickUsingJavaScriptExecutor(driver, whatWeDoButton);
    	wait.waitUntilObjectFound(driver, whoWeAreButton);
    	wait.clickUsingJavaScriptExecutor(driver, whatWeDoButton);
    }
    
    public void clickWhatWeDoButton() throws Throwable {
    	wait.waitUntilObjectFound(driver, whatWeDoButton);
    	System.out.println("Waited for the element");
    	wait.clickUsingJavaScriptExecutor(driver, whatWeDoButton);
    	System.out.println("Element clicked successfully");
    }
    
    public void clickContactUsButton() throws Throwable {
    	wait.waitUntilObjectFound(driver, contactUsButton);
    	wait.clickUsingJavaScriptExecutor(driver, contactUsButton);
    	//contactUsButton.click();
    }
    
    public void clickScrumAllianceLogo() throws Throwable {
    	wait.waitUntilObjectFound(driver, scrumAllianceLogo);
    	//wait.clickUsingJavaScriptExecutor(driver, scrumAllianceLogo);
    	scrumAllianceLogo.click();
    }
    
    public void clickScrumOrgLogo() throws Throwable {
    	wait.waitUntilObjectFound(driver, scrumOrgLogo);
    	wait.clickUsingJavaScriptExecutor(driver, scrumOrgLogo);
    	System.out.println("Clicked on scrum org logo");
    	//scrumOrgLogo.click();
    }
    
    public void clickSafeLogo() throws Throwable {
    	wait.waitUntilObjectFound(driver, safeLogo);
    	wait.clickUsingJavaScriptExecutor(driver, safeLogo);
    	//safeLogo.click();
    }
    
    public void clickUpcomingCoursesLink() throws Throwable{
    	wait.waitUntilObjectFound(driver, upcomingCoursesLink);
    	//wait.clickUsingJavaScriptExecutor(driver, upcomingCoursesLink);
    	upcomingCoursesLink.click();
    }
    
    public void clickCoursesLink() throws Throwable{
    	wait.waitUntilObjectFound(driver, courses);
    	courses.click();
    }
    
    public void clickSignInLink() throws Throwable{
    	wait.waitUntilObjectFound(driver, signUpLink);
    	signUpLink.click();
    }
}