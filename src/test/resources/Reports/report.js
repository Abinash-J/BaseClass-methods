$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/ADMIN/eclipse-workspace/wb-edp-test/src/test/resources/Macro.feature");
formatter.feature({
  "name": "To validate facebook login functionality",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate login functionality using valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User is on facebook login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cemailId\u003e\" in user id text box",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cpassword\u003e\" in password text box",
  "keyword": "And "
});
formatter.step({
  "name": "User enters submit button",
  "keyword": "And "
});
formatter.step({
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emailId",
        "password"
      ]
    },
    {
      "cells": [
        "abc@gmail.com",
        "test123"
      ]
    },
    {
      "cells": [
        "bcd@gmail.com",
        "test432"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate login functionality using valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User is on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"abc@gmail.com\" in user id text box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_in_user_id_text_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"test123\" in password text box",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_in_password_text_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.login_should_be_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate login functionality using valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "User is on facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_is_on_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"bcd@gmail.com\" in user id text box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_in_user_id_text_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"test432\" in password text box",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_in_password_text_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.login_should_be_successful()"
});
formatter.result({
  "status": "passed"
});
});