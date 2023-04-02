Feature: Test
  
  Scenario: pass
      Given Otwieram strone glowna
      Then url powinien miec w sobie 'google'
  
  Scenario: faild
      Given Otwieram strone glowna
      Then url powinien zawierac 'faildfaild'
