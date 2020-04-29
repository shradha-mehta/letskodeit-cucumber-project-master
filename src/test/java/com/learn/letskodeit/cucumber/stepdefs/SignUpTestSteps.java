package com.learn.letskodeit.cucumber.stepdefs;

import com.learn.letskodeit.pages.HomePage;
import com.learn.letskodeit.pages.SignUpPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.ro.Si;
import org.junit.Assert;

/**
 * Created by Ankita
 */
public class SignUpTestSteps {
    @Given("^I am on letskodeit homepage$")
    public void iAmOnLetskodeitHomepage() {
    }

    @When("^I click on signup link$")
    public void iClickOnSignupLink() {
        new HomePage().clickOnSignUpLink();
    }

    @Then("^I should navigate to signup page successfully$")
    public void iShouldNavigateToSignupPageSuccessfully() {
        Assert.assertEquals(new SignUpPage().getWelcomeText(), "Sign Up to Let's Kode It");

    }

    @And("^I enter fullname \"([^\"]*)\"$")
    public void iEnterFullname(String fullName)  {
        new SignUpPage().enterFullName(fullName);

    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new SignUpPage().enterEMailId(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password)  {
        new SignUpPage().enterPassword(password);

    }

    @And("^I enter conform password \"([^\"]*)\"$")
    public void iEnterConformPassword(String conformPassword)  {
        new SignUpPage().enterConformPassword(conformPassword);

    }

    @And("^I click on Privacy policy button$")
    public void iClickOnPrivacyPolicyButton() {
        new SignUpPage().clickOnPrivacyPolicyBt();
    }

    @And("^I click on signup button$")
    public void iClickOnSignupButton() {
        new SignUpPage().clickOnSignUpButton();
    }
}
