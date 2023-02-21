const form = document.querySelector(".contact");
const userName = form.querySelector(".form__input--name");
const phone = form.querySelector(".form__input--phone");
const email = form.querySelector(".form__input--email");
const submitButton = form.querySelector(".contact__button");

form.addEventListener("change", function (evt) {
  if (!userName.value || !phone.value || !email.value) {
    evt.preventDefault();
    submitButton.disabled = true;
  } 

  form.oninput = function () {
    const patternPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    const phoneNum = phone.value;
    const patternEmail = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    const emailAddress = email.value;

    if (patternPhone.test(phoneNum) && patternEmail.test(emailAddress)) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }

      if (!patternPhone.test(phoneNum)) {
      phone.classList.add("form__input--error")
    } else {
      phone.classList.remove("form__input--error")
    }

      if (!patternEmail.test(emailAddress)) {
      email.classList.add("form__input--error")
    } else {
      email.classList.remove("form__input--error")
    }
  }
})

