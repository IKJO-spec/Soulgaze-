
function downloadImage(imagePath) {
    fetch(imagePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Image not found or inaccessible');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = imagePath; // Keeps the original filename (e.g., 'an1.png')
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('Download failed:', error);
            alert('Sorry, the image could not be downloaded. Try again or contact support.');
        });
}
