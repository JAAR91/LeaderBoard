mkdir .github
cd .github
mkdir workflows
cd workflows
wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.github/workflows/linters.yml
cd ..
cd ..
npm install --save-dev hint@6.x
npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.eslintrc.json
wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.hintrc
wget https://raw.githubusercontent.com/microverseinc/linters-config/master/html-css-js/.stylelintrc.json
echo 'node_modules
commit.sh
runlinters.sh
install-linters.sh
.eslintrc.json
.hintrc
.stylelintrc.json' >> .gitignore