//App that takes a snapshot from a video device. (any that is supported by v4l2)
//use: ./app.js /dev/videoX
//
//You can list your devices via "v4l2-ctl --list-devices"

import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'

const projectName = ;//enter project name


const videoDevice = process.argv[2];

const minutes = (value) => value * 1000 * 60;


const sleep = (ms) =>{
  return new Promise(res=>{
    setTimeout(res,ms)
  })
}

fs.mkdir(path.join(__dirname, projectName), (err) => {
  if (err) console.log(`${err.message}.`);
  else console.log('Folder Created.');
});




  (async () => {
    for (let i = 0; i < //enter  your desired iterations
       ; i++) {

      const date = new Date();
      exec(`v4l2-ctl --device ${videoDevice} --stream-mmap --stream-to=./${projectName}/Y${date.getFullYear()}_M${date.getMonth()}_D${date.getDay()}_Hrs${date.getHours()}_Min${date.getMinutes()}_S${date.getSeconds()}.raw --stream-count=1`, (error, stdout, stderr) => {
        if (error && error.message) {
          console.log(error.message, ".");
        }
        else if (stderr && stderr.message) {
          console.log(stderr.message, ".");
        }
        else {
          console.log("Snapshot taken at", date.getHours(),":",date.getMinutes(),".");
        }
      })

      await sleep(minutes(//enter your desired slep time
      ));
    }

    const message = `Program has finished executing sucessfully.`;


    await fetch(//websiteURL
    , {
      "headers": {
        "content-type": "multipart/form-data; boundary=postForm",
        "next-action": //see (developer tools -> copy as fetch)
        ,
      },
      "body": `--postForm\r\nContent-Disposition: form-data; name=\"1_post\"\r\n\r\n${message}\r\n--postForm\r\nContent-Disposition: form-data; name=\"0\"\r\n\r\n[\"$K1\"]\r\n--postForm--\r\n`,
      "method": "POST",
    });

    console.log(message);
    
    
  })();




  
