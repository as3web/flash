import {IAssetAdapter, Point} from "@awayjs/core";
import {BitmapImage2D, MaterialBase, Image2D} from "@awayjs/graphics";
import {Timeline, MovieClip as AwayMovieClip, Sprite as AwaySprite, DisplayObjectContainer as AwayDisplayObjectContainer, Billboard, ISceneGraphFactory, TextField as AwayTextField, PrefabBase} from "@awayjs/scene";
import {MethodMaterial} from "@awayjs/materials";
import {DefaultSceneGraphFactory} from "@awayjs/parsers";
import {ViewImage2D} from "@awayjs/view";

import {Sprite} from "../display/Sprite";
import {MovieClip} from "../display/MovieClip";
import {Bitmap} from "../display/Bitmap";
import {BitmapData} from "../display/BitmapData";
import {DisplayObjectContainer} from "../display/DisplayObjectContainer";
import {TextField} from "../text/TextField";

export class FlashSceneGraphFactory extends DefaultSceneGraphFactory implements ISceneGraphFactory
{
	public imageStore:Object = {};

	public createSprite(prefab:PrefabBase = null):AwaySprite
	{
		return <AwaySprite> new Sprite().adaptee;
	}

	public createDisplayObjectContainer():AwayDisplayObjectContainer
	{
		return <AwayDisplayObjectContainer> new DisplayObjectContainer().adaptee;
	}

	public createMovieClip(timeline:Timeline = null):AwayMovieClip
	{
		return <AwayMovieClip> new MovieClip(new AwayMovieClip(timeline)).adaptee;
	}

	public createTextField():AwayTextField
	{
		return <AwayTextField> new TextField().adaptee;
	}

	public createBillboard(material:MaterialBase):Billboard
	{
		return <Billboard> new Bitmap(<BitmapData> material.style.image.adapter).adaptee;
	}

	public createImage2D(width:number, height:number, transparent:boolean = true, fillColor:number = null, powerOfTwo:boolean = true):Image2D
	{
		return <ViewImage2D> new BitmapData(width, height, transparent, fillColor).adaptee;
	}
}