$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality",
  "description": "As a User I want to login into letskodeit website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14606072700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 89125400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 119181300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 2989595100,
  "status": "passed"
});
formatter.after({
  "duration": 690243300,
  "status": "passed"
});
formatter.before({
  "duration": 15342831500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"jiyapandya@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"Rahi0804\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 134120800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jiyapandya@gmail.com",
      "offset": 15
    }
  ],
  "location": "SignUpTestSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 3243918700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi0804",
      "offset": 18
    }
  ],
  "location": "SignUpTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 92202800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 50800,
  "status": "passed"
});
formatter.after({
  "duration": 698938900,
  "status": "passed"
});
formatter.uri("src/test/java/com/learn/letskodeit/resources/featurefile/signup.feature");
formatter.feature({
  "line": 1,
  "name": "signUp functionality",
  "description": "As a User I want to sign up into letskodeit website",
  "id": "signup-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14294965600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to sign up page successfully",
  "description": "",
  "id": "signup-functionality;user-should-navigate-to-sign-up-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on signup link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to signup page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iClickOnSignupLink()"
});
formatter.result({
  "duration": 116016100,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iShouldNavigateToSignupPageSuccessfully()"
});
formatter.result({
  "duration": 3133902300,
  "status": "passed"
});
formatter.after({
  "duration": 693876600,
  "status": "passed"
});
formatter.before({
  "duration": 15319085300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should signup successfully with valid credentials",
  "description": "",
  "id": "signup-functionality;user-should-signup-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on letskodeit homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on signup link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter fullname \"Jiya Pandya\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"jiyapandya@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"Rahi0804\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter conform password \"Rahi0804\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Privacy policy button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on signup button",
  "keyword": "And "
});
formatter.match({
  "location": "SignUpTestSteps.iAmOnLetskodeitHomepage()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iClickOnSignupLink()"
});
formatter.result({
  "duration": 136873400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jiya Pandya",
      "offset": 18
    }
  ],
  "location": "SignUpTestSteps.iEnterFullname(String)"
});
formatter.result({
  "duration": 3596625400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jiyapandya@gmail.com",
      "offset": 15
    }
  ],
  "location": "SignUpTestSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 151707400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi0804",
      "offset": 18
    }
  ],
  "location": "SignUpTestSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 102846600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rahi0804",
      "offset": 26
    }
  ],
  "location": "SignUpTestSteps.iEnterConformPassword(String)"
});
formatter.result({
  "duration": 106664500,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iClickOnPrivacyPolicyButton()"
});
formatter.result({
  "duration": 87843300,
  "status": "passed"
});
formatter.match({
  "location": "SignUpTestSteps.iClickOnSignupButton()"
});
formatter.result({
  "duration": 5386908900,
  "status": "passed"
});
formatter.after({
  "duration": 729585900,
  "status": "passed"
});
});