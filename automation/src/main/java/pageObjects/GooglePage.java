package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GooglePage {

	WebDriver driver;
	
	public GooglePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);    
	}
	
	@FindBy(xpath = ".//input[@title='Search']")
	private WebElement searchInput;
	
	@FindBy(xpath = "(.//input[@value='Google Search'])[1]")
	private WebElement searchButton;
	
	@FindBy(xpath=".//div[@class='v7W49e']")
	private WebElement searchResults;
	
	public void enterInSearchField() {
		searchInput.sendKeys("Chaitra Joshi");
	}
	
	public void verifySearchField() {
		searchInput.isDisplayed();
	}

	public void clickSearchButton() {
		searchButton.click();
	}
	
	public void verfiySearchResults() {
		searchResults.isDisplayed();
	}
}
