document.addEventListener("DOMContentLoaded", function() {
    const formContainer = document.getElementById("form-container");
  
    // Load the JSON data
    fetch('practice.json')
      .then(response => response.json())
      .then(data => {
        // Initialize form with first question
        createSelect(data["init"][1], data["init"].slice(2));
  
        // Function to create select element
        function createSelect(label, options) {
          const select = document.createElement("select");
          const labelElem = document.createElement("label");
          labelElem.textContent = label + " ";
          labelElem.appendChild(select);
          formContainer.appendChild(labelElem);
  
          options.forEach(option => {
            const optionElem = document.createElement("option");
            optionElem.value = option;
            optionElem.textContent = option;
            select.appendChild(optionElem);
          });
  
          // Event listener for select change
          select.addEventListener("change", function() {
            const nextQuestion = data[select.value];
            if (nextQuestion) {
              createSelect(nextQuestion[1], nextQuestion.slice(2));
            } else {
              const finalNode = document.createElement("p");
              finalNode.textContent = "You've completed your character: ";
              const selections = document.querySelectorAll("select");
              selections.forEach(select => {
                finalNode.textContent += select.value + ", ";
              });
              formContainer.appendChild(finalNode);
            }
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  