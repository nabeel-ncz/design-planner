import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
    _id?: mongoose.Types.ObjectId;
    name: string;
    databases: Record<string, string>[];
    createdAt?: Date;
    updatedAt?: Date;
}

const projectSchema: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    databases: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'databases'
    }]
}, {
    timestamps: true
});

const Project = mongoose.model<IProject>('projects', projectSchema);
export default Project;