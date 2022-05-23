# WhatsApp To Google Spreadsheet
Store WhatsApp to Google Spreadsheet

![](https://d.alighufron.repl.co/washeet/washeet.png)

## Getting Started

### Prerequisites

* nodejs >=12, 
  ex. CentOS
  ```sh
  curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
  sudo yum install nodejs
  ```
* npm >=7
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. install googleapi npm library
   ```sh
   npm install --save @open-wa/wa-automate@latest
   ```
2. install openwa npm library
   ```sh
   npm install --save @open-wa/wa-automate@latest
   ```
3. Clone the repository
   ```sh
   git clone https://
   ```
4. Adjust the value with your service account key name and spreadsheet id
   ```js
   ...
   const KEY_NAME = './key.json'
   const SPREADSHEET_ID = '12345qwerty'
   ...
   ```
5. Run
   ```sh
   node main.js
   ```

   
## Reference

[https://github.com/open-wa/wa-automate-nodejs](https://github.com/open-wa/wa-automate-nodejs)

[Google Spreadsheet API](https://developers.google.com/sheets/api)
