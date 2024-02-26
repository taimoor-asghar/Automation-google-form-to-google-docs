<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Step-by-Step Instructions</title>
</head>
<body>

<h1>Step-by-Step Instructions:</h1>

<ol>
  <li><strong>Create a Google Docs Document:</strong>
    <ul>
      <li>Open your web browser and go to Google Docs (docs.google.com).</li>
<img src="https://github.com/taimoor-asghar/Automation-google-form-to-google-docs/assets/151550373/03c2e13c-04fc-493a-9a58-e1093a6f5a26" alt="Google Forms to Google Docs Automation" style="max-width: 100%; height: auto;">

      <li>Click on the "+" icon to create a new document.</li>
      <li>Title the document "Questionnaire".</li>
      <li>Write down your questionnaire in the document, leaving spaces for answers. For example:
        <pre><code>Question 1: {{answer 1}}
Question 2: {{answer 2}}</code></pre>
      </li>
      <li>Save the document.</li>
    </ul>
  </li>

  <li><strong>Organize Files in a Folder:</strong>
    <ul>
      <li>Create a new folder in Google Drive where you want to store your questionnaire-related files.</li>
      <li>Move the "Questionnaire" document into this folder.</li>
    </ul>
  </li>

  <li><strong>Create a Google Form:</strong>
    <ul>
      <li>Go to Google Forms (forms.google.com).</li>
      <li>Click on the "+" icon to create a new form.</li>
      <li>Title the form appropriately.</li>
      <li>Write down the same questions from your questionnaire document in the form, ensuring they match exactly.</li>
      <li>Customize the form as needed (e.g., question types, required questions).</li>
      <li>Save the form.</li>
    </ul>
  </li>

  <li><strong>Link Form Responses to Google Sheets:</strong>
    <ul>
      <li>Once your form is created, click on the "Responses" tab at the top of the form.</li>
      <li>In the upper-right corner, click on the Sheets icon (it looks like a spreadsheet).</li>
      <li>A dialog will appear asking you to create a new spreadsheet or link to an existing one. Choose "Create a new spreadsheet" and click "Create".</li>
    </ul>
  </li>

  <li><strong>Add Google Apps Script for Automation:</strong>
    <ul>
      <li>In the Google Sheets where your form responses are stored, click on "Extensions" in the menu bar.</li>
      <li>Select "Apps Script" from the dropdown menu.</li>
      <li>In the Apps Script editor that opens, you'll see a <code>Code.gs</code> file by default.</li>
      <li>Replace the contents of <code>Code.gs</code> with the code from the GitHub repository named <code>Code.gs</code>.</li>
      <li>Customize the code by replacing the file ID and destination ID with your actual Google Drive file IDs. You can find these IDs in the URL of your Google Docs folder and Google Sheets file respectively.</li>
    </ul>
  </li>

  <li><strong>Save and Run the Script:</strong>
    <ul>
      <li>After updating the code, click on the disk icon or go to File > Save.</li>
      <li>Close the script editor.</li>
      <li>Now, your Google Form responses will automatically be populated in the designated Google Sheets file within your Google Drive folder.</li>
    </ul>
  </li>
</ol>

</body>
</html>
