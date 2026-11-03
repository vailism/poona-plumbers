# Poona Plumbers

Modern, premium website for Poona Plumbers - Doorstep Plumbing Solutions in Pune.

## Features
- Pure HTML5, CSS3, and JavaScript (Zero external frameworks, Apple / Urban Company aesthetic)
- 10+ core plumbing services with instant cost calculator and custom consultation booking
- Interactive multi-step appointment booking wizard with direct WhatsApp routing
- Google Sheets webhook integration (`sendToGoogleSheet`) for automatic logging of dispatch requests
- "My Bookings" drawer powered by local storage with 1-click re-booking
- Live 4-step dispatch timeline tracker in the confirmation card
- Printable professional work order receipts (`@media print` styling)
- Photo / 5-second video diagnostic prompt routing directly to WhatsApp
- Payment mode transparency badges (GPay, PhonePe, Paytm, BHIM, Cash after service)
- PWA manifest (`manifest.json`) support for installable home-screen mobile experience
- Fully responsive across desktop, tablet, and mobile (tested on 375px+ screens)

## Contact Information
- Phone: +91 73788 80404
- Email: Poonaplumber@gmail.com
- Coverage: All Pune localities (Koregaon Park, Kothrud, Baner, Hinjewadi, Viman Nagar, Kalyani Nagar, Aundh, Wakad, Magarpatta, Hadapsar, etc.)

## Google Sheets Integration Setup
To automatically log incoming bookings to a Google Sheet:

1. Create a new Google Sheet at https://sheets.new.
2. In the menu, go to **Extensions** > **Apps Script**.
3. Replace the default script with the following code:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Booking ID",
        "Timestamp",
        "Service",
        "Schedule",
        "Customer Name",
        "Phone",
        "Property Type",
        "Address",
        "Locality",
        "Notes",
        "Status"
      ]);
    }
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      data.bookingId || "",
      data.timestamp || "",
      data.service || "",
      data.schedule || "",
      data.customerName || "",
      data.customerPhone || "",
      data.propertyType || "",
      data.address || "",
      data.locality || "",
      data.notes || "",
      data.status || "Confirmed"
    ]);
    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Deploy** > **New deployment**.
5. Choose type: **Web app**.
6. Set:
   - **Execute as**: Me
   - **Who has access**: Anyone
7. Copy the Web App URL (starts with `https://script.google.com/macros/s/...`).
8. In `script.js`, set `const GOOGLE_SHEET_WEBHOOK_URL = 'YOUR_COPIED_URL';`.

Bookings submitted via the online form will now instantly populate into your Google Sheet and open the WhatsApp dispatch message!
