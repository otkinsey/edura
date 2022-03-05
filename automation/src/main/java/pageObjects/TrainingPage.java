package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class TrainingPage {
	WebDriver driver;
	public TrainingPage(WebDriver driver) {
		
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(xpath = ".//h1[text()='Training']")
	public WebElement trainingPageTitle;

	public String getPageUrl() {
		String Url = driver.getCurrentUrl();
		return Url;
	}
}
