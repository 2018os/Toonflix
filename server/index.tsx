import cookiesMiddleware from 'universal-cookie-express';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import next from 'next';
import { ParsedUrlQuery } from 'querystring';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env' });
}

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({
  dir: '.',
  dev
});

async function renderToHTML(req: Request, res: Response) {
  try {
    const html = await app.renderToHTML(
      req,
      res,
      req.path,
      req.query as ParsedUrlQuery
    );

    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, req.path, req.query as ParsedUrlQuery);
  }
}

async function init() {
  try {
    const handle = app.getRequestHandler();

    await app.prepare();

    const server = express();

    server.use(cookiesMiddleware());

    server.get('/_next/*', (req: Request, res: Response) => {
      handle(req, res);
    });

    server.get('/static/*', (req: Request, res: Response) => {
      handle(req, res);
    });

    server.all('*', (req: Request, res: Response) => renderToHTML(req, res));

    server.listen(port, () => {
      console.log(`on server ${port}`);
    });
  } catch (err) {
    console.log('init function error');
    console.log(err);
  }
}

init();
