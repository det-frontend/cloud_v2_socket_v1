import { query } from 'express';
import { closePermissionDocument, csClosePermissionModel, ksClosePermissionModel } from "../model/closePermission.model";
import { dBSelector } from "../utils/helper";
import { FilterQuery } from 'mongoose';

export const getAllClosePermissionService = async (dbModel:string,query:FilterQuery<closePermissionDocument>)=>{
    let selectedModel = dBSelector(dbModel, ksClosePermissionModel, csClosePermissionModel);

    return await selectedModel.find(query); 
};

export const getAClosePermissionService = async (dbModel:string,query:object)=>{
    let selectedModel = dBSelector(dbModel, ksClosePermissionModel, csClosePermissionModel);
    
    console.log("*********");
    console.log(selectedModel);
    console.log("*********");

    return await selectedModel.findOne(query); 
};

export const addPerissionService = async (body:closePermissionDocument,dbModel: string) => {
    let selectedModel = dBSelector(dbModel, ksClosePermissionModel, csClosePermissionModel);
    
    return await new selectedModel(body).save();
};

export const updatePermissionService = async (body: closePermissionDocument, id: string, dbModel: string) => {
    let selectedModel = dBSelector(dbModel, ksClosePermissionModel, csClosePermissionModel);
    
    await selectedModel.findByIdAndUpdate({ _id: id }, body);
    
    return await selectedModel.find({ _id: id })
};

export const deletePermissionService = async (id: string, dbModel: string) => {
    let selectedModel = dBSelector(dbModel, ksClosePermissionModel, csClosePermissionModel);
    
    return await selectedModel.deleteOne({ stationDetailId: id });
}