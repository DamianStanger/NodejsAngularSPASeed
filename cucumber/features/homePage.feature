Feature: homepage

  Scenario: The layout of the homepage
    Given im on the application homepage
    Then i should redirect to "/#/view1$"

  Scenario: navigation to view1
    Given im on the application homepage
    When i click on "view1"
    Then i should see "partial for view 1.$"


  Scenario: navigation to view2
    Given im on the application homepage
    When i click on "view2"
    Then i should see "partial for view 2.$"
