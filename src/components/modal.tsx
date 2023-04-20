interface modalProps {
  ProjectTitle:string,
  PopupText:string[],
  close:any,
}
function Modal(props:modalProps) {
  return (
    <div className="modal1"> 
      <div className="container">
        <div className="title-box-2 col-sm-11"> 
          <div className="title-left">{props.ProjectTitle}</div>
        </div>
        <button 
          className="close col-sm-1"
          onClick={props.close}
          style={{color:"#FFF", backgroundColor:"#0078ff", height:"2rem"}}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 0 512 512"><path fill="currentColor" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z"/></svg>
        </button>
      </div>
      <div className="container">
        <div className="content">
          {' '}
          {props.PopupText.map((text:string, index:number) => {
            return(
              <div key={index}>
                {text}
                <p /><p/>
              </div>
            );
            })}
          <br /><br/>
        </div>
      </div>
    </div>
  )
}

export default Modal;