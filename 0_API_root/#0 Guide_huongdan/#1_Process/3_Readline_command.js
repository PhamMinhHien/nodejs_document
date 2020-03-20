/*
    * Đọc readline - từng dòng lệnh một để thực thi .
    * Đây là sự cải tiến cho việc đưa CLI lên cấp độ cao hơn 
*/

// -----------------------------------------------------------------------------
// Demo 1 - readline basic
// -----------------------------------------------------------------------------
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })

    readline.question(`What's your name?`, name => {
        console.log(`Hi ${name}!`)
        readline.close()
    })


// ----------------------------------------------------------------------------
// Demo 2: ininquirer library 
// ----------------------------------------------------------------------------

    /* 
    const inquirer = require('inquirer')

    var questions = [
        {
            type: 'input',
            name: 'name',
            message: "What's your name?"
        }
    ]

    inquirer.prompt(questions).then(answers => {
        console.log(`Hi ${answers['name']}!`)
    }) 
    */