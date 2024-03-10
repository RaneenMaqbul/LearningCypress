///<reference types ="cypress" />

class LoginPage{
///////////////////////// ...................Elements........../////////////////////////////////////////////////
get emailInput(){
const Emailfield=cy.get("#input-email");
return Emailfield;
    } 
    
get PasswordInput(){
        const Passwordfield=cy.get("#input-password");
        return Passwordfield;
        } 

get LoginButton(){
        const LoginButton=cy.get(".gs-btn");
        return LoginButton;
            } 


get forgetPassword(){
    const forgetpass= cy.get('.gs-login-help > a > span');
    return forgetpass;
}

get registeredLink(){
const RegisterLink =cy.get('.gs-header-note > a > span');
return RegisterLink;
}

get LoginAutomaticallyCheckBox(){
    const Login_Automatically_CheckBox =cy.get('#input-persist');
    return Login_Automatically_CheckBox;
    }
get Menu(){
    const menuLink=cy.get('.gs-hover-on-desktop');
    return menuLink;
}

get EmailLabel(){
    const emailLabel=cy.get(':nth-child(1) > h3 > label');
    return emailLabel;
}
get PasswordLabel(){
   const passwordLabel= cy.get(':nth-child(2) > h3 > label');
   return passwordLabel;
}
    
    ///////////////////////// ...................Mthods........../////////////////////////////////////////////////
    Load(){
        cy.visit("https://www.giltcity.jp/login");
        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from
            // failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
          });

    }

    FillEmail(emailvalue){
        this.emailInput.type(emailvalue);
        return this;
    }

    FillPassword(passwordvalue){
        this.PasswordInput.type(passwordvalue);
        return this;

    }
    Email_Type_Enter(){
        this.emailInput.type('{enter}');
        return this;
    }
    ClickOnLoginButton(){
        this.LoginButton.click();
        return this;
        
    }

    CheckURLAfterLogin(){
     Cypress.config('defaultCommandTimeout', 10000);
     cy.url().should('include', 'https://www.giltcity.jp/offers');
     return this;
    }

    Validation_Message_With_InvalidEmail_InvalidPassword(){
        cy.get(":nth-child(2) > div.gs-tips > .gs-tips-body").invoke('text')
        .should('be.oneOf', ['ログインに失敗しました。メールアドレスとパスワードをご確認ください。', 'ログインの試行回数が上限を超えたため、お客様のアカウントはロックされました。お手数ですがしばらく経ってから再度ログインして下さい。']);   
        return this;
    }
   Validation_Message_With_Valid_email_InValid_password(){
    cy.get(":nth-child(2) > div.gs-tips > .gs-tips-body").invoke('text')
    .should('be.oneOf', ['ログインに失敗しました。メールアドレスとパスワードをご確認ください。', 'ログインの試行回数が上限を超えたため、お客様のアカウントはロックされました。お手数ですがしばらく経ってから再度ログインして下さい。']);
    return this;
}

   Validation_Message_with_InValid_email_Valid_password(){
    cy.get(":nth-child(2) > div.gs-tips > .gs-tips-body").invoke('text')
    .should('be.oneOf', ['ログインに失敗しました。メールアドレスとパスワードをご確認ください。', 'ログインの試行回数が上限を超えたため、お客様のアカウントはロックされました。お手数ですがしばらく経ってから再度ログインして下さい。']);
    return this;
   }

   Validation_Message_Login_WithoutspecialCharacter(){
    //Special character mean @
    cy.get(":nth-child(1) > .gs-tips > .gs-tips-body").invoke('text')
    .should('be.oneOf', ['有効なメールアドレスをご記入ください', 'こちらの項目をご記入ください有効なメールアドレスをご記入ください']);
    return this;
   }
   Validation_Message_Unregistered_Email(){
    cy.get(":nth-child(2) > div.gs-tips > .gs-tips-body").should(
        'have.text',
        'ログインに失敗しました。メールアドレスとパスワードをご確認ください。'
       );
       return this;
   }

   Make_Sure_LoginButtonDisabled(){
    this.LoginButton.should('have.prop', 'disabled', true);
    return this;
   }
   
   ClickInforgetPassword(){
    this.forgetPassword.click();
    return this;
   }

   ForgetPasswordLinkdisplayed(){
    cy.url().should('include', 'https://www.giltcity.jp/member/forgot_password');
    return this;
   }

   Validation_Message_Displayed_After_Change_Password(){
    cy.get(".gs-alert").should(
        'have.text',
        'パスワード再設定のメールを送信しました'
       );
       return this;
   }

   Click_In_Register_Link(){
    this.registeredLink.click();
    return this;
   }

   RegisterUrlDispalyed(){
    cy.url().should('include', 'https://www.giltcity.jp/register');
    return this;

   }

   LoginAutomaticallyCheckBoxShouldBeChecked(){
    this.LoginAutomaticallyCheckBox.should('be.checked');
    return this;
   }
   password_field_visible_as_asterisk(){
    this.PasswordInput.should('have.prop', 'type', 'password');
    return this;
   }
   clear_the_data_from_email(){
   this.emailInput.clear();
   return this;
   }
   ValidationMessageWhenClearEmail(){
    cy.get(':nth-child(1) > .gs-tips > .gs-tips-body').should(
        'have.text',
        'こちらの項目をご記入ください有効なメールアドレスをご記入ください'
       );
    return this;
   }

   clear_the_data_from_Password(){
    this.PasswordInput.clear();
    return this;
   }

   ValidationMessageWhenClearPassword(){
    cy.get(':nth-child(1) > .gs-tips > .gs-tips-body').should(
        'have.text',
        'こちらの項目をご記入ください有効なメールアドレスをご記入ください'
       );
    return this;
   }

   ClickInMenu(){
   cy.wait(3000);
   this.Menu.click();
   return this;
   }
   ClickInLogout(){
    cy.contains ('span[gt=""]', 'ログアウト').click();
    cy.wait(3000);
    return this;
   }

   Login_Link_Visible_After_Logout(){
    cy.get('.gs-hover-on-desktop').click();
    cy.contains ('span[gt=""]', 'ログイン').should('be.visible');   
    return this;

}

Validation_Msg_When_Enter_Using_Special_characters(){
    //Special_characters #
    cy.get(':nth-child(1) > .gs-tips > .gs-tips-body').should(
        'have.text',
        'こちらの項目をご記入ください有効なメールアドレスをご記入ください'
           );
    return this;
}

Validation_Msg_When_Enter_Using_Special_characters$(){
    //Special_characters $
cy.get(':nth-child(1) > .gs-tips > .gs-tips-body').should(
    'have.text',
    'こちらの項目をご記入ください有効なメールアドレスをご記入ください'
   );
   return this;
}


Validation_Msg_for_Password_Less_Than_5chars(){
    cy.get('[ng-show="loginForm.password.$error.minlength"]').should(
        'have.text',
        '5 文字以上でご記入ください'
       );
       return this;
}


Check_EmailLabel_Visible_And_Have_Specefic_Text(){
    this.EmailLabel.should('be.visible');
    this.EmailLabel.should('have.text','メールアドレス');
    return this;
}

Check_PasswordLabel_Visible_And_Have_Specefic_Text(){
    this.PasswordLabel.should('be.visible');
    this.PasswordLabel.should('have.text','ギルトのパスワード');
    return this;
}
   }




export default LoginPage
