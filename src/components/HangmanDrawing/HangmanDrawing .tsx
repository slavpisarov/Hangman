import * as draw from "./Bodyparts"
export function HangmanDrawing() {
    return <div style={{position:"relative"}}>
        {draw.HEAD}
        {draw.BODY}
        {draw.RIGHT_ARM}
        {draw.LEFT_ARM}
        {draw.RIGHT_LEG}
        {draw.LEFT_LEG}
        <div style={{height:"50px", width:"10px", background:"black",position:"absolute", top:0, right:0}}/>
        <div style={{height:"10px", width:"200px", background:"black", marginLeft:"120px"}}/>
        <div style={{height:"400px", width:"10px", background:"black", marginLeft:"120px"}}/>
        <div style={{height:"10px", width:"250px", background:"black"}}/>
    </div>
}