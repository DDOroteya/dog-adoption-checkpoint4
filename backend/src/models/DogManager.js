const AbstractManager = require("./AbstractManager");

class DogManager extends AbstractManager {
  constructor() {
    super({ table: "dog" });
  }

  insert(dog) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, breed, gender, age, birthday_date, location, status_adopted, picture)
    VALUES(?,?,?,?,?,?,?,?)`,
      [
        dog.name,
        dog.breed,
        dog.gender,
        dog.age,
        dog.birthday_date,
        dog.location,
        dog.status_adopted,
        dog.picture,
      ]
    );
  }

  update(dog) {
    return this.connection.query(
      `UPDATE ${this.table} SET name = ?, breed = ?, gender = ?, age = ?, birthday_date = ?, location = ?, status_adopted = ?, picture = ? WHERE id = ? `,
      [
        dog.name,
        dog.breed,
        dog.gender,
        dog.age,
        dog.birthday_date,
        dog.location,
        dog.status_adopted,
        dog.picture,
        dog.id,
      ]
    );
  }
}

module.exports = DogManager;
