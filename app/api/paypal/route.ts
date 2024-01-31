import paypal from "@paypal/checkout-server-sdk"
import { NextResponse } from "next/server"

const clientId= "Ad-95x_94aUqQa0V_FRmu5HxsSvAI-bmwcvIM1SaB1Tu3x498yVazEDx7LxiIdDNEdnAdZR7Sokp1UyV"
const secretId= "EFhC_y3TVyaHxYfgCw3BBdvtY49PdC6htCw2fzLkCZzWNC0rk6ox1dOLo0zqGLe4F3CQuxV_Mbwk4wKq"


const enviroment=new paypal.core.SandboxEnvironment(clientId,secretId)

const client=new paypal.core.PayPalHttpClient(enviroment)

export const POST = async(req:Request) => {
    
    const {total,orders}=await req.json()

const products= orders.map((product:any)=>{
    return {
        name:`${product.name}`,
        description:`${product.description}`,
        category: "DIGITAL_GOODS",
        quantity:`${product.quantity}`,
        unit_amount:{
            currency_code:"USD",
            value:`${product.price}`
        }
    }                    
})


    const request = new paypal.orders.OrdersCreateRequest()
    request.requestBody({
        intent:"CAPTURE",
        purchase_units:[
            {
                amount:{
                    currency_code:"USD",
                    value:`${total}`,
                    breakdown:{
                        item_total:{               
                        currency_code:"USD",
                        value:`${total}`,                        
                    }}
                },
                items:[
                            ...products
                ]
            }
        ]

    })
    const response= await client.execute(request)
    console.log(response)
    return NextResponse.json({id:response.result.id})
}


