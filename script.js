document.getElementById("degrees").addEventListener("input", function() {
    var input = this.value;
    var isValidNumber = !isNaN(input) && input !== "" && input.trim() !== "" && Number(input) === parseFloat(input);
    var validationMessage = isValidNumber ? "Valid number." : "Invalid number.";
    document.getElementById("validationResult").textContent = validationMessage;
  });
  
  const celsiusField = document.querySelector("#celsius");
  const degree = document.querySelector("#degrees");
  const convertBtn = document.querySelector("#style_btn");
  const tempType = document.querySelector("#temp_change");
  
  window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
  });
  
    if (degree.value === "") {
      convertBtn.setAttribute("disabled", "");
      setTimeout(() => {
        convertBtn.removeAttribute('disabled');
      }, 4000);
    }
  
  convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
    setTimeout(() => {
      convertBtn.innerHTML = "<span>Convert</span>"
    }, 1000);
  });
  
  function convertToCelsius() {
    let inputValue = parseFloat(degree.value);
  
    setTimeout(() => {
      if (tempType.value === "fahrenheit") {
        const CelsiusToFahrenheit = (inputValue * 1.8) + 32;
        celsiusField.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} &deg;F`;
      } 
      else if (tempType.value === "Kelvin") {
        const CelsiusToKelvin = (inputValue + 273.15); 
        celsiusField.innerHTML = `${CelsiusToKelvin.toFixed(3)} &deg;K`; 
      }
    }, 1200);
  }
  
  
  