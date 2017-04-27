import {Event} from "./Event";
import {EventDispatcher as AwayEventDispatcher} from "@awayjs/core";
export class EventDispatcher extends AwayEventDispatcher{

	private _adaptee:AwayEventDispatcher;

	public get adaptee():AwayEventDispatcher{
		return this._adaptee;
	};
	public set adaptee(value:AwayEventDispatcher){
		this._adaptee=value;
		//this._adaptee.adapter=this;
	};
}
