
const app = require('./app');
const mongoose = require('mongoose');

const port = 3000;


mongoose.connect('mongodb+srv://pradiptamandal789:pradiptamandal789@cluster0.rbfizzp.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));
