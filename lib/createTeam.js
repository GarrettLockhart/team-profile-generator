const createTeam = (output) => {
  const managerHtml = (manager) => {
    return `
        <section class="card">
          <div class="card-header">
            <h2 class="card-name" id="employee-name">${manager.getName()}</h2>
            <h3 class="card-position" id="employee-position">${manager.getRole()}</h3>
          </div>
          <div class="card-content-container">
            <div class="card-body">
              <p class="card-employee-id">ID: <span id="employee-id">${manager.getId()}</span></p>
              <p class="card-link" id="employee-link">
              Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
              </p>
              <p class="card-office" id="manager-office-num">Office Number: <span>${manager.getOfficeNumber()}</span></p>
            </div>
          </div>
          </section>`;
  };

  const engineerHtml = (engineer) => {
    return `
        <section class="card">
          <div class="card-header">
            <h2 class="card-name" id="employee-name">${engineer.getName()}</h2>
            <h3 class="card-position" id="employee-position">${engineer.getRole()}</h3>
          </div>
          <div class="card-content-container">
            <div class="card-body">
              <p class="card-employee-id">ID: <span id="employee-id">${engineer.getId()}</span></p>
              <p class="card-link" id="employee-link">
              Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
              </p>
              <p class="card-link" id="employee-link">
              Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
              </p>
            </div>
          </div>
          </section>`;
  };

  const internHtml = (intern) => {
    return `
        <section class="card">
          <div class="card-header">
            <h2 class="card-name" id="employee-name">${intern.getName()}</h2>
            <h3 class="card-position" id="employee-position">${intern.getRole()}</h3>
          </div>
          <div class="card-content-container">
            <div class="card-body">
              <p class="card-employee-id">ID: <span id="employee-id">${intern.getId()}</span></p>
              <p class="card-employee-id">School: <span id="employee-school-name">${intern.getSchool()}</span></p>
            </div>
          </div>
          </section>`;
  };

  const cardsHtml = [];

  cardsHtml.push(
    output
      .filter((employee) => employee.getRole() === 'Manager')
      .map((manager) => managerHtml(manager))
  );
  cardsHtml.push(
    output
      .filter((employee) => employee.getRole() === 'Engineer')
      .map((engineer) => engineerHtml(engineer))
  );
  cardsHtml.push(
    output
      .filter((employee) => employee.getRole() === 'Intern')
      .map((intern) => internHtml(intern))
  );

  return cardsHtml.join('');
};

module.exports = (output) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Team Profiles</title>
    </head>
    <body>
      <div class="main-header">
        <h1 class="header-title">Team Profile</h1>
      </div>
      <div class="container">
        ${createTeam(output)}
      </div>
    </body>
  </html>
  `;
};
