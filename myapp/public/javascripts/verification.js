function check(form) { /*function to check userid & password*/
      /*the following code checkes whether the entered userid and password are matching*/
      if(form.userid.value == "kristi" && form.pswrd.value == "kristi") {
      window.open('/index1.jade')/*opens the target page while Id & password matches*/
      }
      else {
      alert("Error Password or Username")/*displays error message*/
      }
      }
