package org.step;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import io.github.bonigarcia.wdm.managers.ChromeDriverManager;

public class StepDefinition {
	
	WebDriver driver;
	@Given("User is on facebook login page")
	public void user_is_on_facebook_login_page() {
	    WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
	    driver.get("https://www.facebook.com/");
	    driver.manage().window().maximize();
	}

	
	@When("User enters emailId in user id text box")
	public void user_enters_emailId_in_user_id_text_box(io.cucumber.datatable.DataTable dataTable) {
		
		List<Map<Object,Object>> asMaps = dataTable.asMaps(String.class, String.class);
		Map<Object, Object> map = asMaps.get(1);
		Object object = map.get("emailId");
		String mail = (String)object;
		
		 WebElement txtBox = driver.findElement(By.id("email"));
		    txtBox.sendKeys(mail);
	}

	@When("User enters password in password text box")
	public void user_enters_password_in_password_text_box(io.cucumber.datatable.DataTable dataTable) {
		
		List<Map<Object,Object>> asMaps = dataTable.asMaps(String.class, String.class);
		Map<Object, Object> map = asMaps.get(1);
		Object object = map.get("password");
		String pwd = (String)object;
		
		WebElement passTxtBox = driver.findElement(By.name("pass"));
	    passTxtBox.sendKeys(pwd);	
	 }

	@When("User enters submit button")
	public void user_enters_submit_button() {
	    WebElement btnLogin = driver.findElement(By.name("login"));
	    btnLogin.click();
	}

	@Then("Login should be successful")
	public void login_should_be_successful() {
	   System.out.println("Login Successful");
	}
	
}
