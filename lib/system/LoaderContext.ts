
import {ApplicationDomain} from "../system/ApplicationDomain";
import {SecurityDomain} from "../system/SecurityDomain";
export class LoaderContext{

	private _applicationDomain:ApplicationDomain;

	constructor(checkPolicyFile:boolean = false, applicationDomain:ApplicationDomain = null, securityDomain:SecurityDomain = null) {
		this._applicationDomain=applicationDomain;
	}


	public  get applicationDomain():ApplicationDomain
	{
		return this._applicationDomain;
	}
	public  set applicationDomain(value:ApplicationDomain)
	{
		this._applicationDomain=value;
	}
}