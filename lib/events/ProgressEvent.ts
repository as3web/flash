import {Event} from "./Event";
export class ProgressEvent extends Event{
	public static PROGRESS="progress";
	public get bytesTotal():number{
		return 1;
	}
	public get bytesLoaded():number{
		return 1;
	}

}
