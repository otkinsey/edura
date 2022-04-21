package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import selenium.Wait;

public class RegisterPage {
	WebDriver driver;
	Wait wait;
	
	public RegisterPage(WebDriver driver) {
		
		this.driver = driver;
		PageFactory.initElements(driver, this); 
	}
	
	@FindBy(css = "#root h1")
	public WebElement registerTitle;
	
	@FindBy(css = "div.jumbotron")
	public WebElement headerImage;
	
	@FindBy(css = "div#register_page")
	public WebElement registrationFormSection;

	@FindBy(css = "#registration_form select")
	public WebElement courseFilter;
	
	@FindBy(css = "#register_page > h2")
	public WebElement courseRegistrationTitle;
	
	@FindBy(css = "#registration_form>div:nth-child(2)>input")
	public WebElement countryField;
	
	@FindBy(css = "#registration_form>div:nth-child(3)>input")
	public WebElement mailingAddressField;
	
	@FindBy(css = "#registration_form>div:nth-child(4)>input")
	public WebElement stateField;
	
	@FindBy(css = "#registration_form>div:nth-child(5)>input")
	public WebElement zipcodeField;
	
	@FindBy(css = "#registration_form>div:nth-child(6)>input")
	public WebElement firstNameField;
	
	@FindBy(css = "#registration_form>div:nth-child(7)>input")
	public WebElement lastNameField;
	
	@FindBy(css = "#registration_form>div:nth-child(8)>input")
	public WebElement creditCardNumber;
	
	@FindBy(css = "#registration_form>div:nth-child(9)>input")
	public WebElement expirationDateField;
	
	@FindBy(css = "#registration_form>div:nth-child(10)>input")
	public WebElement cvvField;
	
	@FindBy(xpath = ".//button[text()='Reset']")
	public WebElement resetButton;
	
	@FindBy(xpath = ".//button[text()='Register']")
	public WebElement registerButton;
	
	@FindBy(css = "div.modal_dialogue_box")
	public WebElement registerConfirmationPopUp;
	
	@FindBy(css = "div.modal_dialogue_box h4")
	public WebElement successLabel;
	
	public void navigateToRegisterPage() {
		driver.navigate().to("http://localhost:3000/register");
	}
	
	public void navigateToBack() {
		driver.navigate().back();
	}
	
	public void clickRegisterButton() throws Throwable {
		wait.waitUntilObjectFound(driver, registerButton);
		wait.clickUsingJavaScriptExecutor(driver, registerButton);
		//registerButton.click();
	}
	
	public void clickResetButton() throws Throwable {
		wait.waitUntilObjectFound(driver, resetButton);
		wait.clickUsingJavaScriptExecutor(driver, resetButton);
		//.click();
	}
}

