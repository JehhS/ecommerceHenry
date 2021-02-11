const server = require("express");
const bcrypt = require("bcrypt");
const router = server.Router();
const { verifyToken, verifyRole } = require("../middlewares/auth");
const { User, WishList, Product } = require("../db.js");

//Crear Usuario
router.post("/", (req, res) => {
  const {
    name,
    lastName,
    dni,
    email,
    password,
    birthDate,
    gender,
    address,
    country,
    phone
  } = req.body;

  const encryptedPass = bcrypt.hashSync(password, 10);

  User.findAll({where: {email}})
  .then(response => {
    if(response.length){
      res.json({message: 'El email ya está asociado a otro usuario'});
    } else {
      User.create({
        name,
        lastName,
        dni,
        email,
        password: encryptedPass,
        birthDate,
        gender,
        address,
        country,
        phone,
      })
    }
  })
  .then((user) => {
    res.status(200).json(user);
  })
  .catch((err) => {
    console.log(err);
  });
})

//Actualizar Usuario
router.post("/edit/:id", verifyToken, (req, res) => {
  let id = req.params.id;
  const user = req.body
  User.update(
    {
      name: user.name,
      lastName: user.lastName,
      address: user.address,
      birthDate: user.birthDate,
      country: user.country,
      gender: user.gender,
      phone: user.phone,
      dni: user.dni,
      role: user.role,
      email: user.email
    },
    { where: { id: id } }
  )
    .then((user) => {
      res.status(200).send("Se actualizó el usuario");
    })
    .catch((err) =>
      {console.log(err)
      res.status(400).send("Hubo un error al intentar actualizar")}
    );
});

// List all users
router.get("/", [verifyToken, verifyRole], async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    res.status(500).send({
      message: "There has been an error",
    });
    next(e);
  }
});

// List one user
router.get("/:id", async (req, res, next) => {
  let id = req.params.id
  try{
    const user = await User.findByPk(id)
    res.json(user)
  } catch (e) {
    res.status(500).send({
      message: "User not found"
    })
    next(e);
  }
})

// Edit user from profile
router.put('/edit/:userId/me', async (req, res, next) => {
  try{
    const { userId } = req.params
    const { user } = req.body
    const editedUser = await User.update({
        name: user.name,
        lastName: user.lastName,
        address: user.address,
        birthDate: user.birthDate,
        country: user.country,
        phone: user.phone,
        dni: user.dni,
        email: user.email
      }, { where: { id: userId } } )
    res.json(editedUser)
  } catch (e) {
    res.status(500).send({
      message: "User not found"
    })
    next(e);
  }
})

// Upload image
router.put('/image/:userId', async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { url } = req.body;
    const editedUser = await User.findByPk(userId)
    editedUser.image = url;
    editedUser.save()
    res.json({editedUser, url})
  } catch (e) {
    res.status(500).send({
      message: "User not found"
    })
    next(e);
  }
})

//Eliminar Usuario
router.delete("/:id", [verifyToken, verifyRole], (req, res) => {
  let id = req.params.id;
  User.destroy({
    where: {
      id: id,
    },
  })
    .then((user) => {
      if (user) {
        res.status(200).send(`Se borró el usuario ${user}`);
      } else {
        res.status(400).send(`No se encontró el usuario con id ${id}`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// AGREGAR PRODUCTO A WHISLIST
router.post('/wish/:userId', (req, res) => {
  const { productId } = req.body;
    User.findOne({
        where: {
            id: req.params.userId
        }
      }).then(async (user) => {
        if (!user) {
            res.redirect('/login');
        } else {
                WishList.findOrCreate({
                  where:{
                    userId: req.params.userId,
                    productId: productId
                  }
      }).then(() => {
                    res.send({
                        result: 'Product added ok to whisList'
                    })
                })          
        }
    }).catch((err) => {
        res.status(404);
    })
})

//OBTENER LA WISHLIST DE UN USER
router.get('/wish/:userId', async (req, res, next) => {
  try {
    console.log(req.params.userId)
    const {userId} = req.params
    let response = await WishList.findAll({ where: { userId }, include: [{ model: Product }]})
    // products.forEach(product => response.push(product.productId))
    res.json(response);
    } catch (e) {
      res.status(500).send({
      message: 'There has been an error'
      });
     next(e);
      }
    }
)

//RUTA PARA BORRAR
router.delete('/wish/:userId', async (req, res, next) => {
  try {
    const { productId } = req.body;
    const {userId} = req.params
    const products = await WishList.findAll({ where: { userId }, include: [{ model: Product }]})
    // console.log('PRODUCTS', products)
    let response = products.filter(product => product.data.productId !== productId)
    res.json(response);
  } catch (e) {
    res.status(500).send({
    message: 'There has been an error'
    });
   next(e);
    }
  }
)
//OBTENER LA WISHLIST DE UN USER
// router.get('/wish/:userId', async (req, res, next) => {
//   try {
//     console.log(req.params.userId)
//     const {userId} = req.params
//     let response = []
//     const products = await WishList.findAll({ where: { userId }})
//     products.forEach(product => response.push(product.productId))
//     res.json(response);
//     } catch (e) {
//       res.status(500).send({
//       message: 'There has been an error'
//       });
//      next(e);
//       }
//     }
// )
module.exports = router;
