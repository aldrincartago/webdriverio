Feature: Verify the Savings Goals Information screen

  Scenario: R1S9_TC08.01_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the Icon for 'Education' is displayed at the left most side of the card
    Given I open the default Whole Life Application on an "iPhone X" device
    When I click the button for "I Accept"
    And I click the "Male" text
    And I click the "Smoker" text
    When I click the "Next" text
    Then the "icon" for "Education" must be displayed on the Savings Goals section

  Scenario: R1S9_TC08.03_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the Icon color for 'Education' is #BDBDBD
    Then the "fill" css element should be "rgb(189,189,189)" for the "Education icon" in the Savings Information screen

  Scenario: R1S9_TC08.04_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the 'Education' label is displayed at the right side of the 'Education' icon
    Then I should see "Education" as a "text"

  Scenario: R1S9_TC08.05_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the 'Education' label matches the label set in the configurator
    Then I should see "Education" as a "text"

  Scenario: R1S9_TC08.06_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the 'Education' label's Font color is #262626
    Then the "color" css element should be "#262626" for the "Education" in the Savings Information screen

  Scenario: R1S9_TC08.07_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the Toggle icon is displayed at the right side of the 'Education' label
    Then the "toggle icon" for "Education" must be displayed on the Savings Goals section

  Scenario: R1S9_TC08.08_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the 'Education' Toggle icon's color is #BFBFBF
    Then the "background-color" css element should be "#bfbfbf" for the "Education toggle icon" in the Savings Information screen

  Scenario: R1S9_TC08.09_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the Icon for 'Major Life Event' is displayed at the left most side of the card
    Then the "icon" for "Major Life Event" must be displayed on the Savings Goals section

  Scenario: R1S9_TC08.11_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the Icon color for 'Major Life Event' is #BDBDBD
    Then the "fill" css element should be "rgb(189,189,189)" for the "Major Life Event icon" in the Savings Information screen

  Scenario: R1S9_TC08.12_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the 'Major Life Event' label is displayed at the right side of the 'Major Life Event' icon
    Then I should see "Major Life Event" as a "text"

  Scenario: R1S9_TC08.13_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the 'Major Life Event' label matches the label set in the configurator
    Then I should see "Major Life Event" as a "text"

  Scenario: R1S9_TC08.14_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the 'Major Life Event' label's Font color is #262626
    Then the "color" css element should be "#262626" for the "Major Life Event" in the Savings Information screen

  Scenario: R1S9_TC08.15_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the Toggle icon is displayed at the right side of the 'Major Life Event' label
    Then the "toggle icon" for "Major Life Event" must be displayed on the Savings Goals section

  Scenario: R1S9_TC08.16_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the 'Major Life Event' Toggle icon's color is #BFBFBF
    Then the "background-color" css element should be "#bfbfbf" for the "Major Life Event toggle icon" in the Savings Information screen

  Scenario: R1S9_TC08.17_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the Icon for 'Retirement' is displayed at the left most side of the card
    Then the "icon" for "Retirement" must be displayed on the Savings Goals section

  Scenario: R1S9_TC08.19_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the Icon color for 'Retirement' is #BDBDBD
    Then the "fill" css element should be "rgb(189,189,189)" for the "Retirement icon" in the Savings Information screen

  Scenario: R1S9_TC08.20_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the 'Retirement' label is displayed at the right side of the 'Retirement' icon
    Then I should see "Retirement" as a "text"

  Scenario: R1S9_TC08.21_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the 'Retirement' label matches the label set in the configurator
    Then I should see "Retirement" as a "text"

  Scenario: R1S9_TC08.22_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the 'Retirement' label's Font color is #262626
    Then the "color" css element should be "#262626" for the "Retirement" in the Savings Information screen

  Scenario: R1S9_TC08.23_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the Toggle icon is displayed at the right side of the 'Retirement' label
    Then the "toggle icon" for "Retirement" must be displayed on the Savings Goals section

  Scenario: R1S9_TC08.24_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the 'Retirement' Toggle icon's color is #BFBFBF
    Then the "background-color" css element should be "#bfbfbf" for the "Retirement toggle icon" in the Savings Information screen

  Scenario: R1S9_TC08.25_EXP929_MV_[WL]SavingGoalsSelection_EstateTransition_Verify that the Icon for 'Estate Transition' is displayed at the left most side of the card
    Then the "icon" for "Estate Transition" must be displayed on the Savings Goals section

  Scenario: R1S9_TC08.27_EXP929_MV_[WL]SavingGoalsSelection_EstateTransition_Verify that the Icon color for 'Estate Transition' matches the Theme color set in the configurator
    Then the "fill" css element should be "rgb(33,86,145)" for the "Estate Transition icon" in the Savings Information screen

  Scenario: R1S9_TC08.28_EXP929_MV_[WL]SavingGoalsSelection_EstateTransition_Verify that the 'Estate Transition' label is displayed at the right side of the 'Estate Transition' icon
    Then I should see "Estate Transition" as a "text"

  Scenario: R1S9_TC08.29_EXP929_MV_[WL]SavingGoalsSelection_EstateTransition_Verify that the 'Estate Transition' label matches the label set in a configurator 
    Then I should see "Estate Transition" as a "text"

  Scenario: R1S9_TC08.30_EXP929_MV_[WL]SavingGoalsSelection_EstateTransition_Verify that the 'Estate Transition' label's Font color is #262626
    Then the "color" css element should be "#262626" for the "Estate Transition" in the Savings Information screen

  Scenario: R1S9_TC08.31_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the 'Education' Card is expanded downward when the toggle switch is turned On
    When I toggle the switch for "Education" in the Savings Goals section
    Then I should see "Age at time of event" as a "text"

  Scenario: R1S9_TC08.32_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the ‘Age of Event’ label is displayed left-aligned below the custom goal label when the toggle switch is turned On
    Then I should see the Age of Event "label" for the "Education" goal

  Scenario: R1S9_TC08.33_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the numeric Input box for 'Age of Event' is displayed at the right side of ‘Age of Event’ label
    Then I should see the Age of Event "field" for the "Education" goal

  Scenario: R1S9_TC08.37_EXP929_MV_[WL]SavingGoalsSelection_Education_Verify that the 'Education' Card is reduced to default state when the toggle switch is turned Off
    When I toggle the switch for "Education" in the Savings Goals section
    Then I should not see the Age of Event "label" for the "Education" goal
    And I should not see the Age of Event "field" for the "Education" goal

  Scenario: R1S9_TC08.38_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the 'Major Life Event' Card is expanded downward when the toggle switch is turned On
    When I toggle the switch for "Major Life Event" in the Savings Goals section
    Then I should see "Age at time of event" as a "text"

  Scenario: R1S9_TC08.39_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the ‘Age of Event’ label is displayed left-aligned below the custom goal label when the toggle switch is turned On
    Then I should see the Age of Event "label" for the "Major Life Event" goal

  Scenario: R1S9_TC08.40_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the numeric Input box for 'Age of Event' is displayed at the right side of ‘Age of Event’ label
    Then I should see the Age of Event "field" for the "Major Life Event" goal

  Scenario: R1S9_TC08.44_EXP929_MV_[WL]SavingGoalsSelection_MajorLifeEvent_Verify that the 'Major Life Event' Card is reduced to default state when the toggle switch is turned Off
    When I toggle the switch for "Major Life Event" in the Savings Goals section
    Then I should not see the Age of Event "label" for the "Education" goal
    And I should not see the Age of Event "field" for the "Education" goal

  Scenario: R1S9_TC08.45_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the 'Retirement' Card is expanded downward when the toggle switch is turned On
    When I toggle the switch for "Retirement" in the Savings Goals section
    Then I should see "Age at time of event" as a "text"

  Scenario: R1S9_TC08.46_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the ‘Age of Event’ label is displayed left-aligned below the custom goal label when the toggle switch is turned On
    Then I should see the Age of Event "label" for the "Retirement" goal

  Scenario: R1S9_TC08.47_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the numeric Input box for 'Age of Event' is displayed at the right side of ‘Age of Event’ label
    Then I should see the Age of Event "field" for the "Retirement" goal

  Scenario: R1S9_TC08.51_EXP929_MV_[WL]SavingGoalsSelection_Retirement_Verify that the 'Education' Card is reduced to default state when the toggle switch is turned Off
    When I toggle the switch for "Retirement" in the Savings Goals section
    Then I should not see the Age of Event "label" for the "Education" goal
    And I should not see the Age of Event "field" for the "Education" goal