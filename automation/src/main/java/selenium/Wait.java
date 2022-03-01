package selenium;

import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public abstract class Wait implements SearchContext {
	
	WebDriver driver;
	
	public Wait(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);    
	}
	
//	public void waitForElement(WebElement locator) {
//		WebDriverWait wait = new WebDriverWait(driver, 10);
//		WebElement element = wait.until(ExpectedConditions.visibilityOf(locator));
//	}

}
