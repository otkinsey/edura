package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import selenium.Wait;

public class TermsConditionPage {
	WebDriver driver;
	Wait wait;
	
	public TermsConditionPage(WebDriver driver) {
		
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(css = " div.jumbotron")
	public WebElement headerImage;
	
	@FindBy(css = "div.jumbotron h1")
	public WebElement title;
	
	@FindBy(css = " div.content_wrapper.static_page")
	public WebElement description;
	
	@FindBy(css = "div.btn-hot")
	public WebElement scrollToTopIcon;
	
	public void navigateToTermsCondition() {
		driver.navigate().to("http://localhost:3000/terms");
	}
}
