Feature: Verify the Personal Information screen

  Scenario: R1S9_TC04.01_EXP923_DV_[WL]PersonalInformationUI_Verify that a Subtitle is displayed below the Sub header
    Given I open the default Whole Life Application on an "iPhone X" device
    When I click the button for "I Accept"
    Then I should see "Let's answer a few questions." as a "text"

  Scenario: Demo Scenario
    Given I open the default Whole Life Application on an "iPhone X" device
    And I click the button for "I Accept"
    When I click the "Male" text
    Then I should see "Let's answer a few questions." as a "text"

  Scenario: R1S9_TC04.02_EXP923_DV_[WL]PersonalInformationUI_Verify that the Subtitle below the sub header matches the Subtitle set in the configurator
    Then I should see "Let's answer a few questions." as a "text"

  Scenario: R1S9_TC04.03_EXP923_DV_[WL]PersonalInformationUI_Verify that the Subtitle below the sub header is displayed left-aligned with bold characters
    Then the "font-weight" css element should be "700" for the "Let's answer a few questions." in the Personal Information screen

  Scenario: R1S9_TC04.04_EXP923_DV_[WL]PersonalInformationUI_Verify that the Subtitle's font color matches the Theme color set in the configurator
    Then the "color" css element should be "#215691" for the "Let's answer a few questions." in the Personal Information screen

  Scenario: R1S9_TC04.05_EXP923_DV_[WL]PersonalInformationUI_Verify that the Subtitle's font style matches the font style set in the configurator
    Then the "font-family" css element should be "noto-sans-display" for the "Let's answer a few questions." in the Personal Information screen

  Scenario: R1S9_TC04.06_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Age' label is displayed below the Subtitle
    Then I should see "Age" as a "text"

  Scenario: R1S9_TC04.07_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Age' input field is displayed below the 'Age' label
    Then I should see the "Age" field in the Personal Information screen

  Scenario: R1S9_TC04.08_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Gender' label is displayed below the 'Age' input field
    Then I should see "Gender" as a "text"

  Scenario: R1S9_TC04.09_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Gender' radio buttons are displayed below the 'Gender' label
    Then I should see the "Gender" field in the Personal Information screen

  Scenario: R1S9_TC04.10_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Smoking Status' label is displayed below the 'Gender' radio buttons
    Then I should see "Smoking Status" as a "text"

  Scenario: R1S9_TC04.11_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Smoking Status' radio buttons are displayed below the 'Smoking Status' label
    Then I should see the "Smoking Status" field in the Personal Information screen

  Scenario: R1S9_TC04.12_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button is displayed center-aligned below the 'Smoking Status' radio buttons
    Then I should see a button with a label of "Next"

  Scenario: R1S9_TC04.13_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Fill color is #BDBDBD
    Then the "background-color" css element should be "#bdbdbd" for the "Next button" in the Personal Information screen

  Scenario: R1S9_TC04.14_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button name matches the button name set in the configurator
    Then I should see a button with a label of "Next"

  Scenario: R1S9_TC04.15_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button name's Font color is #FFFFFF
    Then the "color" css element should be "#ffffff" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.16_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button name's font style matches the font style set in the configurator
    Then the "font-family" css element should be "noto-sans-display" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.17_EXP923_DV_[WL]PersonalInformationUI_Verify that the Footer is displayed at the bottom of Personal Info Page
    Then the "font-family" css element should be "noto-sans-display" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.20_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button is in Default state when the input fields are not populated
    Then the "background-color" css element should be "#bdbdbd" for the "Next button" in the Personal Information screen
    And the "color" css element should be "#ffffff" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.21_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button is in Default state when 1 input field is populated
    Then the "background-color" css element should be "#bdbdbd" for the "Next button" in the Personal Information screen
    And the "color" css element should be "#ffffff" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.22_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button is in Default state when 2 input fields are populated
    When I click the "Female" text
    Then the "background-color" css element should be "#bdbdbd" for the "Next button" in the Personal Information screen
    And the "color" css element should be "#ffffff" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.23_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Default state has a Fill color of #BDBDBD
    Then the "background-color" css element should be "#bdbdbd" for the "Next button" in the Personal Information screen

  Scenario: R1S9_TC04.24_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Default state has a button name that matches the button name set in the configurator
    Then I should see a button with a label of "Next"

  Scenario: R1S9_TC04.25_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Default state has font style that matches the font style set in the configurator
    Then the "font-family" css element should be "noto-sans-display" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.26_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Default state has a Font color of #FFFFFF
    Then the "color" css element should be "#ffffff" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.27_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button is in Active state when all input fields are populated
    When I click the "Smoker" text
    Then the "background-color" css element should be "#98c255" for the "Next button" in the Personal Information screen
    And the "color" css element should be "#ffffff" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.28_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Active state has a Fill color of #305eb1
    Then the "background-color" css element should be "#98c255" for the "Next button" in the Personal Information screen

  Scenario: R1S9_TC04.29_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Active state has a Font color of #FFFFFF
    Then the "color" css element should be "#ffffff" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.30_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Active state has a button name that matches the button name set in the configurator
    Then I should see a button with a label of "Next"

  Scenario: R1S9_TC04.31_EXP923_DV_[WL]PersonalInformationUI_Verify that the 'Next' button's Active state has font style that matches the font style set in the configurator
    Then the "font-family" css element should be "noto-sans-display" for the "Next" in the Personal Information screen

  Scenario: R1S9_TC04.32_EXP923_DV_[WL]PersonalInformationUI_Verify that the page is redirected to Savings Information Page when an active 'Next' button is clicked
    When I click the "Next" text
    Then I should see "Please provide your savings information." as a "text"

