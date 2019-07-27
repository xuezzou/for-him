(function () {
  //   JQuery
  //   JQuery AutoTab Magic

  // Form Parent
  let clearInputs, form, formInputs, inputCode, validCode, validateCode;

  form = $(".codeInput");

  // Form Inputs
  formInputs = $(form).children("input");

  // Valid Code
  validCode = "mimi";

  //JQuery AutoTab to automatically move forward when maximum length of input is reached.
  $(formInputs).autotab_magic();

  // Returns the code which is inputted into each of the form inputs
  inputCode = function () {
    let code;
    code = []; // Blank array (probably a better way to do this
    $(formInputs).each(function () {// Selects each form input object
      return code.push($(this).val()); // Pushes each form input value to the [code] array
    });
    return code.join("").toLocaleLowerCase(); // Returns the code array in string form (joined)
  };

  // Checks the code which is returned from inputCode()
  validateCode = function () {
    let c;
    c = inputCode(); // Runs inputCode() to have a code string to validate
    if (c === validCode) {// Checks code against validCode variable
      $(form).removeClass("error").addClass("success"); // Adds success class and removes error class from form
      $(".hint").addClass("elementToFadeOut"); // Hides the hint
      $(".enterCode").addClass("elementToFadeOut");
      setTimeout(function(){
        $(location).attr('href', './message')
    }, 3000);
      return false; // End of successful code input
    } else if (c.length === validCode.length) {// Checks if code is 4 digits long
      return $(".hint").fadeIn(); // Shows the hint
    } else {
      $(form).addClass("error").removeClass("success"); // Adds error class, removes success class from form
      return false; // End of unsuccessful input
    }
  };

  // Clears out all the inputs and sets the focus to the first one
  clearInputs = function () {
    $(formInputs).first().focus(); // Set focus to first input
    $(formInputs).val(""); // Sets input values to null
    return $(form).removeClass(); // Remove classes from form
  };

  // Initiates code validation if the key pressed isn't backspace or delete
  $(formInputs).keyup(function () {// On keyup in any of the form inputs
    if (event.keyCode === 8 || event.keyCode === 46) {// Maps to the backspace and delete key
      clearInputs(); // Clears the form
      return false; // End of backspace event
    } else {
      return validateCode(); // Run validation function
    }
  });

  // Clears form when clicking any of the form inputs
  $(formInputs).click(function () {
    return clearInputs(); // Clears form
  });

}).call(this);
//# sourceURL=coffeescript

// add sketching effect
let vara = new Vara(".enterCode", "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json", [{
  text: "Wait..."
}], {
    strokeWidth: 1.3, // Width / Thickness of the stroke
    color: "#ccc", // Color of the text
    textAlign: "center", // String, text align, accepted values are left,center,right
  });

vara.ready(function () {
  vara.animationEnd(function (i, o) {
    $(".codeInput").addClass("elementToFadeIn");
  });
});