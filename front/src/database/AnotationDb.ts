export default class AnotationDb {
  #description: string
  #potential: string
  #category: string
  #date: Date
  #DB: any
  #DBNAME: string
  #DBVERSION: number
  #DBSTORENAME: string

  constructor() {
    this.#DBNAME = 'indexeddb_annotations'
    this.#DBVERSION = 1
    this.#DBSTORENAME = 'annotations'

    this.#init()
  }
  
  #init() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(this.#DBNAME, this.#DBVERSION);

      const self = this
      req.onsuccess = function (evt) {
        self.#DB = this.result;
        resolve(this)
        console.log("openDb DONE");
      };

      req.onerror = function (evt) {
        console.error("openDb:", evt.target.errorCode);
      };
  
      req.onupgradeneeded = function (evt) {
        var store = evt.currentTarget.result.createObjectStore(self.#DBSTORENAME, {
          keyPath: "id",
          autoIncrement: true,
        });
  
        store.createIndex("description", "description", { unique: false });
        store.createIndex("category", "category", { unique: false });
        store.createIndex("date", "date", { unique: false });
        store.createIndex("potential", "potential", { unique: false });
      };
    })
  }

  async getAll (callback=(e: any) => {}) {
    const objectStore = await this.#DB.transaction([this.#DBSTORENAME]).objectStore(this.#DBSTORENAME);
    await objectStore.openCursor().addEventListener('success', e => {
      callback(e.target.result)
    })
  }

  destroy (id: number) {
    const transaction = this.#DB.transaction([this.#DBSTORENAME], 'readwrite');
    const objectStore = transaction.objectStore(this.#DBSTORENAME);
    objectStore.delete(id);
  }

  getItem(id: number, callback=(e: any) => {}) {
    const transaction = this.#DB.transaction(this.#DBSTORENAME)
    const objectStore= transaction.objectStore(this.#DBSTORENAME)
    const item = objectStore.get(id)

    item.onsuccess = function (e) {
      callback(item.result)
    }

    item.onerror = function (e) {
      console.log('error', e)
    }
  }

  async create() {
    const transaction = this.#DB.transaction([this.#DBSTORENAME], 'readwrite')
    const objectStore = transaction.objectStore(this.#DBSTORENAME)
    const query = objectStore.put({
      description: this.#description,
      category: this.#category,
      date: this.#date,
      potential: this.#potential
    });

    query.addEventListener('success', () => {
      console.log('sucesso')
    })

    transaction.addEventListener('complete', () => {
      console.log('terminado')
    })

    transaction.addEventListener('error', (e: any) => console.log('Transaction error', e));
  }

  setDescription (description: string) {
    this.#description = description
  }

  setPotential (potential: string) {
    this.#potential = potential
  }

  setCategory (category: string) {
    this.#category = category
  }

  setDate (date: Date) {
    this.#date = date
  }
  

}