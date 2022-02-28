package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Homepage {
	WebDriver driver;
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
	
	@FindBy(css = "li#resources_main_nav")
	public WebElement resourcesLink;
	
	@FindBy(css = "#header > ul:nth-child(3) > li > a:nth-child(1)")
	public WebElement signUpLink;
	
	@FindBy(css = "#header > ul:nth-child(3) > li > a:nth-child(2)")
	public WebElement signInLink;
	
	@FindBy(css = "#header > ul.social_media_links")
	public WebElement socialMediaLinks;
	
	@FindBy(xpath = ".//a[text()='View Courses']")
	public WebElement viewCoursesButton;
	
	@FindBy(xpath = ".//a[text()='Public']")
	public WebElement publicTrainingLink;
	
	@FindBy(xpath = ".//a[text()='Corporate']")
	public WebElement corporateLink;
	
	@FindBy(xpath = ".//a[text()='Upcoming Courses']")
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
	
    public void checkHeaderSection() {
    	headerSection.isDisplayed();
    }
    
    public void verifyHomepage() {
    	homepageValidation.isDisplayed();
    }
    
    public void getUrl() {
    	String URL = driver.getCurrentUrl();
    	System.out.println(URL);
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
    
    public void clickAssessmentLink() {
    	assessmentLink.click();
    }
    
    public void clickTrainingLink() {
    	trainingLink.click();
    }
}
