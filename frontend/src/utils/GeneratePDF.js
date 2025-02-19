import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function generatePDF(elementId) {
    const element = document.getElementById(elementId) || document.body;

    html2canvas(element, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const imgWidth = 210; 
        const pageHeight = 297; 
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        
        while (position + imgHeight >= pageHeight) {
            position -= pageHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        }

        pdf.save("print.pdf");
    });
}
