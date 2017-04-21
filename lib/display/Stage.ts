import * as awayStage from "@awayjs/stage";
import {StageAlign} from "./StageAlign"
import {Sprite} from "./Sprite"
import {StageScaleMode} from "./StageScaleMode"

import {AssetEvent, LoaderEvent, ParserEvent, URLRequest, RequestAnimationFrame, CoordinateSystem, PerspectiveProjection} from "@awayjs/core";
import {Graphics, Shape} from "@awayjs/graphics";
import {HoverController, TextField, Billboard, Camera, LoaderContainer, MovieClip} from "@awayjs/scene";
import * as awayScene from "@awayjs/scene";
import {MethodMaterial}	from "@awayjs/materials";
import {DefaultRenderer} from  "@awayjs/renderer";
import {View, SceneGraphPartition} from "@awayjs/view";




export class Stage{
	
	private _scaleMode:StageScaleMode;
	private _align:StageAlign;
	private _mainSprite:Sprite;

	private _fps:number = 30;
	private _view: View;
	private _renderer: DefaultRenderer;
	private _timer: RequestAnimationFrame;
	private _time: number = 0;
	private _projection: PerspectiveProjection;
	private _hoverControl: HoverController;
	private _stage_width: number;
	private _stage_height: number;

	constructor(startClass) {
		Sprite.rootStage=this;
		this.initEninge();
		this.initListeners();
		this._mainSprite=new startClass();
		this._view.scene.addChild(this._mainSprite.adaptee);
		console.log("constructed Stage and create the entranceclass");
	}
	
	public get scaleMode():StageScaleMode
	{
		return this._scaleMode;
	}
	public set scaleMode(value:StageScaleMode)
	{
		value=this._scaleMode;
	}
	public get align():StageAlign
	{
		return this._align;
	}
	public set align(value:StageAlign)
	{
		value=this._align;
	}

	private initEninge(){

		//create the view
		this._renderer = new DefaultRenderer();
		this._renderer.renderableSorter = null;//new RenderableSort2D();

		this._view = new View(this._renderer);
		this._view.backgroundColor = 0xccccff;
		this._stage_width = 550;
		this._stage_height = 400;

		this._projection = new PerspectiveProjection();
		this._projection.coordinateSystem = CoordinateSystem.RIGHT_HANDED;
		this._projection.fieldOfView = 30;
		this._projection.originX = 0;
		this._projection.originY = 0;
		var camera:Camera = new Camera();
		camera.projection = this._projection;

		this._hoverControl = new HoverController(camera, null, 180, 0, 1000);
		this._view.camera = camera;


	}

	/**
	 * Initialise the listeners
	 */
	private initListeners(): void
	{
		window.onresize  = (event) => this.onResize(event);
		this.onResize();

		this._timer = new RequestAnimationFrame(this.onEnterFrame, this);
		this._timer.start();
	}

	/**
	 * Render loop
	 */
	private onEnterFrame(dt: number): void
	{
		var frameMarker:number = Math.floor(1000/this._fps);

		this._time += Math.min(dt, frameMarker);

		if (this._time >= frameMarker) {
			this._time -= frameMarker;
			this._mainSprite.advanceFrame();
			// todo: update the _mainSprite, so that movieclips play and scripts are executed

			this._view.render();
		}
	}

	private onResize(event = null): void
	{

		// todo: correctly consider stagescalemode
		this._view.y         = 0;
		this._view.x         = 0;
		this._view.width     = window.innerWidth;
		this._view.height    = window.innerHeight;
		var newHeight:number = this._stage_height;
		this._projection.fieldOfView = Math.atan(newHeight/1000/2)*360/Math.PI;
		this._projection.originX = (0.5 - 0.5*(window.innerHeight/newHeight)*(this._stage_width/window.innerWidth));

	}
};