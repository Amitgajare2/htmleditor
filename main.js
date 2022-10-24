// Run button
function runcode(){
    document.getElementById("mainbox").style.display='none';
    document.querySelector(".header").style.display='none';
    document.getElementById("footer").style.display='none';
    document.querySelector(".fab-wrapper").style.display='none';
    document.getElementById("output").style.display='block';

    var code = document.getElementById("inputTextToSave").value;
    document.getElementById("display").srcdoc = code;
}

// Copy button
function myFunction() {
  var copyText = document.getElementById("inputTextToSave");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value); 
}

// back display btn 
function back(){
    document.getElementById("output").style.display='none';
    document.querySelector(".header").style.display='block';
    document.querySelector(".fab-wrapper").style.display='block';
    document.getElementById("mainbox").style.display='block';
    document.getElementById("footer").style.display='block';   
}

/* 
// local storage 
var input_textarea = document.getElementById("inputTextToSave");
var save_button = document.getElementById("copybtn");

save_button.addEventListener('click', updateOutput);

input_textarea.value = localStorage.getItem('content');

function updateOutput() {
  localStorage.setItem('content', input_textarea.value);

  output_div.textContent = input_textarea.value;
}
*/

// file upload function 
let input = document.getElementById("fileUpload");
let textarea = document.getElementById("inputTextToSave");

input.addEventListener('change', () => {
    let files = input.files;

    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
    };

    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});

// Dark mode 
function darkmod(){
  var mode = document.body;
  mode.classList.toggle("darkmode");
}

