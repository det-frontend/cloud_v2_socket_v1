import mongoose, { Connection,Schema } from "mongoose";
import connectDbs from "../utils/connect";



const kyawsanDb: Connection = connectDbs('kyawsan_DbUrl');
const commonDb: Connection = connectDbs("common_DbUrl");


export interface closePermissionDocument extends mongoose.Document{
    stationDetailId:string,
    mode:string,
};

const closePermissionSchema = new Schema({
    stationDetailId: { type: String, required: true },
    mode: { type: String, required: true }
});

const ksClosePermissionModel = kyawsanDb.model<closePermissionDocument>(
    "closePermission",
    closePermissionSchema
);


const csClosePermissionModel = commonDb.model<closePermissionDocument>(
    "closePermission",
    closePermissionSchema
);

export { ksClosePermissionModel, csClosePermissionModel };