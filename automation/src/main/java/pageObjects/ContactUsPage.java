package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import selenium.Wait;

public class ContactUsPage {
	
	WebDriver driver;
	Wait wait;
	public ContactUsPage(WebDriver driver) {
		
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(xpath = ".//h1[text()='Contact Us']")
	public WebElement contactUsPageTitle;
	
	@FindBy(css = "#root > div > div > div.jumbotron")
	public WebElement headerImage;
	
	@FindBy(css = "div.jumbotron h1")
	public WebElement contactUsTitle;
	
	@FindBy(css = "div#course_header_images")
	public WebElement contactDetailsSection;
	
	@FindBy(css = "div#course_header_images >img")
	public WebElement eduraLogo;
	
	@FindBy(css = "div#contact_info>div:nth-child(1)")
	public WebElement address;

	@FindBy(css = "div#contact_info>div:nth-child(2)")
	public WebElement phone;
	
	@FindBy(css = "div#contact_info>div:nth-child(3)")
	public WebElement hours;
	
	@FindBy(css = "div#contact_form")
	public WebElement contactForm;

	@FindBy(css = "#contact_form > div:nth-child(1) > input")
	public WebElement firstname;
	
	@FindBy(css = "#contact_form > div:nth-child(2) > input")
	public WebElement lastname;
	
	@FindBy(css = "#contact_form > div:nth-child(3) > input")
	public WebElement emailAddress;

	@FindBy(css = "#contact_form > div:nth-child(4) > input")
	public WebElement subject;

	@FindBy(css = "#contact_form > div:nth-child(5) > textarea")
	public WebElement message;
	
	@FindBy(xpath = ".//button[text()='Send']")
	public WebElement sendButton;
	
	@FindBy(css = "div.modal_dialogue_box")
	public WebElement confirmationPopUp;
	
	public void navigateToContactUs() {
		driver.navigate().to("http://localhost:3000/contact");
	}
	
	public void clickSendButton() throws Throwable {
		Thread.sleep(3000);
		wait.waitUntilObjectClickable(driver, sendButton);
		wait.clickUsingJavaScriptExecutor(driver, sendButton);
		//sendButton.click();	
	}
}
