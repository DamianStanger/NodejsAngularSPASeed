Feature: homepage

  Scenario: The layout of the homepage
    Given im on the homepage
    Then i should automatically redirect to "/view1"

  Scenario: navigation to view1
    Given im on the homepage
    When i navigate to "#/view1"
    Then i should see "partial for view 1"


  describe('view2', function() {

    beforeEach(function() {
      browser().navigateTo('#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element('[ng-view] p:first').text()).
        toMatch(/partial for view 2/);
    });

  });
});
