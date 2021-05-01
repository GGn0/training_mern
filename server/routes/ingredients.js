import express from 'express';

const router = express.Router();

// Callback function when localhost:PORT/ is visited
router.get('/', (req, res) => {
        res.send('Working')
    }
);

export default router;