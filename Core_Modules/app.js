// // for directory
// console.log(__dirname);

// // for complete directory
// console.log(__filename);


// // OS module

// let OS = require('os')
// console.log(OS.platform());
// console.log(OS.release());
// console.log(OS.freemem());
// console.log(OS.totalmem());
// console.log(OS.hostname());


// // url module

// let url = require('url')
// let adr = 'https://nodejs.org:5000/dist/latest-v16.x/docs/api/url.html'
// console.log(url.parse(adr));
// console.log(url.parse(adr).protocol);
// console.log(url.parse(adr).port);
// console.log(url.parse(adr).host);
// console.log(url.parse(adr).hostname);
// console.log(url.parse(adr).pathname);
// console.log(url.parse(adr).path);
// console.log(url.parse(adr).href);


// fs module
// let fs = require('fs')

// // create file

// fs.writeFile('message.txt', 'hello', (err)=>{
//     if(err) throw err
//     else console.log('success');
// })


// // read file

// fs.readFile('message.txt', (err, data)=>{
//     if (err)throw err
//     else console.log(data.toString());
// })


// // rename the file

// fs.rename('message.txt', 'greet.txt', (err)=>{
//     if (err) throw err
//     else console.log("renamed");
// })


// // delete file

// fs.unlink('greet.txt', (err)=>{
//     if(err)throw err
//     else console.log("file deleted");
// })




// // http module

// // creating simple server

// let http = require('http')
// http.createServer((req, res)=>{
//     res.write("Hello world..!")
//     console.log('server running...');
//     res.end()
// }).listen(3000, ()=>{
    
//     console.log('server running...');
// })


// // creating simple server

// let http = require('http')
// let port = 5000
// let a = http.createServer((req, res)=>{
//     res.write("Hello world..!")
//     res.end()
// })
// a.listen(port, (err)=>{
//     if (err) throw err;
//     else{
//         console.log('server running...');
//     }
// })


// // createServer with html page

let http = require('http')
let fs = require('fs')
let port = 5000
let a = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile('about.html',(err, data)=>{
        if(err) {
            res.write('not found')
        }
        else res.write(data);
        res.end()
    })
})
a.listen(port, (err)=>{
    if (err) throw err;
    else{
        console.log('server running...');
    }
})


