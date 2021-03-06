
#!/bin/bash

cd /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/;
time yarn run ng update;
time yarn run ng update @angular/core @angular/cli @angular/cdk @angular/material rxjs;
time yarn run ng update;
time yarn run ng build --prod;
time yarn run ng test --watch=false --codeCoverage=true;
time rsync -av /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/dist/ReactiveMaterial/ /home/kushal/src/html/myreactivematerialfirebase/reactivematerialgithubio/;
time rsync -av /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/coverage/ /home/kushal/src/html/myreactivematerialfirebase/reactivematerialgithubio/coverage/;
time git add .;
time git commit -m "update angular" -m "angular {cli, cdk, material}, and rxjs";
time git push origin --all;
cd /home/kushal/src/html/myreactivematerialfirebase/reactivematerialgithubio/;
git add .;
time git commit -m "add all files" -m "get ready to deploy";
time git push origin master;
cd /home/kushal/src/html/myreactivematerialfirebase/ReactiveMaterial/;
time firebase deploy;
