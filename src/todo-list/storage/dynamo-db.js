const AWS = require('aws-sdk')

AWS.config.update({
    region: process.env.AWS_REGION
})

const documentClient = new AWS.DynamoDB.DocumentClient()

const put = async data => {
    return await documentClient.put({
        TableName: process.env.TODO_REGISTRATIONS_TABLE,
        Item: data
    }).promise()
}

module.exports = {
    put
}