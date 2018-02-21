export enum ConfigType {
    Server = 'server',
    Services = 'services'
}

export interface BaseConfig {}

export interface ServerConfig extends BaseConfig {
    env: string;
    host: string;
    port: number;
    workers?: number;
}

export interface ServicesConfig extends BaseConfig {
}

export interface ConfigDictionary {
    server?: ServerConfig;
    services?: ServicesConfig;
}