import * as React from 'react';
// import { connect, Dispatch } from 'react-redux';
// import autobind from 'autobind-decorator';

// import { StoreState } from '../../../store';
import { Example, ExampleProps } from './Example';

interface ExampleContainerProps extends ExampleProps, ExampleContainerMapProps, ExampleContainerDispatchProps {
}

interface ExampleContainerMapProps {
}

interface ExampleContainerDispatchProps {
}

interface ExampleContainerState {
}

// @(connect(mapStateToProps, mapDispatchToProps) as any)
export class ExampleContainer extends React.Component<ExampleContainerProps> {
    public state: ExampleContainerState;

    constructor(props: ExampleContainerProps) {
        super(props);

        this.state = {

        };
    }

    public render() {
        return (
            <Example
                {...this.props}
            />
        );
    }
}

//
// function mapStateToProps(state: StoreState, ownProps: ExampleContainerProps): ExampleContainerMapProps {
//     return {
//     };
// }
//
// function mapDispatchToProps(dispatch: Dispatch<any>): ExampleContainerDispatchProps {
//     return {
//     };
// }
