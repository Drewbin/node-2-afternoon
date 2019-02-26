module.exports = {

    create: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.create_product([ name, description, price, image_url ]).then( () => {
            res.sendStatus(200).send('Product created')
        }).catch( err => {
            res.status(500).send('Failed')
        })
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.read_product(params.id).then( (product) => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Failed to find product.');
            console.log(err);
        })
    },

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_products().then( (products) => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('Failed to get products.');
            console.log(err)
        })
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;

        dbInstance.update_product([ params.id, query.desc ]).then( () => {
            res.sendStatus(200).send('Updated product.')
        }).catch(err => {
            res.status(500).send('Failed to update product.');
            console.log(err);
            
        })
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_product(params.id).then( () => {
            res.sendStatus(200).send('Deleted product.')
        }).catch(err => {
            res.status(500).send('Failed to delete product.');
            console.log(err);
            
        })
    },

}