$(document).ready(function(){
var validOptions = ["Bold", "Normal", "Default", "100", "200"]
previousValue = "";

$('#ac').autocomplete({
  autoFocus: true,
  source: validOptions
}).keyup(function() {
  var isValid = false;
  for (var i in validOptions) {
    if (validOptions[i].toLowerCase().match(this.value.toLowerCase())) {
      isValid = true;
    }
  }
  if (!isValid) {
    this.value = previousValue
  } else {
    previousValue = this.value;
  }
});
});
