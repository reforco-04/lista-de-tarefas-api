import express from "express"
import cors from "cors"
import tarefasRoutes from './src/routes/tarefasRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './src/docs/documentacao.json' with { type: 'json'};

const app = express();

//midlewares/interceptador
app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => {
    res.redirect('/docs');
});

app.use("/tarefas", tarefasRoutes);

app.use((req, res) => {
    res.status(404).json({
        type: "error",
        mensagem: "pagina não encontrada"
    })
});

app.listen(8000, () => {
    console.log("Servidor on: http://localhost:8000")
});