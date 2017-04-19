import {SecurityDomain} from "./SecurityDomain";
export class ApplicationDomain{

	private static _currentDomain:SecurityDomain;

	public static get currentDomain():SecurityDomain
	{
		// todo : how retreive the stage here
		return ApplicationDomain._currentDomain;
	}
}