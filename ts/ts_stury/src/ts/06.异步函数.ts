function queryData(msg: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        if (msg) {
            resolve(msg)
        } else {
            reject('error no msg')
        }
    })
}
;(async () => {
    try {
        let result = await queryData('success')
        console.log(result);
    } catch (error) {
        console.log('error', error);
    }
})()