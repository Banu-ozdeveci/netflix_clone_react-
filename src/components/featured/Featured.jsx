import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

function Featured({type}) {
  return (
    <div className="featured">
        {type && (
            <div className="category">
                <span>{type=== "movie" ? "Movies" : "Series" }</span>
                <select name="genre" id ="genre">
                    <option>Genre</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>Genre</option>

                </select>
                 </div>
        )

        }
 <img  width="100%" alt="" src="https://www.the-ambient.com/media/images/2018/02/english-628274a-1519754032-T0ys-full-width-inline.jpg"/>
   <div className="info">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc04Qfvd24IAbxEf2jiY9SMeQH23TLFgfcTA&usqp=CAU" alt=""/>
  <span className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
   
   
   <div className="buttons">
    <button className="play"><PlayArrow/> <span>Play</span></button>
    <button className="more"><InfoOutlined/><span>More</span> </button>
   </div>
   </div>
    </div>
  )
}

export default Featured