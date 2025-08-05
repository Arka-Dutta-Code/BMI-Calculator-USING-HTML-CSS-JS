const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const heightVal = document.querySelector("#height").value;
  const weightVal = document.querySelector("#weight").value;


  const height = parseInt(heightVal)
  const weight = parseInt(weightVal)
     



  const result = document.querySelector("#results");
  if (heightVal === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a Valid ${height}`;
  } else if (weightVal === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid ${weight}`;
  } else {
    
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
     
    let category =''
    if(bmi < 18.6){
        category ='underweight'
    }else if(bmi >= 18.6 && bmi <= 24.6){
        category ='Normal weight'
    }else{
        category ='Overweight'
    }
          result.innerHTML = `Your BMI is <strong>${bmi}</strong> (${category})`
  }
});
