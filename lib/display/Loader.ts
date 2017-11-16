
import {Loader as AwayLoader, Point, IAsset} from "@awayjs/core";
import {LoaderContainer as AwayLoaderContainer} from "@awayjs/scene";
import {AWDParser} from "@awayjs/parsers";
import {LoaderInfo} from "./LoaderInfo";
import {Bitmap} from "./Bitmap";
import {BitmapData} from "./BitmapData";
import {TextField} from "../text/TextField";
import {LoaderContext} from "../system/LoaderContext";
import {DisplayObjectContainer} from "./DisplayObjectContainer";
import {DisplayObject} from "./DisplayObject";
import {Sprite} from "./Sprite";
import {MovieClip} from "./MovieClip";
import {LoaderEvent, AssetLibrary, AssetEvent, WaveAudio} from "@awayjs/core";
import {MovieClip as AwayMovieClip, Sprite as AwaySprite, TextField as AwayTextField} from "@awayjs/scene";
import {URLRequest} from "../net/URLRequest";
import {Event} from "../events/Event";
import {ProgressEvent} from "../events/ProgressEvent";
import {Font, DisplayObjectContainer as AwayDisplayObjectContainer, DisplayObject as AwayDisplayObject} from "@awayjs/scene";
import {Image2DParser} from "@awayjs/graphics";
import {ViewImage2D} from "@awayjs/view";
import {Sound} from "../media/Sound";
import {FlashSceneGraphFactory} from "../factories/FlashSceneGraphFactory";
import {URLLoaderEvent} from "@awayjs/core";

// todo: define all methods (start new with converting as3-Loader to ts ?)

export class Loader extends DisplayObjectContainer
{
	private _factory:FlashSceneGraphFactory;
	private _loader:AwayLoader;
	private _isImage:boolean;

	private _loaderInfoAS:LoaderInfo;
	private _loaderContext:LoaderContext;

	// for AVM1:
	public content:any;
	public _content:any;

	constructor(){
		super();
		this._onLoaderProgressDelegate = (event:URLLoaderEvent) => this.onLoaderProgress(event);
		this._onLoaderCompleteDelegate = (event:LoaderEvent) => this.onLoaderComplete(event);
		this._onAssetCompleteDelegate = (event:AssetEvent) => this.onAssetComplete(event);

		this._loaderInfoAS=new LoaderInfo();
		this._factory = new FlashSceneGraphFactory();
	}

	private _onLoaderProgressDelegate:(event:URLLoaderEvent) => void;
	private onLoaderProgress(event: URLLoaderEvent){
		var newEvent=new ProgressEvent(ProgressEvent.PROGRESS, null, null, event.urlLoader.bytesLoaded, event.urlLoader.bytesTotal);
		newEvent.currentTarget=this._loaderInfoAS;
		this._loaderInfoAS.dispatchEvent(newEvent);
	}

	private _onLoaderCompleteDelegate:(event:LoaderEvent) => void;
	private onLoaderComplete(event: LoaderEvent){
		//console.log("loaded url!");
		var newEvent=new Event(Event.COMPLETE);
		newEvent.currentTarget=this._loaderInfoAS;

		this._loaderInfoAS.dispatchEvent(newEvent);

		this._loader.removeEventListener(LoaderEvent.LOAD_COMPLETE, this._onLoaderCompleteDelegate);
		this._loader.removeEventListener(AssetEvent.ASSET_COMPLETE, this._onAssetCompleteDelegate);
		this._loader=null;
		//AssetLibrary.removeEventListener(LoaderEvent.LOAD_COMPLETE, this._onLoaderCompleteDelegate);
		//AssetLibrary.removeEventListener(AssetEvent.ASSET_COMPLETE, this._onAssetCompleteDelegate);
		
	}

	private _onAssetCompleteDelegate:(event:AssetEvent) => void;
	private onAssetComplete(event: AssetEvent){
		
		// 	todo: take care of all needed asset-types (sounds / fonts / textfield)
		//	todo: update awd to support as3-class-identifier as extra property. 
		//  atm the name of the exported symbols will be the as3-class name, 
		//  and all exported symbols are handled as if exposed to as3

		var asset:IAsset = event.asset;

		asset
		if (asset.isAsset(AwayTextField)) {
			this._loaderContext.applicationDomain.addDefinition(asset.name, <AwayTextField> asset);
		} else if (asset.isAsset(ViewImage2D)) {
			this._loaderContext.applicationDomain.addDefinition(asset.name, <ViewImage2D> asset);

			// we should only do this for bitmaps loaded from jpg or png
			if (this._isImage)
				this.addChild(this._loaderInfoAS.content = new Bitmap(<BitmapData> (<ViewImage2D> asset).adapter));
		} else if (asset.isAsset(WaveAudio)) {
			this._loaderContext.applicationDomain.addAudioDefinition(asset.name, (<WaveAudio>asset));
		} else if (asset.isAsset(Font)) {
			this._loaderContext.applicationDomain.addFontDefinition(asset.name, (<Font>asset));
		} else if(asset.isAsset(AwaySprite)) {
			//if((<AwaySprite> asset).material)
			//	(<AwaySprite> asset).material.bothSides=false;
			this._loaderContext.applicationDomain.addDefinition(asset.name, <AwaySprite> asset);
		} else if(asset.isAsset(AwayMovieClip)) {
			this._loaderContext.applicationDomain.addDefinition(asset.name, <AwayMovieClip> asset);
			
			// if this is the "Scene 1", we make it a child of the loader
			if (asset.name=="Scene 1"){
				this.addChild(this._loaderInfoAS.content = (<MovieClip>(<AwayMovieClip>asset).adapter));
			}
		}
	}

	public load(url:URLRequest, context:LoaderContext=null)
	{
		console.log("start loading the url:"+url.url);
		var ext:string = url.url.substr(-3);
		this._isImage = (ext == "jpg" || ext == "png");
		url.url=url.url.replace(".swf", ".awd");
		this._loaderContext=context;
		this._loaderInfoAS.applicationDomain=context.applicationDomain;

		this._loader = new AwayLoader();
		this._loader.addEventListener(URLLoaderEvent.LOAD_PROGRESS, this._onLoaderProgressDelegate);
		this._loader.addEventListener(LoaderEvent.LOAD_COMPLETE, this._onLoaderCompleteDelegate);
		this._loader.addEventListener(AssetEvent.ASSET_COMPLETE, this._onAssetCompleteDelegate);
		this._loader.load(url, null, null, (this._isImage)? new Image2DParser(this._factory) : new AWDParser(this._factory));
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