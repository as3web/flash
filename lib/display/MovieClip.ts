import {MovieClip as AwayMovieClip, DisplayObject as AwayDisplayObject, IMovieClipAdapter} from "@awayjs/scene";
import {Sprite} from "./Sprite";

/**
 * The MovieClip class inherits from the following classes: Sprite, DisplayObjectContainer,
 * InteractiveObject, DisplayObject, and EventDispatcher.
 *
 *   <p class="- topic/p ">Unlike the Sprite object, a MovieClip object has a timeline.</p><p class="- topic/p ">&gt;In Flash Professional, the methods for the MovieClip class provide the same functionality
 * as actions that target movie clips. Some additional methods do not have equivalent
 * actions in the Actions toolbox in the Actions panel in the Flash authoring tool. </p><p class="- topic/p ">Children instances placed on the Stage in Flash Professional cannot be accessed by code from within the
 * constructor of a parent instance since they have not been created at that ponumber in code execution.
 * Before accessing the child, the parent must instead either create the child instance
 * by code or delay access to a callback that listens for the child to dispatch
 * its <codeph class="+ topic/ph pr-d/codeph ">Event.ADDED_TO_STAGE</codeph> event.</p><p class="- topic/p ">If you modify any of the following properties of a MovieClip object that contains a motion tween,
 * the playhead is stopped in that MovieClip object: <codeph class="+ topic/ph pr-d/codeph ">alpha</codeph>, <codeph class="+ topic/ph pr-d/codeph ">blendMode</codeph>,
 * <codeph class="+ topic/ph pr-d/codeph ">filters</codeph>, <codeph class="+ topic/ph pr-d/codeph ">height</codeph>, <codeph class="+ topic/ph pr-d/codeph ">opaqueBackground</codeph>, <codeph class="+ topic/ph pr-d/codeph ">rotation</codeph>,
 * <codeph class="+ topic/ph pr-d/codeph ">scaleX</codeph>, <codeph class="+ topic/ph pr-d/codeph ">scaleY</codeph>, <codeph class="+ topic/ph pr-d/codeph ">scale9Grid</codeph>, <codeph class="+ topic/ph pr-d/codeph ">scrollRect</codeph>,
 * <codeph class="+ topic/ph pr-d/codeph ">transform</codeph>, <codeph class="+ topic/ph pr-d/codeph ">visible</codeph>, <codeph class="+ topic/ph pr-d/codeph ">width</codeph>, <codeph class="+ topic/ph pr-d/codeph ">x</codeph>,
 * or <codeph class="+ topic/ph pr-d/codeph ">y</codeph>. However, it does not stop the playhead in any child MovieClip objects of that
 * MovieClip object.</p><p class="- topic/p "><b class="+ topic/ph hi-d/b ">Note:</b>Flash Lite 4 supports the MovieClip.opaqueBackground property only if
 * FEATURE_BITMAPCACHE is defined. The default configuration of Flash Lite 4 does not define
 * FEATURE_BITMAPCACHE. To enable the MovieClip.opaqueBackground property for a suitable device,
 * define FEATURE_BITMAPCACHE in your project.</p>
 *
 *   EXAMPLE:
 *
 *   The following example uses the MovieClipExample class to illustrate how
 * to monitor various properties of a MovieClip.  This task is accomplished by performing the following steps:
 *
 *   <ol class="- topic/ol "><li class="- topic/li ">The constructor defines a text field, which is used to display values of properties
 * of the MovieClipExample object (which extends MovieClip).</li><li class="- topic/li ">The return value of the <codeph class="+ topic/ph pr-d/codeph ">getPropertiesstring()</codeph> method is used as text for the
 * <codeph class="+ topic/ph pr-d/codeph ">outputText</codeph> text field. The <codeph class="+ topic/ph pr-d/codeph ">getPropertiesstring()</codeph> method returns
 * a string that is populated with values of the following properties of the movie clip:
 * <codeph class="+ topic/ph pr-d/codeph ">currentFrame</codeph>, <codeph class="+ topic/ph pr-d/codeph ">currentLabel</codeph>, <codeph class="+ topic/ph pr-d/codeph ">currentScene</codeph>,
 * <codeph class="+ topic/ph pr-d/codeph ">framesLoaded</codeph>, <codeph class="+ topic/ph pr-d/codeph ">totalFrames</codeph>, and <codeph class="+ topic/ph pr-d/codeph ">trackAsMenu</codeph>.</li><li class="- topic/li ">Two lines of code in the constructor adjust the <codeph class="+ topic/ph pr-d/codeph ">width</codeph> and
 * <codeph class="+ topic/ph pr-d/codeph ">height</codeph> properties of the <codeph class="+ topic/ph pr-d/codeph ">outputText</codeph> text field.</li><li class="- topic/li ">The last line of the constructor adds the <codeph class="+ topic/ph pr-d/codeph ">outputText</codeph> text field
 * to the display list.</li></ol><codeblock xml:space="preserve" class="+ topic/pre pr-d/codeblock ">
 */
export class MovieClip extends Sprite implements IMovieClipAdapter
{
	/**
	 * Creates a new MovieClip instance. After creating the MovieClip, call the
	 * addChild() or addChildAt() method of a
	 * display object container that is onstage.
	 */
	constructor (){
		super();

	}


	//---------------------------stuff added to make it work:

	// --------------------- stuff needed because of implementing the existing IMovieClipAdapter
	
	public evalScript(str:string):Function{
		throw("currentFrame not implemented yet in flash/MovieClip");
	}

	public registerScriptObject(child:AwayDisplayObject){

	}

	public unregisterScriptObject(child:AwayDisplayObject){

	}


	//---------------------------original as3 properties / methods:

	/**
	 * Specifies the number of the frame in which the playhead is located in the timeline of
	 * the MovieClip instance. If the movie clip has multiple scenes, this value is the
	 * frame number in the current scene.
	 */
	public get currentFrame () : number {
		throw("currentFrame not implemented yet in flash/MovieClip");
	}

	/**
	 * The label at the current frame in the timeline of the MovieClip instance.
	 * If the current frame has no label, currentLabel is null.
	 */
	public get currentFrameLabel () : string{
		throw("currentFrameLabel not implemented yet in flash/MovieClip");
	}

	/**
	 * The current label in which the playhead is located in the timeline of the MovieClip instance.
	 * If the current frame has no label, currentLabel is set to the name of the previous frame
	 * that includes a label. If the current frame and previous frames do not include a label,
	 * currentLabel returns null.
	 */
	public get currentLabel () : string{
		throw("currentLabel not implemented yet in flash/MovieClip");
	}

	/**
	 * Returns an array of FrameLabel objects from the current scene. If the MovieClip instance does
	 * not use scenes, the array includes all frame labels from the entire MovieClip instance.
	 */
	public get currentLabels () : Array<any>[]{
		throw("currentFrameLabel not implemented yet in flash/MovieClip");
	}

	/**
	 * The current scene in which the playhead is located in the timeline of the MovieClip instance.
	 */
	public get currentScene () : any{
		throw("currentScene not implemented yet in flash/MovieClip");
	}

	/**
	 * A boolean value that indicates whether a movie clip is enabled. The default value of enabled
	 * is true. If enabled is set to false, the movie clip's
	 * Over, Down, and Up frames are disabled. The movie clip
	 * continues to receive events (for example, mouseDown,
	 * mouseUp, keyDown, and keyUp).
	 *
	 *   The enabled property governs only the button-like properties of a movie clip. You
	 * can change the enabled property at any time; the modified movie clip is immediately
	 * enabled or disabled. If enabled is set to false, the object is not
	 * included in automatic tab ordering.
	 */
	public get enabled () : boolean{
		throw("enabled not implemented yet in flash/MovieClip");
	}
	public set enabled (value:boolean) {
		throw("enabled not implemented yet in flash/MovieClip");
	}

	/**
	 * The number of frames that are loaded from a streaming SWF file. You can use the framesLoaded
	 * property to determine whether the contents of a specific frame and all the frames before it
	 * loaded and are available locally in the browser. You can also use it to monitor the downloading
	 * of large SWF files. For example, you might want to display a message to users indicating that
	 * the SWF file is loading until a specified frame in the SWF file finishes loading.
	 *
	 *   If the movie clip contains multiple scenes, the framesLoaded property returns the number
	 * of frames loaded for all scenes in the movie clip.
	 */
	public get framesLoaded () : number{
		throw("framesLoaded not implemented yet in flash/MovieClip");
	}

	public get isPlaying () : boolean{
		throw("isPlaying not implemented yet in flash/MovieClip");
	}

	/**
	 * An array of Scene objects, each listing the name, the number of frames,
	 * and the frame labels for a scene in the MovieClip instance.
	 */
	public get scenes () : Array<any>{
		throw("scenes not implemented yet in flash/MovieClip");
	}

	/**
	 * The total number of frames in the MovieClip instance.
	 *
	 *   If the movie clip contains multiple frames, the totalFrames property returns
	 * the total number of frames in all scenes in the movie clip.
	 */
	public get totalFrames () : number{
		throw("totalFrames not implemented yet in flash/MovieClip");
	}

	/**
	 * Indicates whether other display objects that are SimpleButton or MovieClip objects can receive
	 * mouse release events or other user input release events. The trackAsMenu property lets you create menus. You
	 * can set the trackAsMenu property on any SimpleButton or MovieClip object.
	 * The default value of the trackAsMenu property is false.
	 *
	 *   You can change the trackAsMenu property at any time; the modified movie
	 * clip immediately uses the new behavior.
	 */
	public get trackAsMenu () : boolean{
		throw("trackAsMenu not implemented yet in flash/MovieClip");
	}
	public set trackAsMenu (value:boolean) {
		throw("trackAsMenu not implemented yet in flash/MovieClip");
	}

	public addFrameScript (...args){
		throw("addFrameScript not implemented yet in flash/MovieClip");
	}

	/**
	 * Starts playing the SWF file at the specified frame.  This happens after all
	 * remaining actions in the frame have finished executing.  To specify a scene
	 * as well as a frame, specify a value for the scene parameter.
	 * @param	frame	A number representing the frame number, or a string representing the label of the
	 *   frame, to which the playhead is sent. If you specify a number, it is relative to the
	 *   scene you specify. If you do not specify a scene, the current scene determines the global frame number to play. If you do specify a scene, the playhead
	 *   jumps to the frame number in the specified scene.
	 * @param	scene	The name of the scene to play. This parameter is optional.
	 */
	public gotoAndPlay (frame:Object, scene:string=null){
		throw("gotoAndPlay not implemented yet in flash/MovieClip");
	}

	/**
	 * Brings the playhead to the specified frame of the movie clip and stops it there.  This happens after all
	 * remaining actions in the frame have finished executing.  If you want to specify a scene in addition to a frame,
	 * specify a scene parameter.
	 * @param	frame	A number representing the frame number, or a string representing the label of the
	 *   frame, to which the playhead is sent. If you specify a number, it is relative to the
	 *   scene you specify. If you do not specify a scene, the current scene determines the global frame number at which to go to and stop. If you do specify a scene,
	 *   the playhead goes to the frame number in the specified scene and stops.
	 * @param	scene	The name of the scene. This parameter is optional.
	 * @throws	ArgumentError If the scene or frame specified are
	 *   not found in this movie clip.
	 */
	public gotoAndStop (frame:Object, scene:string=null){
		throw("gotoAndStop not implemented yet in flash/MovieClip");
	}


	/**
	 * Sends the playhead to the next frame and stops it.  This happens after all
	 * remaining actions in the frame have finished executing.
	 */
	public nextFrame (){
		throw("nextFrame not implemented yet in flash/MovieClip");
	}

	/**
	 * Moves the playhead to the next scene of the MovieClip instance.  This happens after all
	 * remaining actions in the frame have finished executing.
	 */
	public nextScene (){
		throw("nextScene not implemented yet in flash/MovieClip");
	}

	/**
	 * Moves the playhead in the timeline of the movie clip.
	 */
	public play (){
		throw("play not implemented yet in flash/MovieClip");
	}

	/**
	 * Sends the playhead to the previous frame and stops it.  This happens after all
	 * remaining actions in the frame have finished executing.
	 */
	public prevFrame (){
		throw("prevFrame not implemented yet in flash/MovieClip");
	}

	/**
	 * Moves the playhead to the previous scene of the MovieClip instance.  This happens after all
	 * remaining actions in the frame have finished executing.
	 */
	public prevScene () {
		throw("prevScene not implemented yet in flash/MovieClip");
	}

	/**
	 * Stops the playhead in the movie clip.
	 */
	public stop (){
		throw("stop not implemented yet in flash/MovieClip");
	}

}
