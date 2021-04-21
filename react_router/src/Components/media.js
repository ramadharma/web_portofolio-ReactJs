import React from 'react'

class Media extends React.Component {
    render(){
        return (
            <div className="media">
                 <img src={process.env.PUBLIC_URL+"/image/"+this.props.image}
                alt="media" width="350" />
            </div>
        )
    }
}


export default Media;