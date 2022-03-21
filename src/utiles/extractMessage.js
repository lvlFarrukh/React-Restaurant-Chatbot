const extractResponseMessages = (responseObject, messageType) => {
    let images = []
    let textMessage = ""
    let quickReply = []

    responseObject?.text?.fulfillmentMessages?.map((message) => {
        if (message?.message === 'text') {
            textMessage += `${message?.text?.text[0]} `
        }  
        else if (message?.message === 'quickReplies') {
            quickReply.push(...message?.quickReplies?.quickReplies)
        } 
        else if (message?.message === 'image') {
            images.push(message?.image)
        } 
    })

    return {
        type: messageType,
        message: textMessage,
        quickReply,
        images
    }
}

export {
    extractResponseMessages
}