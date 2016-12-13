angular.module('FER_app')
    .factory('mockFactory', function(){
        var factory = {};

        mockRoomsData = [{
          "room_id" : 1,
          "id_literal" : "room1",
          "type" : "Regular",
          "room_name" : "Russel, Harris and Labadie",
          "description" : "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
          "address" : "26370 Cody Avenue",
          "lvl" : 8,
          "number" : 27,
          "tel" : "51-(707)977-3927"
        }, {
          "room_id" : 2,
          "id_literal" : "room2",
          "type" : "Regular",
          "room_name" : "Bayer, Walsh and Cormier",
          "description" : "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
          "address" : "97 Lake View Park",
          "lvl" : 8,
          "number" : 29,
          "tel" : "62-(141)176-9536"
        }, {
          "room_id" : 3,
          "id_literal" : "room3",
          "type" : "Regular",
          "room_name" : "Casper LLC",
          "description" : "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
          "address" : "7814 Vahlen Crossing",
          "lvl" : 8,
          "number" : 4,
          "tel" : "86-(658)752-8891"
        }, {
          "room_id" : 4,
          "id_literal" : "room4",
          "type" : "Recommended",
          "room_name" : "Padberg, Bogan and Lueilwitz",
          "description" : "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
          "address" : "54 Artisan Plaza",
          "lvl" : 7,
          "number" : 3,
          "tel" : "353-(285)822-9456"
        }, {
          "room_id" : 5,
          "id_literal" : "room5",
          "type" : "Recommended",
          "room_name" : "Daniel Group",
          "description" : "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
          "address" : "3934 Thackeray Place",
          "lvl" : 8,
          "number" : 20,
          "tel" : "996-(819)800-1598"
        }, {
          "room_id" : 6,
          "id_literal" : "room6",
          "type" : "Regular",
          "room_name" : "Lang, Ferry and Hodkiewicz",
          "description" : "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
          "address" : "69282 Leroy Street",
          "lvl" : 9,
          "number" : 22,
          "tel" : "380-(304)873-6543"
        }, {
          "room_id" : 7,
          "id_literal" : "room7",
          "type" : "Trending",
          "room_name" : "Gusikowski and Sons",
          "description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          "address" : "83965 Mesta Circle",
          "lvl" : 7,
          "number" : 40,
          "tel" : "81-(643)945-0227"
        }, {
          "room_id" : 8,
          "id_literal" : "room8",
          "type" : "Regular",
          "room_name" : "Mitchell-Larkin",
          "description" : "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
          "address" : "18 Melody Alley",
          "lvl" : 7,
          "number" : 2,
          "tel" : "33-(694)865-3505"
        }, {
          "room_id" : 9,
          "id_literal" : "room9",
          "type" : "Trending",
          "room_name" : "Bednar Group",
          "description" : "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
          "address" : "2888 Kim Alley",
          "lvl" : 3,
          "number" : 25,
          "tel" : "55-(364)559-4001"
        }, {
          "room_id" : 10,
          "id_literal" : "room10",
          "type" : "Trending",
          "room_name" : "Wuckert, Hermiston and Murphy",
          "description" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
          "address" : "48 Bultman Way",
          "lvl" : 5,
          "number" : 38,
          "tel" : "1-(773)292-6541"
      }];


      factory.getMockData = function(){
          return mockRoomsData;
      };



      return factory
    });
