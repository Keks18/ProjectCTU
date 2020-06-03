const pg = require('pg');
const fs = require("fs");
var kol = [];
const config = {
  user: 'postgres',
  host: '25.64.74.125',
  database: 'Kurs',
  password: '12061996',
  port: 5432,
};

const client = new pg.Client(config);

client.connect(err => {
    if (err) throw err;
    else { queryDatabase(); }
});

function queryDatabase() {
    var i = 0;
    console.log(`Running query to PostgreSQL server: ${config.host}`);

    const query = 'SELECT * FROM \"Stop\"';

    client.query(query)
        .then(res => {
            const rows = res.rows;

            rows.map(row => {//The code is resгponsible for taking data and putting it in a file
              console.log(`Read: ${JSON.stringify(row)}`);
              kol[i] = `${JSON.stringify(row)}`;
              ++i;
            });
    fs.writeFileSync("data.json", "["+kol+"]");
    console.log(kol);
    process.exit();

    })
.catch(err => {
  console.log(err);
});

}

