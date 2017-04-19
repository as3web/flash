
import {LoaderContainer} from "@awayjs/scene";
import {LoaderInfo} from "./LoaderInfo";

export class Loader extends LoaderContainer{


	public get contentLoaderInfo():LoaderInfo
	{
		// todo : how retreive the stage here
		return null;
	}

	public set contentLoaderInfo(value:LoaderInfo)
	{
		// todo : how retreive the stage here
	}
};
import {Stage} from "./Stage"