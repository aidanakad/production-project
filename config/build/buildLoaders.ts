import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(options:BuildOptions): webpack.RuleSetRule[]  {
    //loaders have strict order rule , it is better to save them into variables then export it by order
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const fileLoader = {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options:{
                    modules:{
                        auto: (resPath: string) => Boolean(resPath.includes('.module')),
                        localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    }

                }
            },
            "sass-loader",
        ],
    }
    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}