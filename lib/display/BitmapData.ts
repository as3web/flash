
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

export class BitmapData
{
	public width:number;
	public height:number;
	public transparent:boolean;
	private rectangle:Rectangle;

	static loadBitmap(id:string):BitmapData{
		console.log("loadBitmap not implemented yet in flash/BitmapData");
		return null;

	}

	constructor (width:number, height:number, transparent:boolean=false, fillColor:number=0xffffff)
	{

	}
	public clone():BitmapData{
		console.log("clone not implemented yet in flash/BitmapData");
		return null;

	}
	public get rect():Rectangle{
		console.log("clone not implemented yet in flash/BitmapData");
		return null;

	}
	public getPixel(x:number, y:number):number{
		console.log("getPixel not implemented yet in flash/BitmapData");
		return 0;

	}
	public getPixel32(x:number, y:number):number{
		console.log("getPixel32 not implemented yet in flash/BitmapData");
		return 0;

	}
	public setPixel(x:number, y:number, color:number){
		console.log("setPixel not implemented yet in flash/BitmapData");

	}
	public setPixel32(x:number, y:number, color:number){
		console.log("setPixel32 not implemented yet in flash/BitmapData");

	}
	public applyFilter (sourceBitmap:BitmapData, sourceRect:Rectangle, destPoint:Point, filter:BitmapFilter):number{
		console.log("applyFilter not implemented yet in flash/BitmapData");
		return 0;

	}
	public colorTransform(rect:Rectangle, colorTransform:ColorTransform){
		console.log("colorTransform not implemented yet in flash/BitmapData");

	}
	public copyChannel(sourceBitmap:BitmapData, sourceRect:Rectangle,
					   destPoint:Point, sourceChannel:number, destChannel:number){
		console.log("copyChannel not implemented yet in flash/BitmapData");

	}
	public copyPixels(sourceBitmap:BitmapData,
					  sourceRect:Rectangle,
					  destPoint:Point,
					  alphaBitmap:BitmapData,
					  alphaPoint:Point,
					  mergeAlpha:boolean){
		console.log("copyPixels not implemented yet in flash/BitmapData");

	}
	public dispose(){
		console.log("dispose not implemented yet in flash/BitmapData");

	}
	public draw(source:any,
				matrix:Matrix,
				colorTransform:ColorTransform=null,
				blendMode:any="",
				clipRect:Rectangle=null,
				smooth:boolean=false){
		console.log("draw not implemented yet in flash/BitmapData");

	}
	public fillRect (rect:Rectangle, color:number){
		console.log("fillRect not implemented yet in flash/BitmapData");

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
