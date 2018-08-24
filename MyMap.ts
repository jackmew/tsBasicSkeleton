class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }
    getItem(key: string) {
        return this.map[key];
    }
    clear() {
        // Object.keys(this.items).forEach(element => {
        //     delete this.items[element];
        // });
        this.map = {};
    }
    printMap() {
        // Object.keys(this.map).forEach(element => console.log(this.map[element]));
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();