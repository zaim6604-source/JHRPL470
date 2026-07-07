/**
 * Tahaa Engg. – Google Apps Script Web App
 * Bound to the Google Sheet used for storing customer reviews.
 *
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Sheet with columns: Timestamp | Name | Rating | Review
 * 2. Rename the sheet tab to "Sheet1" (or update SHEET_NAME below)
 * 3. Open Extensions > Apps Script
 * 4. Paste this entire file into Code.gs
 * 5. Deploy > New Deployment > Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL and paste it into src/js/main.js as APPS_SCRIPT_URL
 */

const SHEET_NAME = 'Sheet1';

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const data = sheet.getDataRange().getValues();
    const headers = data[0];
    const reviews = [];

    for (let i = 1; i < data.length; i++) {
      const row = data[i];
      if (row[1] && row[3]) { // Name and Review must be non-empty
        reviews.push({
          timestamp: row[0] ? Utilities.formatDate(row[0], Session.getScriptTimeZone(), 'yyyy-MM-dd') : '',
          name: row[1],
          rating: row[2] || 5,
          text: row[3],
        });
      }
    }

    // Return newest first
    reviews.reverse();

    return ContentService
      .createTextOutput(JSON.stringify({ reviews }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    const params = e.parameter;

    const timestamp = new Date();
    const name = params.name || 'Anonymous';
    const rating = params.rating || 5;
    const text = params.text || '';

    sheet.appendRow([timestamp, name, rating, text]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}