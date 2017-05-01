import {Event} from "./Event";
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

	private _adaptee:AwayEventDispatcher;

	public eventMapping:Object;

	constructor(target:any = null)
	{
		super(target);

	}

	public constructEventmapping(){
		this.eventMapping={};
		/*
		 this._eventMapping[Event.ACTIVATE]={
		 adaptedDispatcher:null,
		 adaptedType:null,
		 adaptedCallback:null};
		 this._eventMapping[Event.DEACTIVATE]={
		 adaptedDispatcher:null,
		 adaptedType:null,
		 adaptedCallback:null};
		 */
	};

	/*overwrite*/
	public addEventListener(type:string, listener:(event:EventBase) => void):void
	{
		if(this.eventMapping.hasOwnProperty(type)){
			// a mapping exists
			
			//making sure standart behaviour still works (listener is tracked in list)
			super.addEventListener(type, listener);

			var thisMapping:any=this.eventMapping[type];
			// create new listener for adapatedEventType on the adaptedDispatcher
			// when a event comes in, it is translated into dispatchedEventClass
			// for this to work, the dispatchedEventClass must provide a cloneFrom function
			thisMapping.adaptedDispatcher.addEventListener(thisMapping.adaptedType, thisMapping.translater)


			return;
		}
		// if we make it here, the event is not handled by this dispatcher
		// lets output a Warning for now.
		console.log("EventDispatcher: trying to listen for unhandled event: '"+type+"'")
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
			var thisMapping:any=this.eventMapping[type];
			thisMapping.adaptedDispatcher.removeEventListener(thisMapping.adaptedType, thisMapping.adaptedCallback);
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
