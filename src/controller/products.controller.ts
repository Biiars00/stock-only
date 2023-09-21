import { Request, Response } from 'express';
import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('src/database/firebaseAdmin.json'),
});

//GET
export const listProducts = async (req: Request, res: Response) => {
  try {
    const db = await admin.firestore().collection('produtos').get();
    const produtos = db.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao acessar o Banco de dados:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

//POST
export const registerProduct = async (req: Request, res: Response) => {
  try {
    const { id, nameProduct, price, unit } = req.body;

    const produtoId = await admin.firestore().collection('produtos').add({
      id,
      nameProduct,
      price,
      unit,
    });

    res
      .status(201)
      .json({ id: produtoId.id, message: 'Produto cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

//PUT

//DELETE
