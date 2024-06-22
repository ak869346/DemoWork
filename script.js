// List of country codes
const countryCodes = [
    { name: "India", code: "+91" },
    { name: "United States", code: "+1" },
    { name: "Canada", code: "+1" },
    { name: "United Kingdom", code: "+44" },
    { name: "Australia", code: "+61" },
    { name: "China", code: "+86" },
    { name: "France", code: "+33" },
    { name: "Germany", code: "+49" },
    { name: "Japan", code: "+81" },
    { name: "South Korea", code: "+82" },
    { name: "Brazil", code: "+55" },
    { name: "South Africa", code: "+27" },
    // Add more countries and codes if we needed
];

// Populate the country code dropdown
const countryCodeSelect = document.getElementById('country-code');
countryCodes.forEach(country => {
    const option = document.createElement('option');
    option.value = country.code;
    option.text = `${country.name} (${country.code})`;
    countryCodeSelect.appendChild(option);
});