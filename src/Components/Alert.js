import React from 'react'

function Alert(props){
// const capitalize = (word)=>{
//    const lower =  
//     // return lower.charAt(0).toUpperCase() + lower.slice(1);
//   }
  return (
    <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{(props.alert.type)}</strong> {props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>

</div>
  )
}

export default Alert




// props.alert && <div className={`alert alert-success alert-dismissible fade show" role="alert`}>
// {/* <strong>{props.alert.type}</strong>: {props.alert.msg} */} {props.alert}
// <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>