const lastUpdatedElement = document.getElementById("last-updated");
const deploymentTimeElement = document.getElementById("deployment-time");

function formatDate(date) {
    return date.toLocaleString();
}

function updateTimestamps() {
    const now = new Date();

    lastUpdatedElement.textContent = `Last updated: ${formatDate(now)}`;
    deploymentTimeElement.textContent = formatDate(now);
}

updateTimestamps();
