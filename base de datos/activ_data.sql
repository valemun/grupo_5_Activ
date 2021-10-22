#Insert user_types
INSERT INTO user_types VALUES
(1,"admin"),
(2,"user");

#Insert user
INSERT INTO users VALUES
(1,2, "Tessa", "Baltazar", "tessa@miranda.com", "$2a$12$aiqocCD56jescStYujqzz.zU5cua5H8aIQqhQkk6HpKJS57aJP9iS", "2001-02-03", "/images/users/user_2.png"),
(2,1, "Valeria", "Muñoz", "valeria.munoz@hotmail.com", "$2a$12$x.65M53qpqV3fDhTa6nGGe/4nUF5TjWcVg9zYMa.gh2dvezv8wiIa", "1999-03-09", "/images/users/user_1634697177008.png");

#Insert categories
INSERT INTO categories VALUES
(1,"Unisex"),
(2,"Mujeres"),
(3,"Hombres");

#Insert category_types
INSERT INTO category_types VALUES
(1,"Ropa"),
(2,"Tenis"),
(3,"Accesorios");

#Insert products
INSERT INTO products VALUES
(1,"Leggins Activ X", 835.85, "Leggins de alta calidad", 2, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "leggins activ"),
(2,"Shirt Activ X", 489.90, "Camisa de alta calidad", 3, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "shirt activ"),
(3,"Bandas Activ X", 193.68, "Bandas de alta calidad", 3, 3, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "bandas activ"),
(4,"Tenis Activ X", 835.85, "Tenis de alta calidad", 1, 2, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "tenis activ"),
(5,"Leggins Activ Y", 835.85, "Leggins de alta calidad", 3, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "leggins activ"),
(6,"Shirt Activ Y", 489.90, "Camisa de alta calidad", 2, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "shirt activ"),
(7,"Bandas Activ Y", 193.68, "Bandas de alta calidad", 2, 3, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "bandas activ"),
(8,"Tenis Activ Y", 835.85, "Tenis de alta calidad", 1, 2, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "tenis activ"),
(9,"Leggins Activ W", 835.85, "Leggins de alta calidad", 2, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "leggins activ"),
(10,"Shirt Activ W", 489.90, "Camisa de alta calidad", 3, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "shirt activ"),
(11,"Bandas Activ W", 193.68, "Bandas de alta calidad", 3, 3, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "bandas activ"),
(12,"Tenis Activ W", 835.85, "Tenis de alta calidad", 1, 2, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "tenis activ"),
(13,"Leggins Activ Z", 835.85, "Leggins de alta calidad", 3, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "leggins activ"),
(14,"Shirt Activ Z", 489.90, "Camisa de alta calidad", 2, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "shirt activ"),
(15,"Bandas Activ Z", 193.68, "Bandas de alta calidad", 2, 3, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "bandas activ"),
(16,"Tenis Activ Z", 835.85, "Tenis de alta calidad", 1, 2, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "tenis activ"),
(17,"Leggins Activ V", 835.85, "Leggins de alta calidad", 2, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "leggins activ"),
(18,"Shirt Activ V", 489.90, "Camisa de alta calidad", 3, 1, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "shirt activ"),
(19,"Bandas Activ V", 193.68, "Bandas de alta calidad", 3, 3, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "bandas activ"),
(20,"Tenis Activ V", 835.85, "Tenis de alta calidad", 1, 2, "/images/product-leggins.jpg", "/images/product-placeholder.jpg", "tenis activ");

#Insert sizes
INSERT INTO sizes VALUES
(1,"XS"),
(2,"S"),
(3,"M"),
(4,"L"),
(5,"XL");

#Insert colors
INSERT INTO colors VALUES
(1,"Azul"),
(2,"Verde"),
(3,"Amarillo"),
(4,"Naranja"),
(5,"Rosa"),
(6,"Rojo"),
(7,"Morado"),
(8,"Negro"),
(9,"Blanco");

#Insert product_sizes
INSERT INTO product_sizes VALUES
(1,1,1), (2,1,2), (3,1,3), (4,1,4), (5,1,5),
(6,2,1), (7,2,2), (8,2,3), (9,2,4), (10,2,5),
(11,3,1), (12,3,2), (13,3,3), (14,3,4),
(15,4,2), (16,4,3), (17,4,4), (18,4,5),
(19,5,1), (20,5,2), (21,5,3), (22,5,4), (23,5,5),
(24,6,1), (25,6,2), (26,6,3), (27,6,4), (28,6,5),
(29,7,1), (30,7,2), (31,7,3), (32,7,4),
(33,8,2), (34,8,3), (35,8,4), (36,8,5),
(37,9,1), (38,9,2), (39,9,3), (40,9,4), (41,9,5),
(42,10,1), (43,10,2), (44,10,3), (45,10,4), (46,10,5),
(47,11,1), (48,11,2), (49,11,3), (50,11,4),
(51,12,2), (52,12,3), (53,12,4), (54,12,5),
(55,13,1), (56,13,2), (57,13,3), (58,13,4), (59,13,5),
(60,14,1), (61,14,2), (62,14,3), (63,14,4), (64,14,5),
(65,15,1), (66,15,2), (67,15,3), (68,15,4),
(69,16,2), (70,16,3), (71,16,4), (72,16,5),
(73,17,1), (74,17,2), (75,17,3), (76,17,4), (77,17,5),
(78,18,1), (79,18,2), (80,18,3), (81,18,4), (82,18,5),
(83,19,1), (84,19,2), (85,19,3), (86,19,4),
(87,20,2), (88,20,3), (89,20,4), (90,20,5);

#Insert product_colors
INSERT INTO product_colors VALUES
(1,1,1), (2,1,6), (3,1,8), (4,1,9),
(5,2,2),(6,2,4), (7,2,7),
(8,3,3), (9,3,5), (10,3,6), (11,3,9),
(12,4,1), (13,4,8), (14,4,9),
(15,5,1), (16,5,6), (17,5,8), (18,5,9),
(19,6,2),(20,6,4), (21,6,7),
(22,7,3), (23,7,5), (24,7,6), (25,7,9),
(26,8,1), (27,8,8), (28,8,9),
(29,9,1), (30,9,6), (31,9,8), (32,9,9),
(33,10,2),(34,10,4), (35,10,7),
(36,11,3), (37,11,5), (38,11,6), (39,11,9),
(40,12,1), (41,12,8), (42,12,9),
(43,13,1), (44,13,6), (45,13,8), (46,13,9),
(47,14,2),(48,14,4), (49,14,7),
(50,15,3), (51,15,5), (52,15,6), (53,15,9),
(54,16,1), (55,16,8), (56,16,9),
(57,17,1), (58,17,6), (59,17,8), (60,17,9),
(61,18,2),(62,18,4), (63,18,7),
(64,19,3), (65,19,5), (66,19,6), (67,19,9),
(68,20,1), (69,20,8), (70,20,9);

#Insert carts
INSERT INTO carts VALUES
(1,1,3,1325.75),
(2,2,2,1094.88);

#Insert cart_products
INSERT INTO cart_products VALUES
(1,1, 1, "M", "Negro", 1),
(2,1, 6, "S", "Morado", 1),
(3,2, 3, "M", "Rosa", 2),
(4,2, 8, "S", "Blanco", 1);
