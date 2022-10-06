// Question 2
//resolved promise - resolves a message after a timeout of 500ms.
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({'message':'resolved promise!'});
        }, 500);
    });
}
// rejected promise - d rejects an error message after a timeout of 500ms
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({'error': 'rejected promise!'});
        }, 500);
    });
}
//resolved promise
resolvedPromise().then(result => console.log(result))
// rejected promise
rejectedPromise().catch(error => console.log(error))