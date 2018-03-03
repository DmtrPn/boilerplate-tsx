import * as React from 'react';
// import { connect, Dispatch } from 'react-redux';
// import autobind from 'autobind-decorator';

// import { StoreState } from '../../../store';
import { Example, ExampleProps } from './Example';

interface Props extends ExampleProps, MapProps, DispatchProps {
}

interface MapProps {
}

interface DispatchProps {
}

interface State {
}

// @(connect(mapStateToProps, mapDispatchToProps) as any)
export class ExampleContainer extends React.Component<Props, State> {

    constructor(props: Props) {
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
// function mapStateToProps(state: StoreState, ownProps: Props): MapProps {
//     return {
//     };
// }
//
// function mapDispatchToProps(dispatch: Dispatch<any>): DispatchProps {
//     return {
//     };
// }
