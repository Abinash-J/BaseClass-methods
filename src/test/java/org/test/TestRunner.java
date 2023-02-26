package org.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\ADMIN\\eclipse-workspace\\wb-edp-test\\src\\test\\resources\\Macro.feature",
		glue = "org.step",
		monochrome = true,
		snippets = SnippetType.UNDERSCORE,
		plugin = "junit:src\\test\\resources\\Reports.xml"
		)
public class TestRunner {

}
