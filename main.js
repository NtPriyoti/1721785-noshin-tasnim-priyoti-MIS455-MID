
const userField = document.getElementById('user-name');
const salaryField = document.getElementById('salary');
const ageField = document.getElementById('age')
const submitBtn = document.getElementById('submitBtn');

const displayName = document.getElementById('display-name');
const displaySalary = document.getElementById('display-salary');

submitBtn.addEventListener('click', function(e){

    if(ageField.value > 25){
        displayName.innerText = `Name : ${userField.value}`
        displaySalary.innerText = `Bonus Salary : 20 %`
    }
    if(ageField.value > 30){
        displayName.innerText = `Name : ${userField.value}`
        displaySalary.innerText = `Bonus Salary : 30 %`
    }
    if(ageField.value > 35){
        displayName.innerText = `Name : ${userField.value}`
        displaySalary.innerText = `Bonus Salary : 40 %`
    }
    e.preventDefault();
})
