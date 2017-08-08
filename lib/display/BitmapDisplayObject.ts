import {StageManager} from "@awayjs/stage";

import {IDisplayObjectAdapter} from "@awayjs/scene";

import {ImageData} from "@awayjs/graphics";
//****************************************************************************
// ActionScript Standard Library
// flash.display.BitmapData object
//****************************************************************************
import { Rectangle} from "../geom/Rectangle"
import { Point } from "../geom/Point"
import { Matrix  } from "../geom/Matrix"
import { ColorTransform } from "../geom/ColorTransform"
import { BitmapFilter } from "../filters/BitmapFilter"
import { IBitmapDrawable } from "./IBitmapDrawable"
import { ViewImage2D } from "@awayjs/view"

export class BitmapDisplayObject implements IBitmapDrawable
{
	private _adaptee:ViewImage2D;

	// return the adaptee cast to AwayDisplayObjectContainer. just a helper to avoid casting everywhere
	public get adaptee():ViewImage2D
	{
		return (<ViewImage2D>this._adaptee);
	}
	public set adaptee(adaptee:ViewImage2D)
	{
		this._adaptee=adaptee;
	}

	constructor (width:number, height:number)
	{
		this._adaptee = new ViewImage2D(width, height, StageManager.getInstance().getStageAt(0));
	}

	public get width():number
	{
		return this._adaptee.width;
	}
	public set width(value:number)
	{
		this._adaptee.width=value;
	}

	public get height():number
	{
		return this._adaptee.height;
	}
	public set height(value:number)
	{
		this._adaptee.height=value;
	}
	
	public clone():BitmapDisplayObject
	{
		//console.log("BitmapData: todo: make sure clone is working correctly");
		var clone:BitmapDisplayObject = new BitmapDisplayObject(this._adaptee.width, this._adaptee.height);
		clone.adaptee = this._adaptee.clone();

		return clone;
	}

	public get rect():Rectangle
	{
		return this._adaptee.rect;
	}

	public dispose()
	{
		this._adaptee.dispose();
		this._adaptee = null;
	}

	public draw(source:IDisplayObjectAdapter, matrix:Matrix, colorTransform:ColorTransform = null, blendMode:any = "", clipRect:Rectangle = null, smooth:boolean = false)
	{
			this._adaptee.draw(source.adaptee, matrix, colorTransform);
	}
}
