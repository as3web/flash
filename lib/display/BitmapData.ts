
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
import { BitmapImage2D } from "@awayjs/graphics"

export class BitmapData implements IBitmapDrawable
{
	private _adaptee:BitmapImage2D;

	// return the adaptee cast to AwayDisplayObjectContainer. just a helper to avoid casting everywhere
	public get adaptee():BitmapImage2D {
		return (<BitmapImage2D>this._adaptee);
	}
	public set adaptee(adaptee:BitmapImage2D) {
		this._adaptee=adaptee;
	}
	static loadBitmap(id:string):BitmapData{
		console.log("loadBitmap not implemented yet in flash/BitmapData");
		return null;

	}

	constructor (width:number, height:number, transparent:boolean=false, fillColor:number=0xffffff)
	{
		this._adaptee = new BitmapImage2D(width, height, transparent, fillColor, false);
	}

	public get transparent():boolean{
		return this._adaptee.transparent;
	}
	public set transparent(value:boolean) {
		this._adaptee.transparent=value;
	}

	public get width():number{
		return this._adaptee.width;
	}
	public set width(value:number) {
		this._adaptee.width=value;
	}

	public get height():number{
		return this._adaptee.height;
	}
	public set height(value:number) {
		this._adaptee.height=value;
	}
	
	public clone():BitmapData{
		//console.log("BitmapData: todo: make sure clone is working correctly");
		var clone:BitmapData=new BitmapData(this.adaptee.width, this.adaptee.height, this.adaptee.transparent);

		return clone;

	}
	public get rect():Rectangle{
		return this._adaptee.rect;
	}
	public getPixel(x:number, y:number):number{
		return this._adaptee.getPixel(x, y);
	}
	public getPixel32(x:number, y:number):number{
		return this._adaptee.getPixel32(x, y);
	}
	public setPixel(x:number, y:number, color:number){
		this._adaptee.setPixel(x, y, color);
	}
	public setPixel32(x:number, y:number, color:number){
		this._adaptee.setPixel32(x, y, color);
	}
	public applyFilter (sourceBitmap:BitmapData, sourceRect:Rectangle, destPoint:Point, filter:BitmapFilter):number{
		console.log("applyFilter not implemented yet in flash/BitmapData");
		return 0;
	}
	public colorTransform(rect:Rectangle, colorTransform:ColorTransform){
		this._adaptee.colorTransform(rect, colorTransform);
	}
	public copyChannel(sourceBitmap:BitmapData, sourceRect:Rectangle,
					   destPoint:Point, sourceChannel:number, destChannel:number){
		this._adaptee.copyChannel(sourceBitmap.adaptee, sourceRect, destPoint, sourceChannel, destChannel);

	}
	public copyPixels(sourceBitmap:BitmapData, sourceRect:Rectangle, destPoint:Point, alphaBitmapData:BitmapData = null, alphaPoint:Point = null, mergeAlpha:boolean = false){
		console.log("copyPixels not implemented yet in flash/BitmapData");
		//this._adaptee.copyPixels(sourceBitmap.adaptee, sourceRect, destPoint);
	}
	public dispose(){
		console.log("dispose not implemented yet in flash/BitmapData");

	}
	public draw(source:any, matrix:Matrix, colorTransform:ColorTransform = null, blendMode:any = "", clipRect:Rectangle = null, smooth:boolean = false){
		console.log("draw not implemented yet in flash/BitmapData");

	}
	public fillRect (rect:Rectangle, color:number)
	{
		this._adaptee.fillRect(rect, color);
	}

	public floodFill (x:number, y:number, color:number){
		console.log("floodFill not implemented yet in flash/BitmapData");

	}
	public generateFilterRect (sourceRect:Rectangle, filter:BitmapFilter):Rectangle{
		console.log("generateFilterRect not implemented yet in flash/BitmapData");
		return null;

	}
	public getColorBoundsRect (mask:number, color:number, findColor:boolean):Rectangle{
		console.log("getColorBoundsRect not implemented yet in flash/BitmapData");
		return null;

	}
	public hitTest(firstPoint:Point,
				   firstAlphaThreshold:number,
				   secondObject:any,
				   secondBitmapPoint:Point,
				   secondAlphaThreshold:number):boolean{
		console.log("hitTest not implemented yet in flash/BitmapData");
		return false;

	}
	public merge(sourceBitmap:BitmapData,
				 sourceRect:Rectangle,
				 destPoint:Point,
				 redMult:number,
				 greenMult:number,
				 blueMult:number,
				 alphaMult:number){
		console.log("merge not implemented yet in flash/BitmapData");

	}
	public noise(randomSeed:number, low:number, high:number,
				 channelOptions:number,
				 grayScale:boolean){
		console.log("noise not implemented yet in flash/BitmapData");

	}
	public paletteMap(sourceBitmap:BitmapData,
					  sourceRect:Rectangle,
					  destPoint:Point,
					  redArray:any[],
					  greenArray:any[],
					  blueArray:any[],
					  alphaArray:any[]){
		console.log("paletteMap not implemented yet in flash/BitmapData");

	}
	public perlinNoise(baseX:number, baseY:number,
					   numOctaves:number, randomSeed:number,
					   stitch:boolean, fractalNoise:boolean,
					   channelOptions:number,
					   grayScale:boolean,
					   offsets:any){
		console.log("perlinNoise not implemented yet in flash/BitmapData");

	}
	public pixelDissolve(sourceBitmap:BitmapData,
						 sourceRect:Rectangle,
						 destPoint:Point,
						 randomSeed:number,
						 numberOfPixels:number,
						 fillColor:number):number{
		console.log("pixelDissolve not implemented yet in flash/BitmapData");
		return 0;

	}
	public scroll(x:number, y:number){
		console.log("scroll not implemented yet in flash/BitmapData");

	}
	public threshold(sourceBitmap:BitmapData,
					 sourceRect:Rectangle,
					 destPoint:Point,
					 operation:string,
					 threshold:number,
					 color:number,
					 mask:number,
					 copySource:boolean):number{
		console.log("threshold not implemented yet in flash/BitmapData");
		return 0;

	}
}
