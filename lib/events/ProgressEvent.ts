import {Event} from "./Event";
export class ProgressEvent extends Event{
	public static PROGRESS="progress";
	public static SOCKET_DATA="socketData";
	public static STANDARD_ERROR_DATA="standardErrorData";
	public static STANDARD_OUTPUT_DATA="standardOutputData";
	public get bytesTotal():number{
		console.log("bytesTotal not implemented yet in flash/ProgressEvent");
		return 0;
	}
	public get bytesLoaded():number{
		console.log("bytesLoaded not implemented yet in flash/ProgressEvent");
		return 0;
	}
	public clone():Event{
		console.log("clone not implemented yet in flash/ProgressEvent");
		return null;
	}
	public toString():string{
		console.log("toString not implemented yet in flash/ProgressEvent");
		return "";
	}

}
