module model {
    export class accountModel implements IModel{
        username: string;
        constructor(username: string) {
            this.username = username;
        }
    }
}