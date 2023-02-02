const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmailWithPassword(email) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [email]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, email, phone_number, password, adress, is_admin) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone_number,
        user.hashedPassword,
        user.adress,
        user.is_admin,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?, phone_number = ?, password = ?, adress = ?, is_admin = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.phone_number,
        user.hashedPassword,
        user.adress,
        user.is_admin,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
