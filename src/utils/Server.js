const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer();

app.post('/api/upload', upload.single('file'), (req, res) => {
    // Lees de inhoud van het verzoek, inclusief de blob
    const fileBuffer = req.file.buffer;

    // Verwerk de ontvangen afbeelding (hier kun je de afbeelding opslaan of andere bewerkingen uitvoeren)

    // Stuur een reactie terug
    res.status(200).send('Afbeelding succesvol geüpload');
});

// Start de server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server luistert op poort ${PORT}`);
});
