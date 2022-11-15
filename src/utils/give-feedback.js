
const saveFeedbackinLocalStorage = () => {
  var name = document.getElementById("name");
  var feedback = document.getElementById("feedback")

    var dataFeedback = JSON.parse(localStorage.getItem("feedbackData"));

    if (dataFeedback == null) {
    localStorage.setItem("feedbackData", "[]")
    dataFeedback = [];
    }

    var auxRegister = {
      name: name.value,
      feedback: feedback.value
    }

    dataFeedback.push(auxRegister)

    localStorage.setItem("feedbackData", JSON.stringify(dataFeedback));
}