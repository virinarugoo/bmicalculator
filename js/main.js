//click on the submit button
document.querySelector('#calculate').addEventListener('click', run)

function run() {
  console.log('Helo BMI')

  //Get the value out of the input
  // const yage = document.querySelector('#yourAge').value
  const yweight = document.querySelector('#yourWeight').value
  const yheight = document.querySelector('#yourHeight').value

  //calculate the BMI
    let bmi = (yweight / Math.pow( (yheight/100), 2 )).toFixed(1);

  //show value on html document
  document.querySelector('#placeToYell').innerText = bmi;

  //calculate the status of the BMI average
  if(bmi < 18.5){
        status = "Underweight 😒";
        placeToYell.style.color = "#ffc44d";
    }

  //If BMI is >=18.5 and <=24.9
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        status = "Normal Weight 😍";
        placeToYell.style.color = "#0be881";
    }

  //If BMI is >= 25 and <= 29.9
    else if( bmi >= 25 && bmi <= 29.9 ){
        status = "Overweight 😮";
        placeToYell.style.color = "#ff884d";
    }

  //If BMI is <= 30
    else{
        status = "Obese 😱";
        placeToYell.style.color = "#ff5e57";
    }

    document.getElementById("status").textContent = status;
 
}
