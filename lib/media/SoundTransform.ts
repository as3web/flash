
/**
 * The SoundTransform class contains properties for volume and panning.
 *
 */
export class SoundTransform
{

	// for AVM1:
	public axCallPublicProperty(value1:any, value2:any):any{
		return null;
	}
	public axGetPublicProperty(value:any):any{
		return null;
	}
	public axSetPublicProperty(value:any, value2:any):any{
		return null;
	}
	public axHasPublicProperty(value:any):any{
		return null;
	}
	public axDeletePublicProperty(value:any):any{
		return null;
	}
	public axGetEnumerableKeys():string[]{
		return [];
	}
	/**
	 * Creates a SoundTransform object.
	 * @param	vol	The volume, ranging from 0 (silent) to 1 (full volume).
	 * @param	panning	The left-to-right panning of the sound, ranging from -1 (full pan left)
	 *   to 1 (full pan right). A value of 0 represents no panning (center).
	 * @langversion	3.0
	 * @playerversion	Flash 9
	 * @playerversion	Lite 4
	 * @refpath
	 */
	constructor (vol:number=1, panning:number=0){

	}
	/**
	 * A value, from 0 (none) to 1 (all), specifying how much of the left input is played in the
	 * left speaker.
	 */
	public get leftToLeft () : number{
		console.log("leftToLeft not implemented yet in flash/SoundTransform");
		return 0;
	}
	public set leftToLeft (leftToLeft:number){
		console.log("leftToLeft not implemented yet in flash/SoundTransform");
	}

	/**
	 * A value, from 0 (none) to 1 (all), specifying how much of the left input is played in the
	 * right speaker.
	 */
	public get leftToRight () : number{
		console.log("leftToRight not implemented yet in flash/SoundTransform");
		return 0;
	}
	public set leftToRight (leftToRight:number){
		console.log("leftToRight not implemented yet in flash/SoundTransform");
	}

	/**
	 * The left-to-right panning of the sound, ranging from -1 (full pan left)
	 * to 1 (full pan right). A value of 0 represents no panning (balanced center between
	 * right and left).
	 */
	public get pan () : number{
		console.log("pan not implemented yet in flash/SoundTransform");
		return 0;
	}
	
	public set pan (panning:number){
		console.log("pan not implemented yet in flash/SoundTransform");
	}

	/**
	 * A value, from 0 (none) to 1 (all), specifying how much of the right input is played in the
	 * left speaker.
	 */
	public get rightToLeft () : number{
		console.log("rightToLeft not implemented yet in flash/SoundTransform");
		return 0;
	}
	public set rightToLeft (rightToLeft:number){
		console.log("rightToLeft not implemented yet in flash/SoundTransform");
	}

	/**
	 * A value, from 0 (none) to 1 (all), specifying how much of the right input is played in the
	 * right speaker.
	 */
	public get rightToRight () : number{
		console.log("rightToRight not implemented yet in flash/SoundTransform");
		return 0;
	}
	public set rightToRight (rightToRight:number){
		console.log("rightToRight not implemented yet in flash/SoundTransform");
	}

	/**
	 * The volume, ranging from 0 (silent) to 1 (full volume).
	 */
	public get volume () : number{
		console.log("volume not implemented yet in flash/SoundTransform");
		return 0;
	}
	public set volume (volume:number){
		console.log("volume not implemented yet in flash/SoundTransform");		
	}

}

