//-------------------------------------------------------Base HTML-------------------------------------------------------

var mainHead = 
    `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Name</title>
    <link rel="stylesheet" href="style.css">
</head>
<header>
    <h1><strong>Project name here Staff</strong></h1>
</header>
<body>
<style>
    table {
    border-collapse: collapse;
    width: 100%;
}

th {
    background-color: deepskyblue;
}
  
th, td {
    text-align: left;
    padding: 8px;
}
  
tr:nth-child(even) {
    background-color: rgb(173, 173, 173);
}
</style>
`

var mainTail = `
</body>
</html>
`

//-------------------------------------------------------Manager Table-------------------------------------------------------

var managerTblHead = `
<section>
        <h2>Manager</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>
                    <th>Office #</th>
                </tr>
            </thead>
`
var managerTblMid = ``

var managerTblTail = `
</table>
</section>
`

//-------------------------------------------------------Engineer Table-------------------------------------------------------

var engineerTblHead = `
<section>
        <h2>Engineers</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>
                    <th>Github</th>
                </tr>
            </thead>
`

var engineerTblMid = ``

var engineerTblTail = `
</table>
</section>
`

//

//-------------------------------------------------------Intern Table-------------------------------------------------------

var internTblHead = `
<section>
        <h2>Interns</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>
                    <th></th>
                </tr>
            </thead>
`

var internTblMid = ``

var internTblTail = `
</table>
</section>
`