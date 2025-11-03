//TODO: Ejemplo 5: Inicializar la base de datos
//Abrir una base de datos "Ejemplo" y dentro el almacen "productos"
function openDatabase() {
    return new Promise((resolve, reject) => {
        let openReq = indexedDB.open('Ejemplo', 1); // ¡OJO CON LA VERSIÓN!!!
        openReq.addEventListener('upgradeneeded', e => { // No estamos en la versión
            console.log("db actualizada a v1");
            let db = e.target.result;
            if (!db.objectStoreNames.contains('products')) { // No existe "productos"
                //Creamos el almacén de datos
                db.createObjectStore('products', {
                    autoincrement: true,
                    keyPath: 'id'
                });
            }
            resolve(db); // No hace falta ponerlo!!!
        });

        openReq.addEventListener('success', e => { // ¡OK!
            resolve(e.target.result); // Devolvemos la base de datos.
        });

        openReq.addEventListener('error', e => reject("Error al abrir"));
        openReq.addEventListener('blocked', e => reject("BD ya en uso"));
    });
}

function insertProduct(db, product) {
    return new Promise((resolve, reject) => {
        let transaction = db.transaction(['products'], 'readwrite');
        let store = transaction.objectStore('products');
        let addReq = store.add(product);
        addReq.addEventListener('success', e => resolve("Producto insertado"));
        addReq.addEventListener('error', e => reject("Error al insertar"));
    });
}

function deleteDatabase() {
    return new Promise((resolve, reject) => {
        let deleteReq = indexedDB.deleteDatabase('Ejemplo');
        deleteReq.addEventListener('success', e => resolve("BD eliminada"));
        deleteReq.addEventListener('error', e => reject("Error al eliminar"));
        deleteReq.addEventListener('blocked', e => reject("BD en uso, no se puede eliminar"));
    });
}

function getAllProducts(db) {
    return new Promise((resolve, reject) => {
        let transaction = db.transaction(['products'], 'readonly');
        let store = transaction.objectStore('products');
        let getAllReq = store.getAll();
        getAllReq.addEventListener('success', e => resolve(e.target.result));
        getAllReq.addEventListener('error', e => reject("Error al obtener productos"));
    });
}

//USO
openDatabase()
    .then(db =>  {
        console.log(db);
        return insertProduct(db, { name: 'Producto 1', price: 100 }).then(() => db);
    })
    .then(db => {
        return getAllProducts(db);
    })
    .then(products => {
        console.log(products);
    })
    .catch(error => { console.log(error); });