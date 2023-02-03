SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `dog`;

CREATE TABLE `dog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `breed` VARCHAR(100) NOT NULL,
  `gender` VARCHAR(45) NOT NULL,
  `age` VARCHAR(100) NOT NULL,
  `birthday_date` VARCHAR(45) NULL,
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
    'beliga.jpeg'
  ),(
    'Mars',
    'American staffordshire',
    'Mâle',
    'Adulte',
    '2017-03-06',
    'Lyon',
    'No',
    'mars.jpeg'
  ),(
    'Kobe',
    'Terrier',
    'Mâle',
    'Adulte',
    '2020-02-28',
    'Toulouse',
    'No',
    'kobe.jpeg'
  ),(
    'Blue',
    'Croisé',
    'Mâle',
    'Junior',
    '2022-06-20',
    'Montpellier',
    'No',
    'blue.jpeg'
  ),(
    'Athena',
    'Croisé',
    'Femelle',
    'Bébé',
    '2022-12-01',
    'Montpellier',
    'No',
    'athena.jpeg'
  ),(
    'Saturn',
    'Berger allemand',
    'Mâle',
    'Senior',
    '2014-09-04',
    'Toulouse',
    'No',
    'saturn.jpeg'
  ),(
    'Start',
    'Croisé',
    'Mâle',
    'Bébé',
    '2023-11-03',
    'Lyon',
    'No',
    'start.jpeg'
  ),(
    'Zelda',
    'Berger',
    'Femelle',
    'Junior',
    '2022-08-15',
    'Paris',
    'No',
    'chester.jpeg'
  ),(
    'Pepito',
    'Croisé',
    'Mâle',
    'Bébé',
    '2023-09-17',
    'Montpellier',
    'No',
    'pepito.jpeg'
  ),(
    'Sandra',
    'Husky',
    'Femelle',
    'Senior',
    '2018-09-17',
    'Toulouse',
    'No',
    'sandra.jpeg'
  ),(
    'Uranus',
    'Berger croisé',
    'Mâle',
    'Bébé',
    '2023-01-15',
    'Lyon',
    'No',
    'uranus.jpeg'
  ),(
    'Wolverine',
    'Corse',
    'Femelle',
    'Bébé',
    '2022-12-31',
    'Marseille',
    'No',
    'wolverine.jpeg'
  );

DROP TABLE IF EXISTS `user` ;
CREATE TABLE `user` (
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

INSERT INTO `user`(firstname, lastname, email, phone_number, password, adress, is_admin) VALUES 
   (
    'Emile',
    'Lucci',
    'emile.lucci@gmail.com',
    '0782446798',
    NULL,
    '27 rue Pierre-Pertit 75000 Paris',
    0
  ), (
    'Sophia',
    'Rio',
    'soph.rio@gmail.com',
    '0689774368',
    NULL,
    '12 rue Saint-Blandine 69001 Lyon',
    0
  ),(
    'Leo',
    'Make',
    'leo.make@hotmail.com',
    '0632456791',
    NULL,
    '2 rue Saint-Lazare 31000 Toulouse',
    0
  ),(
    'Maria',
    'Drens',
    'maria.maria@outlook.com',
    '0632494991',
    NULL,
    '78 rue Miribel 34000 Montpellier',
    0
  ),(
    'Angèle',
    'Donnatan',
    'a.donnatan@gmail.com',
    '0698446756',
    NULL,
    '7 rue Victor Hugo 75000 Paris',
    0
  ), (
    'Arthur',
    'Rime',
    'arthur.rime@gmail.com',
    '068673489',
    NULL,
    '11 rue Duphot 69003 Lyon',
    0
  ),(
    'Kaloyan',
    'Regnev',
    'k.regnev@hotmail.com',
    '0689765423',
    NULL,
    '89 rue Saint-Dominique 34000 Montpellier',
    0
  ),(
    'Lora',
    'Lemartin',
    'elisa.lemartin@outlook.com',
    '06324946591',
    NULL,
    '784 avenue Montaigne 31000 Toulouse',
    0
  ),(
    'Ross',
    'Chris',
    'ross.ross@outlook.com',
    '06324946587',
    NULL,
    'Avenue Saint Elise 69005 Lyon',
    0
  ),(
    'Elisa',
    'Rogger',
    'e.rogger@gmail.com',
    '0782566754',
    '$argon2id$v=19$m=65536,t=5,p=1$AVHJpftW8oy80rEjOQ9Jog$Yu+q8Zq4tzXmqCO+tFR4NVXli7axTUJntLD5XxPJ170',
    '27 rue Padré-Petit 31000 Toulouse',
    1
  );


DROP TABLE IF EXISTS `adoption` ;
CREATE TABLE `adoption` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `dog_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `adoption_date` VARCHAR(45) NOT NULL,
  FOREIGN KEY (dog_id) REFERENCES dog(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
)
ENGINE = InnoDB;

INSERT INTO
  `adoption`(dog_id, user_id, adoption_date)
VALUES (5, 1, '2023-02-07'),(4, 2, '2023-02-01');


SET FOREIGN_KEY_CHECKS = 1;



