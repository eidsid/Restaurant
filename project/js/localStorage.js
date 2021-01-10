// Store Class: Handles Storage
class local_storage {
    static set_lange(lang) {
        localStorage.setItem("language", lang);
    }
    static remove() {
        localStorage.removeItem("language");
    }
    static get_lange() {
        return localStorage.getItem("language");
    }

    //for purshes item
    //get purshes item
    static getitems() {
        let item = JSON.parse(localStorage.getItem("items"));
        if (item) {
            return item;
        } else {
            return (item = []);
        }
    }

    //add item to local storage
    static additem(purshes_item) {
        let items = local_storage.getitems();
        items.push(purshes_item);
        localStorage.setItem("items", JSON.stringify(items));
    }

    //remove item from local storage
    static removeitem(id) {
            let items = local_storage.getitems();
            items.forEach((item, index) => {
                if (item.id === id) {
                    items.splice(index, 1);
                }
            });
            localStorage.setItem("items", JSON.stringify(items));
        }
        //edit item from local storage
    static edititem(id, count) {
            let items = local_storage.getitems();
            items.forEach((item) => {
                if (item.id === id) {
                    item.count = count;
                }
            });
            localStorage.setItem("items", JSON.stringify(items));
        }
        //get id
    static get_id() {
        let ids = [];
        let items = local_storage.getitems();
        items.forEach((item) => {
            ids.push(item.id);
        });
        return ids;
    }
}