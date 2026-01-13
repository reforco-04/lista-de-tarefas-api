import { prisma } from "../services/index.js";


async function buscar(){
    try {
        return await prisma.tarefas.findMany();
    } catch (error) {
        return {
            type: "error",
            mensagem: error.message
        }
    }
}

async function criar(dados){
    try {
        const query = await prisma.tarefas.create({
            data: dados
        });

        if(query){
            return {
                type: "success",
                mensagem: "Registro criado com sucesso"
            }
        }

        return {
            type: "warning",
            mensagem: query
        }

    } catch (error) {
        return {
            "type": "error",
            "mensagem": error.message
        }
    }
}

async function editar(dados, id){
    try {
        const query =  await prisma.tarefas.update({
            data: dados,
            where: {
                id: Number(id)
            }
        });

        if(query){
            return {
                type: "success",
                mensagem: "Registro atualizado com sucesso"
            }
        }

        return {
            type: "warning",
            mensagem: query
        }

    } catch (error) {
        return {
            "type": "error",
            "mensagem": error.message
        }
    }
}

async function deletar(id){
    try {
        const query =  await prisma.tarefas.delete({
            where: {
                id: Number(id)
            }
        });

        if(query){
            return {
                type: "success",
                mensagem: "Registro deletado com sucesso"
            }
        }

        return {
            type: "warning",
            mensagem: query
        }

    } catch (error) {
        return {
            "type": "error",
            "mensagem": error.message
        }
    }
}


export {
    buscar,
    criar,
    editar,
    deletar
}