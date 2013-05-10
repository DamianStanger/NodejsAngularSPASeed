Feature: homepage

  Scenario: The layout of the homepage
    Given im on the homepage
    Then i should automatically redirect to "/view1"

  Scenario: navigation to view1
    Given im on the homepage
    When i navigate to "#/view1"
    Then i should see "partial for view 1"


  Scenario: navigation to view2
    Given im on the homepage
    When i navigate to "#/view2"
    Then i should see "partial for view 2"
