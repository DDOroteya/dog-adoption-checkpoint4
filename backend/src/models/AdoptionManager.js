const AbstractManager = require("./AbstractManager");

class AdoptionManager extends AbstractManager {
  constructor() {
    super({ table: "adoption" });
  }

  findAll() {
    return this.connection.query(
      `select a.id, a.user_id, a.dog_id, a.adoption_date, u.firstname, u.lastname, d.name, d.location
      FROM ${this.table} as a
      LEFT JOIN user as u
      ON u.id= a.user_id
      LEFT JOIN dog as d
      ON d.id = a.dog_id`
    );
  }

  insert(adoption) {
    return this.connection.query(
      `INSERT INTO ${this.table} (dog_id, user_id, adoption_date)
    VALUES(?,?,?)`,
      [adoption.dog_id, adoption.user_id, adoption.adoption_date]
    );
  }

  update(adoption) {
    return this.connection.query(
      `UPDATE ${this.table} SET dog_id = ?, user_id = ?, adoption_date = ? WHERE id = ? `,
      [adoption.dog_id, adoption.user_id, adoption.adoption_date, adoption.id]
    );
  }
}

module.exports = AdoptionManager;
