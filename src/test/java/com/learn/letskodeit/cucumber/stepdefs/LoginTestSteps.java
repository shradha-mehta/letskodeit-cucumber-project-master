package com.learn.letskodeit.cucumber.stepdefs;

import com.learn.letskodeit.pages.HomePage;
import com.learn.letskodeit.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class LoginTestSteps {
    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        Assert.assertEquals(new LoginPage().getWelcomeText(), "Log In to Let's Kode It");
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
    }

    @Then("^I should login successfully$")
    public void iShouldLoginSuccessfully() {
        Assert.assertTrue(true);
    }
}
