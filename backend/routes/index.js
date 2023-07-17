const router = require('express').Router();
const { errors } = require('celebrate');
const { NotFoundError } = require('../utils/errors/index');
const { validateLogin, validateUser } = require('../utils/validation');
const { login, createUsers } = require('../controllers/users');
const validateToken = require('../middlewares/auth');

const usersRouter = require('./users');
const cardsRouter = require('./cards');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

router.post('/signin', validateLogin, login);
router.post('/signup', validateUser, createUsers);

router.get('/signout', (req, res) => {
  res.clearCookie('jwt').send({ message: 'Выход' });
});

router.use('/users', validateToken, usersRouter);
router.use('/cards', validateToken, cardsRouter);
router.use('/*', (req, res, next) => next(new NotFoundError('Данная страница не найдена')));
router.use(errors());

module.exports = router;
