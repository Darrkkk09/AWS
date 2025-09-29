module.exports.handler = async(event) => {
    const response  = {
        statusCode : 200,
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            message: "There are 2 routes with  a hi route & bye route and Hello Im learning Aws & its Just a Test WIth AWS Lambda With Nodejs",
            worked : "this is working with help of serverless yml in VS Code"
        })
    }
    return response;
}
module.exports.handler1 = async(event) => {
    const response  = {
        statusCode : 200,
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            message: "This is a hi route & Hello Just a Test WIth AWS Lambda With Nodejs",
            worked : "this is working with help of serverless yml in VS Code"
        })
    }
    return response;
}

module.exports.handler2 = async(event) =>{
    const response  = {
        statusCode : 200,
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify({
            message: "This is bye route and Hello Im learning Aws & its Just a Test WIth AWS Lambda With Nodejs ",
            worked : "this is working with help of serverless yml in VS Code"
        })
    }
    return response;
}