namespace NameProject.Models
{
    export class Sample extends Northwind.Mvc.AjaxModel
    {
        private id    : number = 0;
        private key   : string = "";
        private value : string = "";

        public setId(id) { this.id = id; }
        public getId() { return this.id; }

        public setKey(key : string) { this.key = key; }
        public getKey() : string { return this.key; }

        public setValue(value : string) { this.value = value; }
        public getValue() : string { return this.value; }
    }
}