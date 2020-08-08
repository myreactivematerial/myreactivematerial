
#!/bin/bash

cd /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/;
time ng update;
time ng update @angular/core @angular/cli @angular/cdk @angular/material rxjs;
time ng update;
time git add .;
time git commit -m "update angular" -m "angular {cli, cdk, material}, and rxjs";
time ng build --prod;
time ng test --watch=false;
time rsync -av /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/dist/ReactiveMaterial/ /home/kushal/src/html/myreactivematerialfirebase/reactivematerialgithubio/;
time git push origin --all;
cd /home/kushal/src/html/myreactivematerialfirebase/reactivematerialgithubio/;
git add .;
time git commit -m "add all files" -m "get ready to deploy";
time git push origin master;
cd /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/;
time firebase deploy;
