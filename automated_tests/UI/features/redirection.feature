Feature: Verify the redirection route

    Scenario: R1S12_TC42.01_EXP1231_MV_[WL]RedirectLinkToIntroductionPage_Verify the redirection to Introduction Page when the application url path is '/savings'
        Given I open the default Whole Life Application on an "iPhone X" device
        And I open the Whole Life Web App at "/savings" on an "iPhone X" device
        When I click the button for "I Accept"
        Then I should see "Let's answer a few questions." as a "text"
        And I should be redirected to the default link

    Scenario: R1S12_TC42.02_EXP1231_MV_[WL]RedirectLinkToIntroductionPage_Verify the redirection to Introduction Page when the application url path is '/summary'
        Given I open the default Whole Life Application on an "iPhone X" device
        And I open the Whole Life Web App at "/summary" on an "iPhone X" device
        When I click the button for "I Accept"
        Then I should see "Let's answer a few questions." as a "text"
        And I should be redirected to the default link