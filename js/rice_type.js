document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("li");
    const detailsBox = document.querySelector(".details-sric");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            // Move the details box below the clicked item
            const parent = item.parentNode;
            parent.insertBefore(detailsBox, item.nextSibling);

            // Update the content dynamically
            updateDetails(item.textContent);

            // Show the details box
            detailsBox.style.display = "block";
        });
    });
});

// Function to update the details content dynamically
function updateDetails(title) {
    const detailsContent = document.querySelector(".details-content-sric");

    // Define image sources for different rice items (you can replace these with real images)
    const imageMap = {
        "IR64 Parboiled Rice": "https://via.placeholder.com/100/ff0000",
        "IR36 Parboiled Rice": "https://via.placeholder.com/100/00ff00",
        "1121 Sella Cream Basmati Rice": "https://via.placeholder.com/100/0000ff",
        "1121 Golden Basmati Rice": "https://via.placeholder.com/100/ffff00",
        "Kolam Rice (Premium Quality)": "https://via.placeholder.com/100/ff00ff",
        "HMT Sona Masuri Stream Rice": "https://via.placeholder.com/100/00ffff",
        "BPT Sona Masuri Stream Rice": "https://via.placeholder.com/100/000000"
        // Add more rice types and their respective image URLs here
    };

    // Define specifications for different rice items (replace with actual values as needed)
    const specsMap = {
        "IR64 Parboiled Rice": {
            origin: "India",
            riceLength: "Medium",
            broken: "5%",
            foreignMatter: "0.5%",
            moisture: "13%",
            riceColor: "White",
            chalky: "2%",
            redAndBlackKernels: "1%",
            paddyKernel: "0.5%",
            bagSize: "50 kg",
            packingModel: "Bulk"
        },
        "IR36 Parboiled Rice": {
            origin: "India",
            riceLength: "Medium",
            broken: "6%",
            foreignMatter: "1%",
            moisture: "12.5%",
            riceColor: "White",
            chalky: "3%",
            redAndBlackKernels: "2%",
            paddyKernel: "1%",
            bagSize: "50 kg",
            packingModel: "Bulk"
        },
        // Add more rice specifications here
    };

    // Get the image URL and specs for the selected rice item, or use default values
    const imageUrl = imageMap[title] || "https://via.placeholder.com/100"; // Default image if not found
    const specs = specsMap[title] || {}; // Default to empty if not found

    detailsContent.innerHTML = `
        <img src="${imageUrl}" alt="Rice Image">
        <table>
            <thead>
                <tr>
                    <th>Specification</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Origin</td>
                    <td>${specs.origin || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Rice Length</td>
                    <td>${specs.riceLength || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Broken</td>
                    <td>${specs.broken || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Foreign Matter</td>
                    <td>${specs.foreignMatter || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Moisture</td>
                    <td>${specs.moisture || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Rice Color</td>
                    <td>${specs.riceColor || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Chalky</td>
                    <td>${specs.chalky || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Red and Black Kernels</td>
                    <td>${specs.redAndBlackKernels || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Paddy Kernel</td>
                    <td>${specs.paddyKernel || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Bag Size</td>
                    <td>${specs.bagSize || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Packing Model</td>
                    <td>${specs.packingModel || 'N/A'}</td>
                </tr>
            </tbody>
        </table>
    `;
}
