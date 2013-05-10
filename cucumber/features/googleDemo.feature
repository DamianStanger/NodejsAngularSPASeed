Feature: GoogleDemo
  Make sure Cucumber and Capybara are wired up properly

  Scenario: Search Google
    When I search Google for "damian stanger"
    Then there should be a result for "foldingair.blogspot.com/"