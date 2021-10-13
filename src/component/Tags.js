import { Component } from "react";

class Tags extends Component {
    render() {
        return (
            <div className = "tags">
                {this.props.tag.map(tag => (
                    <button className = "tag" id = {tag.id} key = {tag.id} onClick = {() => this.props.onFiltering(tag.name.toLocaleLowerCase())}>{tag.name}</button>
                ))}
            </div>
        )
    }
}

export default Tags;