import { PDFDocument } from 'pdf-lib'


export const download = async (files)=>{
    const mergedFiles = await Merge(files);
    const blob = new Blob([mergedFiles], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url); // opens the PDF in a new browser tab 
    if(array.length < 1 || array == undefined){
        alert("array empty");
        return -1;
    }
};

async function Merge(files){
    const pdfDoc = await PDFDocument.create()

    for(const file of files){
        const arrayBufferConvert = await file.arrayBuffer();
        const sourceDoc = await PDFDocument.load(arrayBufferConvert);
        const docIndices = sourceDoc.getPageIndices();
        const copiedPages = (await pdfDoc.copyPages(sourceDoc, docIndices));
        for(const pages of copiedPages){
            pdfDoc.addPage(pages);
        }
    }
    const mergedBytes = await pdfDoc.save();
    return mergedBytes; // Uint8Array
};