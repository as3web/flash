
import {Loader as AwayLoader} from "@awayjs/core";
import {LoaderInfo} from "./LoaderInfo";
import {TextField} from "../text/TextField";
import {LoaderContext} from "../system/LoaderContext";
import {DisplayObjectContainer} from "./DisplayObjectContainer";
import {DisplayObject} from "./DisplayObject";
import {Sprite} from "./Sprite";
import {MovieClip} from "./MovieClip";
import {LoaderEvent, AssetLibrary, AssetEvent} from "@awayjs/core";
import {MovieClip as AwayMovieClip, Sprite as AwaySprite, TextField as AwayTextField} from "@awayjs/scene";
import {AWDParser} from "@awayjs/parsers";
import {URLRequest} from "../net/URLRequest";
import {Event} from "../events/Event";
import {DisplayObjectContainer as AwayDisplayObjectContainer} from "@awayjs/scene";

// todo: define all methods (start new with converting as3-Loader to ts ?)

export class Loader extends DisplayObjectContainer{

	private _loaderInfoAS:LoaderInfo;
	private _loaderContext:LoaderContext;
	
	constructor(){
		super();


		this._onLoaderCompleteDelegate = (event:LoaderEvent) => this.onLoaderComplete(event);
		this._onAssetCompleteDelegate = (event:AssetEvent) => this.onAssetComplete(event);
		
		this.adaptee=new AwayDisplayObjectContainer();
		this.adaptee.adapter=this;
						
		AssetLibrary.enableParser(AWDParser);
		this._loaderInfoAS=new LoaderInfo();

	}

	private _onLoaderCompleteDelegate:(event:LoaderEvent) => void;
	private onLoaderComplete(event: LoaderEvent){
		console.log("loaded url!");
		this._loaderInfoAS.dispatchEvent(new Event(Event.COMPLETE));
		AssetLibrary.removeEventListener(LoaderEvent.LOAD_COMPLETE, this._onLoaderCompleteDelegate);
		AssetLibrary.removeEventListener(AssetEvent.ASSET_COMPLETE, this._onAssetCompleteDelegate);
		
	}

	private _onAssetCompleteDelegate:(event:AssetEvent) => void;
	private onAssetComplete(event: AssetEvent){
		
		// 	todo: take care of all needed asset-types (sounds / fonts / textfield)
		//	todo: update awd to support as3-class-identifier as extra property. 
		//  atm the name of the exported symbols will be the as3-class name, 
		//  and all exported symbols are handled as if exposed to as3

		if(event.asset.isAsset(AwayTextField)) {
			var awayTxt:AwayTextField=(<AwayTextField>event.asset);
			awayTxt.adapter=new TextField(awayTxt);
			(<TextField>awayTxt.adapter).adaptee=awayTxt;
			this._loaderContext.applicationDomain.addDefinition(event.asset.name, awayTxt);
		}
		else if(event.asset.isAsset(AwaySprite)) {
			var awaySprite:AwaySprite=(<AwaySprite>event.asset);
			awaySprite.adapter=new Sprite(awaySprite);
			(<Sprite>awaySprite.adapter).adaptee=awaySprite;
			this._loaderContext.applicationDomain.addDefinition(event.asset.name, awaySprite);
		}
		else if(event.asset.isAsset(AwayMovieClip)) {
			var awayMC:AwayMovieClip=(<AwayMovieClip>event.asset);
			awayMC.adapter=new MovieClip(awayMC);
			(<MovieClip>awayMC.adapter).adaptee=awayMC;
			(<MovieClip>awayMC.adapter).gotoAndPlay(0);
			this._loaderContext.applicationDomain.addDefinition(event.asset.name, awayMC);
			
			// if this is the "Scene 1", we make it a child of the loader
			if (event.asset.name=="Scene 1"){
				this.addChild((<MovieClip>(<AwayMovieClip>event.asset).adapter));
			}
		}
	}

	public load(url:URLRequest, context:LoaderContext=null){
		console.log("start loading the url:"+url.url);
		url.url=url.url.replace(".swf", ".awd");
		this._loaderContext=context;
		this._loaderInfoAS.applicationDomain=context.applicationDomain;
		AssetLibrary.addEventListener(LoaderEvent.LOAD_COMPLETE, this._onLoaderCompleteDelegate);
		AssetLibrary.addEventListener(AssetEvent.ASSET_COMPLETE, this._onAssetCompleteDelegate);
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
}