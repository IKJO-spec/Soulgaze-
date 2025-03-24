function downloadImage(imagePath) {
    const link = document.createElement("a");
    link.href = imagePath;
    link.setAttribute("download", "");  // Forces download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


