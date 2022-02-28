package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import testDataTypes.TestData;

public class LoginPage {
	
	WebDriver driver;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);    
	}
	
	@SuppressWarnings("deprecation")
	WebDriverWait wait = new WebDriverWait(driver,10);

	@FindBy(css = "div._8esl > div > img")
	private WebElement pageTitle;
	
	@FindBy(css = "button[name='login']")
	private WebElement loginButton;
	
	@FindBy(css = "input#email")
	private WebElement emailAddressField;
	
	@FindBy(css = "#identifierNext > div > button > span")
	private WebElement emailNextButton;
	
	@FindBy(css = "input#pass")
	private WebElement passwordField;
	
	@FindBy(css = "a[href='/me/'] span>span")
	private WebElement profileName;
	
	@FindBy(css = "#passwordNext > div > button > div.VfPpkd-RLmnJb")
	private WebElement passwordNextButton;
	
	@FindBy(css = "#yDmH0d > c-wiz.yip5uc.SSPGKf > c-wiz > div > div.p9lFnc > div")
	private WebElement protectYourAccountField;
		
	public void pageTitlePresent() {
		wait.until(ExpectedConditions.visibilityOf(pageTitle));
		pageTitle.isDisplayed();
	}
	
	public void clickLoginButton() {
		wait.until(ExpectedConditions.visibilityOf(loginButton));
		loginButton.click();
	}
	
	public void enterEmailAddress(TestData test) {
		wait.until(ExpectedConditions.visibilityOf(emailAddressField));
		emailAddressField.sendKeys(test.emailAddress);
	}
	
	public void enterPassword(TestData test) {
		wait.until(ExpectedConditions.visibilityOf(passwordField));
		passwordField.sendKeys(test.password);
	}
	
	public void verifyProtectYourAccount() {
		wait.until(ExpectedConditions.visibilityOf(profileName));
		profileName.isDisplayed();
	}


}
