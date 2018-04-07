function fetchNetRepository(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .catch(error => {
                reject(error);
            })
            .then(responseData => {
                if (!responseData || !responseData.items) {
                    reject(new Error('responseData is null'));
                    return;
                }
                resolve(responseData.items);
            });
    });
}

export {fetchNetRepository}