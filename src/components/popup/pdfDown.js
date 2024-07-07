import html2pdf from 'html2pdf.js';

export const pdfDown = {
    exportToPDF(elementId , fileNm){

        fileNm = fileNm ?? "myfile.pdf";
        fileNm = fileNm.indexOf(".pdf") < 0 ? fileNm+".pdf":fileNm; 
 
        console.log("pdf down");
        var element = document.getElementById(elementId);
        console.log("pdf down",element);
        var opt = {
          margin:       1,
          filename:     fileNm,
          image:        { type: 'jpeg', quality: 0.98 },
          html2canvas:  { scale: 2 },
          jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
      // html2pdf(element);
      html2pdf().from(element).set(opt).save();
      }
}