package com.learn.letskodeit.pages;

import com.cucumber.listener.Reporter;
import com.learn.letskodeit.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.security.PublicKey;


public class SignUpPage extends Utility {

    private static final Logger log = LogManager.getLogger(SignUpPage.class.getName());

    @FindBy(xpath = "//h1[contains(text(),\"Sign Up to Let's Kode It\")]")
    WebElement signUpWelcomeText;

    @FindBy(xpath = "//input[@id='user_name']")
    WebElement fullNameField;

    @FindBy(xpath = "//input[@id='user_email']")
    WebElement eMailIdField;

    @FindBy(xpath = "//input[@id='user_password']")
    WebElement passwordField;
    @FindBy(xpath = "//input[@id='user_password_confirmation']")
    WebElement conformPasswordField;
    @FindBy(xpath = "//input[@name='commit']")
    WebElement signUpButton;
    @FindBy(xpath = "//input[@id='user_agreed_to_terms']")
    WebElement privacyPolicyBt;

    public String getWelcomeText() {
        Reporter.addStepLog("Getting text from : " + signUpWelcomeText.toString());
        log.info("Getting text from : " + signUpWelcomeText.toString());
        return getTextFromElement(signUpWelcomeText);
    }


    public void enterFullName(String fullName){
        Reporter.addStepLog("Entering Full Name : " +fullName+ "in full name field" +fullNameField.toString());
        sendTextToElement(fullNameField, fullName);
        log.info("Entering Full Name : " +fullName+ "in full name field" +fullNameField.toString());

    }
    public void enterEMailId(String emailId){
        Reporter.addStepLog("Entering emailId : " +emailId+ "in the emailId field" +eMailIdField.toString());
        sendTextToElement(eMailIdField, emailId);
        log.info("Entering emailId : " +emailId+ "in the emailId field" +eMailIdField.toString());
    }

    public void enterPassword(String password){
        Reporter.addStepLog("Entering password : " +password+ "in the password field" +passwordField.toString());
        sendTextToElement(passwordField, password);
        log.info("Entering password : " +password+ "in the password field" +passwordField.toString());
    }
    public void enterConformPassword(String conformPassword){
        Reporter.addStepLog("Entering conformpassword : " +conformPassword+ "in the conformpassword field" +conformPasswordField.toString());
        sendTextToElement(conformPasswordField, conformPassword);
        log.info("Entering conformpassword: " +conformPassword+ "in the conformpassword field" +conformPasswordField.toString());
    }
    public void clickOnPrivacyPolicyBt(){
        clickOnElement(privacyPolicyBt);
    }
    public void clickOnSignUpButton(){
        clickOnElement(signUpButton);
    }


}
