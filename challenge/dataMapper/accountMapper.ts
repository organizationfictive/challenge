/// <reference path="../models/accountModel.ts" />
/// <reference path="../models/model.common.ts" />
/// <reference path="../models/accountModel.ts" />
module dataMapper {
    export class accountMapper implements IDtoMapper {
        fromDto(dto:any, modelInstance?:model.IModel): model.IModel {
            modelInstance = modelInstance || new model.accountModel(dto.username);
            return modelInstance;
        }
        toDto(): string {
            return null;
        }
    }
}
