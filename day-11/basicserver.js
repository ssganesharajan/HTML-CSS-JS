const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from server2!');
})

// Start server
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server2 running on http://localhost:${PORT}`);
});