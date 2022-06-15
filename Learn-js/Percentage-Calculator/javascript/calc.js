var x_field = document.getElementById('x_field');
var y_field = document.getElementById('y_field');
var result_field = document.getElementById('result_field')
var form = document.getElementById('percent_form')

var my_calc = function(event){
    if (!x_field.value || !y_field.value){
        alert('Please enter values in fields')
    }
    else{
        var x = parseFloat(x_field.value);
        var y = parseFloat(y_field.value);

        var result = x /y;
        var percent = result * 100;
        result_field.innerText = `Answer: ${percent}%`;
        // prevent the form from refreshing immediately
        event.preventDefault();
    }

};

form.addEventListener('submit',my_calc);