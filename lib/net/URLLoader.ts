import {EventDispatcher} from "../events/EventDispatcher"
import {IEventMapper} from "../events/IEventMapper"
import {Event} from "../events/Event"

import {URLLoader as URLLoaderAway, URLRequest, LoaderEvent} from "@awayjs/core";
export class URLLoader extends EventDispatcher{
	constructor(){
		super();
		this.adaptee=new URLLoaderAway();

		this._completeCallbackDelegate = (event:Event) => this.completeCallback(event);
		this.eventMapping[Event.COMPLETE]=(<IEventMapper>{
			adaptedType:LoaderEvent.LOAD_COMPLETE,
			addListener:this.initCompleteListener,
			removeListener:this.removeCompleteListener,
			callback:this._completeCallbackDelegate});

	}

	public get adaptee():URLLoaderAway{
		return (<URLLoaderAway>this._adaptee);
	};
	public set adaptee(value:URLLoaderAway){
		this._adaptee=value;
	};

	public get data():any{
		return this.adaptee.data;
	}
	private initCompleteListener(type:string, callback:(event:any) => void):void
	{
		this.adaptee.addEventListener(type, callback);
	}
	private removeCompleteListener(type:string, callback:(event:any) => void):void
	{
		this.adaptee.removeEventListener(type, callback);
	}
	private _completeCallbackDelegate:(event:Event) => void;
	private completeCallback(event:Event=null):void
	{
		var newEvent:Event=new Event(Event.COMPLETE);
		newEvent.currentTarget=this;
		this.dispatchEvent(newEvent);
	}
	public load(request:URLRequest):void{
		this.adaptee.load(request);
	};
}