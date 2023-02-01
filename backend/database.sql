SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `dog`;

CREATE TABLE `dog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `breed` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `age` VARCHAR(100) NOT NULL,
  `birthday_date` DATE NULL,
  `location` VARCHAR(200) NULL,
  `status_adopted` VARCHAR(45) NULL,
  `picture` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `dog`(name, breed, gender, age, birthday_date, location, status_adopted, picture) VALUES 
  (
    'Beliga',
    'Setter anglais',
    'Femelle',
    'Junior',
    '2021-02-02',
    'Marseille',
    'No',
    'https://www.la-spa.fr/app/assets-spa/uploads/animals/69487/megane-69487-63d28de1acc61.jpg'
  ),(
    'Mars',
    'American staffordshire',
    'Mâle',
    'Adulte',
    '2017-03-06',
    'Lyon',
    'No',
    'https://www.la-spa.fr/app/assets-spa/uploads/animals/58249/newton-58249-63405644a7304.jpg'
  );

DROP TABLE IF EXISTS `person` ;
CREATE TABLE `person` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(200) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(400) NOT NULL,
  `phone_number` VARCHAR(45) NULL,
  `password` VARCHAR(450) NULL,
  `adress` VARCHAR(450) NULL,
  `is_admin` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `person`(firstname, lastname, email, phone_number, password, adress, is_admin) VALUES 
  (
    'Doroteya',
    'Donova',
    'doroteya.donova@gmail.com',
    '0782446798',
    NULL,
    '27 rue Pierre-Pertit 75000 Paris',
    1
  ), (
    'Sophia',
    'Rio',
    'soph.rio@gmail.com',
    '0689774368',
    NULL,
    '12 rue Saint-Blandine 69001 Lyon',
    0
  );


DROP TABLE IF EXISTS `adoption` ;
CREATE TABLE `adoption` (
  `dog_id` INT NOT NULL,
  `person_id` INT NOT NULL,
  `adoption_date` DATE NOT NULL,
  FOREIGN KEY (dog_id) REFERENCES dog(id),
  FOREIGN KEY (person_id) REFERENCES person(id)
)
ENGINE = InnoDB;

SET FOREIGN_KEY_CHECKS = 1;



