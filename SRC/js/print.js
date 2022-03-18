const printButton = document.getElementById('print-button');
const resume = document.querySelector('.resume');

function printResume() {
    let WinPrint = window.open("", "", "left=0, top=0, width=800, height=900, toolbar=0, scrollbars=0,status=0");
    WinPrint.document.write(resume.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
}

printButton.addEventListener('click', printResume);