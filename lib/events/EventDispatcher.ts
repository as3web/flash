import {Event} from "./Event";
import {IEventMapper} from "./IEventMapper";

import {EventDispatcher as AwayEventDispatcher, EventBase} from "@awayjs/core";

/**
	 * [broadcast event] Dispatched when the Flash Player or AIR application operating
	 * loses system focus and is becoming inactive.
	 * @eventType	flash.events.Event.DEACTIVATE
	[Event(name="deactivate", type="flash.events.Event")]

	 * [broadcast event] Dispatched when the Flash Player or AIR application gains
	 * operating system focus and becomes active.
	 * @eventType	flash.events.Event.ACTIVATE
	[Event(name="activate", type="flash.events.Event")]
 */
export class EventDispatcher extends AwayEventDispatcher{

	protected _adaptee:AwayEventDispatcher;

	protected eventMapping:Object;
	protected eventMappingDummys:Object;
	protected eventMappingInvert:Object;
	
	constructor(target:any = null)
	{
		super(target);

		this.eventMapping={};
		this.eventMappingDummys={};
		this.eventMappingInvert={};//only needed in some cases, when we translate back from awayjs-type to flash-type

		this._activateCallbackDelegate = (event:any) => this.activateCallback(event);
		this.eventMapping[Event.ACTIVATE]=(<IEventMapper>{
			adaptedType:"",
			addListener:this.initActivateListener,
			removeListener:this.removeActivateListener,
			callback:this._activateCallbackDelegate});

		this._deactivateCallbackDelegate = (event:any) => this.deactivateCallback(event);
		this.eventMapping[Event.DEACTIVATE]=(<IEventMapper>{
			adaptedType:"",
			addListener:this.initDeactivateListener,
			removeListener:this.removeDeactivateListener,
			callback:this._deactivateCallbackDelegate});
	}

	// ---------- event mapping functions Event.ACTIVATE

	private initActivateListener(type:string, callback:(event:any) => void):void
	{
		window.onfocus = callback;
	}
	private removeActivateListener(type:string, callback:(event:any) => void):void
	{
		window.onfocus = null;
	}

	private _activateCallbackDelegate:(event:any) => void;
	private activateCallback(event:any=null):void
	{
		this.dispatchEvent(new Event(Event.ACTIVATE));
	}


	// ---------- event mapping functions Event.DEACTIVATE

	private initDeactivateListener(type:string, callback:(event:any) => void):void
	{
		window.onblur = callback;
	}
	private removeDeactivateListener(type:string, callback:(event:any) => void):void
	{
		window.onblur = null;
	}
	private _deactivateCallbackDelegate:(event:any) => void;
	private deactivateCallback(event:any=null):void
	{
		this.dispatchEvent(new Event(Event.DEACTIVATE));
	}


	/*overwrite*/
	public addEventListener(type:string, listener:(event:EventBase) => void):void
	{
		if(this.eventMappingDummys.hasOwnProperty(type)){
			
			if(this.eventMappingDummys[type]==""){
				
				// this is a dummy eventMapping, that is set with no message.
				// this means we do not need to create any mapping, 
				// the event should still work, because we dispatch the event without listeneing for awayjs-events
				// so we still need to register it on superclass, so it will work if we dispacth it manually
				super.addEventListener(type, listener);
				return;
			}
			
			// this is a dummy eventMapping that has a message
			// that means it is not expected to work, and we do not need to register it on superclass
			// for now we output a warning
			console.log("Warning - EventDispatcher:  trying to listen for unsupported event: : "+this.eventMappingDummys[type]);
			return;
		}
		if(this.eventMapping.hasOwnProperty(type)){
			
			// a mapping exists for this event
			
			//making sure standart behaviour still works (listener is tracked in list)
			super.addEventListener(type, listener);

			// call the provided "addListener" function
			this.eventMapping[type].addListener.call(this, this.eventMapping[type].adaptedType, this.eventMapping[type].callback);
			return;
		}
		// if we make it here, the event is not handled by this dispatcher
		// lets output a Warning for now.
		console.log("EventDispatcher: trying to listen for unknown event: '"+type+"'")
	}

	/**
	 * Remove an event listener
	 * @method removeEventListener
	 * @param {String} type of event to remove a listener for
	 * @param {Function} listener function
	 */
	public removeEventListener(type:string, listener:(event:EventBase) => void):void
	{
		super.removeEventListener(type, listener);
		if(this.eventMapping.hasOwnProperty(type)){
			// a mapping exists
			this.eventMapping[type].removeListener.call(this, this.eventMapping[type].adaptedType, this.eventMapping[type].callback);
		}
	}
	public get adaptee():AwayEventDispatcher{
		return this._adaptee;
	};
	public set adaptee(value:AwayEventDispatcher){
		this._adaptee=value;
		//this._adaptee.adapter=this;
	};
}
