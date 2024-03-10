///<reference types ="cypress" />
import LoginPage from '../PagesObjects/LoginPage'

describe ("Login Page Scenarios ", ()=>{
    beforeEach(() =>{
         new LoginPage()
        .Load();
    })


it("Validate Login with valid email and valid password", () =>{
    new LoginPage()
    .FillEmail("rmaqbul@labellevie.jp")
    .FillPassword("Raneen@123456")
    .ClickOnLoginButton()
   .CheckURLAfterLogin();
})

it("Validate Login with invalid email and InValid password", () =>{
    new LoginPage()
    .FillEmail("rmaqbul@labelleviee.jp")
    .FillPassword("Raneen@1234567")
    .ClickOnLoginButton()
    .Validation_Message_With_InvalidEmail_InvalidPassword();
      
     });


it("Validate Login with Valid email and InValid password",  () =>{
    new LoginPage()
    .FillEmail("rmaqbul@labellevie.jp")
    .FillPassword("Raneen@1234567")
    .ClickOnLoginButton()
    .Validation_Message_With_Valid_email_InValid_password();

   })


it("Validate Login with InValid email and Valid password",  () =>{

     new LoginPage()
    .FillEmail("rmaqbul@labelleviee.jp")
    .FillPassword("Raneen@123456")
    .ClickOnLoginButton()
    .Validation_Message_with_InValid_email_Valid_password();
       })

it(" Login without @ in email and enter Valid password",  () =>{
      new LoginPage()
      .FillEmail("rmaqbullabellevie.jp")
      .FillPassword("Raneen@123456")
      .Validation_Message_Login_WithoutspecialCharacter();
       })

it("Validate Login with Un-registered email" , () =>{
    new LoginPage()
    .FillEmail("m@gilt.jp")
    .FillPassword("Raneen@123456")
    .ClickOnLoginButton()
    //Check displayed of validation message when Login with Un-registered email
    .Validation_Message_Unregistered_Email();

   })

it("Make sure Login button disabled when user does not enter email and password" , () =>{
   //check button Login disabled when user do not login email or password
    new LoginPage()
   .FillEmail("m@gilt.jp")
   .Make_Sure_LoginButtonDisabled();

   })
  
it("Verify that forget password Link work properly" , () =>{
    new LoginPage()
    .ClickInforgetPassword()
    .FillEmail("rmaqbul@labellevie.jp")
    .ClickOnLoginButton()
   //Check when click in forget password and fill email , click submit a validation message displayed.
    .Validation_Message_Displayed_After_Change_Password();
   })

it("Verify that Register Link work properly" , () =>{
    new LoginPage()
    .Click_In_Register_Link()
    //Check when click in register link register page with register URL displayed
    .RegisterUrlDispalyed();
   })

it("Verify Login automatically next time check by default" , () =>{
   //check that Login automatically checbox is by default checked.
   new LoginPage()
   .LoginAutomaticallyCheckBoxShouldBeChecked();
   })


it("Verify if the data in password field is either visible as asterisk" , () =>{
   //Verify that the type of input is password so, the data in password field visible as asterisk
    new LoginPage()
   .password_field_visible_as_asterisk();
   })

it("Verify if can clear the data from email and password" , () =>{
    new LoginPage()
    .FillEmail("rmaqbul@labellevie.jp")
    .clear_the_data_from_email()
   //Verify when clear the email from email field a validation message displayed.
    .ValidationMessageWhenClearEmail()
    .FillPassword("Raneen@123456")
    .clear_the_data_from_Password()
   //Verify when clear the password from password field a validation message displayed.
    .ValidationMessageWhenClearPassword();
    
      })


it("Verify the Logout function" , () =>{
    new LoginPage()
    .FillEmail("rmaqbul@labellevie.jp")
    .FillPassword("Raneen@123456")
    .ClickOnLoginButton()
    .ClickInMenu()
    .ClickInLogout()
   //when logout, the login link will redisplayed.
    .Login_Link_Visible_After_Logout();

       
         })


it("Testing login with a username that includes special characters (e.g. #, $)." , () =>{
     new LoginPage()
    .FillEmail("rmaqbul#labellevie.jp")
    .Email_Type_Enter()
       
   //when enter special charcters #, a validation message will display.
    .Validation_Msg_When_Enter_Using_Special_characters()
    .clear_the_data_from_email()
    .FillEmail("rmaqbul$labellevie.jp")
    . Email_Type_Enter()
       
   //when enter special charcters $, a validation message will display.
   .Validation_Msg_When_Enter_Using_Special_characters$()
             })


          
it("Enter Password Less than 5 characters", () =>{
    new LoginPage()
    .FillEmail("rmaqbul@labellevie.jp")
    .FillPassword("Ran")
   //when enter password less than 5, a validation message displayed
   .Validation_Msg_for_Password_Less_Than_5chars();
      })



it("Validate Login with Lower case email", () =>{

     new LoginPage()
    .FillEmail("rmaqbul@labellevie.jp")
    .FillPassword("Raneen@123456")
    .ClickOnLoginButton()
    //check if new URL equal https://www.giltcity.jp/offers after Login when Login with Lower case email
    .CheckURLAfterLogin();
   
       
  
  })

it("Validate Login with Uper case email", () =>{
     new LoginPage()
    .FillEmail("RMAQBUL@LABELLEVIE.JP")
    .FillPassword("Raneen@123456")
    .ClickOnLoginButton()
    
    //check if new URL equal https://www.giltcity.jp/offers after Login when Login with Lower case email
    .CheckURLAfterLogin();


  

})     


it("Make sure Labels for email & Password exists with specefic text", () =>{
new LoginPage()
   //check if email label have specefic text
.Check_EmailLabel_Visible_And_Have_Specefic_Text()
   //check ifpassword label have specefic text
.Check_PasswordLabel_Visible_And_Have_Specefic_Text();

})     
})