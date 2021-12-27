onClick={() => {
    router.push({
        pathname: '/seller/read-details/' + item.id,
        query: {
            id: id,
            username: username,
            password: password,
            image_url: image_url,
            type_user: type_user,
        }
    })
}}