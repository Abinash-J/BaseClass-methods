Feature: To validate facebook login functionality
  I want to use this template for my feature file

  @tag1
  Scenario: Validate login functionality using valid username and valid password
    Given User is on facebook login page
    When User enters emailId in user id text box
    |emailId|
  	|arun@gmail.com|
  	|vel@gmal.com|
  	
    And User enters password in password text box
    |password|
    |test123|
    |test433|
    
    And User enters submit button
    Then Login should be successful

  #@tag2
  #Scenario Outline: Title of your scenario outline
    #Given I want to write a step with <name>
    #When I check for the <value> in step
    #Then I verify the <status> in step

    