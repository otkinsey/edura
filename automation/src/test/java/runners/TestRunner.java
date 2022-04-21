package runners;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features",
		glue= {"stepDefinitions"},
		plugin = {"pretty","html:target/cucumber-report/cucumber-html",
				"json:target/cucumber-report/cucumber.json",
				"junit:target/cucumber-report/cucumber.xml",
				"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
		monochrome=true,
		tags = "@Automation"
		)

public class TestRunner {


}