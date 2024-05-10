git init
git add .
git status
git commit -m ""
git status


// add new branch
git checkout -b {name_of_branch}
// switch between branches
git checkout {name_of_branch}
new branch

// merge branches
git merge master/{name_of_branch}

git config --global user.name "Telvin"
git config --global user.email "telvinngichukii@gmail.com"

git push -u origin master
git pull origin master