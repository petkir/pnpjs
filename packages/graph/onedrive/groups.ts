import { addProp } from "@pnp/queryable";
import { _Group } from "../groups/types.js";
import { Drive, Drives, IDrive, IDrives } from "./types.js";


declare module "../groups/types" {
    interface _Group {
        readonly drive: IDrive;
        readonly drives: IDrives;

    }
    interface IGroup {
        readonly drive: IDrive;
        readonly drives: IDrives;
    }
}

addProp(_Group, "drive", Drive, "drive");
addProp(_Group, "drives", Drives);
