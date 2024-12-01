document.getElementById("filterButton").addEventListener("click", function () {
    const countryFilter = document.getElementById("countryFilter").value;
    const properties = document.querySelectorAll(".property");

    properties.forEach(property => {
        const country = property.getAttribute("data-country");
        if (countryFilter === "all" || country === countryFilter) {
            property.style.display = "block";
        } else {
            property.style.display = "none";
        }
    });
});
