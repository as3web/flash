
import {Loader as AwayLoader} from "@awayjs/core";
import {LoaderInfo} from "./LoaderInfo";
import {LoaderContext} from "../system/LoaderContext";
import {DisplayObjectContainer} from "./DisplayObjectContainer";
import {LoaderEvent} from "@awayjs/core";
import {URLRequest} from "../net/URLRequest";
import {Event} from "../events/Event";

export class Loader extends DisplayObjectContainer{

	private _loaderInfoAS:LoaderInfo;
	private _awayLoader:AwayLoader;
	constructor(){
		super();
		this._awayLoader=new AwayLoader();
		this._awayLoader.addEventListener(LoaderEvent.LOAD_COMPLETE, (event: LoaderEvent) => this.onComplete(event));
		this._loaderInfoAS=new LoaderInfo();

	}

	private onComplete(event: LoaderEvent){
		console.log("loaded url!");
		this.dispatchEvent(new Event(Event.COMPLETE));
		this._loaderInfoAS.dispatchEvent(new Event(Event.COMPLETE));
	}
	public load(url:URLRequest, context:LoaderContext=null){
		console.log("start loading the url:"+url.url);
		url.url=url.url.replace(".swf", ".awd");
		this._awayLoader.load(url);
	}

	public get contentLoaderInfo():LoaderInfo
	{
		return this._loaderInfoAS;
	}

	public set contentLoaderInfo(value:LoaderInfo)
	{
		this._loaderInfoAS=value;
	}
};