package com.learn.letskodeit.pages;

import com.cucumber.listener.Reporter;
import com.learn.letskodeit.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(xpath = "//h1[@class='text-center']")
    WebElement welcomeLoginText;
    @FindBy(id = "user_email")
    WebElement emailField;
    @FindBy(id = "user_password")
            WebElement passwordField;

    @FindBy(xpath = "//input[@name='commit']")
    WebElement loginBt;

    public String getWelcomeText() {
        Reporter.addStepLog("Getting text from : " + welcomeLoginText.toString());
        log.info("Getting text from : " + welcomeLoginText.toString());
        return getTextFromElement(welcomeLoginText);
    }



    public void enterEmailId(String email) {
        Reporter.addStepLog("Entering emailId : " +email+ "in the email field" + emailField.toString());
        sendTextToElement(emailField, email);
        log.info("Entering emailId : " +email+ "in the email field" + emailField.toString());
    }

    public void enterPassword(String samepassword) {
        Reporter.addStepLog("Entering password : " +samepassword+ "in the password field" +passwordField.toString());
        sendTextToElement(passwordField, samepassword);
        log.info("Entering password : " +samepassword+ "in the password field" +passwordField.toString());
    }

    public void clickOnLoginBt() {
        Reporter.addStepLog("Clicking on login button : " +loginBt.toString());
        clickOnElement(loginBt);
        log.info("Clicking on login button : " +loginBt.toString());
    }
}
