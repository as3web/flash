import {Sprite as AwaySprite} from "@awayjs/scene";
import {Stage} from "./Stage"

export class Sprite extends AwaySprite{

	private static _rootStage:Stage;

	private _stage:Stage;
	
	constructor(){
		super();
		this._stage=Sprite.rootStage;
	}
	
	
	// stage readonly
	public get stage():Stage
	{
		return this._stage;
	}


	public static set rootStage(value:Stage)
	{
		Sprite._rootStage=value;
	}
	public static get rootStage():Stage
	{
		if(Sprite._rootStage==null){
			throw("ERROR: a Stage must have been created before any Sprite can be created!")
		}
		return Sprite._rootStage;
	}

};