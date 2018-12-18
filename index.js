exports.handler = async (event, context) => {
    // return {
    //     body: JSON.stringify({
    //         message: 'hello world',
    //         location: ret.data.trim()
    //     }),
    //     statusCode: 200
    // };
    let response;
    response = {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'hello world',
        })
    }
    return response;
};