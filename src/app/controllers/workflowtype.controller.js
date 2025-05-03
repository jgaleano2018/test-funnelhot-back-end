import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    port: 4306,
    user: 'root',
    password: '',
    database: 'bdfunnelhot',
});

// Retrieve all Workflowtype from the database.
export const getWorkflowtype = (req, res, next) => {
    
    db.query('SELECT * FROM workflowtype', function(error, response, fields) {
        if (error) throw error;
        console.log('response:', response);
        res.status(200).json(response);
    });

};