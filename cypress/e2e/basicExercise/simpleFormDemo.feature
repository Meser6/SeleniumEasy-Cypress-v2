Feature: Simple Form Demo

    Background:
        Given I open main site and chose "Basic" excercises
        And I open "Simple Form Demo" excercise

    Scenario: Single Input Field
        When I send "test text" message
        Then There should be "test text" at My message section

    Scenario: Two Input Fields
        When I send 1 and 2 values
        Then There should be 3 at Total section