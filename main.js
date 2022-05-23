const wa = require('@open-wa/wa-automate');

const KEY_NAME = './key.json'
const SPREADSHEET_ID = '1HuRqW6M-AtvbbT123456qwerty'

wa.create().then(client => start(client));

function start(client) {
	console.clear();
	client.onMessage(message => {
		var myDate = new Date(message.t*1000);
		
		const {google} = require('googleapis');
		const key = require(KEY_NAME);

		const client = new google.auth.JWT(
			key.client_email,
			null,
			key.private_key,
			['https://www.googleapis.com/auth/spreadsheets']
		);

		client.authorize(function(err){
			if(err){
				console.log(err);
				return;
			} else {
				gSheetRun(client);
			}
		});

		async function gSheetRun(cl){
			const gsapi = google.sheets({version:'v4', auth: cl});
			const opt = {
				spreadsheetId: SPREADSHEET_ID,
				range: 'A2',
				valueInputOption: 'USER_ENTERED',
				insertDataOption: 'INSERT_ROWS',
				requestBody: '{"values":[["'+myDate.toLocaleString()+'", "'+message.from+'", "'+message.content+'"]]}'
			};
	
			if (gsapi.spreadsheets.values.append(opt)){
				console.log("["+myDate.toLocaleString()+"] "+message.content+" from "+message.from+"");
			}
		}
	});
}
