package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import managers.FileReaderManager;
import selenium.Wait;

public class SignInSignUpPage {
	
	WebDriver driver;
	Wait wait;
	
	
	public SignInSignUpPage(WebDriver driver) {		
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}

	@FindBy(css = "div#sign_in_page")
	public WebElement signInPage;
	
	@FindBy(xpath = ".//a[text()='Sign in']")
	public WebElement signInLink;
	
	@FindBy(xpath = ".//input[@name='email']")
	public WebElement emailField;
	
	@FindBy(xpath = ".//input[@name='password']")
	public WebElement passwordField;
	
	@FindBy(css = "#sign_in_form > button")
	public WebElement signInButton;
	
	@FindBy(css = "#root > div > div > div > a")
	public WebElement signIn;
	
	@FindBy(xpath = ".//span[text()='Sign In']")
	public WebElement signInTab;
	
	@FindBy(xpath = ".//span[text()='Sign Up']")
	public WebElement signUpTab;
	
	@FindBy(css = "#sign_up_form > div:nth-child(1) > input")
	public WebElement firstName;
	
	@FindBy(css = "#sign_up_form > div:nth-child(2) > input")
	public WebElement lastName;
	
	@FindBy(css = "#sign_up_form > div:nth-child(3) > input")
	public WebElement emailAddress;
	
	@FindBy(css = "#sign_up_form > div:nth-child(4) > input[type=password]")
	public WebElement password;
	
	@FindBy(css = "#sign_up_form > div:nth-child(5) > input[type=password]")
	public WebElement verifyPassword;
	
	@FindBy(css = "div#sign_up_form button.btn-primary")
	public WebElement signUpButton;
	
	@FindBy(xpath = ".//button[text()='Go back']")
	public WebElement goBackButton;
	
	@FindBy(css = "span#user_greeting")
	public WebElement userGreeting;
	
	@FindBy(css = "#sign_in_form > a")
	public WebElement forgotPasswordLink;

	@FindBy(css = "div.form_tabs h4")
	public WebElement forgotPasswordTitle;
	
	@FindBy(xpath = ".//input[@name='email']")
	public WebElement forgotPasswordEmail;
	
	@FindBy(css = "#forgot_password > div:nth-child(2) > button.btn-primary")
	public WebElement forgotPasswordSend;
	
	public void clickSend() throws Throwable{
		wait.waitUntilObjectFound(driver, forgotPasswordSend);
		//signUpTab.click();
		forgotPasswordSend.click();
	}
	public void clickSignInLink() throws Throwable{
		wait.waitUntilObjectFound(driver, signInLink);
		signInLink.click();
	}
	
	public void clickForgotPassword() throws Throwable{
		wait.waitUntilObjectFound(driver, forgotPasswordLink);
		forgotPasswordLink.click();
	}
	
	public void enterEmailField() {
		String email = FileReaderManager.getInstance().getConfigReader().getUsername();
		emailField.sendKeys(email);
	}
	
	public void enterPasswordField() {
		String password = FileReaderManager.getInstance().getConfigReader().getPassword();
		passwordField.sendKeys(password);
	}
	
	public void clickSignInButton() throws Throwable{
		wait.waitUntilObjectFound(driver, signInButton);
		signInButton.click();
	}

	public void clickSignUpTab() throws Throwable{
		wait.waitUntilObjectFound(driver, signUpTab);
		signUpTab.click();
	}
	
	public void clickSignUpButton() throws Throwable{
		wait.waitUntilObjectFound(driver, signUpButton);
		signUpButton.click();
	}
}
