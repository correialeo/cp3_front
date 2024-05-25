var faqs = document.getElementsByClassName("faq");
for (var i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", function() {
    var answer = this.children[1];
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const successMessage = sessionStorage.getItem("loginSuccessMessage");
  const successMessageDiv = document.getElementById("success-message");
  const logoutBtn = document.getElementById("logoutBtn");

  if (successMessage) {
      successMessageDiv.textContent = successMessage;
      successMessageDiv.style.display = "block";

      sessionStorage.removeItem("loginSuccessMessage");

      setTimeout(() => {
          successMessageDiv.style.display = "none";
      }, 3000);
  }

  logoutBtn.addEventListener("click", function() {
      sessionStorage.removeItem("loggedIn");
      window.location.href = "../html/login.html";
  });
});
