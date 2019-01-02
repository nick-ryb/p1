import React from "react";
import {Image, Placeholder} from 'semantic-ui-react'

class ImageWithPlaceholder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {imageLoaded: false};
    }

    handleImageLoaded() {
        if (this.state) {

        }
        this.setState({imageLoaded: true});
    }

    handleImageErrored() {
        this.setState({imageLoaded: false});
    }

    render() {
        return (
            <div>
                <Image
                    {...this.props}
                    style={{display: this.state.imageLoaded === false ? 'none' : 'initial'}}
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)}
                />
                {!this.state.imageLoaded && (
                    <Placeholder style={{
                        height: '40px',
                        width: '40px',
                        borderRadius: '20px',
                        float: 'right'
                    }}>
                        <Placeholder.Image/>
                    </Placeholder>
                )}
            </div>
        );
    }
}

export default ImageWithPlaceholder;