const yesBtn = document.getElementById("yesButton");
const noBtn = document.getElementById("noButton");

const formspreeEndpoint = "https://formspree.io/f/xovdbgwg"; // ✅ Your Formspree ID

function sendAnswer(answer, redirectTo) {
  fetch(formspreeEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ response: answer })
  }).then(() => {
    window.location.href = redirectTo;
  }).catch(() => {
    alert("حدث خطأ ما، حاول مرة أخرى");
  });
}

yesBtn.addEventListener("click", () => {
  sendAnswer("Yes", "yes.html");
});

noBtn.addEventListener("click", () => {
  sendAnswer("No", "no.html");
});
