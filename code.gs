function onOpen() {
  const ui = SpreadsheetApp.getUi();
  const menu = ui.createMenu('AutoFill Docs');
  menu.addItem('Create New Docs', 'createNewGoogleDocs');
  menu.addToUi();
}

function createNewGoogleDocs() {
  const googleDocTemplate = DriveApp.getFileById('1matMRxgJEGBoHHGPUT5ZDc44vDBySM3U3fGZ2Pqlb2Y');
  const destinationFolder = DriveApp.getFolderById('1zMypxfbL3k7Vp4_So7LrOUydPIY_glX-');
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('form');
  const rows = sheet.getDataRange().getValues();

  rows.forEach(function(row, index){
    if (index === 0) return;
    if (row[26]) return;
    
    const copy = googleDocTemplate.makeCopy(`${row[17]} ${row[22]} ${row[16]} ${row[15]}`, destinationFolder);
    const doc = DocumentApp.openById(copy.getId());
    const body = doc.getBody();
    const friendlyDate = new Date(row[3]).toLocaleDateString();
    

    body.replaceText('{{Timestamp}}', row[0]);
    body.replaceText('{{Email Address}}', row[1]);
    body.replaceText('{{Module}}', row[2]);
    body.replaceText('{{Topic}}', row[3]);
    body.replaceText('{{Date}}', row[4]);
    body.replaceText('{{Venue}}', row[5]);
    body.replaceText('{{Time}}', row[6]);
    body.replaceText('{{Learning Objective 1}}', row[7]);
    body.replaceText('{{Learning Objective 2}}', row[8]);
    body.replaceText('{{Learning Objective 3}}', row[9]);
    body.replaceText('{{Activity 1}}', row[10]);
    body.replaceText('{{Activity 2}}', row[11]);
    body.replaceText('{{Activity 3}}', row[12]);
    body.replaceText('{{Activity 4}}', row[13]);
    body.replaceText('{{Activity 5}}', row[14]);
    body.replaceText('{{Time for Activity 1}}', row[18]);
    body.replaceText('{{Time for Activity 3}}', row[19]);
    body.replaceText('{{Time for Activity 4}}', row[20]);
    body.replaceText('{{Time for Activity 5}}', row[21]);
    body.replaceText('{{Time for Activity 6}}', row[22]);
    body.replaceText('{{Time for Activity 2}}', row[23]);
    doc.saveAndClose();
    const url = doc.getUrl();
    sheet.getRange(index + 1, 26).setValue(url);
  });
}
