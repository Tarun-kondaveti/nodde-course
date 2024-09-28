const {readFileSync,writeFileSync}=require('fs');
const data=readFileSync('./content/sample.txt','utf8');
console.log(data)
writeFileSync(
    './content/sample.txt',
    `Hello i am writing from another 
    folder and changed the text `)
const data2=readFileSync(
    './content/sample.txt','utf8');
console.log(data2)
writeFileSync(
    './content/sample.txt',
    `Hiiiiii i am writing from another 
    folder and changed the text `)

const data3=readFileSync(
    './content/sample.txt','utf8');
console.log(data3)


// now i will append

writeFileSync(
    './content/sample.txt',
    `i am adding or appending  `,
     {flag:'a'}
)

const data4=readFileSync(
    './content/sample.txt','utf8');
console.log(data4)