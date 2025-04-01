document.addEventListener('DOMContentLoaded', function() {
    const detailProductImage = document.getElementById('detail-product-image');
    
    if (detailProductImage) {
        detailProductImage.addEventListener('click', function(e) {
            // Check if the image is not an SVG
            const image = this.querySelector('img');
            if (!image) return;

            // Create zoom overlay
            const zoomOverlay = document.createElement('div');
            zoomOverlay.className = 'image-zoom-overlay';
            
            const zoomImage = document.createElement('img');
            zoomImage.src = image.src;
            zoomImage.className = 'image-zoom-content';
            
            zoomOverlay.appendChild(zoomImage);
            document.body.appendChild(zoomOverlay);
            
            // Close zoom on clicking outside the image
            zoomOverlay.addEventListener('click', function(event) {
                if (event.target === zoomOverlay) {
                    document.body.removeChild(zoomOverlay);
                }
            });
        });
    }
}); 

document.addEventListener('DOMContentLoaded', function() {
    const detailProductImage = document.getElementById('detail-product-image');
    
    if (detailProductImage) {
        detailProductImage.addEventListener('click', function(e) {
            // Check if the image is not an SVG
            const image = this.querySelector('img');
            if (!image) return;

            // Create zoom overlay
            const zoomOverlay = document.createElement('div');
            zoomOverlay.className = 'image-zoom-overlay';
            
            const zoomImage = document.createElement('img');
            zoomImage.src = image.src;
            zoomImage.className = 'image-zoom-content';
            
            zoomOverlay.appendChild(zoomImage);
            document.body.appendChild(zoomOverlay);
            
            // Close zoom on clicking outside the image
            zoomOverlay.addEventListener('click', function(event) {
                if (event.target === zoomOverlay) {
                    document.body.removeChild(zoomOverlay);
                }
            });
        });
    }
};