import {BuildOptions} from "./types/config";
import { Configuration as DevConfigurations} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevConfigurations{
    return{
        port: options.port,
        open:true,
        historyApiFallback: true
    }
}