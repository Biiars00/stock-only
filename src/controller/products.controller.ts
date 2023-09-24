import { Request, Response } from 'express';
import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert('src/database/firebaseAdmin.json'),
});

//GET
export async function listProducts(req: Request, res: Response) {
  try {
    const db = await admin.firestore().collection('produtos').get();
    const produtos = db.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao acessar o Banco de dados:', error);
    res.status(500).json({ error: 'Erro do servidor' });
  }
}

//GET/:ID
export async function listProductsId(req: Request, res: Response) {
  try {
    const productId = req.params.id;
    const db = await admin
      .firestore()
      .collection('produtos')
      .doc(productId)
      .get();

    if (!db.exists) {
      res.status(404).json({ error: 'Produto não encontrado' });
      return;
    }

    const produto = db.data();

    res.status(200).json(produto);
  } catch (error) {
    console.error('Erro ao acessar o Banco de dados:', error);
    console.log('');
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

//POST
export async function registerProduct(req: Request, res: Response) {
  try {
    const addProduct = req.body;

    const produtoId = await admin
      .firestore()
      .collection('produtos')
      .add(addProduct);

    res
      .status(201)
      .json({ id: produtoId.id, message: 'Produto cadastrado com sucesso' });
  } catch (error) {
    console.error('Erro ao cadastrar produto:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

// PUT
export async function updateProduct(req: Request, res: Response) {
  try {
    const product = req.body;
    const productId = req.params.id;

    const db = await admin
      .firestore()
      .collection('produtos')
      .doc(productId)
      .update(product);

    return res.status(200).json(db);
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

// DELETE
export async function removeProduct(req: Request, res: Response) {
  try {
    const product = req.body;
    const productId = req.params.id;

    const db = await admin
      .firestore()
      .collection('produtos')
      .doc(productId)
      .delete(product);

    return res.status(200).json(db);
  } catch (error) {
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}
