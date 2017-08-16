import {URLLoader as URLLoaderAway, URLRequest, LoaderEvent, IAssetAdapter} from "@awayjs/core";

import {EventDispatcher} from "../events/EventDispatcher"
import {IEventMapper} from "../events/IEventMapper"
import {Event} from "../events/Event"

export class URLLoader extends EventDispatcher
{
	private _adaptee:URLLoaderAway;

	constructor(){
		super();
		this._adaptee = new URLLoaderAway();

		this._completeCallbackDelegate = (event:Event) => this.completeCallback(event);
		this.eventMapping[Event.COMPLETE]=(<IEventMapper>{
			adaptedType:LoaderEvent.LOAD_COMPLETE,
			addListener:this.initCompleteListener,
			removeListener:this.removeCompleteListener,
			callback:this._completeCallbackDelegate});

	}

	public get data():any
	{
		return this._adaptee.data;
	}
	private initCompleteListener(type:string, callback:(event:any) => void):void
	{
		this._adaptee.addEventListener(type, callback);
	}
	private removeCompleteListener(type:string, callback:(event:any) => void):void
	{
		this._adaptee.removeEventListener(type, callback);
	}
	private _completeCallbackDelegate:(event:Event) => void;
	private completeCallback(event:Event=null):void
	{
		var newEvent:Event=new Event(Event.COMPLETE);
		newEvent.currentTarget=this;
		this.dispatchEvent(newEvent);
	}
	public load(request:URLRequest):void{
		this._adaptee.load(request);
	};
}