// todo: create real adapter for this ?
import  {MouseEvent as AwayMouseEvent} from "@awayjs/scene";
export class MouseEvent extends AwayMouseEvent{
	public stageX:number;
	public stageY:number;
}