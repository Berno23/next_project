import dotenv from "dotenv"
import type { InitOptions } from "payload/config"
import path from "path"
import payload from "payload"


dotenv.config({
    path: path.resolve(__dirname,'../env'),
}) 

interface cached {
    client: any | null; // eslint-disable-line @typescript-eslint/no-explicit-any
    promise: Promise<any> | null; // eslint-disable-line @typescript-eslint/no-explicit-any
}

let cached  = (global as any).payload // eslint-disable-line @typescript-eslint/no-explicit-any

if (!cached){  // eslint-disable-line @typescript-eslint/no-explicit-any
    cached = (global as any).payload = {  // eslint-disable-line @typescript-eslint/no-explicit-any
        client: null, // eslint-disable-line @typescript-eslint/no-explicit-any
        promise: null, // eslint-disable-line @typescript-eslint/no-explicit-any
    }
}

interface Args {
    initOptions ?: Partial<InitOptions>
}



export const getPayloadClient = async({initOptions} : Args ={})=>{
    if(!process.env.PAYLOAD_SECRET){
        throw new Error('PAYLOAD_SECRET is not set')
    }
    if(cached.client){
        return cached.client
    }
    if(!cached.promise){
        cached.promise = payload.init({
            secret: process.env.PAYLOAD_SECRET,
            local:initOptions?.express? false : true,
            ...(initOptions || {})
        })
    }
    try {
        cached.client = await cached.promise
    }catch(e:unknown){
        cached.promise = null
        throw e
    }
    return cached.client

}