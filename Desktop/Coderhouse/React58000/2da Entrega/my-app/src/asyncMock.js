const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://cbafederal.net/wp-content/uploads/2021/02/i-12-a.png.png',
        stock: 25,
        description: 'Descripción de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 800,
        category: 'celular',
        img: 'https://images.samsung.com.is/image',
    },
    {
        id: '3',
        name: 'Ipad 8va generación',
        price: 1200,
        category: 'tablet',
        img: 'https://medias.musimundo.',
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getElementById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (idCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === idCategory));
        }, 500);
    });
};