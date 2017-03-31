import * as awaystage from "@awayjs/stage";
import {StageAlign} from "./StageAlign"
import {StageScaleMode} from "./StageScaleMode"

export class Stage extends awaystage.Stage{

	private _scaleMode:StageScaleMode;
	private _align:StageAlign;

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

};