const inquirer = require('inquirer');

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(names, github)

// fs.writeFile('./index.html', generatePage(names, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

// console.log(names, github)
// console.log(generatePage(names, github));

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));