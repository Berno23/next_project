import dotenv from "dotenv"
import { buildConfig } from "payload/config"
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from "path"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { slateEditor } from "@payloadcms/richtext-slate"



dotenv.config({
    path: path.resolve(__dirname,'../env'),
}) 


export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections : [],
    routes:{
        admin: '/sell'
    },
    admin: {
        bundler: webpackBundler(),
        meta : {
            titleSuffix:'-Admin',
            favicon: '/favicon.ico',
            ogImage: '/thumbail.jpg'
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter(
        {
            url: process.env.MONGODB_URL!,  
        }
    ),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    }

})