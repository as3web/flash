
import {Loader as AwayLoader} from "@awayjs/core";
import {LoaderInfo} from "./LoaderInfo";
import {LoaderContext} from "../system/LoaderContext";
import {DisplayObjectContainer} from "./DisplayObjectContainer";
import {DisplayObject} from "./DisplayObject";
import {Sprite} from "./Sprite";
import {LoaderEvent, AssetLibrary, AssetEvent} from "@awayjs/core";
import {MovieClip as AwayMovieClip, Sprite as AwaySprite} from "@awayjs/scene";
import {AWDParser} from "@awayjs/parsers";
import {URLRequest} from "../net/URLRequest";
import {Event} from "../events/Event";
import {DisplayObjectContainer as AwayDisplayObjectContainer} from "@awayjs/scene";

export class Loader extends DisplayObjectContainer{

	private _loaderInfoAS:LoaderInfo;
	private _awayLoader:AwayLoader;
	constructor(){
		super();
		this.adaptee=new AwayDisplayObjectContainer();
		this._awayLoader=new AwayLoader();
		AssetLibrary.enableParser(AWDParser);
		AssetLibrary.addEventListener(LoaderEvent.LOAD_COMPLETE, (event: LoaderEvent) => this.onComplete(event));
		AssetLibrary.addEventListener(AssetEvent.ASSET_COMPLETE, (event: AssetEvent) => this.onAssetComplete(event));
		this._loaderInfoAS=new LoaderInfo();

	}

	private onComplete(event: LoaderEvent){
		console.log("loaded url!");
		this.dispatchEvent(new Event(Event.COMPLETE));
		this._loaderInfoAS.dispatchEvent(new Event(Event.COMPLETE));
	}

	private onAssetComplete(event: AssetEvent){
		if(event.asset.isAsset(AwaySprite)) {
			console.log("added Sprite asset to loader")
			//this.addChild(<DisplayObjectContainer> event.asset);
		}
		else if(event.asset.isAsset(AwayMovieClip)) {
			/*
			console.log("added MovieClip asset to loader");
			if (event.asset.name="Scene 1"){
				(<AwayMovieClip>event.asset).adapter=(<Sprite>new Sprite());
				(<Sprite>(<AwayMovieClip>event.asset).adapter).adaptee=(<AwayMovieClip>event.asset);
				this.addChild((<DisplayObject>(<AwaySprite>event.asset).adapter));
			}
			*/
		}
	}

	public load(url:URLRequest, context:LoaderContext=null){
		console.log("start loading the url:"+url.url);
		url.url=url.url.replace(".swf", ".awd");
		AssetLibrary.load(url);
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