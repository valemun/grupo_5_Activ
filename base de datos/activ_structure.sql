#Base de datos
#DROP DATABASE activ_db;
CREATE DATABASE activ_db;
USE activ_db;

#Tabla user_types
CREATE TABLE user_types (
  user_type_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  user_type_name varchar(15) NOT NULL,
  PRIMARY KEY (user_type_id),
  UNIQUE(user_type_id));
  
#DROP TABLE users;
  
#Tabla users
CREATE TABLE users (
  user_id int unsigned NOT NULL AUTO_INCREMENT,
  user_type tinyint unsigned NOT NULL,
  user_firstname varchar(20) NOT NULL,
  user_lastname varchar(20) NOT NULL,
  user_email varchar(50) NOT NULL,
  user_password varchar(150) NOT NULL,
  user_dob date DEFAULT NULL,
  user_avatar varchar(100) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE(user_id, user_email),
  FOREIGN KEY (user_type) REFERENCES user_types(user_type_id));

#Tabla categories
CREATE TABLE categories (
  category_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  category_name varchar(15) NOT NULL,
  PRIMARY KEY (category_id),
  UNIQUE(category_id));
  
  #Tabla category_types
CREATE TABLE category_types (
  category_type_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  category_type_name varchar(15) NOT NULL,
  PRIMARY KEY (category_type_id),
  UNIQUE(category_type_id));

#Tabla products
CREATE TABLE products (
  product_id int unsigned NOT NULL AUTO_INCREMENT,
  product_name varchar(30) NOT NULL,
  product_price DECIMAL(10,2) NOT NULL,
  product_desc varchar(50) NOT NULL,
  product_category tinyint unsigned NOT NULL,
  product_type tinyint unsigned NOT NULL,
  product_image varchar(100) NOT NULL,
  product_thumbnail varchar(100) NOT NULL,
  product_alt varchar(25),
  PRIMARY KEY (product_id),
  UNIQUE(product_id),
  FOREIGN KEY (product_category) REFERENCES categories(category_id),
  FOREIGN KEY (product_type) REFERENCES category_types(category_type_id));
  
  #Tabla sizes
CREATE TABLE sizes (
  size_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  size_name varchar(15) NOT NULL,
  PRIMARY KEY (size_id),
  UNIQUE(size_id));
  
  #Tabla colors
CREATE TABLE colors (
  color_id tinyint unsigned NOT NULL AUTO_INCREMENT,
  color_name varchar(15) NOT NULL,
  PRIMARY KEY (color_id),
  UNIQUE(color_id));
  
  #Tabla product_sizes
CREATE TABLE product_sizes (
  product_size_id int unsigned NOT NULL AUTO_INCREMENT,
  product_id int unsigned NOT NULL,
  size_id tinyint unsigned NOT NULL,
  PRIMARY KEY (product_size_id),
  UNIQUE(product_size_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (size_id) REFERENCES sizes(size_id));
  
  #Tabla product_colors
CREATE TABLE product_colors (
  product_color_id int unsigned NOT NULL AUTO_INCREMENT,
  product_id int unsigned NOT NULL,
  color_id tinyint unsigned NOT NULL,
  PRIMARY KEY (product_color_id),
  UNIQUE(product_color_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id),
  FOREIGN KEY (color_id) REFERENCES colors(color_id));
  
  #Tabla carts
  CREATE TABLE carts (
  cart_id int unsigned NOT NULL AUTO_INCREMENT,
  user_id int unsigned NOT NULL,
  cart_numitems int unsigned NOT NULL,
  cart_totalprice DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (cart_id),
  UNIQUE(cart_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id));
    
  #Tabla cart_products
  CREATE TABLE cart_products (
  cart_product_id int unsigned NOT NULL AUTO_INCREMENT,
  cart_id int unsigned NOT NULL,
  product_id int unsigned NOT NULL,
  cart_product_size varchar(15) NOT NULL,
  cart_product_color varchar(15) NOT NULL,
  cart_product_cuantity int unsigned NOT NULL,
  PRIMARY KEY (cart_product_id),
  UNIQUE(cart_product_id),
  FOREIGN KEY (cart_id) REFERENCES carts(cart_id),
  FOREIGN KEY (product_id) REFERENCES products(product_id));
  