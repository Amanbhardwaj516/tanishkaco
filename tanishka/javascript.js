document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // You can add code here to handle form submission to a server
});
document.getElementById('copyButton').addEventListener('click', function() {
    const contactInfo = `
        Business Name: Tanishka Construction Company
        Communication Address: 1/385, Gali No 3, Prakash Nagar Colony
        Tikona Nagla Road,
        Aligarh, Pin Code 202001 Uttar Pradesh, India
        Contact No: 9997783238 / 6387129034
    `;
    
    // Copy contact info to clipboard
    navigator.clipboard.writeText(contactInfo)
        .then(() => {
            alert('Contact information copied to clipboard!');
        })
        .catch(err => {
            console.error('Error copying text: ', err);
        });
});
