import fs from 'fs';
import path from 'path';
import {isString} from 'lodash';

// export default function readCvs(filename) {
//     if (!isString(filename) || !fs.existsSync(filename)) {
//         throw new Error('filename is not a string or file is not exist');
//     }
//     let tempChunk = '';
//     let isFirst = true;
//     let tabHead = null;
//     let tabContent = [];
//     const rs = fs.createReadStream(filename, {encoding: 'utf8'});
//     rs.on('data', (chunk) => {
//         rs.pause();
//         const rows = chunk.split('\n');
//         rows.forEach((row, index) => {
//             const columns = row.split(',');
//             if (index === 0 && isFirst) {
//                 tabHead = columns;
//                 return;
//             }
//             tabContent.push(columns);
//         });
//         // rs.resume();
//     });
//     // const fp = fs.readFileSync(filename, 'a+');
//     // const row = content.split('\n');
// }

readCvs(path.resolve(__dirname, '../../test/readCsv/test.csv'));
 
// const originData = fs.readFileSync('./0317入库与不入库混合.csv', 'utf-8').split('\n');
 
// const outputData = fs.openSync('./0317入库与不入库混合_效果好.csv','a');
 
// function getUuid(url) {
//     if(!url) {
//         return url;
//     }
//     url = url.split('?')[0];
//     const uuidArray = url.split('/');
//     let uuid = uuidArray[uuidArray.length - 1].split('.')[0];
//     if(uuid.indexOf('-') === 0) {
//         uuid = uuid.slice(1);
//     }
//     return uuid;
// }
 
// function getType(url) {
//     if(!url) {
//         return url;
//     }
//     url = url.split('?')[0];
 
//     const uuidArray = url.split('/');
//     return uuidArray[uuidArray.length - 1].split('.')[1];
// }
 
// originData.forEach((item, index) => {
//     const originInfo = item.split(',');
 
//     fs.writeSync(outputData, originInfo[0] + ',' + originInfo[1] + '\n');
// });
 
// fs.closeSync(outputData);
