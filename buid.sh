#!/bin/bash



git checkout gh-pages  && git merge main --no-edit 

sed -i 's/development/production/ig' webpack.config.js

npx webpack

sed -i 's/producti/development/ig' webpack.config.js

git add dist -f

git commit -m 'Deployment commit'

git subtree push --prefix dist origin gh-pages

git checkout main

git push