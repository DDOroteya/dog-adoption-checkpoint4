const AbstractManager = require("./AbstractManager");

class AdoptionManager extends AbstractManager {
  constructor() {
    super({ table: "adoption" });
  }

  insert(adoption) {
    return this.connection.query(
      `INSERT INTO ${this.table} (user_id, dog_id, adoption_date)
    VALUES(?,?,?)`,
      [adoption.user_id, adoption.dod_id, adoption.adoption_date]
    );
  }

  update(adoption) {
    return this.connection.query(
      `UPDATE ${this.table} SET user_id = ?, dog_id = ?, adoption_date = ? WHERE id = ? `,
      [adoption.user_id, adoption.dod_id, adoption.adoption_date]
    );
  }
}

module.exports = AdoptionManager;
