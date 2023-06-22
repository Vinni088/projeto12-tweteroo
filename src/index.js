import express from "express"
import cors from 'cors'

const app = express();
const PORT = 5000;
app.use(cors());
const log = console.log;

app.get('/', (req,res) => {
    res.send('oi')
})

app.get('/:name', (req, res) => {
	const name = req.params.name;

    res.send('Hello ' + name); 
});

app.listen(PORT, () => log(`Servidor rodando na porta ${PORT}`))