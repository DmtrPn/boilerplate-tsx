import * as express from 'express';
import { Response, Request, NextFunction } from 'express';
import * as hemlet from 'helmet';
import * as path from 'path';
import { useExpressServer } from 'routing-controllers';

import { Launcher, ClusterLauncher } from './launcher';
import { Config, ConfigType, ServerConfig } from '../config';
import { ErrorCode } from '../http-error';
const PUBLIC_PATH = path.join(__dirname, '../../../../public');
const INDEX_HTML_PATH = path.join(PUBLIC_PATH, 'index.html');
const API_BASIC_URL = '/api';

class Application {

    private app: express.Application;
    private serverConfig: ServerConfig;

    constructor() {
        this.serverConfig = <ServerConfig>Config.getInstance().getConfig(ConfigType.Server);
    }

    public init(
        controllers?: Function[] | string[],
        middlewares?: Function[] | string[]
    ): void {

        this.app = express();

        this.app.use(hemlet());

        useExpressServer(this.app, {
            defaultErrorHandler: false,
            controllers,
            middlewares
        });

        this.app.use(
            express.static(PUBLIC_PATH)
        );

        this.app.use((req: Request, res: Response, next: NextFunction) => {
            if (!req.url.startsWith(API_BASIC_URL)) {
                res.sendFile(INDEX_HTML_PATH);
            } else {
              next();
            }
        });

        this.app.use((req: Request, res: Response) => {
            if (req.url.startsWith(API_BASIC_URL) && !res.finished) {
                res.status(ErrorCode.NotFound).end(`Router ${req.url} not found`);
            }
        });
    }

    public start(): void {
        const launcher = this.createLauncher();
        launcher.launch();
    }

    protected createLauncher(): Launcher {
        return this.serverConfig.workers
            ? new ClusterLauncher(this.app)
            : new Launcher(this.app);
    }
}

export { Application };
