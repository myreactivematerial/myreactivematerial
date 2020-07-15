
#!/bin/bash

cd /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/;
time ng update;
time ng update @angular/core @angular/cli @angular/cdk @angular/material rxjs
time ng build --prod;
time rsync -av /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/dist/ReactiveMaterial/ /home/kushal/src/html/myreactivematerialfirebase/reactivematerialgithubio/;
cd /home/kushal/src/html/myreactivematerialfirebase/reactivematerialgithubio/;
git add .;
time git commit -m "add all files" -m "get ready to deploy";
time git push origin master;
time firebase deploy;