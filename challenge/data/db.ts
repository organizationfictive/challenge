/// <reference path="../index.d.ts" />

module challenge {
    db = {
        "sampleData": new DevExpress.data.DataSource({
            /// Implementation of load operation. Accepts a bag of "load options" (object) which are: sort, filter, group, select, skip, take. 
            /// Must return array or promise(array).
            load: function (options?: DevExpress.data.LoadOptions) {
                return $.ajax("/data/sampleData.json");
            },
            /// Implementation of loading single item by key. Accepts key value.
            /// Must return object or promise(object).
            byKey: function (key: any) {
                throw new Error("Not implemented");
            },
            /// Implementation of insertion. Accepts bag of data values. 
            /// Return value is not required. If present must be key value or promise of key value.
            insert: function (values: any) {
                throw new Error("Not implemented");
            },
            /// Implementation of update. Accepts key and bag of data values (object key, object values). 
            /// If returns promise, then considered async, otherwise return value is ignored.
            update: function (key: any, values: any) {
                throw new Error("Not implemented");
            },
            /// Implementation of remove. Accepts key value.
            /// If returns promise, then considered async, otherwise return value is ignored.
            remove: function (key: any) {
                throw new Error("Not implemented");
            },
            /// Implementation of total count evaluation. Accepts arguments same as load. 
            /// Must return Number or promise(Number).
            totalCount: function (options?: { filter?: any[]; group?: string[] }) {
                throw new Error("Not implemented");
            }
        })
    };
}