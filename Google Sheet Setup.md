# Setup Google Sheet

## Setup API

1. Go to https://console.cloud.google.com/ and Create new project
2. Go to APIs & Services -> Library -> search "Google Sheets API" -> and enable it.

    <img src="https://d.alighufron.repl.co/washeet/search_Sheet_API.png" width="599" height="281">
3. Go to IAM & Admin -> Service Account -> Create Service Account
4. Input -> done.

    <img src="https://d.alighufron.repl.co/washeet/create_SA.png" width="614" height="900">
4. On to the service account created, go to Keys -> Create new key -> Choice JSON -> Create

    <img src="https://d.alighufron.repl.co/washeet/create_Key.png" width="380" height="224">
5. Go to Details, note the Service Account Email.

    <img src="https://d.alighufron.repl.co/washeet/sa_Email.png" width="525" height="323">
    
## Setup Spreadsheet

1. Create new sheet
2. Share to Service Account Email

    <img src="https://d.alighufron.repl.co/washeet/share_SA_Email.png" width="528" height="299">
4. Note the spreadsheet id

    <img src="https://d.alighufron.repl.co/washeet/spreadsheetId.png" width="900" height="131">

