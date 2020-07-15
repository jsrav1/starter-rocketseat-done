axios.get('https://api.github.com/users/jsrav1')

    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.warn(error)
    })