const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static(__dirname));

// Ruta principal para servir MetaFit.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'MetaFit.html'));
});

// Para cualquier otra ruta, también servir MetaFit.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'MetaFit.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
