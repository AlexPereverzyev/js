'use strict';

const Koa = require('koa');
const KoaRouter = require('koa-router');
const serve = require('koa-static');
const send = require('koa-send');
const { absolutePath } = require('swagger-ui-dist');

const api = require('./api');

class App {
    start(port = 8080) {
        const router = new KoaRouter();

        // API
        router.get('/health', api.healthchek);

        // Swagger UI
        router.get('/swagger.json', (ctx) => send(ctx, './src/swagger.json'));
        router.get('/', async (ctx, next) => {
            if (!ctx.query.url) {
                ctx.redirect('?url=swagger.json');
            } else {
                await next();
            }
        });

        // start server
        this.app = new Koa();
        this.app.use(router.routes());
        this.app.use(serve(absolutePath()));
        this.server = this.app.listen(port);

        console.info(`REST server started at port ${port}`);
    }

    stop() {
        if (!this.server) {
            return;
        }
        this.server.close();

        console.info('\nREST server stopping');
    }
}

module.exports = App;
