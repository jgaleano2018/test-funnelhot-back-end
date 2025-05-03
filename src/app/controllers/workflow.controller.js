import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    port: 4306,
    user: 'root',
    password: '',
    database: 'bdfunnelhot',
});

// Create and Save a new Workflow
export const postWorkflow = (req, res, next) => {

    const { name, description, iconid, workflowtypeid } = req.body;
    db.query('INSERT INTO workflow (name, description, iconid, workflowtypeid) VALUES (?, ?, ?, ?)', [name, description, iconid, workflowtypeid], function(error, response, fields) {
        if (error) throw error;
        res.json({ message: 'Workflow added successfully', id: response.insertId });
    })

};

// Retrieve all Workflows from the database.
export const getWorkflow = (req, res, next) => {
    
    db.query('SELECT * FROM workflow', function(error, response, fields) {
        if (error) throw error;
        console.log('response:', response);
        res.status(200).json(response);
    });

};

// Find a single Workflow with an id
export const getWorkflowById = (req, res, next) => {

    const { id } = req.params;

    db.query('SELECT * FROM workflow WHERE id = ?', [id], function(error, response, fields) {
        if (error) throw error;
        console.log('response:', response);
        res.status(200).json(response);
    });

};

// Update a Workflow by the id in the request
export const putWorkflow = (req, res, next) => {

    const { id } = req.params;
    const { name, description, iconid, workflowtypeid } = req.body;

    db.query('UPDATE workflow SET name = ?, description = ?, iconid = ?, workflowtypeid = ? WHERE id = ?', [name, description, iconid, workflowtypeid, id], (err) => {
      if (err) throw err;
      res.json({ message: 'Workflow updated successfully' });
    });

};

// Delete a Workflow with the specified id in the request
export const deleteWorkflow = (req, res, next) => {

    const { id } = req.params;

    db.query('DELETE FROM workflow WHERE id = ?', [id], (err) => {
      if (err) throw err;
      res.json({ message: 'Workflow deleted successfully' });
    });
    
};