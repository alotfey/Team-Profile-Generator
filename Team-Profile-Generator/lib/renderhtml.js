//Generate Top html page
function generateHeader() {
    return `

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Team</title>
</head>
<body>
<div class="container  "> 
<header class="c-header c-header-light px-3  bg-danger row justify-content-center">
  <span class="c-header-brand mb-0 h1 text-white p-4 ">MY Team </span>
</header>
</div>   
<div class="mt-4"></div>
<div class="container">
    <div class="row justify-content-center ml-1">
    <div class="card-deck">


  `
  }

  function newManagerHtml(data) {
      return `
      
<div class="card">
<h5 class="card-header bg-primary  text-center">${data.mName} <br> Manager</h5>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.mId}</li>
    <li class="list-group-item">Email: <a href = "mailto: ${data.mEmail}">${data.mEmail}</a></li>
    <li class="list-group-item">Office Number: ${data.ophone}</li>
</ul>
</div>

      `
  }

  function newEngineerHtml(data) {
    return `
    <div class="card">
<h5 class="card-header bg-primary  text-center">${data.engName} <br> Engineer</h5>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${data.engId}</li>
    <li class="list-group-item">Email: <a href = "mailto: ${data.engEmail}">${data.engEmail}</a></li>
    <li class="list-group-item">Github:<a href = "https://github.com/${data.gitHub}">${data.gitHub}</a></li>
</ul>
</div>
    
    `
}


function newInternHtml(data) {
    return `
    <div class="card">
    <h5 class="card-header bg-primary  text-center">${data.inName} <br> Intern</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.inId}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${data.inEmail}">${data.inEmail}</a></li>
        <li class="list-group-item">School: ${data.school}</li>
    </ul>
    </div>
    
    `
}
  // Generate footer part
  function generateFooter() {
    return `
    </div>
    </div>
    </div>
    </body>
</html>
    
  
  `;
  }


  module.exports = {generateHeader, generateFooter, newManagerHtml, newEngineerHtml, newInternHtml}