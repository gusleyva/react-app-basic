import * as React from "react";
import Typography from '@material-ui/core/Typography'

export interface ItemsProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class ItemsContainer extends React.Component<ItemsProps, {}> {
    render () {
        const titleMsg = () => <Typography variant="h3" component="h1">Items Page</Typography>;
        const hello = () => `${this.props.compiler}` + " from " +  `${this.props.framework}`;
        return(
            <div id="itemsContainerDiv"> 
                <div id="title" >{titleMsg()}</div>
                <div id="itemsContainerDivBody">
                    <h3> {hello()} </h3>
                </div>
            </div>
        );
    }
};
