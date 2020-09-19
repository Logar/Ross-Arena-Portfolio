// IIFE - Immediately Invoked Function Expression
(function($, window, document) {

  // The $ is now locally scoped 

  // Listen for the jQuery ready event on the document
  $(function() {
    
    let element = document.getElementById("app-root")  
    let mobileDetect = new MobileDetect(window.navigator.userAgent);
    if (mobileDetect.phone()) {
      element.classList.add("app-sm");
    } else if (mobileDetect.tablet()) {
      element.classList.add("app-md");
    } else {
      element.classList.add("app-lg");
    }
  });

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter
