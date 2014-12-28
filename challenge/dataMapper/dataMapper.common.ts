/// <reference path="../models/model.common.ts" />
module dataMapper {
    export interface IClientDataMapper {
        convertJsonToModel(jsonData: string): model.IModel;
        convertModelToJson(IModel): string;
    }
    export interface IDtoMapper {
        fromDto(dto:string, model?:model.IModel): model.IModel;
        toDto(): string;
    }
}