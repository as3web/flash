import {Point} from "@awayjs/core";
import {Billboard, IDisplayObjectAdapter} from "@awayjs/scene";
import { DisplayObject } from "./DisplayObject";
import { BitmapData } from "./BitmapData";
import {MethodMaterial} from "@awayjs/materials";
import {Single2DTexture, Style, Sampler2D} from "@awayjs/graphics";
import {Matrix} from "@awayjs/core"
import {ViewImage2D} from "@awayjs/view";

/**
 * The Bitmap class represents display objects that represent bitmap images. These can be images
 * that you load with the flash.display.Loader class, or they can be images that you create with
 * the <codeph class="+ topic/ph pr-d/codeph ">Bitmap()</codeph> constructor.
 *
 *   <p class="- topic/p ">The <codeph class="+ topic/ph pr-d/codeph ">Bitmap()</codeph> constructor allows you to create a Bitmap object that
 * contains a reference to a BitmapData object. After you create a Bitmap object, use the
 * <codeph class="+ topic/ph pr-d/codeph ">addChild()</codeph> or <codeph class="+ topic/ph pr-d/codeph ">addChildAt()</codeph> method of the parent DisplayObjectContainer
 * instance to place the bitmap on the display list.</p><p class="- topic/p ">A Bitmap object can share its BitmapData reference among several Bitmap objects,
 * independent of translation or rotation properties. Because you can create multiple Bitmap
 * objects that reference the same BitmapData object, multiple display objects can use the
 * same complex BitmapData object without incurring the memory overhead of a BitmapData
 * object for each display object instance.</p><p class="- topic/p ">A BitmapData object can be drawn to the screen by a Bitmap object in one of two ways:
 * by using the vector renderer as a fill-bitmap shape, or by using a faster pixel-copying routine.
 * The pixel-copying routine is substantially faster than the vector renderer, but the Bitmap object
 * must meet certain conditions to use it:</p><ul class="- topic/ul "><li class="- topic/li "> No stretching, rotation, or skewing can be applied to the Bitmap object.</li><li class="- topic/li "> No color transform can be applied to the Bitmap object. </li><li class="- topic/li "> No blend mode can be applied to the Bitmap object. </li><li class="- topic/li "> No clipping can be done through mask layers or <codeph class="+ topic/ph pr-d/codeph ">setMask()</codeph> methods. </li><li class="- topic/li "> The image itself cannot be a mask. </li><li class="- topic/li "> The destination coordinates must be on a whole pixel boundary. </li></ul><p class="- topic/p ">If you load a Bitmap object from a domain other than that of the Loader object used to
 * load the image, and there is no URL policy file that permits access to the domain of
 * the Loader object, then a script in that domain cannot access the Bitmap
 * object or its properties and methods. For more information, see the Flash Player Developer Center Topic:
 * <xref href="http://www.adobe.com/go/devnet_security_en" scope="external" class="- topic/xref ">Security</xref>.</p><p class="- topic/p "><b class="+ topic/ph hi-d/b ">Note:</b> The Bitmap class is not a subclass of the InteractiveObject class, so
 * it cannot dispatch mouse events. However, you can use the <codeph class="+ topic/ph pr-d/codeph ">addEventListener()</codeph> method
 * of the display object container that contains the Bitmap object.</p>
 */
export class Bitmap extends DisplayObject
{
	private _texture:Single2DTexture;
	private _bitmapData:BitmapData;
	/**
	 * Initializes a Bitmap object to refer to the specified BitmapData object.
	 * @param	bitmapData	The BitmapData object being referenced.
	 * @param	pixelSnapping	Whether or not the Bitmap object is snapped to the nearest pixel.
	 * @param	smoothing	Whether or not the bitmap is smoothed when scaled. For example, the
	 *   following examples show the same bitmap scaled by a factor of 3, with
	 *   smoothing set to false (left) and true (right):
	 */
	constructor (bitmapData:BitmapData = null, pixelSnapping:string="auto", smoothing:boolean=false)
	{

		var newMaterial:MethodMaterial = bitmapData? new MethodMaterial(bitmapData.adaptee) : new MethodMaterial(0x0);
		newMaterial.alphaBlending = true;
		newMaterial.useColorTransform = true;

		super(new Billboard(newMaterial, pixelSnapping, smoothing));

		this._bitmapData = bitmapData;
	}

	public clone():Bitmap
	{
		var newInstance:Bitmap = new Bitmap(this._bitmapData);

		this._adaptee.copyTo(newInstance.adaptee);

		return newInstance;
	}

	/**
	 * The BitmapData object being referenced.
	 */
	public get bitmapData () : BitmapData
	{
		if(!this._bitmapData){
			var image2d:ViewImage2D=<ViewImage2D>(<MethodMaterial> (<Billboard> this._adaptee).material).style.image;
			if(!image2d){
				console.log("Error: can not create bitmapData for Bitmap, because the adaptee-billboard has no valid ViewImage2D")
			}
			this._bitmapData = new BitmapData(image2d.width, image2d.height);

			this._bitmapData.adaptee.copyPixels(image2d, image2d.rect, new Point());
		}

		return this._bitmapData;
	}

	public set bitmapData (value:BitmapData)
	{
		// if (this._bitmapData == value)
		// 	return;
		this._bitmapData = value;

		if (!(<MethodMaterial> (<Billboard> this._adaptee).material).ambientMethod.texture)
			(<MethodMaterial> (<Billboard> this._adaptee).material).ambientMethod.texture = new Single2DTexture();

		(<MethodMaterial> (<Billboard> this._adaptee).material).style.image = this._bitmapData.adaptee;
		(<MethodMaterial> (<Billboard> this._adaptee).material).invalidateTexture();
	}

	/**
	 * Controls whether or not the Bitmap object is snapped to the nearest pixel. The PixelSnapping
	 * class includes possible values:
	 *
	 *   PixelSnapping.NEVER—No pixel snapping occurs.PixelSnapping.ALWAYS—The image is always snapped to the nearest
	 * pixel, independent of transformation.PixelSnapping.AUTO—The image is snapped
	 * to the nearest pixel if it is drawn with no rotation
	 * or skew and it is drawn at a scale factor of 99.9% to 100.1%. If these conditions are satisfied,
	 * the bitmap image is drawn at 100% scale, snapped to the nearest pixel. Internally, this value allows the image
	 * to be drawn as fast as possible using the vector renderer.
	 */
	public get pixelSnapping () : string{
		return "";
	}
	public set pixelSnapping (value:string){
		console.log("pixelSnapping not implemented yet in flash/Bitmap");
	}

	/**
	 * Controls whether or not the bitmap is smoothed when scaled. If true, the bitmap is
	 * smoothed when scaled. If false, the bitmap is not smoothed when scaled.
	 */
	public get smoothing () : boolean{
		console.log("smoothing not implemented yet in flash/Bitmap");
		return false;
	}
	public set smoothing (value:boolean){
		console.log("smoothing not implemented yet in flash/Bitmap");
	}

}

