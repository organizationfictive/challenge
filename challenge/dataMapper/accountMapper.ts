/// <reference path="../models/accountModel.ts" />
module dataMapper {
    export class accountMapper implements IDtoMapper {
        fromDto(dto:any, model?:model.IModel): model.IModel {
            model = model || new model.accountModel(dto.username);
            return model;
        }
        toDto(): string {
            return null;
        }
    }
}
