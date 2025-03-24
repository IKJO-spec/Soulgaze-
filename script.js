function downloadImage(imagePath) {
    const link = document.createElement("a");
    link.href = imagePath;
    link.download = imagePath;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


