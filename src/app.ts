import express from 'express';
import router from './Router/routers.router';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(
      '/docs-products',
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument),
    );
  }

  private routes() {
    this.app.use('/', router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };
export const app = new App();
