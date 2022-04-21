package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import selenium.Wait;

public class AboutUsPage {
	WebDriver driver;
	Wait wait;
	
	public AboutUsPage(WebDriver driver) {
		
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}

	@FindBy(css = "#root > div > div > div.jumbotron > h1")
	public WebElement aboutUsTitle;

	@FindBy(css = "div.jumbotron")
	public WebElement headerImage;
	
	@FindBy(css = "div.content_wrapper.static_page > h1:nth-child(1)")
	public WebElement whoWeAreTitle;
	
	@FindBy(css = "div.content_wrapper.static_page > h1:nth-child(5)")
	public WebElement whatWeDoTitle;
	
	@FindBy(xpath = " //*[@id='root']/div/div/div[2]/a")
	public WebElement contactUsButton;
	
	public void navigateToAboutUs( ) {
		driver.navigate().to("http://localhost:3000/about_us");
	}
	
	public void clickContactUsButton() throws Throwable {
		wait.waitUntilObjectFound(driver, contactUsButton);
		//wait.clickUsingJavaScriptExecutor(driver, contactUsButton);
		contactUsButton.click();
	}
}
